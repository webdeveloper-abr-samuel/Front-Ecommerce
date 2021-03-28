<template>
  <div>
    <!-- mobile site__header -->
    <header class="site__header d-lg-none">
      <div class="mobile-header mobile-header--sticky mobile-header--stuck">
        <div class="mobile-header__panel">
          <div class="container">
            <div class="mobile-header__body">
              <a class="mobile-header__logo" href="/">
                <img src="images/logos/logo-abracol.png" width="90%" />
              </a>
             
              <div class="mobile-header__indicators">
                <!-- Logo Login -->
                <div v-if="name_user == null">
                  <div class="indicator dropdown">
                    <a href="#" class="indicator__button" id="dropdownMenuLink" data-toggle="dropdown">
                      <span class="indicator__area">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-user"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="#484639"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="7" r="4" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" data-toggle="modal" data-target="#modalLogin">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-user"
                            width="15"
                            height="15"
                            viewBox="0 2 24 24"
                            stroke-width="2"
                            stroke="#484639"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          Login
                        </a>
                        <a class="dropdown-item" data-toggle="modal" data-target="#modalRegister">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon icon-tabler icon-tabler-user-plus" 
                            width="15"
                            height="15"
                            viewBox="0 2 24 24" 
                            stroke-width="2"
                            stroke="#484639"
                            fill="none" 
                            stroke-linecap="round" 
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11h6m-3 -3v6" />
                          </svg>
                          Registrar
                        </a>
                    </div>
                  </div>
                </div>

                <div v-else> 
                  <div class="indicator dropdown">
                    <a href="#" class="indicator__button" id="dropdownMenuLink" data-toggle="dropdown">
                      <span class="indicator__area">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-user"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="#484639"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="7" r="4" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <p class="text-center">{{ name_user }}</p>
                        <a class="dropdown-item" href="/orders">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                            class="icon icon-tabler icon-tabler-settings" 
                            width="15"
                            height="15"
                            viewBox="0 2 24 24" 
                            stroke-width="1.5" 
                            stroke="#484639" 
                            fill="none" 
                            stroke-linecap="round" 
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          Configuración
                        </a>
                        <a href="/" v-on:click="Logout()" class="dropdown-item">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                            class="icon icon-tabler icon-tabler-power" 
                            width="15" height="15" 
                            viewBox="0 2 24 24" 
                            stroke-width="1.5" 
                            stroke="#484639" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                            <line x1="12" y1="4" x2="12" y2="12" />
                          </svg>
                          Cerrar Sesion
                        </a>
                    </div>
                  </div>
                </div>

                <!-- UBICATION -->
                <a class="indicator__button" data-toggle="modal" data-target="#staticBackdrop">
                      <span class="indicator__area">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="floating icon icon-tabler icon-tabler-map-pin"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="#484639"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="11" r="3" />
                          <path
                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                          />
                        </svg>
                      </span>
                </a>
                
                <!-- CONTACT -->
                <div class="indicator dropdown">
                  <a href="/contact" class="indicator__button" title="Contacto">
                    <span class="indicator__area" style="font-size: 21px; color: #484639;">
                      <i class="far fa-address-book"></i>
                    </span>
                  </a>
                </div>

                <!-- SHOPPING -->
                <a href="/cart" class="indicator__button">
                    <span class="indicator__area">
                        <svg width="20px" height="20px">
                            <use xlink:href="images/sprite.svg#cart-20"></use>
                        </svg> 
                        <span class="indicator__value">{{ shop.length }}</span>
                    </span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- mobile site__header / end -->

    <!-- desktop site__header -->
    <header class="site__header d-lg-block d-none">
      <div class="site-header">

        <!-- .topbar -->
        <div class="site-header__topbar topbar">
            <div class="topbar__container container">
                <div class="topbar__row">
                    <div class="topbar__item topbar__item--link">
                      <a class="topbar-link" href="#">
                        Acerca De Nosotros
                      </a>
                    </div>
                    <div class="topbar__item topbar__item--link">
                      <a class="topbar-link" href="#">
                        Preguntas Frecuentes
                      </a>
                    </div>
                    <div class="topbar__item topbar__item--link">
                      <a class="topbar-link" href="#">
                        Terminos y Condiciones
                      </a>
                    </div>
                    <div class="topbar__item topbar__item--link">
                      <a class="topbar-link" href="/tratamiento_de_datos">
                        Politicas de Tratamiento de Datos
                      </a>
                    </div>
                    <div class="topbar__spring"></div>

                    <!-- SIN LOGEARSE -->
                    <div v-if="name_user == null">
                      <div class="topbar__item">
                          <div class="topbar-dropdown dropdown">
                            <a class="topbar-dropdown__btn btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Iniciar Sesion
                              <svg width="7px" height="5px">
                                <use xlink:href="images/sprite.svg#arrow-rounded-down-7x5"></use>
                              </svg>
                            </a>
                            <div class="topbar-dropdown__body dropdown-menu menu-drop">
                              <ul class="menu menu--layout--topbar">
                                  <li>
                                    <a class="indicator__button dropdown-item" data-toggle="modal" data-target="#modalLogin">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="icon icon-tabler icon-tabler-user"
                                          width="15"
                                          height="15"
                                          viewBox="0 2 24 24"
                                          stroke-width="2"
                                          stroke="#484639"
                                          fill="none"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <circle cx="12" cy="7" r="4" />
                                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                      Login
                                    </a>
                                  </li>
                                  <li>
                                    <a class="indicator__button dropdown-item" data-toggle="modal" data-target="#modalRegister">
                                      <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        class="icon icon-tabler icon-tabler-user-plus" 
                                        width="15"
                                        height="15"
                                        viewBox="0 2 24 24" 
                                        stroke-width="2"
                                        stroke="#484639"
                                        fill="none" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        <path d="M16 11h6m-3 -3v6" />
                                      </svg>
                                      Registrar
                                    </a>
                                  </li>
                              </ul>
                            </div>
                          </div>
                      </div>
                    </div>

                    <!-- LOGEADO -->
                    <div v-else>
                      <div class="topbar__item">
                          <div class="mr-5 topbar-dropdown dropdown">
                            <a class="topbar-dropdown__btn btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="font-weight-bold"> {{ name_user }}</span> 
                                <svg width="7px" height="5px">
                                <use xlink:href="images/sprite.svg#arrow-rounded-down-7x5"></use>
                              </svg>
                            </a>
                            <div class="ml-4 topbar-dropdown__body dropdown-menu menu-drop">
                              <ul class="menu menu--layout--topbar">
                                <li>
                                  <a href="/orders" class="indicator__button dropdown-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                      class="icon icon-tabler icon-tabler-settings" 
                                      width="15"
                                      height="15"
                                      viewBox="0 2 24 24" 
                                      stroke-width="1.5" 
                                      stroke="#484639" 
                                      fill="none" 
                                      stroke-linecap="round" 
                                      stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                      <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    Configuración
                                  </a>
                                </li>
                                <li>
                                  <a href="/" v-on:click="Logout()" class="indicator__button dropdown-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                      class="icon icon-tabler icon-tabler-power" 
                                      width="15" height="15" 
                                      viewBox="0 2 24 24" 
                                      stroke-width="1.5" 
                                      stroke="#484639" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                      <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                                      <line x1="12" y1="4" x2="12" y2="12" />
                                    </svg>
                                    Cerrar Sesion
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .topbar / end -->

        <div class="site-header__nav-panel">
          <div class="nav-panel">
            <div class="nav-panel__container container">
              <div class="nav-panel__row">
                <div class="nav-panel__logo">
                  <a href="/">
                    <img src="images/logos/logo-abracol.png"  width="60%" />
                  </a>
                </div>

                <div class="nav-panel__indicators">

                  <div class="indicator">
                    <a class="indicator__button" data-toggle="modal" data-target="#staticBackdrop">
                      <span class="indicator__area">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="floating icon icon-tabler icon-tabler-map-pin"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="#484639"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="11" r="3" />
                          <path
                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>

                   <!-- Logo Contact Us -->
                  <div class="indicator dropdown">
                    <a href="/contact" class="indicator__button" title="Contacto">
                      <span class="indicator__area" style="font-size: 21px; color: #484639;">
                        <i class="far fa-address-book"></i>
                      </span>
                    </a>
                  </div>

                  <!-- Logo Tienda -->
                  <div class="indicator indicator--trigger--click">
                      <a class="indicator__button">
                          <span class="indicator__area">
                              <svg width="20px" height="20px">
                                  <use xlink:href="images/sprite.svg#cart-20"></use>
                              </svg> 
                              <span class="indicator__value">{{ shop.length }}</span>
                          </span>
                      </a>

                      <!-- .dropcart -->
                      <div class="indicator__dropdown">
                          <div class="dropcart">
                              <div class="dropcart__products-list">
                                  <div class="dropcart__product" v-for="(product, index) in productts" v-bind:key="index">
                                      <div class="dropcart__product-image">
                                          <a>
                                              <img v-bind:src= "url_img + product.ref.media[0].path" alt="">
                                          </a>
                                      </div>

                                      <div class="dropcart__product-info">
                                          <div class="dropcart__product-name">
                                              <a>{{ product.ref.name }}</a>
                                          </div>
                                          <div class="dropcart__product-meta">
                                              <span class="dropcart__product-quantity">{{ product.qty }}</span> x 
                                              <span class="dropcart__product-price">${{ product.ref.precio * product.qty }}</span>
                                          </div>
                                      </div>
                                      <button v-on:click="Delete(index)" type="button" class="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                                          <svg width="10px" height="10px">
                                              <use xlink:href="images/sprite.svg#cross-10"></use>
                                          </svg>
                                      </button>
                                  </div>
                              </div>
                              <div class="dropcart__totals">
                                  <table>
                                      <tr>
                                          <th>Total</th>
                                          <td>${{ total }}</td>
                                      </tr>
                                  </table>
                              </div>
                              <div class="dropcart__buttons">
                                  <a class="btn btn-secondary" style="font-size: 14px" href="/cart">Ver Carrito</a> 
                                  <a @click="loadShop()" class="btn btn-primary" style="font-size: 14px" >Procesar Compra</a>
                              </div>
                          </div>
                      </div>
                      <!-- .dropcart / end -->
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- desktop site__header / end -->

    <Login />
    <Register />
  </div>
