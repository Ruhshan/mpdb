<script setup lang="ts"></script>

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
          <div d-flex flex-row>
            <v-btn>
              <router-link to="/#" data-testid="home-button">Home</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/#" data-testid="search-button">Search</router-link>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>
