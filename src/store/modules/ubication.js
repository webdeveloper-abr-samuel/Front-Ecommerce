
export default {
    namespaced: true,
    state: {
        departamento: ""
    },
    actions: {
        addDep({ commit }, id) {
            commit("set_Dep", id);
        },
    },
    mutations: {
        set_Dep(state, value){
            state.departamento = value;
        }
        
    },
    getters: {
        Dep: state => state.departamento
    }
}