</template>

<script>
import { mapGetters,mapActions, mapMutations } from 'vuex';
import Login from './auth/login';
import Register from './auth/register';

export default {
  name: "Header",
  data() {
    return {
      products : [],
      url_img:  process.env.VUE_APP_IMG_URL,
      name_user : "",
    }
  },
  components:{
    Login,
    Register
  },
  created(){
    this.name_user = localStorage.getItem("nameUser");
  },
  computed: {
    ...mapGetters("Shop", ['shop'] ),
    productts() {
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
    ...mapActions('Shop', ['removeProduct']),
    ...mapMutations('Users', ['dlt_User']),
    Delete(id){
       this.$swal.fire({
            title: '¿Esta Seguro que desea eliminar este Producto?',
            showDenyButton: true,
            confirmButtonText: `Si`,
        }).then((result) => {
            if (result.isConfirmed) {
                this.removeProduct(id)
                this.$swal.fire('Eliminado Correctamente', '', 'success')
            }
        })
    },
    Logout(){
      localStorage.removeItem('nameUser');
      localStorage.removeItem('nitUSer');
      localStorage.removeItem('idUSer')
      localStorage.removeItem('Token');
      this.dlt_User();
    },
    loadShop(){
      if (this.name_user == null) {
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
        location.href = "/checkout"
      }
    }
  },
}
</script>

<style lang="css">
.floating {
  transform: translatey(0px);
  animation: float 3s ease-in-out infinite;
}

img{
  vertical-align: baseline !important;
}

.menu-drop{
  background-color: yellow !important;
  padding: 0rem !important;
  margin: 0rem !important;
  text-align: center !important;
  border: 0rem !important;
  border-radius: 0rem !important;
  min-width: 0rem !important;
  height: 0rem;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-3px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
