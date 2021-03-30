<template>
  <div class="shop-layout__content">
    <div class="block">
      <div class="products-view">

          <div v-if="filterProduct == '' ">
            <paginate name="allProduct" ref="paginator" :list="allProduct" :per="15">
              <div class="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false">
                <div class="products-list__body">
                    <div class="products-list__item" v-for="(data,index) in paginated('allProduct')" :key="index">
                        <div v-if="data.Supplier == 'This'">
                          <div class="product-card"  style="width: 15rem;">
                              <button 
                                class="product-card__quickview" 
                                data-toggle="modal" 
                                v-bind:data-target="'#modal'+data.id" 
                                type="button"
                              >
                                <svg width="16px" height="16px">
                                  <use xlink:href="images/sprite.svg#quickview-16"></use>
                                </svg> 
                                <span class="fake-svg-icon"></span>
                              </button>              

                              <div class="product-card__image">
                                <a  @click="captureProduct(data)">
                                  <img class="px-3 img-fluid" v-bind:src= "url_img + data.media[0]" />
                                </a>
                              </div>

                              <div class="product-card__info">                                  
                                <div class="mb-3 row justify-content-center align-items-center minh-100">
                                  <div v-if="loguser != null">
                                      <star-rating
                                          v-bind:increment="1"
                                          v-bind:max-rating="5"
                                          inactive-color="#ccc"
                                          active-color="#ffd333"
                                          v-bind:star-size="15"
                                          :rating=data.Rating
                                          @rating-selected="saveLoginRating($event, data.id)"
                                      >
                                      </star-rating>
                                  </div>
                                  <div v-else>
                                      <star-rating 
                                          data-toggle="modal" 
                                          data-target="#exampleModal"
                                          :rating=data.Rating
                                          :read-only="true" 
                                          v-bind:increment="1"
                                          v-bind:max-rating="5"
                                          inactive-color="#ccc"
                                          active-color="#ffd333"
                                          v-bind:star-size="15"
                                      ></star-rating>
                                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div class="modal-dialog" role="document">
                                              <div class="modal-content">
                                              <div class="modal-header">
                                                  <h5 class="modal-title" id="exampleModalLabel">Califica Nuestro Producto</h5>
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                                  </button>
                                              </div>
                                              <div class="modal-body mb-3 ">
                                                  Seleccion tu Calificacion
                                                  <div class="row justify-content-center align-items-center minh-100">
                                                      <star-rating
                                                          v-bind:increment="1"
                                                          v-bind:max-rating="5"
                                                          inactive-color="#ccc"
                                                          active-color="#ffd333"
                                                          v-bind:star-size="20"
                                                          :rating=raiting
                                                          @rating-selected="setRating"
                                                      >
                                                      </star-rating>
                                                  </div>
                                                  <div class="form mt-4">
                                                      <div class="form-group">
                                                          <label for="checkout-first-name">Nombre</label> 
                                                          <input type="text" v-model="name" class="form-control" id="checkout-first-name" placeholder="Name">
                                                      </div>
                                                      <div class="form-group ">
                                                          <label for="checkout-email">Email</label> 
                                                          <input type="email" class="form-control" v-model="email" id="checkout-email" placeholder="Correo">
                                                      </div>
                                                      <div class="form-group">
                                                          <label for="checkout-email">Ciudad/Población</label> 
                                                          <input type="email" class="form-control" v-model="address" id="checkout-email" placeholder="Direccion">
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="modal-footer">
                                                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                  <button type="button" @click="saveRating(data.id)" class="btn btn-primary">Guardar Calificacion</button>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                </div>

                                <div class="product-card__name text-center">
                                  <p class="font-weight-bold">DISTRIBUIDOR</p>
                                  <p style="font-size: 14px">{{data.distributor}}</p>
                                </div>
                                <div class="product-card__name">
                                  <button class=" font-weight-bold text-justify badge badge-pill btn-sm btn btn-link" @click="captureProduct(data)">
                                    {{ data.name }}
                                  </button>
                                </div>
                              </div>

                              <div class="product-card__actions">
                                  <div class="product-card__buttons">
                                    <button  v-on:click="addCartProduct(data.id)" class="btn btn-primary product-card__addtocart" type="button">
                                      Agregar al Carrito
                                    </button> 
                                    
                                    <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                      <svg width="16px" height="16px">
                                        <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                      </svg> 
                                      <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                    </button>
                                  </div>
                              </div>
                          </div>
                          
                          <!-- MODAL -->
                          <div 
                            data-keyboard="false" 
                            class="modal fade" 
                            v-bind:id="'modal'+data.id" 
                            tabindex="-1" 
                            data-backdrop="static" 
                            aria-labelledby="staticBackdropLabel" 
                            aria-hidden="true"
                          >

                            <div class="modal-dialog modal-lg">
                              <div class="modal-content">
                                <div class="modal-body">
                                    <button class="quickview__close close" type="button" data-dismiss="modal" aria-label="Close">
                                      <svg width="20px" height="20px">
                                        <use xlink:href="images/sprite.svg#cross-20"></use>
                                      </svg>
                                    </button>

                                    <div class="mt-5 product">
                                      <div class="product__content">                                       
                                        <div class="product__gallery">
                                          <div v-bind:id="'carouselExampleIndicators'+data.id"  class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                              <div class="carousel-item active">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + data.media[0]" alt="First slide">
                                              </div>
                                              <div class="carousel-item" v-for="(multimedia, index) in data.media" :key="index">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + multimedia" >
                                              </div>
                                            </div>
                                            <a class="carousel-control-prev" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="prev">
                                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="next">
                                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Next</span>
                                            </a>
                                            <div class="container pt-4 pb-5">
                                              <div class="row carousel-indicators">
                                                <div class="col-md-4 item" v-for="(multimedia, index) in data.media" :key="index">
                                                  <img v-bind:src= "url_img + multimedia" class="px-1 img-fluid" v-bind:data-target="'#carouselExampleIndicators' +data.id" v-bind:data-slide-to="index + 1"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <!-- .product__info -->
                                        <div class="product__info">
                                          <div class="product__wishlist-compare">
                                            <button
                                              type="button"
                                              class="btn btn-sm btn-light btn-svg-icon"
                                              data-toggle="tooltip"
                                              data-placement="right"
                                              title="Wishlist"
                                            >
                                              <svg width="16px" height="16px">
                                                <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                              </svg>
                                            </button>
                                            <button
                                              type="button"
                                              class="btn btn-sm btn-light btn-svg-icon"
                                              data-toggle="tooltip"
                                              data-placement="right"
                                              title="Compare"
                                            >
                                              <svg width="16px" height="16px">
                                                <use xlink:href="images/sprite.svg#compare-16"></use>
                                              </svg>
                                            </button>
                                          </div>
                                          <h1 class="product__name">{{ data.name }}</h1>                                          

                                          <!-- RATING -->
                                          <div class="product__rating">
                                            <div class="product__rating-stars">
                                              <div class="rating">
                                                <div class="rating__body">

                                                  <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                    <g class="rating__fill">
                                                      <use xlink:href="images/sprite.svg#star-normal"></use>
                                                    </g>
                                                    <g class="rating__stroke">
                                                      <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                    </g>
                                                  </svg>

                                                  <div class="rating__star rating__star--only-edge rating__star--active">
                                                    <div class="rating__fill">
                                                      <div class="fake-svg-icon"></div>
                                                    </div>
                                                    <div class="rating__stroke">
                                                      <div class="fake-svg-icon"></div>
                                                    </div>
                                                  </div>

                                                  <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                    <g class="rating__fill">
                                                      <use xlink:href="images/sprite.svg#star-normal"></use>
                                                    </g>
                                                    <g class="rating__stroke">
                                                      <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                    </g>
                                                  </svg>

                                                  <div class="rating__star rating__star--only-edge rating__star--active">
                                                    <div class="rating__fill">
                                                      <div class="fake-svg-icon"></div>
                                                    </div>
                                                    <div class="rating__stroke">
                                                      <div class="fake-svg-icon"></div>
                                                    </div>
                                                  </div>

                                                  <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                    <g class="rating__fill">
                                                      <use xlink:href="images/sprite.svg#star-normal"></use>
                                                    </g>
                                                    <g class="rating__stroke">
                                                      <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                    </g>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>

                                            <div class="product__rating-legend">
                                              <a href="">7 Reviews</a>
                                              <span>
                                                /
                                              </span>
                                              <a href="">Write A Review </a>
                                            </div>
                                          </div>
                                          <!-- END RATING -->

                                          <!-- DESCRIPTION -->
                                          <div class="product__description">
                                            <p class="text-justify">
                                              {{ data.description }}
                                            </p>
                                            <h6 class="text-center">
                                              {{ data.category }} -  {{ data.subcategory }}
                                            </h6>
                                          </div>
                                          <!--END DESCRIPTION -->
                                          <div class="product__sidebar">

                                            <div class="product__prices">
                                              ${{ data.precio }}
                                            </div>

                                            <!-- .product__options -->
                                              <div class="form-group product__option">
                                                <label class="product__option-label">Material</label>
                                                <p>
                                                  {{ data.material }}
                                                </p>
                                              </div>

                                              <div class="product-card__actions">                                        
                                                  <div class="product-card__buttons">
                                                    <button  v-on:click="addCartProduct(data.id)" class="btn btn-primary product-card__addtocart" type="button">
                                                      Agregar al Carrito
                                                    </button> 
                                                    
                                                    <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                      <svg width="16px" height="16px">
                                                        <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                                      </svg> 
                                                      <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            <!-- .product__options / end -->
                                          </div>
                                        </div>
                                        <!-- .product__info / end -->
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div v-else>
                          <div class="product-card" style="width: 15rem;">
                              <button class="product-card__quickview" data-toggle="modal" v-bind:data-target="'#modal' + data.id" type="button">
                                <svg width="16px" height="16px">
                                  <use xlink:href="images/sprite.svg#quickview-16"></use>
                                </svg> 
                                <span class="fake-svg-icon"></span>
                              </button>                   

                              <div class="product-card__image">
                                <a  @click="captureProduct(data)">
                                  <img class="img-fluid px-3" v-bind:src= "url_img + data.media[0]" />
                                </a>
                              </div>

                              <div class="product-card__info">
                                  <div class="mb-3 row justify-content-center align-items-center minh-100">
                                    <div v-if="loguser != null">
                                        <star-rating
                                            v-bind:increment="1"
                                            v-bind:max-rating="5"
                                            inactive-color="#ccc"
                                            active-color="#ffd333"
                                            v-bind:star-size="15"
                                            :rating=data.Rating
                                            @rating-selected="saveLoginRating($event, data.id)"
                                        >
                                        </star-rating>
                                    </div>
                                    <div v-else>
                                        <star-rating 
                                            data-toggle="modal" 
                                            data-target="#exampleModal"
                                            :rating=data.Rating
                                            :read-only="true" 
                                            v-bind:increment="1"
                                            v-bind:max-rating="5"
                                            inactive-color="#ccc"
                                            active-color="#ffd333"
                                            v-bind:star-size="15"
                                        ></star-rating>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Califica Nuestro Producto</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body mb-3 ">
                                                    Seleccion tu Calificacion
                                                    <div class="row justify-content-center align-items-center minh-100">
                                                        <star-rating
                                                            v-bind:increment="1"
                                                            v-bind:max-rating="5"
                                                            inactive-color="#ccc"
                                                            active-color="#ffd333"
                                                            v-bind:star-size="20"
                                                            :rating=raiting
                                                            @rating-selected="setRating"
                                                        >
                                                        </star-rating>
                                                    </div>
                                                    <div class="form mt-4">
                                                        <div class="form-group">
                                                            <label for="checkout-first-name">Nombre</label> 
                                                            <input type="text" v-model="name" class="form-control" id="checkout-first-name" placeholder="Name">
                                                        </div>
                                                        <div class="form-group ">
                                                            <label for="checkout-email">Email</label> 
                                                            <input type="email" class="form-control" v-model="email" id="checkout-email" placeholder="Correo">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="checkout-email">Ciudad/Población</label> 
                                                            <input type="email" class="form-control" v-model="address" id="checkout-email" placeholder="Direccion">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                    <button type="button" @click="saveRating(data.id)" class="btn btn-primary">Guardar Calificacion</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div class="product-card__name text-center">
                                    <p class="font-weight-bold">
                                      DISTRIBUIDOR 
                                      <button 
                                        class="btn btn-link"
                                        data-toggle="tooltip"
                                        data-html="true" 
                                        data-placement="top" 
                                        title="Este producto se encuentra disponible en los distribuidores de abajo!"
                                        >
                                        <i class="fas fa-info-circle"></i>
                                      </button>
                                    </p>
                                    <select class="form-control" >
                                      <option v-for="(item, index) in data.Distri" :value="data.idDistri[index]"  :key="index">{{item}}</option>
                                    </select>
                                  </div>
                                  <div class="product-card__name">
                                    <button class=" font-weight-bold text-justify badge badge-pill btn-sm btn btn-link" @click="captureProduct(data)">
                                      {{ data.name }}
                                    </button>
                                  </div>
                              </div>

                              <div class="product-card__actions">
                                  <div class="product-card__buttons">
                                    <button  v-on:click="addCartProduct(data.id)" class="btn btn-primary product-card__addtocart" type="button">
                                      Agregar al Carrito
                                    </button> 
                                    
                                    <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                      <svg width="16px" height="16px">
                                        <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                      </svg> 
                                      <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                    </button>
                                  </div>
                              </div>
                          </div>

                          <!-- MODAL -->
                          <div class="modal fade" v-bind:id="'modal'+ data.id" tabindex="-1" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                              <div class="modal-content">
                                <div class="modal-body">
                                  <button class=" quickview__close close" type="button" data-dismiss="modal" aria-label="Close">
                                    <svg width="20px" height="20px">
                                      <use xlink:href="images/sprite.svg#cross-20"></use>
                                    </svg>
                                  </button>

                                  <div class="mt-5 product">
                                    <div class="product__content"> 

                                      <!-- .product__gallery -->
                                        <div class="product__gallery">
                                          <div v-bind:id="'carouselExampleIndicators'+data.id"  class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                              <div class="carousel-item active">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + data.media[0]" alt="First slide">
                                              </div>
                                              <div class="carousel-item" v-for="(multimedia, index) in data.media" :key="index">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + multimedia" >
                                              </div>
                                            </div>
                                            <a class="carousel-control-prev" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="prev">
                                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="next">
                                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Next</span>
                                            </a>
                                            <div class="container pt-4 pb-5">
                                              <div class="row carousel-indicators">
                                                <div class="col-md-4 item" v-for="(multimedia, index) in data.media" :key="index">
                                                  <img v-bind:src= "url_img + multimedia" class="px-1 img-fluid" v-bind:data-target="'#carouselExampleIndicators' +data.id" v-bind:data-slide-to="index + 1"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      <!-- .product__gallery / end -->
                                      
                                      <!-- .product__info -->
                                      <div class="product__info">
                                        <div class="product__wishlist-compare">
                                          <button
                                            type="button"
                                            class="btn btn-sm btn-light btn-svg-icon"
                                            data-toggle="tooltip"
                                            data-placement="right"
                                            title="Wishlist"
                                          >
                                            <svg width="16px" height="16px">
                                              <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                            </svg>
                                          </button>
                                          <button
                                            type="button"
                                            class="btn btn-sm btn-light btn-svg-icon"
                                            data-toggle="tooltip"
                                            data-placement="right"
                                            title="Compare"
                                          >
                                            <svg width="16px" height="16px">
                                              <use xlink:href="images/sprite.svg#compare-16"></use>
                                            </svg>
                                          </button>
                                        </div>
                                        <h1 class="product__name">{{ data.name }}</h1>

                                        <!-- RATING -->
                                        <div class="product__rating">
                                          <div class="product__rating-stars">
                                            <div class="rating">
                                              <div class="rating__body">

                                                <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                  <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                  </g>
                                                  <g class="rating__stroke">
                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                  </g>
                                                </svg>

                                                <div class="rating__star rating__star--only-edge rating__star--active">
                                                  <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                  <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                </div>

                                                <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                  <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                  </g>
                                                  <g class="rating__stroke">
                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                  </g>
                                                </svg>

                                                <div class="rating__star rating__star--only-edge rating__star--active">
                                                  <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                  <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                </div>

                                                <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                  <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                  </g>
                                                  <g class="rating__stroke">
                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>

                                          <div class="product__rating-legend">
                                            <a href="">7 Reviews</a>
                                            <span>
                                              /
                                            </span>
                                            <a href="">Write A Review </a>
                                          </div>
                                        </div>
                                        <!-- END RATING -->

                                        <!-- DESCRIPTION -->
                                        <div class="product__description">
                                          <p class="text-justify">
                                            {{ data.description }}
                                          </p>
                                          <h6 class="text-center">
                                            {{ data.category }} -  {{ data.subcategory }}
                                          </h6>
                                        </div>
                                        <!--END DESCRIPTION -->
                                        <div class="product__sidebar">

                                          <div class="product__prices">
                                            ${{ data.precio }}
                                          </div>

                                          <!-- .product__options -->
                                            <div class="form-group product__option">
                                              <label class="product__option-label">Material</label>
                                              <p>
                                                {{ data.material }}
                                              </p>
                                            </div>

                                            <div class="product-card__actions">                                        
                                                <div class="product-card__buttons">
                                                  <button  v-on:click="addCartProduct(data.id)" class="btn btn-primary product-card__addtocart" type="button">
                                                    Agregar al Carrito
                                                  </button> 
                                                  
                                                  <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                    <svg width="16px" height="16px">
                                                      <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                                    </svg> 
                                                    <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                                  </button>
                                                </div>
                                            </div>
                                          <!-- .product__options / end -->
                                        </div>
                                      </div>
                                      <!-- .product__info / end -->
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
            </paginate>
          </div>

          <div v-else>
            <paginate name="filterProduct" :list="filterProduct" :per="10">
              <div class="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false">
                <div class="products-list__body">
                    <div class="products-list__item" v-for="(data, index) in paginated('filterProduct')" :key="index">

                      <div v-if="data.Supplier == 'This'">
                        <div class="product-card" style="width: 15rem;">
                            <button class="product-card__quickview" data-toggle="modal" v-bind:data-target="'#modal' + data.id" type="button">
                              <svg width="16px" height="16px">
                                <use xlink:href="images/sprite.svg#quickview-16"></use>
                              </svg> 
                              <span class="fake-svg-icon"></span>
                            </button>                    

                            <div class="product-card__image">
                              <a  @click="captureProduct(data)">
                                <img class="img-fluid px-3" v-bind:src= "url_img + data.media[0]" />
                              </a>
                            </div>

                            <div class="product-card__info">  
                              <div class="mb-3 row justify-content-center align-items-center minh-100">
                                  <div v-if="loguser != null">
                                      <star-rating
                                          v-bind:increment="1"
                                          v-bind:max-rating="5"
                                          inactive-color="#ccc"
                                          active-color="#ffd333"
                                          v-bind:star-size="15"
                                          :rating=data.Rating
                                          @rating-selected="saveLoginRating($event, data.id)"
                                      >
                                      </star-rating>
                                  </div>
                                  <div v-else>
                                      <star-rating 
                                          data-toggle="modal" 
                                          data-target="#exampleModal"
                                          :rating=data.Rating
                                          :read-only="true" 
                                          v-bind:increment="1"
                                          v-bind:max-rating="5"
                                          inactive-color="#ccc"
                                          active-color="#ffd333"
                                          v-bind:star-size="15"
                                      ></star-rating>
                                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div class="modal-dialog" role="document">
                                              <div class="modal-content">
                                              <div class="modal-header">
                                                  <h5 class="modal-title" id="exampleModalLabel">Califica Nuestro Producto</h5>
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                                  </button>
                                              </div>
                                              <div class="modal-body mb-3 ">
                                                  Seleccion tu Calificacion
                                                  <div class="row justify-content-center align-items-center minh-100">
                                                      <star-rating
                                                          v-bind:increment="1"
                                                          v-bind:max-rating="5"
                                                          inactive-color="#ccc"
                                                          active-color="#ffd333"
                                                          v-bind:star-size="20"
                                                          :rating=raiting
                                                          @rating-selected="setRating"
                                                      >
                                                      </star-rating>
                                                  </div>
                                                  <div class="form mt-4">
                                                      <div class="form-group">
                                                          <label for="checkout-first-name">Nombre</label> 
                                                          <input type="text" v-model="name" class="form-control" id="checkout-first-name" placeholder="Name">
                                                      </div>
                                                      <div class="form-group ">
                                                          <label for="checkout-email">Email</label> 
                                                          <input type="email" class="form-control" v-model="email" id="checkout-email" placeholder="Correo">
                                                      </div>
                                                      <div class="form-group">
                                                          <label for="checkout-email">Ciudad/Población</label> 
                                                          <input type="email" class="form-control" v-model="address" id="checkout-email" placeholder="Direccion">
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="modal-footer">
                                                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                  <button type="button" @click="saveRating(data.id)" class="btn btn-primary">Guardar Calificacion</button>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>                       
                              <div class="product-card__name text-center">
                                <p class="font-weight-bold">DISTRIBUIDOR</p>
                                <p style="font-size: 14px">{{data.distributor}}</p>
                              </div>
                              <div class="text-center product-card__name mt-0">
                                <button class="font-weight-bold badge badge-pill btn-sm btn btn-link" @click="captureProduct(data)">
                                  {{ data.name }}
                                </button>
                              </div>
                            </div>

                            <div class="product-card__actions">
                                <div class="product-card__buttons">
                                  <button  v-on:click="addCartProduct(data)" class="btn btn-primary product-card__addtocart" type="button">
                                    Agregar al Carrito
                                  </button> 
                                  
                                  <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                    <svg width="16px" height="16px">
                                      <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                    </svg> 
                                    <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                  </button>
                                </div>
                            </div>
                        </div>

                        <!-- MODAL -->
                        <div class="modal fade" v-bind:id="'modal'+ data.id" tabindex="-1" data-backdrop="static" aria-labelledby="ModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-body">
                                  <button class="quickview__close close" type="button" data-dismiss="modal" aria-label="Close">
                                    <svg width="20px" height="20px">
                                      <use xlink:href="images/sprite.svg#cross-20"></use>
                                    </svg>
                                  </button>

                                  <div class="mt-5 product">
                                    <div class="product__content">

                                      <!-- .product__gallery -->
                                        <div class="product__gallery">
                                          <div v-bind:id="'carouselExampleIndicators'+data.id"  class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                              <div class="carousel-item active">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + data.media[0]" alt="First slide">
                                              </div>
                                              <div class="carousel-item" v-for="(multimedia, index) in data.media" :key="index">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + multimedia" >
                                              </div>
                                            </div>
                                            <a class="carousel-control-prev" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="prev">
                                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="next">
                                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Next</span>
                                            </a>
                                            <div class="container pt-4 pb-5">
                                              <div class="row carousel-indicators">
                                                <div class="col-md-4 item" v-for="(multimedia, index) in data.media" :key="index">
                                                  <img v-bind:src= "url_img + multimedia" class="px-1 img-fluid" v-bind:data-target="'#carouselExampleIndicators' +data.id" v-bind:data-slide-to="index + 1"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      <!-- .product__gallery / end -->
                                      

                                      <!-- .product__info -->
                                      <div class="product__info">
                                        <div class="product__wishlist-compare">
                                          <button
                                            type="button"
                                            class="btn btn-sm btn-light btn-svg-icon"
                                            data-toggle="tooltip"
                                            data-placement="right"
                                            title="Wishlist"
                                          >
                                            <svg width="16px" height="16px">
                                              <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                            </svg>
                                          </button>
                                          <button
                                            type="button"
                                            class="btn btn-sm btn-light btn-svg-icon"
                                            data-toggle="tooltip"
                                            data-placement="right"
                                            title="Compare"
                                          >
                                            <svg width="16px" height="16px">
                                              <use xlink:href="images/sprite.svg#compare-16"></use>
                                            </svg>
                                          </button>
                                        </div>
                                        <h1 class="product__name">{{ data.name }}</h1>

                                        <!-- RATING -->
                                        <div class="product__rating">
                                          <div class="product__rating-stars">
                                            <div class="rating">
                                              <div class="rating__body">

                                                <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                  <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                  </g>
                                                  <g class="rating__stroke">
                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                  </g>
                                                </svg>

                                                <div class="rating__star rating__star--only-edge rating__star--active">
                                                  <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                  <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                </div>

                                                <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                  <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                  </g>
                                                  <g class="rating__stroke">
                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                  </g>
                                                </svg>

                                                <div class="rating__star rating__star--only-edge rating__star--active">
                                                  <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                  <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                  </div>
                                                </div>

                                                <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                  <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                  </g>
                                                  <g class="rating__stroke">
                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>

                                          <div class="product__rating-legend">
                                            <a href="">7 Reviews</a>
                                            <span>
                                              /
                                            </span>
                                            <a href="">Write A Review </a>
                                          </div>
                                        </div>
                                        <!-- END RATING -->

                                        <!-- DESCRIPTION -->
                                        <div class="product__description">
                                          <p class="text-justify">
                                            {{ data.description }}
                                          </p>
                                          <h6 class="text-center">
                                            {{ data.category }} -  {{ data.subcategory }}
                                          </h6>
                                        </div>
                                        <!--END DESCRIPTION -->
                                      </div>
                                      <!-- .product__info / end -->

                                      <!-- .product__sidebar -->
                                      <div class="product__sidebar">

                                        <div class="product__prices">
                                          ${{ data.precio }}
                                        </div>

                                        <!-- .product__options -->
                                          <div class="form-group product__option">
                                            <label class="product__option-label">Material</label>
                                            <p>
                                              {{ data.material }}
                                            </p>
                                          </div>

                                          <div class="product-card__actions">                                        
                                              <div class="product-card__buttons">
                                                <button  v-on:click="addCartProduct(data.id)" class="btn btn-primary product-card__addtocart" type="button">
                                                  Agregar al Carrito
                                                </button> 
                                                
                                                <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                  <svg width="16px" height="16px">
                                                    <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                                  </svg> 
                                                  <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                                </button>
                                              </div>
                                          </div>
                                        <!-- .product__options / end -->
                                      </div>
                                      <!-- .product__end -->
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div v-else>
                        <div class="product-card" style="width: 15rem;">
                            <button class="product-card__quickview" data-toggle="modal" v-bind:data-target="'#modal' + data.id" type="button">
                              <svg width="16px" height="16px">
                                <use xlink:href="images/sprite.svg#quickview-16"></use>
                              </svg> 
                              <span class="fake-svg-icon"></span>
                            </button>                    

                            <div class="product-card__image">
                              <a  @click="captureProduct(data)">
                                <img class="img-fluid px-3" v-bind:src= "url_img + data.media[0]" />
                              </a>
                            </div>

                            <div class="product-card__info">
                                <div class="mb-3 row justify-content-center align-items-center minh-100">
                                  <div v-if="loguser != null">
                                      <star-rating
                                          v-bind:increment="1"
                                          v-bind:max-rating="5"
                                          inactive-color="#ccc"
                                          active-color="#ffd333"
                                          v-bind:star-size="15"
                                          :rating=data.Rating
                                          @rating-selected="saveLoginRating($event, data.id)"
                                      >
                                      </star-rating>
                                  </div>
                                  <div v-else>
                                      <star-rating 
                                          data-toggle="modal" 
                                          data-target="#exampleModal"
                                          :rating=data.Rating
                                          :read-only="true" 
                                          v-bind:increment="1"
                                          v-bind:max-rating="5"
                                          inactive-color="#ccc"
                                          active-color="#ffd333"
                                          v-bind:star-size="15"
                                      ></star-rating>
                                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div class="modal-dialog" role="document">
                                              <div class="modal-content">
                                              <div class="modal-header">
                                                  <h5 class="modal-title" id="exampleModalLabel">Califica Nuestro Producto</h5>
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                                  </button>
                                              </div>
                                              <div class="modal-body mb-3 ">
                                                  Seleccion tu Calificacion
                                                  <div class="row justify-content-center align-items-center minh-100">
                                                      <star-rating
                                                          v-bind:increment="1"
                                                          v-bind:max-rating="5"
                                                          inactive-color="#ccc"
                                                          active-color="#ffd333"
                                                          v-bind:star-size="20"
                                                          :rating=raiting
                                                          @rating-selected="setRating"
                                                      >
                                                      </star-rating>
                                                  </div>
                                                  <div class="form mt-4">
                                                      <div class="form-group">
                                                          <label for="checkout-first-name">Nombre</label> 
                                                          <input type="text" v-model="name" class="form-control" id="checkout-first-name" placeholder="Name">
                                                      </div>
                                                      <div class="form-group ">
                                                          <label for="checkout-email">Email</label> 
                                                          <input type="email" class="form-control" v-model="email" id="checkout-email" placeholder="Correo">
                                                      </div>
                                                      <div class="form-group">
                                                          <label for="checkout-email">Ciudad/Población</label> 
                                                          <input type="email" class="form-control" v-model="address" id="checkout-email" placeholder="Direccion">
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="modal-footer">
                                                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                  <button type="button" @click="saveRating(data.id)" class="btn btn-primary">Guardar Calificacion</button>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                <div class="product-card__name text-center">
                                  <p class="font-weight-bold">
                                    DISTRIBUIDOR
                                    <button 
                                      class="btn btn-link"
                                      data-toggle="tooltip"
                                      data-html="true" 
                                      data-placement="top" 
                                      title="Este producto se encuentra disponible en los distribuidores de abajo!"
                                      >
                                      <i class="fas fa-info-circle"></i>
                                    </button>
                                  </p>
                                  <select class="form-control">
                                    <option v-for="(item, index) in data.Distri" :value="data.idDistri[index]"  :key="index">{{item}}</option>
                                  </select>
                                </div>
                                <div class="text-center product-card__name mt-0">
                                  <button class="font-weight-bold badge badge-pill btn-sm btn btn-link" @click="captureProduct(data)">
                                    {{ data.name }}
                                  </button>
                                </div>
                            </div>

                            <div class="product-card__actions">
                                <div class="product-card__buttons">
                                  <button  v-on:click="addCartProduct(data.id)" class="btn btn-primary product-card__addtocart" type="button">
                                    Agregar al Carrito
                                  </button> 
                                  
                                  <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                    <svg width="16px" height="16px">
                                      <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                    </svg> 
                                    <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                  </button>
                                </div>
                            </div>
                        </div>

                        <!-- MODAL -->
                        <div class="modal fade" v-bind:id="'modal'+ data.id" tabindex="-1" data-backdrop="static" aria-labelledby="ModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-body">
                                <button class="quickview__close close" type="button" data-dismiss="modal" aria-label="Close">
                                  <svg width="20px" height="20px">
                                    <use xlink:href="images/sprite.svg#cross-20"></use>
                                  </svg>
                                </button>

                                <div class="mt-5 product">
                                  <div class="product__content">
                                    <!-- .product__gallery -->
                                      <div class="product__gallery">
                                          <div v-bind:id="'carouselExampleIndicators'+data.id"  class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                              <div class="carousel-item active">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + data.media[0]" alt="First slide">
                                              </div>
                                              <div class="carousel-item" v-for="(multimedia, index) in data.media" :key="index">
                                                <img class="img-fluid" style="height: 280px;" v-bind:src= "url_img + multimedia" >
                                              </div>
                                            </div>
                                            <a class="carousel-control-prev" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="prev">
                                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" v-bind:href="'#carouselExampleIndicators' + data.id" role="button" data-slide="next">
                                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                              <span class="sr-only">Next</span>
                                            </a>
                                            <div class="container pt-4 pb-5">
                                              <div class="row carousel-indicators">
                                                <div class="col-md-4 item" v-for="(multimedia, index) in data.media" :key="index">
                                                  <img v-bind:src= "url_img + multimedia" class="px-1 img-fluid" v-bind:data-target="'#carouselExampleIndicators' +data.id" v-bind:data-slide-to="index + 1"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    <!-- .product__gallery / end -->
                                    

                                    <!-- .product__info -->
                                    <div class="product__info">
                                      <div class="product__wishlist-compare">
                                        <button
                                          type="button"
                                          class="btn btn-sm btn-light btn-svg-icon"
                                          data-toggle="tooltip"
                                          data-placement="right"
                                          title="Wishlist"
                                        >
                                          <svg width="16px" height="16px">
                                            <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-sm btn-light btn-svg-icon"
                                          data-toggle="tooltip"
                                          data-placement="right"
                                          title="Compare"
                                        >
                                          <svg width="16px" height="16px">
                                            <use xlink:href="images/sprite.svg#compare-16"></use>
                                          </svg>
                                        </button>
                                      </div>
                                      <h1 class="product__name">{{ data.name }}</h1>

                                      <!-- RATING -->
                                      <div class="product__rating">
                                        <div class="product__rating-stars">
                                          <div class="rating">
                                            <div class="rating__body">

                                              <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                <g class="rating__fill">
                                                  <use xlink:href="images/sprite.svg#star-normal"></use>
                                                </g>
                                                <g class="rating__stroke">
                                                  <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                </g>
                                              </svg>

                                              <div class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                  <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                  <div class="fake-svg-icon"></div>
                                                </div>
                                              </div>

                                              <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                <g class="rating__fill">
                                                  <use xlink:href="images/sprite.svg#star-normal"></use>
                                                </g>
                                                <g class="rating__stroke">
                                                  <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                </g>
                                              </svg>

                                              <div class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                  <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                  <div class="fake-svg-icon"></div>
                                                </div>
                                              </div>

                                              <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                <g class="rating__fill">
                                                  <use xlink:href="images/sprite.svg#star-normal"></use>
                                                </g>
                                                <g class="rating__stroke">
                                                  <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="product__rating-legend">
                                          <a href="">7 Reviews</a>
                                          <span>
                                            /
                                          </span>
                                          <a href="">Write A Review </a>
                                        </div>
                                      </div>
                                      <!-- END RATING -->

                                      <!-- DESCRIPTION -->
                                      <div class="product__description">
                                        <p class="text-justify">
                                          {{ data.description }}
                                        </p>
                                        <h6 class="text-center">
                                          {{ data.category }} -  {{ data.subcategory }}
                                        </h6>
                                      </div>
                                      <!--END DESCRIPTION -->
                                    </div>
                                    <!-- .product__info / end -->

                                    <!-- .product__sidebar -->
                                    <div class="product__sidebar">

                                      <div class="product__prices">
                                        ${{ data.precio }}
                                      </div>

                                      <!-- .product__options -->
                                        <div class="form-group product__option">
                                          <label class="product__option-label">Material</label>
                                          <p>
                                            {{ data.material }}
                                          </p>
                                        </div>

                                        <div class="product-card__actions">                                        
                                            <div class="product-card__buttons">
                                              <button  v-on:click="addCartProduct(data.id)" class="btn btn-primary product-card__addtocart" type="button">
                                                Agregar al Carrito
                                              </button> 
                                              
                                              <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                  <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                                </svg> 
                                                <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                              </button>
                                            </div>
                                        </div>
                                      <!-- .product__options / end -->
                                    </div>
                                    <!-- .product__end -->
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
            </paginate>
          </div>

          <div class="products-view__pagination">
            <div v-if="filterProduct == '' ">
              <ul class="pagination justify-content-center">
                <span class="px-1 py-1" v-if="$refs.paginator">
                  Viewing {{$refs.paginator.pageItemsCount}} results
                </span>
                <paginate-links 
                  for="allProduct" 
                  :show-step-links="true" 
                  :step-links="{
                    next: 'Siguiente',
                    prev: 'Anterior'
                  }" 
                  :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}">
                </paginate-links>
              </ul>
            </div>

            <div v-else>
              <ul class="pagination justify-content-center">
                <paginate-links 
                  for="filterProduct" 
                  :show-step-links="true" 
                  :step-links="{
                    next: 'Siguiente',
                    prev: 'Anterior'
                  }" 
                  :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StarRating from 'vue-star-rating';
