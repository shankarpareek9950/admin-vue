<template>
  <Sidebar />
  <Header />
  <main class="pl-64 pt-16 p-4 min-h-screen bg-gray-50">
    <slot />
  </main>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>
