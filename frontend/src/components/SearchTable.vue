<template>
	<div class="container">
		<div style="padding-left: 10px; padding-right: 10px">
			<div class="d-sm-flex align-items-center justify-content-between mb-4">
				<div class="pull-left">
					<a href="/catalogue/product/create" class="btn btn-primary">Create</a>
				</div>
				<form class="form form-inline pull-right" action="/catalogue/product/list">
					<input
						type="text"
						name="q"
						class="form-control"
						placeholder="search"
						value=""
					/>
					<button class="btn btn-search btn-info">Search</button>
					<a href="/catalogue/product/list" class="btn btn-danger">Clear</a>
				</form>
			</div>

			<div class="table-responsive">
				<table
					class="table table-hover table-striped table-bordered"
					style="background-color: white"
				>
					<thead>
						<th>
							#
						</th>
						<th>
							Scientific Name
						</th>
						<th>
							Family
						</th>
						<th>
							Local Name
						</th>
						<th>
							Utilized part
						</th>
						<th>
							Ailment
						</th>
						<th>
							Active Compound
						</th>
						<th>
							PMID
						</th>
					</thead>
					<tbody>
						<tr v-for="plant in plants" v-bind:key="plant.id">
							<td>{{ plant.id }}</td>
							<td>{{ plant.scientificName }}</td>
							<td>{{ plant.familyName }}</td>
							<td>{{ plant.localName }}</td>
							<td>{{ plant.utilizedPart }}</td>
							<td>{{ plant.ailment }}</td>
							<td>{{ plant.activeCompound }}</td>
							<td>{{ plant.pmid }}</td>
						</tr>
					</tbody>
				</table>

				<ul class="pagination pagination-small">
					<li class="prev disabled">
						<a class="page-link" href="">
							Prev
						</a>
					</li>

					<li class="page-item active"><a class="page-link" href="">1</a></li>

					<li class="page-item"><a class="page-link" href="?page=2">2</a></li>

					<li class="page-item"><a class="page-link" href="?page=3">3</a></li>

					<li class="page-item"><a class="page-link" href="?page=4">4</a></li>

					<li class="next ">
						<a class="page-link" href="?page=2">
							Next
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchTable extends Vue {
	plants = [
		{
			id: 1,
			scientificName: "Andrographis paniculata (Burm. F.) Wall.  ex Nees",
			familyName: "Acanthaceae",
			localName: "Kalomegh",
			utilizedPart: "Whole plant",
			ailment: "",
			activeCompound:
				"Andrographolide, Neoandrographolide, 14-Deoxyandrographolide, Isoandrographolide, Andrographiside, 14-Deoxy 11,12-Didehydroandrographolide, Andrograpanin, Andrograpidin C, Luteolin, Andrograpidin A, Apigenin, Onysilin, Echiodinin, Andrographolactone",
			pmid: "25950015"
		},
		{
			id: 2,
			scientificName: "Justicia adhatoda L.",
			familyName: "Acanthaceae",
			localName: "Bashok",
			utilizedPart: "Leaf, Bark",
			ailment:
				"Coughs, chest pain, pneumonia, biliary problem (bile turns the color of blood), frequent thirsts, respiratory problems, fever, vomiting tendency, diabetes, leprosy, tuberculosis.",
			activeCompound: "Tetracosahexaene hexamethyl",
			pmid: "25001112"
		},
		{
			id: 3,
			scientificName: "Justicia gendarussa Burm.f.",
			familyName: "Acanthaceae",
			localName: "Haing kiu, Bish-katali",
			utilizedPart: "Leaf, root, seed",
			ailment: "Throat pain due to cold and coughs.",
			activeCompound:
				"oleic acid, 9,12-octadecadienoic acid, 6,9,12-octadecatrienoic acid and estra-1,3,5 (10)-trein-17-β-ol",
			pmid: "28539747"
		},
		{
			id: 4,
			scientificName: "Aloe vera (L.) Burm.f.",
			familyName: "Aloaceae",
			localName: "Ghrito-kumari",
			utilizedPart: "Whole plant",
			ailment: "",
			activeCompound: "Aloin",
			pmid: "31319122"
		},
		{
			id: 5,
			scientificName: "Achyranthes aspera L.",
			familyName: "Amaranthaceae",
			localName: "Apang, Ubuth nangra",
			utilizedPart: "Leaf, root",
			ailment:
				"Fever, headache, itching, and burning sensations in the body, blood toxicity, indigestion, vomiting tendency, coughs, obesity, respiratory tract disorders, piles, pain, wounds, gastrointestinal disorders (leaf). Jaundice (root).",
			activeCompound:
				"quinic acid, chlorogenic acid, kaempferol, quercetin, chrysin",
			pmid: "24190493"
		}
	];
}
</script>

<style scoped></style>
