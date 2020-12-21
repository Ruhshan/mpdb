<template>
    <div>
        <section class="breadcrumbs">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Guide</h2>
                    <ol>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>Guide</li>
                    </ol>
                </div>
            </div>
        </section>
        <section class="inner-page">
            <div class="container">
                <div v-for="g in guides" v-bind:key="g.id">
                    <div class="card shadow-sm p-3">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>{{g.id}}. {{ g.text }}</p>
                            </blockquote>
                        </div>
                        <figure class="figure">
                            <img class="card-img-bottom" :src="g.imageUrl" :alt="g.imageCaption">
                            <figcaption class="figure-caption text-center">{{ g.imageCaption }}</figcaption>
                        </figure>

                    </div>
                    <br>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import axios, {AxiosResponse} from "axios";
    import GuideObj from "@/entity/GuideObj";

    @Component
    export default class Guide extends Vue {
        guides: Array<GuideObj> = [];

        created() {
            axios.get(process.env.VUE_APP_API_URL + '/api/v1/misc/guide').then(
                (result: AxiosResponse<Array<GuideObj>>) => {
                    this.guides = result.data

                }
            )
        }

    }
</script>

<style scoped>

</style>