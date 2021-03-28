import axios from 'axios'
export default {
    namespaced: true,
    state: {
        datauser: []
    },
    actions: {
        async LoadUser({ commit }) {
            const nit = localStorage.getItem("nitUSer");
            let value = {
                id: nit
            }
            let result = await axios.post("/user/filter/byNit", value); 
            commit("set_User", result.data.data[0]);
        }
    },
    mutations: {
        set_User(state, value){
            state.datauser.push(value);
        },

        dlt_User(state){
            state.datauser.pop();
        }
    },
    getters: {
        datauser: state => state.datauser
    }
}
