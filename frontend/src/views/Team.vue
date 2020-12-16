<template>
    <div>
		<section class="breadcrumbs">
			<div class="container">
				<div class="d-flex justify-content-between align-items-center">
					<h2>Team</h2>
					<ol>
						<li><router-link to="/">Home</router-link></li>
						<li>Team</li>
					</ol>
				</div>
			</div>
		</section>

		<section class="inner-page">

		</section>
	</div>
    
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Team extends Vue{

}
</script>

<style scoped>

</style>