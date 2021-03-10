<template>
  <div>
    
    <!-- mobile site__header -->
    <header class="site__header d-lg-none">
      <div class="mobile-header mobile-header--sticky mobile-header--stuck">
        <div class="mobile-header__panel">
          <div class="container">
            <div class="mobile-header__body">

              <button class="mobile-header__menu-button">
                <svg width="18px" height="14px">
                  <use xlink:href="images/sprite.svg#menu-18x14"></use>
                </svg>
              </button>

              <a class="mobile-header__logo" href="/">
                <img src="images/logos/logo-abracol.png" alt="" width="90%" />
              </a>

              <div class="mobile-header__indicators">
               <!-- Logo Busquedad -->
                  <div class="indicator indicator--trigger--click">
                    <button type="button" class="indicator__button">
                      <span class="indicator__area">
                        <svg class="indicator__icon" width="20px" height="20px">
                          <use xlink:href="images/sprite.svg#search-20"></use>
                        </svg>
                        <svg class="indicator__icon indicator__icon--open" width="20px" height="20px">
                          <use xlink:href="images/sprite.svg#cross-20"></use>
                        </svg
                      ></span>
                    </button>
                    <div class="indicator__dropdown">
                      <div class="drop-search">
                        <form action="#" class="drop-search__form">
                          <input class="drop-search__input" name="search" placeholder="Search over 10,000 products" 
                          aria-label="Site search" type="text" autocomplete="off"/>
                          <button class="drop-search__button drop-search__button--submit" type="submit">
                            <svg width="20px" height="20px">
                              <use xlink:href="images/sprite.svg#search-20"></use>
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <!-- Logo Login -->
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
                        <button class="dropdown-item" data-toggle="modal" data-target="#modalLogin">Login</button>
                        <a class="dropdown-item" href="#">Salir</a>
                    </div>
                  </div>

                  <!-- Logo Tienda -->
                  <div class="indicator indicator--mobile">
                    <a href="/cart" class="indicator__button">
                      <span class="indicator__area">
                        <svg width="20px" height="20px">
                          <use xlink:href="images/sprite.svg#cart-20"></use>
                        </svg>
                      </span>
                    </a>
                  </div>
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
        <div class="site-header__nav-panel">
          <div class="nav-panel">
            <div class="nav-panel__container container">
              <div class="nav-panel__row">
                <div class="nav-panel__logo">
                  <router-link to="/">
                    <img src="images/logos/logo-abracol.png"  width="60%" />
                  </router-link>
                </div>

                <div class="nav-panel__indicators">

                  <!-- Logo Busquedad -->
                  <div class="indicator indicator--trigger--click">
                    <button type="button" class="indicator__button">
                      <span class="indicator__area">
                        <svg class="indicator__icon" width="20px" height="20px">
                          <use xlink:href="images/sprite.svg#search-20"></use>
                        </svg>
                        <svg class="indicator__icon indicator__icon--open" width="20px" height="20px">
                          <use xlink:href="images/sprite.svg#cross-20"></use>
                        </svg
                      ></span>
                    </button>
                    <div class="indicator__dropdown">
                      <div class="drop-search">
                        <form action="#" class="drop-search__form">
                          <input class="drop-search__input" name="search" placeholder="Search over 10,000 products" 
                          aria-label="Site search" type="text" autocomplete="off"/>
                          <button class="drop-search__button drop-search__button--submit" type="submit">
                            <svg width="20px" height="20px">
                              <use xlink:href="images/sprite.svg#search-20"></use>
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <!-- Logo Login -->
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
                        <button class="dropdown-item" data-toggle="modal" data-target="#modalLogin">Login</button>
                        <a class="dropdown-item" href="#">Salir</a>
                    </div>
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

                      <div class="indicator__dropdown">
                          <!-- .dropcart -->
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
                                          <th>Subtotal</th>
                                          <td>$5,877.00</td>
                                      </tr>
                                      <tr>
                                          <th>Shipping</th>
                                          <td>$25.00</td>
                                      </tr>
                                      <tr>
                                          <th>Total</th>
                                          <td>$5,902.00</td>
                                      </tr>
                                  </table>
                              </div>
                              <div class="dropcart__buttons">
                                  <router-link class="btn btn-secondary" to="/cart">View Cart</router-link> 
                                  <router-link class="btn btn-primary" to="/checkout">Checkout</router-link>
                              </div>
                          </div><!-- .dropcart / end -->
                      </div>
                  </div>

                  <Login />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- desktop site__header / end -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Login from './auth/login';

export default {
  name: "headerTwo",
  data() {
    return {
      products : [],
      url_img:  process.env.VUE_APP_IMG_URL,
    }
  },
  components:{
    Login
  },
  computed: {
    ...mapGetters("Shop", ['shop'] ),
    productts() {
      const prd = []
      for (let i = 0; i < this.shop.length; i++) {
          prd.push(this.shop[i])
      }
      return prd
    }
  },
  methods: {
    ...mapActions('Shop',['removeProduct']),
    
    Delete(id){
        this.removeProduct(id)
    },
  },
}
</script>

<style>
.floating {
  transform: translatey(0px);
  animation: float 3s ease-in-out infinite;
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
