<template>
    <div>
        <header class="title">
            <a class="logo" href="/">Nuxt Shopping</a>
        </header>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>