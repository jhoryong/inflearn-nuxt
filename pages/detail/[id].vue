<template>
     <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p> 
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createCartItem, fetchProductById } from '~/composables/api';
import { IProduct } from '~/types/types';

const carStore = useCartStore()
const route = useRoute();
const router = useRouter();
// try {
    const response = await fetchProductById(route.params.id as string)
    const product = response.data.value as IProduct;
// } catch(e) {
//     console.error(e)
// }

async function addToCart() {
    const response = await createCartItem(product);
    console.log(response);
    carStore.addCartItem(product)   
    router.push('/cart')
}

useServerSeoMeta({
  title: () => `${product.name} 상세 페이지`,
  description: () => `${product.name} 상세 페이지입니다.`
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>