<template>
	<div>
		<div style="padding-left: 10px; padding-right: 10px">
			<div class="d-lg-flex align-items-center justify-content-between mb-4">
				<div class="input-group w-50">
					<input type="text" class="form-control" placeholder="Search...." />
					<div class="input-group-append">
						<button type="button" class="btn btn-outline-secondary">X</button>
						<button
							type="button"
							class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<span class="sr-only">Toggle Dropdown</span>
						</button>
						<div class="dropdown-menu">
							<input
								type="text"
								class="dropdown-item"
								placeholder="Enter Scientific name"
							/>
							<div role="separator" class="dropdown-divider"></div>
							<input type="text" class="dropdown-item" placeholder="Enter Family" />
							<div role="separator" class="dropdown-divider"></div>
							<input
								type="text"
								class="dropdown-item"
								placeholder="Enter Local Name"
							/>
							<div role="separator" class="dropdown-divider"></div>
							<input
								type="text"
								class="dropdown-item"
								placeholder="Enter Utilized Part"
							/>
							<div role="separator" class="dropdown-divider"></div>
							<input type="text" class="dropdown-item" placeholder="Enter Ailment" />
							<div role="separator" class="dropdown-divider"></div>
							<input
								type="text"
								class="dropdown-item"
								placeholder="Enter Active Compound"
							/>
							<div role="separator" class="dropdown-divider"></div>
							<input type="text" class="dropdown-item" placeholder="Enter PMID" />
							<div role="separator" class="dropdown-divider"></div>
							<button class="btn btn-success">Search</button>
						</div>
					</div>
				</div>
				<div class="pull-right">
					<a href="#" class="btn btn-dark">Download</a>
				</div>
			</div>

			<div class="table-responsive">
				<table
					class="table table-hover table-striped table-bordered"
					style="background-color: white"
				>
					<thead>
						<th class="table-header">
							#
						</th>
						<th class="table-header">
							Scientific Name
						</th>
						<th class="table-header">
							Family
						</th>
						<th class="table-header">
							Local Name
						</th>
						<th class="table-header">
							Utilized part
						</th>
						<th class="table-header">
							Ailment
						</th>
						<th class="table-header">
							Active Compound
						</th>
						<th class="table-header">
							PMID
						</th>
					</thead>
					<tbody>
						<tr v-for="plant in plants" v-bind:key="plant.id">
							<td class="table-cell">{{ plant.id }}</td>
							<td class="table-cell">{{ plant.scientificName }}</td>
							<td class="table-cell">{{ plant.familyName }}</td>
							<td class="table-cell">{{ plant.localName }}</td>
							<td class="table-cell">{{ plant.utilizedPart }}</td>
							<td class="table-cell">{{ plant.ailment }}</td>
							<td class="table-cell">{{ plant.activeCompound }}</td>
							<td class="table-cell">{{ plant.pmid }}</td>
						</tr>
					</tbody>
				</table>

				<ul class="pagination pagination-small" style="padding-left: 2px">
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

<style scoped>
.page-item.active .page-link {
	z-index: 3;
	color: #fff;
	background-color: #5cb874 /*#007bff*/;
	border-color: #5cb874 /*#007bff*/;
}

.page-link {
	position: relative;
	display: block;
	padding: 0.5rem 0.75rem;
	margin-left: -1px;
	line-height: 1.25;
	color: #5cb874;
	/*color: #007bff;*/
	background-color: #fff;
	border: 1px solid #dee2e6;
	border-top-color: rgb(222, 226, 230);
	border-right-color: rgb(222, 226, 230);
	border-bottom-color: rgb(222, 226, 230);
	border-left-color: rgb(222, 226, 230);
}

.page-link:hover {
	z-index: 2;
	color: #48a35e;
	/*color: #0056b3;*/
	text-decoration: none;
	background-color: #e9efeb;
	border-color: #dee6df;
}

.table-cell {
	font-size: 12px;
}

.table-header {
	font-size: 12px;
}
</style>
