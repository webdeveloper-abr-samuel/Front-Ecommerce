import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)

import Shop from './modules/shop'

export default new Vuex.Store({
    state: {

    },
    plugins: [createPersistedState()],
    actions:{

    },
    mutations: {
        
    },
    getters: {

    },
    modules:{
        Shop
    }
})