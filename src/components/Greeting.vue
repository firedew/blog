<template>
  <div>
    <h3>{{ greeting }}! Thank you for visiting!</h3>
    <button @click="greeting = randomMessage()">
    New Greeting
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  messages: { type: Array, default: () => ([])},
})
const randomMessage = () => props.messages[(Math.floor(Math.random() * props.messages.length))];

const greeting = ref(randomMessage());
</script>

<style scoped>

</style>
