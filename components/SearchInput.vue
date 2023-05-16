<template>
    <div class="input-wrapper flex">
      <input
        type="text"
        class="search-input"
        :value="inputText"
        @input="$emit('update:inputText', (<HTMLInputElement>$event.target).value)"
        @keyup.enter.exact="$emit('search')"
      />
      <button class="btn" type="button" @click="$emit('search')">search</button>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    inputText: string
}>(), {
    inputText: ''
})

const emit = defineEmits<{
    search(e: 'click'): void
    'update:input'(e: 'input', value: string): void
}>()
</script>

<style scoped>
.input-wrapper {
height: 40px;
margin: 1rem 0;
}
.search-input {
width: 200px;
font-size: 1.2rem;
font-weight: 500;
}
.btn {
font-size: 1.2rem;
font-weight: 500;
}
</style>