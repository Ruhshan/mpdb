<script setup lang="ts">
import '@/assets/apa.css'
import { usePublications } from '@/composables/usePublications'

const { citingPublications, releasePublications } = usePublications()
</script>

<template>
  <section>
    <v-container>
      <div
        class="apa-ref"
        v-for="publication in releasePublications"
        :key="publication.id"
        data-test-id="release-publications"
      >
        <h4>{{ publication.heading }}</h4>
        <p>
          {{ publication.title }}
          <em
            ><a :href="publication.link" target="_blank">{{ publication.journal }}</a></em
          >, {{ publication.page }}
        </p>
      </div>

      <div class="apa-ref">
        <h4>Articles Citing MPDB</h4>
        <p
          v-for="publication in citingPublications"
          v-bind:key="publication.id"
          data-test-id="citing-publications"
        >
          {{ publication.id }}. {{ publication.title }}
          <em
            ><a :href="publication.link" target="_blank"> {{ publication.journal }}</a></em
          >
          {{ publication.page }}
        </p>
      </div>
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
