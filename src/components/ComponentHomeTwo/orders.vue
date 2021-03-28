<template>
    <div>
        <Header></Header>
        <div class="mt-4 py-3 site__body">
            
            <div class="page-header">
                <div class="page-header__container container">
                     <div class="page-header__breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="/">Home</a> 
                                    <svg class="breadcrumb-arrow" width="6px" height="9px">
                                        <use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                    </svg>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <a href="/home">Distribuidores</a>
                                    <svg class="breadcrumb-arrow" width="6px" height="9px">
                                        <use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                    </svg>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div class="page-header__title mb-5">
                        <h1>Configuración</h1>
                    </div>
                </div>
            </div>

            <div class="cart block">
                <div class="container">
                    <ul class="nav nav-pills justify-content-center align-items-center minh-100 mb-5" id="pills-tab" role="tablist ">
                        <li class="nav-item" role="presentation">
                            <a @click="DataUser()" class="nav-link btn btn-outline-warning text-dark font-weight-bold" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                Mis Datos Personales
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a @click="loadDataCheckout()" class="nav-link btn btn-outline-warning text-dark font-weight-bold" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                Mis Pedidos
                            </a>
                        </li>
                        <li class="nav-item " role="presentation">
                            <a @click="Logout()" class="nav-link btn btn-outline-danger  font-weight-bold" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                                Cerrar Sesión
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <!-- datos personales -->
                        <div class="tab-pane fade " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="container">
                                <h6>Mis Datos Personales</h6>
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 col-12 col-sm-12 form-group">
                                        <label>Nombre</label>
                                        <input type="text" v-model="name" class="form-control" placeholder="Nombre"/>
                                    </div>
                                    <div class="col-lg-6 form-group">
                                        <label>Nit</label>
                                        <input type="text" v-model="nit" class="form-control" placeholder="Nit"/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6 form-group">
                                    <label>Email</label>
                                        <input type="email" v-model="email" class="form-control" placeholder="Email"/>
                                        </div>
                                    <div class="col-lg-6 form-group">
                                        <label>Telefono</label>
                                        <input type="number" v-model="phone" class="form-control" placeholder="Telefono"/>
                                    </div>
                                </div>

                                <div v-if="direccion == 0" class="row">
                                    <div class="col-lg-6 form-group">
                                    <label>Departamento</label>
                                        <input type="text" v-model="state" class="form-control" placeholder="Email"/>
                                        </div>
                                    <div class="col-lg-6 form-group">
                                        <label>Municipio</label>
                                        <input type="text" v-model="city" class="form-control" placeholder="Telefono"/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6 form-group">
                                        <label for="exampleFormControlTextarea1">Dirección</label>
                                        <input type="text" v-model="address" class="form-control" placeholder="Direccion"/>
                                    </div>
                                    <div class="col-lg-6 form-group">
                                        <label>Habilita si Quieres Cambiar tu Contraseña</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <input type="checkbox"  v-model="checkpass" aria-label="Checkbox for following text input">
                                                </div>
                                            </div>
                                            <input type="password" :disabled="checkpass == 0" v-model="password" class="form-control" aria-label="Text input with checkbox">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group form-check">
                                    <input type="checkbox" @change="changeAddress()" class="form-check-input" id="exampleCheck1" v-model="direccion">
                                    <label class="form-check-label" for="exampleCheck1">Si desea Cambiar su Direccion Selecciona Aqui!</label>
                                </div>

                                <div v-if="direccion == 1">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="SelectDepartamento">Departamento</label>
                                            <select v-on:change="loadCities()" v-model="SelectDepartamento" class="form-control"  id="SelectDepartamento">
                                                <option value="">Select Departamento...</option>
                                                <option v-for="data in states" v-bind:key="data.id" :value="data.id" >{{ data.name }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="SelectCiudad">Ciudad</label>
                                            <select v-model="SelectCiudad" class="form-control" id="SelectCiudad">
                                                <option value="">Select Ciudad...</option>
                                                <option v-for="data in cities" v-bind:key="data.id" :value="data.id">{{ data.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                        
                                <div class="btn-group mb-2">
                                    <button @click="UpdateUser()" class="btn btn-primary">Actualizar Datos</button>
                                </div>
                            </div>
                        </div>
                        <!-- datos personales -->

                        <!-- pedidos -->
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="row">
                                <div class="col-lg-6" v-for="(items, index) in infoCheckout" v-bind:key="index">
                                    <div class="card-body mb-4">
                                        <div class="card-header bg-warning text-center">
                                        Fecha de compra: {{ items.date_purchase }} | Estado: {{ items.status }}
                                        <!-- <button v-on:click="DeleteOrder(items.id_order_detail)" class="btn btn-link" title="Eliminar Pedido"><span style="color: Tomato;"><i class="fas fa-trash"></i></span></button> -->
                                        </div>
                                        <div class="card ">
                                            <div class="row no-gutters">
                                                <div class="col-md-3">
                                                    <img class="img-fluid" v-bind:src= "url_img + items.path">
                                                </div>
                                                <div class="col-md-9">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{{ items.name }}</h5>
                                                        <ul class="text-justify">
                                                            <li>
                                                                A nombre de: {{ items.nameUser }}
                                                            </li>
                                                            <li>
                                                                Correo : {{ items.email }}
                                                            </li>
                                                            <li>
                                                                Cantidad Comprada : {{ items.quantity }}
                                                            </li>
                                                            <li>
                                                                Distribuidor:{{ items.distributor }}
                                                            </li>
                                                            <li>
                                                                Direccion : {{ items.address }}
                                                            </li>
                                                            <li>
                                                                Departamento : {{ items.states }}
                                                            </li>
                                                            <li>
                                                                Ciudad : {{ items.city }}
                                                            </li>
                                                            <li>
                                                                Telefono : {{ items.phone }}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- pedidos -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Header from "../layouts/header";

export default {
    name: "Cart",
    data() {
        return {
            url_img:  process.env.VUE_APP_IMG_URL,
            password: "",
            checkpass: false,
            name: "",
            nit: "",
            email: "",
            phone: "",
            address: "",
            states: [],
            SelectDepartamento: "",
            SelectCiudad: "",
            cities: [],
            state: "",
            city: "",
            direccion: false,
            id_states: "",
            id_city: "",
            passwordDefault: "",
            infoCheckout : []
        }
    },
    components: {
        Header,
    },
    computed: {
       
    },
    methods: {
        ...mapMutations('Users', ['dlt_User']),
        async DataUser(){
            const nit = localStorage.getItem("nitUSer");
            let value = {
                id: nit
            }
            try {
                let result = await this.axios.post("/user/filter/byNit", value);  
                const { name, nit, email, phone, address, password, city, states, id_city, id_states } = result.data.data[0]
                this.name = name
                this.nit = nit
                this.email = email,
                this.phone = phone,
                this.address = address
                this.password = password
                this.state = states
                this.city = city
                this.id_states = id_states
                this.id_city = id_city;
                this.passwordDefault = password
            } catch (error) {
                console.log(error);
            }
        },

        async UpdateUser(){
            const nit = localStorage.getItem("nitUSer");
            if (this.SelectCiudad == "" && this.SelectDepartamento == "") {
                let newUser = {
                    id: nit,
                    id_role : 1, 
                    name: this.name, 
                    nit: this.nit, 
                    password: this.password, 
                    email: this.email, 
                    phone: this.phone, 
                    address: this.address, 
                    id_states:  this.id_states,
                    id_city: this.id_city,
                    passwordDefault: this.passwordDefault
                }
                try {
                    await this.axios.put('/user', newUser);
                    this.Logout();
                    location.href = "/"
                } catch (error) {
                    console.log(error);
                }
            }else{
                let newUser = {
                    id: nit,
                    id_role : 1, 
                    name: this.name, 
                    nit: this.nit, 
                    password: this.password, 
                    email: this.email, 
                    phone: this.phone, 
                    address: this.address, 
                    id_states:  this.SelectDepartamento,
                    id_city: this.SelectCiudad,
                    passwordDefault: this.passwordDefault
                }
                try {
                    await this.axios.put('/user', newUser);
                    this.Logout();
                    location.href = "/"
                } catch (error) {
                    console.log(error);
                }
            }
            
        },

        Logout(){
            localStorage.removeItem('nameUser');
            localStorage.removeItem('nitUSer');
            localStorage.removeItem('Token');
            localStorage.removeItem('idUSer');
            this.dlt_User();
            location.href = "/"
        },

        async loadStates(){
            try {
                const result = await this.axios.get("/ubication/states");
                this.states = result.data.data;
            } catch (error) {
                console.log(error);
            }
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

        async changeAddress(){
            if (this.direccion == false) {
                this.states = null;
                this.SelectDepartamento = "";
                this.SelectCiudad = "";
                this.cities = null;
            }
            if (this.direccion == true) {
                await this.loadStates();
            }
        },

        async loadDataCheckout(){
            const idUSer = localStorage.getItem("idUSer");
            try {
                let result = await this.axios.get(`/user/filter/checkout/${idUSer}`);  
                this.infoCheckout = result.data.data
            } catch (error) {
                console.log(error);
            }
        },

        /* DeleteOrder(id){
            this.$swal.fire({
                title: 'Si esta en Progeso su estado le recomendamos no eliminar este pedido. ¿Esta seguro que lo desea Eliminar?',
                showDenyButton: true,
                confirmButtonText: `Si`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.delete(`/order_details/${id}`);
                    this.$swal.fire('Pedido Eliminado Correctamente', '', 'success');
                    setTimeout(() => {
                        location.href = "/orders"
                    }, 1200);
                }
            })
        } */
    },
}
</script>

<style lang="css">
    .card-bordered{
        border: 0rem;
    }
</style>