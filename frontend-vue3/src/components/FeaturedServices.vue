<script setup lang="ts">
import { mdiMagnify } from '@mdi/js'
import { mdiNewspaper } from '@mdi/js'
import { mdiHelpCircle } from '@mdi/js'

import { ref } from 'vue'

interface FeaturedServices {
  icon: string
  title: string
  description: string
}
const featuredServices = ref<FeaturedServices[]>([
  {
    icon: mdiMagnify,
    title: 'Search',
    description: "Search using plant's name, active compounds, ailments and PMID"
  },
  {
    icon: mdiNewspaper,
    title: 'Publication',
    description: 'View list of publications that referenced this database in their work'
  },
  {
    icon: mdiHelpCircle,
    title: 'Publication',
    description: 'This is an easy to use database, find step by step instruction here'
  }
])
</script>

<template>
  <section class="section bg-section">
    <v-container>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="4" v-for="fs in featuredServices" :key="fs.title">
          <div class="ico-box">
            <v-icon
              style="font-size: 42px; margin-bottom: 15px"
              color="green-darken-1"
              :icon="fs.icon"
            ></v-icon>
            <h4 class="title">{{ fs.title }}</h4>
            <p class="description">
              {{ fs.description }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.section {
  padding: 60px 0;
}

.ico-box {
  padding: 20px;
}

.title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.title:hover {
  color: rgb(var(--v-theme-primary));
  cursor: pointer;
}

.description {
  line-height: 14px;
  font-size: 14px;
}
</style>
