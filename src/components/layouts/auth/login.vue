<template>
  <div>
    <div
      class="modal fade"
      id="modalLogin"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
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
                  <h1>Iniciar Sesión</h1>
                </div>

                <div class="col-lg-12 d-flex">
                  <div class="card-body">
                    <div class="form-group">
                      <label>Identificacion</label>
                      <input v-model="nit" type="text" class="form-control" placeholder="Ingrese el Nit"/>
                    </div>
                    
                    <div class="form-group">
                      <label>Contraseña</label>
                      <input v-model="password" type="password" class="form-control" placeholder="Ingrese la Contraseña"/>
                    </div>

                    <div class="btn-g mb-2">
                      <button data-dismiss="modal" aria-label="Close" @click="LoginUser()" type="submit" class="btn btn-primary">Entrar</button>
                      <button class="btn btn-outline-warning " data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#modalRegister">
                        Registrar
                      </button>
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
import { mapActions } from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      nit: "",
      password: ""
    }
  },
  methods: {
    ...mapActions("Users", ['LoadUser'] ),

    async LoginUser(){
      let newLogin = {
        nit: this.nit, 
        password: this.password
      }
      try {
        const res = await this.axios.post("/login", newLogin);  
        localStorage.setItem("Token" , res.data.token );
        localStorage.setItem("nameUser" , res.data.nombreUser );
        localStorage.setItem("nitUSer" , res.data.nitUser );
        localStorage.setItem("idUSer" , res.data.userId );
        this.LoadUser();
        await this.clear(); 
         this.$toastr.Add({
            title: "Inicio Sesion Correctamente", 
            msg: "", 
            clickClose: true, 
            timeout: 2000, 
            progressbar: true, 
            position: "toast-top-right", 
            type: "success", 
            preventDuplicates: true, 
            style: {fontWeight: "bold"} 
          });
          setTimeout(() => {
            location.href = "/orders"
          }, 2000);
      } catch (error) {
        console.log(error);
      }
    },

    clear(){
        this.nit = "", 
        this.password = ""
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