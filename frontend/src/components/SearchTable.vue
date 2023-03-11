<template>
    <div>
        <div style="padding-left: 10px; padding-right: 10px">
            <div class="d-lg-flex align-items-center mb-4">
                <div class="input-group w-50">
                    <input type="text" class="form-control" placeholder="Type your keywords then press enter to seach"
                           v-model="tableParams.globalSearch" id="idSearch" v-on:keyup.enter="search"/>
                </div>
                <div style="padding-left: 10px">
                    <font-awesome-icon :icon="['fas','info-circle']" data-toggle="modal" data-target="#infoModal"/>
                </div>

            </div>
            <advanced-search-info></advanced-search-info>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div align="center" v-html="formatName(selectedPlant)"
                                 style="padding: 10px; font-weight: bold"></div>
                            <table class="table">
                                <tr>
                                    <th>PMID</th>
                                    <th>Active Compounds</th>
                                </tr>
                                <tr v-for="ac in selectedPlant.pmAcList" v-bind:key="ac.pmid">
                                    <th><a target="_blank" :href="'https://pubmed.ncbi.nlm.nih.gov/'+ac.pmid">{{ ac.pmid
                                        }}</a></th>
                                    <td>{{ ac.ac }}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <spinner :visible="fetching"></spinner>

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
                        Family Name
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
                        Reference (PMID)
                    </th>
                    </thead>
                    <tbody>
                    <tr v-for="plant in plants" v-bind:key="plant.id">
                        <td class="table-cell" v-html="plant.id"></td>
                        <td class="table-cell" v-html="formatName(plant)"></td>
                        <td class="table-cell" v-html="plant.familyName"></td>
                        <td class="table-cell" v-html="plant.localName"></td>
                        <td class="table-cell" v-html="plant.utilizedPart"></td>
                        <td class="table-cell" v-html="plant.ailment"></td>
                        <td class="table-cell" v-html="plant.activeCompound"></td>
                        <td class="table-cell" @click="showModal(plant)"
                            v-html="formatPubmedUrl(plant.pmid)"></td>
                    </tr>
                    </tbody>
                </table>

                <div class="d-lg-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ul class="pagination pagination-small" style="padding-left: 2px" v-if="hits>0">
                            <li class="prev disabled">
                                <button class="page-link" @click="setPrevPageRange( pages[0] )">
                                    Prev
                                </button>
                            </li>

                            <li v-for="p in pages" class="page-item" v-bind:class="{ active: isPageActive(p) }"
                                v-bind:key="p">
                                <button class="page-link" @click="setActivePage(p)">{{ p }}</button>
                            </li>

                            <li class="next ">
                                <button class="page-link" @click="setNextPageRange( pages[pages.length - 1 ] )">
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div v-if="hits> 0">
                        <select class="form-control" id="exampleFormControlSelect1" v-model="tableParams.itemsPerPage">
                            <option value=10>10 items per page</option>
                            <option value=20>20 items per page</option>
                            <option value=40>40 items per page</option>
                            <option value=60>60 items per page</option>
                        </select>
                    </div>

                    <div v-html="getDesc()">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Fields from "@/entity/Fields";
    import TableParams from "@/entity/TableParams";
    import axios, {AxiosResponse} from "axios";
    import SearchResult from "@/entity/SearchResult";
    import Plant from '@/entity/Plant';
    import Spinner from "@/components/Spinner.vue";
    import ActiveCompound from "@/entity/ActiveCompound";
    import AdvancedSearchInfo from "@/components/AdvancedSearchInfo.vue";

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(faInfoCircle)

    @Component({components: {Spinner, FontAwesomeIcon, AdvancedSearchInfo}})
    export default class SearchTable extends Vue {
        tableParams = new TableParams("",
            new Fields("", "", "", "", "", ""),
            10,
            1
        );
        plants: Array<Plant> = [];
        hits = 0;
        pages: Array<number> = [];
        lastQuery = "";
        fetching = false;
        activeCompounds: Array<ActiveCompound> = [];
        selectedPlant: Plant = {} as Plant;

        created() {
            this.fetch();
        }

        search() {
            if (this.tableParams.globalSearch.length > 2 || this.lastQuery !== this.tableParams.globalSearch) {
                this.fetch()
            }
            this.lastQuery = this.tableParams.globalSearch
        }

        fetch() {
            this.fetching = true
            axios.post("/api/v1/plant/query", this.tableParams).then((res: AxiosResponse<SearchResult>) => {
                this.hits = res.data.hits;
                this.plants = res.data.plants;
                this.pages = this.getWholePageRange().slice(0, 10);
                this.fetching = false
            }).catch((err) => {
                console.log(err)
                this.fetching = false
            })
        }

        isPageActive(pageNumber: number) {
            return pageNumber === this.tableParams.activePage;
        }

        getDesc() {

            if (this.hits == 0) {
                return "No match available!"
            }

            const from: number = (this.tableParams.itemsPerPage * (this.tableParams.activePage - 1));
            const to: number = Math.min(from + Number(this.tableParams.itemsPerPage), this.hits);

            return `Showing ${from + 1} to ${to}  of ${this.hits} items`;
        }

        setActivePage(p: number) {
            this.tableParams.activePage = p;
            this.fetch();
        }

        setNextPageRange(currentLast: number) {

            const range = this.getWholePageRange().slice(currentLast, currentLast + 10);
            if (range.length > 1) {
                this.pages = range;
            }
        }

        getWholePageRange() {
            const end = Math.ceil(this.hits / this.tableParams.itemsPerPage);
            return Array.from({length: (end)}, (v, k) => k + 1);
        }

        setPrevPageRange(currentFirst: number) {
            console.log(currentFirst)
            if (currentFirst > 10) {
                this.pages = this.getWholePageRange().slice(currentFirst - 10 - 1, currentFirst - 1);
            }
        }

        formatName(plant: Plant) {
            return `<em>${plant.scientificName}</em> ${plant.author}`
        }

        formatPubmedUrl(pmid: string) {
            if (pmid.length > 0) {
                if (pmid.indexOf("span") !== -1) {
                    console.log(pmid)
                    pmid = pmid.replace("<span class='hl'>", "").replace("</span>", "")
                    return `<span class="hl"><a target="" style="font-weight: bold; font-size: 14px" href="#">${pmid}</a></span>`
                } else {
                    return `<a target="" style="font-weight: bold; font-size: 14px" href="#">${pmid}</a>`
                }
            } else {
                return ""
            }
        }

        showModal(selectedPlant: Plant) {

            if (selectedPlant.pmAcList.length > 1) {
                this.selectedPlant = selectedPlant;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                // eslint-disable-next-line no-undef
                $("#exampleModal").modal("show")
            } else if (selectedPlant.pmAcList.length == 1) {
                window.open("https://pubmed.ncbi.nlm.nih.gov/" + selectedPlant.pmAcList[0].pmid, '_blank')
            } else {
                console.log("nothing to do")
            }


        }

    }
</script>

<style scoped src="../assets/css/table-styles.css">


</style>
