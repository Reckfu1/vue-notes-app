import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'

Vue.use(Vuex)

const state={
    notes:[],
    activeNote:{},
    show:'all'
}

const store=new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store