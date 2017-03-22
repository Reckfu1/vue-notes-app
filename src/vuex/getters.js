export const getters={
    activeNoteGetter(state){
        return state.activeNote
    },
    notesGetter(state){
        return state.notes
    },
    showGetter(state){
        return state.show
    },
    filterNotesGetter(state){
        if(state.show=='favorite'){
            return state.notes.filter(note => note.favorite)
        }
        else if(state.show=='all'){
            return state.notes
        }
    },
    noteTextGetter(state){
        return state.activeNote.text
    }
}
