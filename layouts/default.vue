<template>
    <div>
        <h1>{{route.name}} 페이지</h1>
        <NuxtLink to="/">홈페이지</NuxtLink>
        <NuxtLink to="/main">메인 페이지</NuxtLink>
        <NuxtLink to="/product">상품 페이지</NuxtLink>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>

</style>