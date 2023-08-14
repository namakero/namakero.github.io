<script setup>
import { ref } from "vue";
let id = 0;
const counter = ref("");
const todos = ref([{ id: id++, text: "sample list" }]);

const enter = () => {
  if (counter.value) {
    todos.value.push({ id: id++, text: counter.value });
    counter.value = "";
  }
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};
</script>

<template>
  <div class="todolist">
    <form @submit.prevent="enter">
      <input v-model="counter" placeholder="Input here" />
      <button @click="enter">enter</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <button @click="removeTodo(todo)">x</button>
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<style>
</style>