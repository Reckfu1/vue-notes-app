<template>
    <div id="editor">
        <textarea :value="noteText" @input="editNote" class="form-control"></textarea>
    </div>
</template>

<script>
import {noteTextGetter} from '../vuex/getters'
import {editNoteAction} from '../vuex/actions'
import {mapActions,mapGetters} from 'vuex'

export default {

    computed:{
        ...mapGetters({
            noteText:'noteTextGetter'
        })
    },
    methods:{
        editNote(e){
            this.$store.dispatch('editNoteAction',e)
        }
    }
};
</script>

<style lang="css" scoped>
#editor{
    height:100%;
    width:100%;
    margin-left: 380px;
}
.form-control{
    height: 100%;
    border: 0px;
}
</style>