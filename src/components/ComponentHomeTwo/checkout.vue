<template>
    <div>
        <Header></Header>
        <div class="site__body">
            <div class="page-header mt-3">
                <div class="page-header__container container">
                    <div class="page-header__breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="/home">Distribuidores</a> 
                                        <svg class="breadcrumb-arrow" width="6px" height="9px">
                                    </svg>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div class="page-header__title">
                        <h1>Procesar Compra</h1>
                    </div>
                </div>
            </div>

            <div class="checkout block">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6 col-xl-7">
                            <div class="card mb-lg-0">
                                <div class="card-body">
                                    <h3 class="card-title">Detalles De Facturación</h3>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="checkout-first-name">Nombre</label> 
                                            <input type="text" v-model="name" class="form-control" id="checkout-first-name" placeholder="Name">
                                        </div>
                                         <div class="form-group col-md-6">
                                            <label for="checkout-phone">Telefono</label>
                                            <input type="text" class="form-control" v-model="phone" id="checkout-phone" placeholder="Telefono">
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="checkout-email">Email</label> 
                                            <input type="email" class="form-control" v-model="email" id="checkout-email" placeholder="Email address">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="checkout-street-address">Dirección</label>
                                            <input type="text" class="form-control" v-model="address" id="checkout-street-address" placeholder="Dirección">
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="SelectDepartamento">Departamento</label>
                                                <select v-on:change="loadCities()" v-model="SelectDepartamento" class="form-control"  id="SelectDepartamento">
                                                    <option v-for="data in states" v-bind:key="data.id" :value="data.id" >{{ data.name }}</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label for="SelectCiudad">Ciudad</label>
                                                <select v-model="SelectCiudad" class="form-control" id="SelectCiudad">
                                                    <option v-for="data in cities" v-bind:key="data.id" :value="data.id">{{ data.name }}</option>
                                                </select>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <h3 class="card-title">Tu orden</h3>

                                    <table class="checkout__totals text-center">
                                        <thead class="checkout__totals-header">
                                            <tr>
                                                <th>Producto</th>
                                                <th>Detalle</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody class="checkout__totals-products" v-for="(product, index) in products" :key="index">
                                            <tr>
                                                <td>{{ product.ref.name }}  <span class="text-danger font-weight-bold">X {{ product.qty }} </span> </td>
                                                <td>
                                                    <img v-bind:src= "url_img + product.ref.media[0].path" class="img-fluid" width="30%">
                                                </td>
                                                <td>${{ product.ref.precio * product.qty }}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="checkout__totals-footer">
                                            <tr>
                                                <th>Total</th>
                                                <td>${{ total }}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <button type="submit" v-on:click="saveCheckout()" class="btn btn-primary btn-xl btn-block">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Header from "../layouts/header";

export default {
    name: "Checkout",
    data() {
        return {
            url_img:  process.env.VUE_APP_IMG_URL,
            states: [],
            SelectDepartamento: "",
            SelectCiudad: "",
            cities: [],
            name: '',
            phone: '',
            email: '',
            address: '',
            order_heading: []
        }
    },
    created() {  
        this.loadStates();
        this.updata();
    },
    components: {
        Header
    }, 

    computed: {

        ...mapGetters("Shop", ['shop'] ),
        ...mapGetters("Users", ['datauser'] ),

        products(){
            const prd = []
            for (let i = 0; i < this.shop.length; i++) {
                prd.push(this.shop[i])
            }
            return prd
        },

        total(){
            var CountTotal = 0
            for (let i = 0; i < this.shop.length; i++) {
                CountTotal += (this.shop[i].total)
            }
            return CountTotal;
        }
    },

    methods: {

        ...mapActions('Shop',['removeProduct']),
        ...mapMutations('Users', ['dlt_User']),

        Delete(id){
            this.removeProduct(id)
        },

        async loadStates(){
            try {
                const result = await this.axios.get("/ubication/states");
                this.states = result.data.data;
            } catch (error) {
                console.log(error);
            }
        },

        updata(){
            this.datauser.forEach(el => {
                this.name = el.name
                this.phone = el.phone
                this.email= el.email
                this.address = el.address
            })
        },

        async loadCities(){
            const id = this.SelectDepartamento;
            try {
                let result = await this.axios.get(`/ubication/cities/${id}`);
                this.cities = result.data.data;

            } catch (error) {
                console.log(error);
            }
        },
        
        async saveCheckout(){
            const fecha = new Date();
            const fecha_formatiada = fecha.getFullYear() + "/" + (fecha.getMonth() +1) + "/" + fecha.getDate()
            const distri = localStorage.getItem("idDistributor");
            const idUser = localStorage.getItem("idUSer");
            const token = localStorage.getItem("Token");

             let config = {
                headers: {  'Authorization': `Bearer ${token}`  }
            }
            
            

            let new_order_heading = {
                id_distributor : distri,
                id_user: idUser,
                address: this.address,
                name : this.name,
                email : this.email,
                id_city: this.SelectCiudad,
                id_states: this.SelectDepartamento,
                phone: this.phone,
                total: this.total,
                status: 'Progreso',
                date_purchase: fecha_formatiada
            }

            let new_order_detail = [];

            try {
                let heading = await this.axios.post("/order_heading", new_order_heading, config);  

                this.shop.forEach(element => {
                    new_order_detail.push({
                        id_product: element.ref.id,
                        id_distributor: element.ref.distributor,
                        id_order_heading: heading.data.id_order_heading,
                        quantity: element.qty,
                        discount: 0,
                        iva: 0,
                        subtotal: 0
                    })    
                });
               

                new_order_detail.map(element => {
                    const user = localStorage.getItem('nitUSer')
                    if (user == null) {
                        this.$toastr.Add({
                            title: "Bienvenido", 
                            msg: "Debe Iniciar Sesion para Procesar su compra", 
                            clickClose: true, 
                            timeout: 3500, 
                            progressbar: true, 
                            position: "toast-top-right", 
                            type: "info", 
                            preventDuplicates: true, 
                            style: {fontWeight: "bold"} 
                        });
                    }else{
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Compra Realizada Con Exito!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            this.axios.post("/order_details", element, config); 
                            location.href = "/orders"
                        }, 1500);
                    }
                })

            } catch (error) {                
                this.$toastr.Add({
                    title: error.response.data.msg, 
                    msg: "Inicie Sesion Nuevamente", 
                    clickClose: true, 
                    timeout: 2000, 
                    progressbar: false, 
                    position: "toast-top-right", 
                    type: "error", 
                    preventDuplicates: true, 
                    style: {fontWeight: "bold"} 
                });
                setTimeout(() => {
                    this.Logout();
                }, 2000);
            }
        },

        Logout(){
            localStorage.removeItem('nameUser');
            localStorage.removeItem('nitUSer');
            localStorage.removeItem('idUSer')
            localStorage.removeItem('Token');
            this.dlt_User();
            location.href = "/home"
        }
                
    },
}
</script>