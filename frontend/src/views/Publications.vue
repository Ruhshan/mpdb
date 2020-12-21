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

                <div class="apa-ref">
                    <p v-for="publication in publications" v-bind:key="publication.id">
                        {{publication.title}} <em><a :href="publication.link" target="_blank"> {{publication.journal}}</a></em>  {{publication.page }}
                    </p>

                </div>

<!--                <table style="width:100%">-->
<!--                    <tr v-for="publication in publications" v-bind:key="publication.id">-->
<!--                        <td style="padding-right: 30px ">{{publication.id}}</td>-->
<!--                        <td><a :href="publication.link" target="_blank">{{publication.title}}</a></td>-->
<!--                    </tr>-->

<!--                </table>-->
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
        publications: Array<Publication> = [];

        created() {
            axios.get(process.env.VUE_APP_API_URL + "/api/v1/plant/publications").then((result: AxiosResponse<Array<Publication>>) => {
                this.publications = result.data
            })
        }
    }

</script>

<style scoped>
    .apa, .apa ul, .apa ol, .apa dl, .ref-apa, .ref-apa ul, .ref-apa ol, .ref-apa dl, .apa-ref, .apa-ref ul, .apa-ref ol, .apa-ref dl, .refapa, .refapa ul, .refapa ol, .refapa dl, .aparef, .aparef ul, .aparef ol, .aparef dl {
        padding-left: 0;
        margin-left: 0;
    }

    .apa li, .ref-apa li, .refapa li, .apa-ref li, .aparef li {
        list-style-type: none;
    }

    .apa p, .apa li, .apa dd, .ref-apa p, .ref-apa li, .ref-apa dd, .refapa p, .refapa li, .refapa dd, .apa-ref p, .apa-ref li, .apa-ref dd, .aparef p, .aparef li, .aparef dd {
        margin-left: 2em;
        text-indent: -2em;
        margin-top: 1em;
        margin-bottom: 1em;
    }

</style>