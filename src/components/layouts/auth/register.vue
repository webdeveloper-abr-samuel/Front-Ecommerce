<template>
  <div>
    <div
      class="modal fade"
      id="modalRegister"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <!-- <span aria-hidden="true">&times;</span> -->
            </button>

            <div class="container">
              <div class="row justify-content-center align-items-center minh-100">

                <div class="page-header__title">
                  <h1>Registrar</h1>
                </div>

                <div class="col-lg-12 d-flex">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6 form-group">
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

                    <div class="row">
                      <div class="form-group col-lg-6">
                        <label for="SelectDepartamento">Departamento</label>
                        <select v-on:change="loadCities()" v-model="SelectDepartamento" class="form-control"  id="SelectDepartamento">
                          <option v-for="data in states" v-bind:key="data.id" :value="data.id" >{{ data.name }}</option>
                        </select>
                      </div>
                      <div class="form-group col-lg-6">
                        <label for="SelectCiudad">Ciudad</label>
                        <select v-model="SelectCiudad" class="form-control" id="SelectCiudad">
                          <option v-for="data in cities" v-bind:key="data.id" :value="data.id">{{ data.name }}</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 form-group">
                        <label>Dirección</label>
                        <input type="text" v-model="address" class="form-control" placeholder="Direccion"/>
                    </div>
                      <div class="col-lg-6 form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" class="form-control" placeholder="Password"/>
                      </div>
                    </div>
    
                    <div class="btn-group mb-2">
                      <button v-on:click="registerUser()" type="submit"  data-dismiss="modal" aria-label="Close" class="btn btn-primary">Registrar</button>
                    </div>
                  </div>
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
export default {
    name: "Register",
    data() {
        return {
            states: [],
            SelectDepartamento: "",
            SelectCiudad: "",
            cities: [],
            name: '',
            nit: '',
            email: '',
            phone: '',
            address: '',
            password: ""
        }
    },
    created() {  
        this.loadStates();
    },
    methods: {
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

        async registerUser(){
          let newUser = {
            id_role : 1, 
            id_states: this.SelectDepartamento, 
            id_city: this.SelectCiudad,
            name: this.name, 
            nit: this.nit, 
            password: this.password, 
            email: this.email, 
            phone: this.phone, 
            address: this.address
          }
          try {
            await this.axios.post("/user", newUser);  
            await this.clear(); 
            this.$toastr.Add({
              title: "Registro Exitoso!!!", 
              msg: "Su Usuario A Sido Creado Exitosamente", 
              clickClose: true, 
              timeout: 2500, 
              progressbar: true, 
              position: "toast-top-right", 
              type: "success", 
              preventDuplicates: true, 
              style: {fontWeight: "bold"} 
            });
          } catch (error) {
            console.log(error);
          }
        },

        clear(){
            this.SelectDepartamento = "" ,
            this.SelectCiudad = "",
            this.name = "", 
            this.nit = "", 
            this.password = "", 
            this.email = "", 
            this.phone = "", 
            this.address = ""
        }
    },
}
</script>

<style>
.modal-backdrop {
  display: hidden !important;
  opacity: 0 !important;
  z-index: -1 !important;
}
</style>