<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import HeroSlider from '@/components/HeroSlider.vue'
</script>

<template>
  <v-app>
    <TopBar></TopBar>
    <v-main>
      <HeroSlider></HeroSlider>
      <v-container> </v-container>
    </v-main>
  </v-app>
</template>
