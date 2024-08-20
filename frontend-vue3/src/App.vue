<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import HeroSlider from '@/components/HeroSlider.vue'
import FeaturedServices from '@/components/FeaturedServices.vue'
import ShortDetails from '@/components/ShortDetails.vue'
</script>

<template>
  <v-app>
    <TopBar></TopBar>
    <v-main>
      <HeroSlider></HeroSlider>
      <FeaturedServices></FeaturedServices>
      <ShortDetails></ShortDetails>
    </v-main>
  </v-app>
</template>