export default {
  name: "ShopContent",
  data() {
      return {
        url_img:  process.env.VUE_APP_IMG_URL,
        paginate: ['allProduct', 'filterProduct'],
        loguser: localStorage.getItem('idUSer'),
        raiting: 0,
        name: '',
        email: '',
        address: '',
        calificaciones: '',
        idproductRating: ''
      }
  },
  components: {
    StarRating
  },
  computed:{
    ...mapGetters("Shop", ['shop'] ),
    ...mapGetters("Users", ['datauser'])
  },
  props: {
    allProduct: Array,
    filterProduct: Array
  },
  methods: {
    ...mapActions('Shop', ['addProduct']),
    captureProduct(prod){
        localStorage.setItem("Product", JSON.stringify( prod ));
        location.href = "/details_product"
    },
    addCartProduct(id){
      this.$toastr.Add({
          title: "", 
          msg: "Producto Agregado Con Exito", 
          clickClose: true, 
          timeout: 1000, 
          progressbar: false, 
          position: "toast-top-right", 
          type: "success", 
          preventDuplicates: true, 
          style: {fontWeight: "bold"} 
      });
      this.addProduct(id)
    },
    setRating(rating) {
      this.calificaciones = rating
    },
    async saveRating(id){
        let newRaiting = {
            id_product: id, 
            name: this.name,
            email:this.email,
            address: this.address,
            rating: this.calificaciones
        }
        try {
            if (this.name != "" || this.email != "" || this.address != "") {
                const UpRaiting = await this.axios.post('raiting',newRaiting);  
                if (UpRaiting.status == 200) {
                    location.href = "/shop"
                }
            }
        } catch (error) {
            console.log(error);
        }
    },
    async saveLoginRating(rating, id){
        let newRaiting = {
            id_product: id, 
            name: this.datauser[0].name,
            email: this.datauser[0].email,
            address: this.datauser[0].address,
            rating
        };
        try {
            const UpRaiting = await this.axios.post('raiting',newRaiting);  
            if (UpRaiting.status == 200) {
                location.href = "/shop"
            }
        } catch (error) {
            console.log(error);
        }
    },
  },   
};
</script>

