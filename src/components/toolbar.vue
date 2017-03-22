<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite"
            class="glyphicon glyphicon-star"
            :class="{star:activeNote.favorite}"></i>
        <i @click="deleteNote(notes)" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script>
import {addNoteAction,toggleFavoriteAction,deleteNoteAction} from '../vuex/actions'
import {activeNoteGetter,notesGetter} from '../vuex/getters'
import {mapActions,mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters({
            activeNote:'activeNoteGetter',
            notes:'notesGetter'
        })
    },
    methods:{
        addNote(){
            this.$store.dispatch('addNoteAction')
        },
        toggleFavorite(){
            this.$store.dispatch('toggleFavoriteAction')
        },
        deleteNote(notes){
            this.$store.dispatch('deleteNoteAction',notes)
        }
    }
};
</script>

<style lang="css" scoped>
#toolbar{
    height: 100%;
    width:80px;
    background-color:#30414D;
    color:#767676;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
#toolbar i{
    font-size:30px;
    margin-bottom: 35px;
    cursor:pointer;
    opacity: 0.8;
    transition:opacity .5s ease;
}
#toolbar i:first-child{
    margin-top:35px;
}
.star{
    color:#F7AE4F;
}
</style>