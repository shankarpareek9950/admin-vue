<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const authStore = useAuthStore()
const router = useRouter()

function handleLogin() {
  errorMessage.value = ''
  if (username.value === 'admin' && password.value === 'admin') {
    const token = 'mock-token-for-admin'
    const user = { name: 'Admin', role: 'admin' }
    authStore.login(token, user)
    router.push('/')
  } else {
    errorMessage.value = 'Invalid username or password'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
    <div class="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Login</h2>

      <div class="mb-4">
        <label for="username" class="block mb-2 text-sm font-medium text-gray-700">Username</label>
        <input
          v-model="username"
          id="username"
          type="text"
          placeholder="Enter your username"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <p v-if="errorMessage" class="mb-4 text-red-600 font-semibold">{{ errorMessage }}</p>

      <button
        @click="handleLogin"
        class="w-full bg-blue-600 mt-2 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Login
      </button>
    </div>
  </div>
</template>
