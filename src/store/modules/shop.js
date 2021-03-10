export default {
    namespaced: true,
    state: {
        shop: []
    },
    actions: {
        async addProduct({ commit, state }, id) {
            try {
                const res = await fetch(`http://localhost:3000/abracol/product/filter/product/${id}`)
                const value = await res.json()

                const con = state.shop.filter((row) => {
                    return row.ref.id == value.data[0].id ? true : false
                })

                var indx = state.shop.findIndex(element => element.ref.id == value.data[0].id);

                if (!con.length) {
                    let newProd = {
                        ref: value.data[0],
                        qty: 1,
                        total: value.data[0].precio
                    }
                    commit("set_Shop", newProd);
                }
                else
                    commit("set_ShopQty", indx)

            } catch (error) {
                console.log(error);
            }
        },
        
        removeProduct({ commit }, id) {
            commit("del_ShopByID", id);
        },

        removeQty({commit, state}, id){
            var indx = state.shop.findIndex(element => element.ref.id == id);
            commit("del_QtyProd", indx)
        },

        
        
    },
    mutations: {
        set_Shop(state, shop) {
            state.shop.push(shop);
        },

        set_ShopQty(state, prod) {
            state.shop[prod].qty++
            state.shop[prod].total = state.shop[prod].ref.precio * state.shop[prod].qty
        },

        del_ShopByID(state, prod) {
            state.shop.splice(prod, 1)
        },

        del_QtyProd(state, prod){
            state.shop[prod].qty--
            state.shop[prod].total = state.shop[prod].total - state.shop[prod].ref.precio
        }
    },
    getters: {
        shop: state => state.shop
    }
}
