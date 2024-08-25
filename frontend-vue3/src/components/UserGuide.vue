<script setup lang="ts">
import { useGuides } from '@/composables/useGuides'

const { guides } = useGuides()
</script>

<template>
  <div>This is user guide</div>
  <div v-for="guide in guides" :key="guide.id">
    {{ guide }}
    <br />
  </div>
</template>

<style scoped></style>
