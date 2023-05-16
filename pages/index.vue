<template>
  <div>
    <main>
      <SearchInput v-model:inputText="inputText" @search="filterItemsBySearchText" />
      <ul>
        <li v-for="product in productArr" :key="product.id" class="item flex" @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl">
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <NuxtLink to="/cart"><button class="btn">장바구니 바로가기</button></NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from '~/types/types';
import { fetchProduct, fetchProductsByKeyword } from '~/composables/api';

const router = useRouter()

const inputText = ref('')
const productArr = ref<IProduct[]>()

// SSR: 데이터가 fetch 된 후에 페이지가 로드되어 깜빡임 없음.
const response = await fetchProduct()
productArr.value = response.data.value?.map(product => {
  return {
    ...product,
    imageUrl: `${product.imageUrl}?random=${Math.random()}`
  }
})

function moveToDetailPage(id: number) {
  console.log(id)
  router.push(`detail/${id}`);
}

async function filterItemsBySearchText() {
  const { data } = await fetchProductsByKeyword(inputText.value)
  productArr.value = data.value?.map((item) => ({
    ...item,
    imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  }))
}



</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}

.product-image {
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}

.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>