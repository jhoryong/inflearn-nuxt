import { fetchCartItems } from "~/composables/api";
import { IProduct } from "~/types/types";

const cartStore = () => {
    const cartItems = ref<IProduct[]>([])

    function addCartItem(item: IProduct) {
        cartItems.value.push(item)
    }

    async function _fetchCartItems() {
        try {
            const response = await fetchCartItems();
            if (response.data.value) {
                cartItems.value = response.data.value?.map((item) => ({
                    ...item,
                    imageUrl: `${item.imageUrl}?random=${Math.random()}`,
                }))
            }
        } catch(e) {
            console.log(e);
        }
    }

    async function init() {
        await _fetchCartItems();
    }

    return {
        cartItems,
        init,
        addCartItem,
    }
}

export const useCartStore = defineStore('cart', cartStore)