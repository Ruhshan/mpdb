<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  itemName: string
}

interface BreadCrumbItem {
  title: string
  disabled: boolean
  href: string
}

const props = defineProps<Props>()

const breadCrumbItems = ref<BreadCrumbItem[]>([
  {
    title: 'Home',
    disabled: false,
    href: '/'
  },
  {
    title: props.itemName,
    disabled: true,
    href: ''
  }
])
</script>

<template>
  <div class="bg-section">
    <v-container style="margin-top: 122px">
      <v-breadcrumbs :items="breadCrumbItems" class="position-relative d-flex justify-end">
        <template v-slot:prepend>
          <h2 class="position-absolute left-0">{{ props.title }}</h2>
        </template>
      </v-breadcrumbs>
    </v-container>
  </div>
</template>
