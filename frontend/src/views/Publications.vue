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
                    <h4>MPDB 2.0 Release Article</h4>
                    <p>Nazmul Hussain, Rony Chanda, Ruhshan Ahmed Abir, Mohsina Akter Mou, Md. Kamrul Hasan & M. Arif Ashraf. (2021). MPDB 2.0: a large scale and integrated medicinal plant database of Bangladesh.
                        <em><a href="https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-021-05721-6" target="_blank">BMC Research Notes</a></em>, 14, 301 (2021).</p>
                </div>
                <div class="apa-ref">
                    <h4>MPDB Origininal Release Article</h4>
                    <p>Ashraf, M. A., Khatun, A., Sharmin, T., Mobin, F., Tanu, A. R., Morshed, T., Fakir, T. A., Begum, R. A., & Nabi, A. N. (2014). MPDB 1.0: a medicinal plant database of Bangladesh.
                        <em><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4110432/" target="_blank">Bioinformation</a></em>, 10(6), 384–386.</p>
                </div>

                <div class="apa-ref">
                    <h4>Articles Citing MPDB</h4>
                    <p v-for="publication in publications" v-bind:key="publication.id">
                        {{publication.title}} <em><a :href="publication.link" target="_blank"> {{publication.journal}}</a></em>  {{publication.page }}
                    </p>

                </div>

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
            axios.get(process.env.VUE_APP_API_URL + "/api/v1/misc/publications").then((result: AxiosResponse<Array<Publication>>) => {
                this.publications = result.data
            })
        }
    }

</script>

<style scoped src="../assets/css/apa.css">

</style>