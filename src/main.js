import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)

// 1. Create Pinia instance
const pinia = createPinia()

// 2. Register Pinia and Router before using any store
app.use(pinia)
app.use(router)

// 3. Now safely import and use the store
import { useAuthStore } from '@/store/auth'
const authStore = useAuthStore()
authStore.initialize()

app.mount('#app')
