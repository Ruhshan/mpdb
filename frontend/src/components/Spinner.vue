<template>
    <div v-if="visible" class="cssload-whirlpool"></div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class Spinner extends Vue{
        @Prop({default: false}) visible!: boolean;

    }
</script>

<style scoped src="../assets/css/spinner.css">
</style>