import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    val: [4,4,4,4,4],
    index: 'xxxx'
}

const mutations = {
    handleMassage(state, val2) {
        console.log('mutations',state, val2)
        state.val = val2
    }
}

const actions = {
    handleActions(a, b) {
        a.commit('handleMassage',b)
        console.log('actions',a,b)
    }
}

const Store = new Vuex.Store({
    state,
    mutations,
    actions 
})

export default Store