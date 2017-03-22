export const mutations={
    //新增笔记
    add_note(state){
        let newNote={
            id:+new Date(),
            text:'New Note',
            favorite:false
        }
        state.notes.push(newNote)
        state.activeNote=newNote
    },
    //修改笔记
    edit_note(state,text){
        state.activeNote.text=text
    },
    //删除笔记
    delete_note(state,notes){
        for(let i=0;i<notes.length;i++){
            if(state.notes[i].id==state.activeNote.id){
                state.notes.splice(i,1)
                break
            }
        }
        // 注意这里，当没有笔记的时候，要等于一个空对象
        state.activeNote=state.notes[0]||{} 
    },
    //收藏笔记
    toggle_favorite(state){
        state.activeNote.favorite=!state.activeNote.favorite
    },
    //设置当前激活的笔记
    set_active_note(state,note){
        state.activeNote=note
    },
    //切换笔记列表All/Favorite
    show_note(state,show){
        state.show=show
        if(state.show=='all'){
            return state.notes
        }
        else if(state.show=='favorite'){
            return state.notes.filter((note) => {
                note.favorite
            })
        }
    }
}