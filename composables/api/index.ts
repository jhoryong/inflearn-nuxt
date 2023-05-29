
import { IProduct } from "~/types/types";

function getFetchInstance() {
    return $fetch.create({
        baseURL: useRuntimeConfig().public.baseURL
        // baseURL: 'http://localhost:3000'
    })
}
// const fetchInstance = $fetch.create({
//     baseURL: useRuntimeConfig().public.baseURL
//     // baseURL: 'http://localhost:3000'
// })

function useAsyncDataGET<T>(route: string, options?: object) {
    const fetchInstance = getFetchInstance()
    return useAsyncData<T>(async () => await fetchInstance(route, options))
}

function useAsyncDataPOST<T>(route: string, options: any) {
    const fetchInstance = getFetchInstance()
    return useAsyncData<T>(async () => await fetchInstance(route, {
        method: 'post',
        ...options
    }))
}

export const fetchProduct = () => {
    return useAsyncDataGET<IProduct[]>(`/products`);
}

export const fetchProductById = (id: string) => {
    return useAsyncDataGET<IProduct>(`/products/${id}`);
}

export const fetchProductsByKeyword = (keyword: string) => {
    return useAsyncDataGET<IProduct[]>(`/products`, {
        params: {
            name_like: keyword
        }
    });
}   

export const fetchCartItems = () => {
    return useAsyncDataGET<IProduct[]>('/carts');
}

export const createCartItem = (cartItem: IProduct) => {
    return useAsyncDataPOST('/carts', {
        body: cartItem
    })
}