<template>
    <div>
        <div style="padding-left: 10px; padding-right: 10px">
            <div class="d-lg-flex align-items-center justify-content-between mb-4">
                <div class="input-group w-50">
                    <input type="text" class="form-control" placeholder="Search...."
                           v-model="tableParams.globalSearch"/>
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
                                    v-model="tableParams.searchFields.scientificName"
                            />
                            <div role="separator" class="dropdown-divider"></div>
                            <input type="text" class="dropdown-item" placeholder="Enter Family"
                                   v-model="tableParams.searchFields.familyName"
                            />
                            <div role="separator" class="dropdown-divider"></div>
                            <input
                                    type="text"
                                    class="dropdown-item"
                                    placeholder="Enter Local Name"
                                    v-model="tableParams.searchFields.localName"
                            />
                            <div role="separator" class="dropdown-divider"></div>
                            <input
                                    type="text"
                                    class="dropdown-item"
                                    placeholder="Enter Utilized Part"
                            />
                            <div role="separator" class="dropdown-divider"></div>
                            <input type="text" class="dropdown-item" placeholder="Enter Ailment"
                                   v-model="tableParams.searchFields.ailment"/>
                            <div role="separator" class="dropdown-divider"></div>
                            <input
                                    type="text"
                                    class="dropdown-item"
                                    placeholder="Enter Active Compound"
                                    v-model="tableParams.searchFields.activeCompound"
                            />
                            <div role="separator" class="dropdown-divider"></div>
                            <input type="text" class="dropdown-item" placeholder="Enter PMID"
                                   v-model="tableParams.searchFields.pmid"/>
                            <div role="separator" class="dropdown-divider"></div>
                            <button class="btn btn-success" @click="search">Search</button>
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

                <div class="d-lg-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ul class="pagination pagination-small" style="padding-left: 2px">
                            <li class="prev disabled">
                                <button class="page-link" @click="setPrevPageRange( pages[0] )">
                                    Prev
                                </button>
                            </li>

                            <li v-for="p in pages" class="page-item" v-bind:class="{ active: isPageActive(p) }" v-bind:key="p">
                                <button class="page-link" @click="setActivePage(p)">{{ p }}</button>
                            </li>

                            <li class="next ">
                                <button class="page-link" @click="setNextPageRange( pages[pages.length - 1 ] )">
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
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

    @Component
    export default class SearchTable extends Vue {
        tableParams = new TableParams("",
            new Fields("", "", "", "", "", ""),
            10,
            1
        );
        plants: Array<Plant> = [];
        hits = 0;
        pages: Array<number> = [];
        created(){
            this.search();

        }
        search() {
            axios.post("http://localhost:8090/api/v1/plant/query", this.tableParams).then((res: AxiosResponse<SearchResult>)=>{
                this.hits = res.data.hits;
                this.plants = res.data.plants;
                this.pages = this.getWholePageRange().slice(0,10);
            })
        }

        isPageActive(pageNumber: number){
            return pageNumber === this.tableParams.activePage;
        }
        getDesc(){
            const from: number = (this.tableParams.itemsPerPage * (this.tableParams.activePage -1) );
            const to: number = from + Number(this.tableParams.itemsPerPage);
            return `Showing ${ from + 1 } to ${ to }  of ${ this.hits } items`;
        }
        setActivePage(p: number){
            this.tableParams.activePage = p;
        }
        setNextPageRange(currentLast: number){

            const range =  this.getWholePageRange().slice(currentLast, currentLast+10);
            console.log(range)
            if(range.length > 1){
                this.pages = range;
            }
        }
        getWholePageRange(){
            const end = Math.ceil(this.hits /this.tableParams.itemsPerPage);
            return Array.from({length: (end)}, (v, k) => k + 1);
        }
        setPrevPageRange(currentFirst: number){
            console.log(currentFirst)
            if(currentFirst>10){
                this.pages = this.getWholePageRange().slice(currentFirst-10 -1, currentFirst-1);
            }

        }
    }
</script>

<style scoped src="../assets/css/table-styles.css"></style>
