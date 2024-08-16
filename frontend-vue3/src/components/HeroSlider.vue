<script setup lang="ts"></script>

<template>
  <v-carousel cycle hide-delimiters height="450" show-arrows="hover">
    <v-carousel-item>
      <v-sheet class="bg-green-darken-1 slider-bg-img1 slider-bg" height="450">
        <v-container class="fill-height">
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" sm="8">
              <h2 class="text-center">Welcome to <span>MPDB 2.0</span></h2>
              <p class="text-center">
                An extensive phytochemical data repertoire for indigenous medicinal plants of
                Bangladesh
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet class="bg-green-darken-1 slider-bg-img2 slider-bg" height="450">
        <v-container class="fill-height">
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" sm="8">
              <h2 class="text-center">One destination, thousand plants</h2>
              <p class="text-center">
                Find the plant of your interest with its local name, scientific name, active
                compounds and reference article
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.slider-bg-img1 {
  background-image: url('https://i.postimg.cc/Qdh6SN9g/slide-1.png');
}

.slider-bg-img2 {
  background-image: url('https://i.postimg.cc/VNjkwRLP/slide-2.png');
}

.slider-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
}
</style>
