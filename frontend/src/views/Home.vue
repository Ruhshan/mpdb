<template>
  <div class="home">
    <p>This is home</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
