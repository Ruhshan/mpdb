<script setup lang="ts">
const homeRoute = { name: 'home' }
const guideRoute = { name: 'guide' }
</script>

<template>
  <v-app-bar elevation="0.5">
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar-title>
            <h2 class="text-primary" data-testid="app-title">MPDB 2.0</h2>
          </v-toolbar-title>
        </v-col>
        <v-col>
          <div class="d-flex justify-end">
            <router-link :to="homeRoute" data-testid="home-button">Home</router-link>
            <router-link to="/#" data-testid="search-button">Search</router-link>
            <router-link :to="guideRoute" data-testid="guide-button">Guide</router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: black;
  padding-right: 15px;
}
a:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
