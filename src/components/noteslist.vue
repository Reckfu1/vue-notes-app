<template>
    <div id="noteslist">
        <div id="list-header">
            <h2 class="list-title">&nbsp;&nbsp;&nbsp;NOTES | RECKFUL</h2>
            <div class="btn-group btn-group-justified" role="group">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="showNote('all')" :class="{active:show=='all'}">All Notes</button>
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="showNote('favorite')" :class="{active:show=='favorite'}">Favorites</button>
                </div>
            </div>
        </div>
        <div class="list-group">
            <a href="#" class="list-group-item" v-for="note in filterNotes" :class="{active:activeNote==note}" @click="updateActiveNote(note)">
                <h5 class="list-group-item-heading">
                    {{note.text.trim().substring(0,30)}}
                </h5>
            </a>
        </div>
    </div>
</template>


<script>
import {updateActiveNoteAction,showNoteAction} from '../vuex/actions'
import {showGetter,notesGetter,activeNoteGetter,filterNotesGetter} from '../vuex/getters'
import {mapActions,mapGetters} from 'vuex'

export default {
    
    computed:{
        ...mapGetters({
            show:'showGetter',
            notes:'notesGetter',
            activeNote:'activeNoteGetter',
            filterNotes:'filterNotesGetter'
        })
    },
    methods:{
        updateActiveNote(note){
            this.$store.dispatch('updateActiveNoteAction',note)
        },
        showNote(show_status){
            this.$store.dispatch('showNoteAction',show_status)
        }
    }
};
</script>

<style lang="css" scoped>
#noteslist{
    height: 100%;
    width:300px;
    background-color: #F5F5F5;
    float: left;
}
.list-title{
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    margin:20px auto;
    letter-spacing: 0.5px;
}
.btn-group-justified{
    width: 250px;
    margin:0 auto;
}
.btn-group-justified .btn-group .btn{
    letter-spacing: 0.5px;
}
.list-group{
    margin-top: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
}
.list-group a{
    width: 300px;
    height: 40px;
    border-radius: 0;
    border: 0;
}
.list-group .list-group-item h5{
    line-height: 20px;
}
</style>