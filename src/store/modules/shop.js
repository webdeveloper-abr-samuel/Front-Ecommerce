export default {
    namespaced: true,
    state: {
        shop: []
    },
    actions: {
        async addProduct({ commit , state }, id) {
            try 
            {               
                const res = await fetch(`http://localhost:3000/abracol/product/filter/product/${id}`)
                const value = await res.json()
                
                const con = state.shop.filter((row) => {
                    return row.ref.id == value.data[0].id ? true : false
                })

                
                var indx = state.shop.findIndex( element => element.ref.id == value.data[0].id);
                
                if (!con.length) {
                    let newProd = {
                        ref: value.data[0],
                        qty: 1
                    }
                    commit("set_Shop", newProd);
                }
                else
                   commit("set_ShopQty",indx)                      

            } catch (error) {
                console.log(error);
            }
        },
        removeProduct({commit} ,id) {     
            commit("del_ShopByID", id);
        }
    },
    mutations: {
        set_Shop(state, shop) {
            state.shop.push(shop);
        },

        set_ShopQty(state, prod){
           state.shop[prod].qty++
        },

        del_ShopByID(state, prod){
            state.shop.splice( prod , 1 )
        }
    },
    getters: {
        shop: state => state.shop
    }
}
