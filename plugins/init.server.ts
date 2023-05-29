export default defineNuxtPlugin(async (nuxtApp) => {
    const menu = useCartStore();
    await menu.init();
});