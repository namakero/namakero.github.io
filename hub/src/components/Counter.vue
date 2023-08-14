<script setup>
import {ref} from "vue";
const counter = ref(0);

const incrementButton = () => {
    counter.value++;
}
const decrementButton = () => {
    if(counter.value > 0){
    counter.value--;
    }
}
const resetButton = () => {
    counter.value = 0;
}
console.log("Hello");
</script>

<template>
  <div class="button">
    <span class="interval">{{ counter }}</span>
    <button class="interval" @click="incrementButton">+</button>
    <button class="interval" @click="decrementButton">-</button>
    <button class="interval" @click="resetButton">reset</button>
  </div>
</template>

<style>
.interval {
    margin: 10px;
    font-size: 20px;
}
</style>