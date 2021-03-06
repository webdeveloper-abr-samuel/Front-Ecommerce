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
                    <a href="/checkout" class="indicator__button">
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
                  <div class="indicator indicator--mobile">
                    <a href="/checkout" class="indicator__button">
                      <span class="indicator__area">
                        <svg width="20px" height="20px">
                          <use xlink:href="images/sprite.svg#cart-20"></use>
                        </svg>
                        <span  class="indicator__value">{{ shop.length }}</span>
                      </span>
                    </a>
                  </div>

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
import { mapGetters } from 'vuex'

export default {
  name: "headerTwo",
  computed: {
    ...mapGetters("Shop", ['shop'] )  
  },
  methods: {
    
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
