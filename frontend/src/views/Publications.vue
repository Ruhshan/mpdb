<template>
    <div>
        <section class="breadcrumbs">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Publications</h2>
                    <ol>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>Publications</li>
                    </ol>
                </div>
            </div>
        </section>
        <section class="inner-page">
              <div class="container">
                  <table style="width:100%">
                <tr v-for="publication in publications" v-bind:key="publication.id" style= "">
                    <td>{{publication.id}}</td>
                    <td><a :href="publication.link" target="_blank">{{publication.title}}</a></td>
                </tr>

            </table>
          </div>
        </section>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import axios, {AxiosResponse} from "axios";
    import Publication from "@/entity/Publication";
    @Component
    export default class Publications extends Vue {
        publications: Array<Publication>= [];
        created(){
            axios.get(process.env.VUE_APP_API_URL+"/api/v1/plant/publications").then((result: AxiosResponse<Array<Publication>>)=>{
                this.publications= result.data
            })
        }
    }

</script>

<style scoped>

</style>