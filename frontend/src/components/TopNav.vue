<template>
	<div>
		<header id="header" class="fixed-top">
			<div class="container d-flex align-items-center">
				<h1 class="logo mr-auto"><a href="#">MPDB 2.0</a></h1>
				<!-- Uncomment below if you prefer to use an image logo -->
				<!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

				<nav class="nav-menu d-none d-lg-block">
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/search">Search</router-link></li>
						<li><router-link to="/guide">Guide</router-link></li>
						<li><router-link to="/team">Team</router-link></li>
						<li><router-link to="/publications">Publications</router-link></li>
					</ul>
				</nav>
				<!-- .nav-menu -->
			</div>
		</header>
		<!-- End Header -->
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopNav extends Vue {}
</script>

<style scoped></style>
