<template>
  <div id="app">
    <toolbar></toolbar>
    <noteslist></noteslist>
    <editor></editor>
  </div>
</template>

<script>
import toolbar from './components/toolbar'
import noteslist from './components/noteslist'
import editor from './components/editor'

export default {
  components:{
    toolbar,
    noteslist,
    editor
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
