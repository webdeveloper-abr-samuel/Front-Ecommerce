<template>
  <div>
    <!-- mobile site__header -->
    <header class="site__header d-lg-none">
      <div class="mobile-header mobile-header--sticky mobile-header--stuck">
        <div class="mobile-header__panel">
          <div class="container">
            <div class="mobile-header__body">
              <a class="mobile-header__logo" href="">
                <img src="images/logos/logo-abracol.png" alt="" width="90%" />
              </a>
             
              <div class="mobile-header__indicators">
                <a href="#" class="indicator__button" data-toggle="modal" data-target="#staticBackdrop">
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
                
                <div class="indicator dropdown">
                  <a href="#" class="indicator__button" title="Contacto">
                    <span class="indicator__area" style="font-size: 21px; color: #484639;">
                      <i class="far fa-address-book"></i>
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

                  <div class="indicator">
                    <a href="#" class="indicator__button" data-toggle="modal" data-target="#staticBackdrop">
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
                    <a href="#" class="indicator__button" title="Contacto">
                      <span class="indicator__area" style="font-size: 21px; color: #484639;">
                        <i class="far fa-address-book"></i>
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
