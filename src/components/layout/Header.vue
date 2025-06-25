<script setup>
import { useAuthStore } from '@/store/auth'
const auth = useAuthStore()
</script>

<template>
  <header class="p-4 bg-white shadow flex justify-between">
    <h1 class="text-xl font-semibold">Admin Panel</h1>
    <p class="text-gray-700">Welcome, {{ auth.user?.name }}</p>
  </header>
</template>
