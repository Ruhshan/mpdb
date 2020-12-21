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
                <div class="card shadow-sm p-3">
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>If the user is looking for a specific plant, can search directly with its scientific
                                name</p>
                        </blockquote>
                    </div>
                    <figure class="figure">
                        <img class="card-img-bottom" src="https://i.postimg.cc/CL0B8Pcd/mpdb1.png" alt="Card image cap">
                         <figcaption class="figure-caption text-center">A caption for the above image.</figcaption>
                    </figure>

                </div>
                <br>
                <div class="card shadow-sm p-3">
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>If the user is looking for a specific plant, can search directly with its scientific
                                name</p>
                        </blockquote>
                    </div>
                    <figure class="figure">
                        <img class="card-img-bottom" src="https://i.postimg.cc/CL0B8Pcd/mpdb1.png" alt="Card image cap">
                         <figcaption class="figure-caption text-center">A caption for the above image.</figcaption>
                    </figure>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Guide"
    }
</script>

<style scoped>

</style>