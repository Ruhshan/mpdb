<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <v-app>
    <TopBar></TopBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
