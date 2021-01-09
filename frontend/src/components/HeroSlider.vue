<template>
       <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active" style="background-image:  url('https://i.postimg.cc/Qdh6SN9g/slide-1.png')">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Welcome to <span>MPDB 2.0</span></h2>
              <p class="animate__animated animate__fadeInUp">An extensive phytochemical data repertoire for indigenous medicinal plants of Bangladesh</p>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item" style="background-image: url('https://i.postimg.cc/VNjkwRLP/slide-2.png')">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">One destination, thousand plants</h2>
              <p class="animate__animated animate__fadeInUp">Find the plant of your interest with its local name, scientific name, active compounds and reference article</p>
<!--              <a href="/search" class="btn-get-started animate__animated animate__fadeInUp scrollto">Search</a>-->
            </div>
          </div>
        </div>



      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </section><!-- End Hero -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component
export default class HeroSlider extends Vue {}
</script>


<style scoped>

</style>