<template>
    <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Advanced Search</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    You can specify fields and keywords with AND/OR operators for advanced search. Check some examples below:
                    <br><br>
                    <strong>1</strong> To search for entries where ailment contains fever and utilizedPart contains root or stem:<br>
                    <pre>ailment:fever AND utilizedPart:(root OR stem)</pre><br>
                    <strong>2</strong> To narrow down previous search only for Acoraceae family:<br>
                    <pre>ailment:fever AND utilizedPart:(root OR stem) AND
                        familyName:Acoraceae</pre><br>
                    *Field names should be <strong>camelCase</strong> and operators(AND/OR) should be <strong>CAPITALIZED</strong>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue} from "vue-property-decorator";

    export default class AdvancedSearchInfo extends Vue{

    }
</script>

<style scoped>

</style>