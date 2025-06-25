<template>
  <div class="min-h-screen flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Header />
      <main class="p-6 bg-gray-50 flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'
</script>
