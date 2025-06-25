<template>
  <aside class="w-64 bg-blue-700 text-white h-screen p-6 space-y-6">
    <nav class="space-y-3">
      <router-link to="/dashboard" class="block hover:bg-blue-800 p-2 rounded">Dashboard</router-link>
      <router-link to="/users" class="block hover:bg-blue-800 p-2 rounded">Users</router-link>
      <button @click="logout" class="block w-full text-left hover:bg-blue-800 p-2 rounded">
        Logout
      </button>
    </nav>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const auth = useAuthStore()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
