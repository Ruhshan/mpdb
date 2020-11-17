<template>
	<div id="app">
		<top-nav></top-nav>
		<main id="main">
		<router-view></router-view>
		</main>
		<footer-section></footer-section>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopNav from "@/components/TopNav.vue";
import FooterSection from "@/components/FooterSection.vue";

@Component({
	components: { TopNav, FooterSection }
})
export default class App extends Vue {}
</script>

<style>
@import "./assets/vendor/bootstrap/css/bootstrap.min.css";
@import "./assets/vendor/icofont/icofont.min.css";
@import "./assets/vendor/boxicons/css/boxicons.min.css";
@import "./assets/vendor/animate.css/animate.min.css";
@import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
@import "./assets/vendor/venobox/venobox.css";
@import "./assets/css/style.css";
</style>
