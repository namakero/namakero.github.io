import { createApp } from 'vue'
import './style.css'
import counter from './components/Counter.vue'
import todolist from './components/ToDoList.vue'

createApp(counter).mount('#vueCounter');
createApp(todolist).mount('#vueToDoList')

