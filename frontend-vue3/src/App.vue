<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import HeroSlider from '@/components/HeroSlider.vue'
import FeaturedServices from '@/components/FeaturedServices.vue'
</script>

<template>
  <v-app>
    <TopBar></TopBar>
    <v-main>
      <HeroSlider></HeroSlider>
      <FeaturedServices></FeaturedServices>
    </v-main>
  </v-app>
</template>
