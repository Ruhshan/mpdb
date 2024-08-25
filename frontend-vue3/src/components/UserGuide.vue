<script setup lang="ts">
import { useGuides } from '@/composables/useGuides'

const { guides } = useGuides()
</script>

<template>
  <v-container>
    <v-card style="margin: 50px" v-for="guide in guides" :key="guide.id">
      <v-card-title>{{ guide.id }}. {{ guide.text }}</v-card-title>
      <v-card-item>
        <v-img :src="guide.imageUrl"></v-img>
      </v-card-item>
      <div class="d-flex flex-row justify-center">
        <p>{{ guide.imageCaption }}</p>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped></style>
