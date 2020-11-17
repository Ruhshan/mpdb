<template>
    <div>
      <hero-slider></hero-slider>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroSlider from '../components/HeroSlider.vue'
@Component({
  components:{ HeroSlider }
})
export default class Home extends Vue {

}
</script>
<style scoped>

</style>