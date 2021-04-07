import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// GLOBAL STYLES
import './assets/main.css'

createApp(App).use(router).mount('#app')
