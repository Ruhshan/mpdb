<template>
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
</template>

<script>
    export default {
        name: "FieldWiseSearch"
    }
</script>

<style scoped>

</style>