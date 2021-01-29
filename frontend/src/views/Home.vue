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
              <h4 class="title"><a href="/publications">Publication</a></h4>
              <p class="description">View list of publications that referenced this database in their work</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon"><i class="icofont-question-circle"></i></div>
              <h4 class="title"><a href="/guide">Guide</a></h4>
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
<!--            <img src="https://miro.medium.com/max/3200/1*A9TKqvXjTKEOZgu2Qb91-w.jpeg" class="img-fluid" alt="">-->
               <iframe width="500" height="350"
                    src="https://www.youtube.com/embed/tibx8MA6-Xs?controls=1" style="margin-top: 50px" allowfullscreen>
                </iframe>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>About MPDB 2.0</h3>

            <p style="text-align: justify">
              MPDB 2.0 contains more than 500 indigenous medicinal plants of Bangladesh. It encompasses the plants scientific name, family name, local names, utilized parts, active compounds and the PubMed IDs of related articles. The design of the database has been in reference to the local plant medicinal therapies used since ancient times. The goal of this database is to understand the underlying mechanisms and identify the main phytochemical agents responsible for the efficacy of these folk therapies along with discovering novel treatment methods for diseases, both old and new. The MPDB 2.0 database is an extensive phytochemical data repertoire for researchers and health practitioners alike in developing potential nutraceuticals against a large number of human health deficiencies. It must be noted that while the information in this database highly focuses on human diseases, is not limited in its application for human diseases or diseases only, as many of the plants indexed here can serve in developing biofuel or bioremediation technologies or nutritive diets or cosmetics, in fact the data recorded here has enough potential that it can hardly be fully harvested, even after decades of study.

            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p class="">
                This database is the extension and update of <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4110432/">MPDB1.0</a> – A medicinal plant database that focuses on different aspects regarding the medicinal plants of Bangladesh.
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
import axios, {AxiosResponse} from "axios";
@Component({
  components:{ HeroSlider }
})
export default class Home extends Vue {
    created(){
        axios.get(process.env.VUE_APP_API_URL+'/api/v1/misc/ping').then((res: AxiosResponse)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

}
</script>
<style scoped>

</style>