<template>
  <div>
    <footer class="site__footer">
      <div class="site-footer">
        <div class="container">
          <div class="site-footer__widgets">
            <div class="row">

              <!-- abouts -->
              <div class="col-12 col-md-4 col-lg-4">
                <div class="site-footer__widget footer-contacts">
                  <h5 class="footer-contacts__title">Acerda De Nosotros</h5>
                  <div class="footer-contacts__text text-justify">                    
                      <br />Desde 1969 ABRACOL S.A produce abrasivos de alta calidad para todo tipo de operaciones de la industria automotriz, 
                      metalmecanica, construcción, minería, fundiciones de madera , vidrios entre otras
                      <br />
                      Alta tecnología de origen Europeo, innovación constante, el control de calidad certificado bajo ISO 9001/2015
                  </div>
                  <ul class="footer-contacts__contacts">
                    <li>
                      <i
                        class="footer-contacts__icon fas fa-globe-americas"
                      ></i>
                      Kilómetro 20, Girardota Antioquia - Colombia
                    </li>
                    <li>
                      <i class="footer-contacts__icon far fa-envelope"></i>
                      contacto@abracol.com
                    </li>
                    <li>
                      <i class="footer-contacts__icon fas fa-mobile-alt"></i>
                      01 8000 51 54 52
                    </li>
                    <li>
                      <i class="footer-contacts__icon far fa-clock"></i>
                      Lun - Vie, 7:30 a.m. - 5:30 p.m.
                      </li>
                  </ul>
                </div>
              </div>

              <!-- Servicio al cliente -->
              <div class="col-12 col-md-4 col-lg-4">
                <div class="site-footer__widget footer-links">
                  <h5 class="footer-links__title">Servicio Al Cliente</h5>
                  <ul class="footer-links__list">
                    <li class="footer-links__item">
                      <a href="#" class="footer-links__link">Medios de Pago</a>
                    </li>
                    <li class="footer-links__item">
                      <a href="#" class="footer-links__link">Preguntas Frecuentes</a>
                    </li>
                    <li class="footer-links__item">
                      <a href="#" class="footer-links__link">Terminos y Condiciones</a>
                    </li>
                    <li class="footer-links__item">
                      <router-link to="tratamiento_de_datos" class="footer-links__link">Politica de Tratamiento de Datos</router-link>
                    </li>
                    <li class="footer-links__item">
                      <a href="#" class="footer-links__link">Cambio y Devoluciones</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Productos -->
              <div class="col-12 col-md-4 col-lg-4">
                <div class="site-footer__widget footer-links">
                  <h5 class="footer-links__title">Productos</h5>
                  <ul class="footer-links__list">
                    <li class="footer-links__item">
                      <a href="#" class="footer-links__link">Zonas Que Cubrimos</a>
                    </li>
                  </ul>
                  <div class="footer-newsletter__text footer-newsletter__text--social">
                      Síganos en las redes sociales
                  </div>
                  <ul class=" footer-newsletter__social-links">
                      <li
                          class="footer-newsletter__social-link footer-newsletter__social-link--facebook">
                          <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                  class="fab fa-facebook-f"></i></a>
                      </li>
                      <li
                          class="footer-newsletter__social-link footer-newsletter__social-link--twitter">
                          <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                  class="fab fa-twitter"></i></a>
                      </li>
                      <li
                          class="footer-newsletter__social-link footer-newsletter__social-link--youtube">
                          <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                  class="fab fa-youtube"></i></a>
                      </li>
                      <li
                          class="footer-newsletter__social-link footer-newsletter__social-link--instagram">
                          <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                  class="fab fa-instagram"></i></a>
                      </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>