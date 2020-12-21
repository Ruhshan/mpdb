<template>
    <div>
      <hero-slider></hero-slider>
      <!-- ======= Featured Services Section ======= -->
    <section id="featured-services" class="featured-services section-bg">
      <div class="container">

        <div class="row no-gutters">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon"><i class="icofont-search"></i></div>
              <h4 class="title"><a href="/search">Search</a></h4>
              <p class="description">Search using plant's name, active compounds, ailments and PMID</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon"><i class="icofont-newspaper"></i></div>
              <h4 class="title"><a href="">Publication</a></h4>
              <p class="description">View list of publications that referenced this database in their work</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon"><i class="icofont-question-circle"></i></div>
              <h4 class="title"><a href="">GuideObj</a></h4>
              <p class="description">This is an easy to use database, find step by step instruction here</p>
            </div>
          </div>
        </div>

        <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
      <div class="container">

<!--        <div class="section-title">-->
<!--          <p>The database is the extension and update of MPDB1.0 – A medicinal plant databases which focus on different aspects regarding the medicinal plants of Bangladesh. </p>-->
<!--        </div>-->

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2">
            <img src="https://miro.medium.com/max/3200/1*A9TKqvXjTKEOZgu2Qb91-w.jpeg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>About MPDB 2.0</h3>

            <p style="text-align: justify">
              MPDB 2.0 contains more than 1,000 medicinal plants from Bangladesh. It encompasses the scientific name of the plants, family name, local name, utilizing parts, location of the plants, active compound and the Pubmed ID of the articles of active compounds. The design of the database has been in relation to the local plants’ medicine therapies used since ancient times with the goal to understand the underlying mechanisms and main phytomediators/phytochemical agents responsible for the efficacy of these folk therapies along with discovering novel treatment strategies for various epidemics and emerging new diseases. This database can be regarded as potential phytochemical data repertoire for researchers and health practitioners alike in developing potential nutraceuticals against a potential large number of human health deficiencies. It must be noted that while the data in this database while highly focuses on curing human diseases, is not limited in its application for human diseases or diseases only (as it can be used in developing cosmetics, biofuel or alternate energy source development, bioremediation technologies etc.), in fact the data here has enough potential that it can hardly be fully harvested even after decades of study.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p class="">
              The database is the extension and update of <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4110432/">MPDB1.0</a> – A medicinal plant databases which focus on different aspects regarding the medicinal plants of Bangladesh.
          </p>
          </div>
        </div>

      </div>
    </section><!-- End About Us Section -->



      </div>
    </section><!-- End Featured Services Section -->
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