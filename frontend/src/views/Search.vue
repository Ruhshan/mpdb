<template>
	<div>
		<section class="breadcrumbs">
			<div class="container">
				<div class="d-flex justify-content-between align-items-center">
					<h2>Search</h2>
					<ol>
						<li><router-link to="/">Home</router-link></li>
						<li>Search</li>
					</ol>
				</div>
			</div>
		</section>

		<section class="inner-page">
			<search-table></search-table>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchTable from "@/components/SearchTable.vue";

@Component({
	components: { SearchTable }
})
export default class Search extends Vue {}
</script>

<style scoped></style>
