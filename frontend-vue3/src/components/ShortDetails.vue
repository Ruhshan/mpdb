<script setup lang="ts"></script>

<template>
  <section class="bg-section">
    <v-container>
      <v-row>
        <v-col cols="6">
          <h3 style="font-weight: 700; font-size: 28px">About MPDB 2.0</h3>
          <p style="text-align: justify">
            MPDB 2.0 contains more than 500 indigenous medicinal plants of Bangladesh. It
            encompasses the plants scientific name, family name, local names, utilized parts, active
            compounds and the PubMed IDs of related articles. The design of the database has been in
            reference to the local plant medicinal therapies used since ancient times. The goal of
            this database is to understand the underlying mechanisms and identify the main
            phytochemical agents responsible for the efficacy of these folk therapies along with
            discovering novel treatment methods for diseases, both old and new. The MPDB 2.0
            database is an extensive phytochemical data repertoire for researchers and health
            practitioners alike in developing potential nutraceuticals against a large number of
            human health deficiencies. It must be noted that while the information in this database
            highly focuses on human diseases, is not limited in its application for human diseases
            or diseases only, as many of the plants indexed here can serve in developing biofuel or
            bioremediation technologies or nutritive diets or cosmetics, in fact the data recorded
            here has enough potential that it can hardly be fully harvested, even after decades of
            study.
          </p>
        </v-col>
        <v-col cols="6">
          <iframe
            width="500"
            height="350"
            src="https://www.youtube.com/embed/tibx8MA6-Xs?controls=1"
            style="margin-top: 50px"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            This database is the extension and update of
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4110432/">MPDB1.0</a> – A
            medicinal plant database that focuses on different aspects regarding the medicinal
            plants of Bangladesh.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
a {
  color: rgb(var(--v-theme-primary));
  text-decoration-line: none;
}

a:hover {
  color: rgb(var(--v-theme-primary-lighten));
}
</style>
