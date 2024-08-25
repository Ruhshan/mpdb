<script setup lang="ts">

import { onMounted } from 'vue'
import MiscApi from "@/api/MiscApi";

onMounted(async ()=> {
  var data = await MiscApi.getGuides()

  console.log(data)
})

</script>

<template>
<div>This is user guide</div>
</template>

<style scoped>

</style>