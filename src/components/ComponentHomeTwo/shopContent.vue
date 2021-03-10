<template>
  <div class="shop-layout__content">
    <div class="block">
      <div class="products-view">
        <div class="products-view__options">
          <div class="view-options">   
            <div class="view-options__divider"></div>
            <div class="view-options__control">
              <label for="">Sort By</label>
              <div>
                <select class="form-control form-control-sm" name="" id="">
                  <option value="">Default</option>
                  <option value="">Name (A-Z)</option>
                </select>
              </div>
            </div>
            <div class="view-options__control">
              <label for="">Show</label>
              <div>
                <select class="form-control form-control-sm" name="" id="">
                  <option value="">12</option>
                  <option value="">24</option>
                </select>
              </div>
            </div>
          </div>
        </div>

          <div v-if="filterProduct == '' ">
            <paginate name="allProduct" ref="paginator" :list="allProduct" :per="2">
              <div class="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false">
                <div class="products-list__body">
                  
                    <div class="products-list__item" v-for="(data,index) in paginated('allProduct')" :key="index">
                        <div class="product-card" >
                            <button class="product-card__quickview" data-toggle="modal" v-bind:data-target="'#modal' + data.id_product" type="button">
                              <svg width="16px" height="16px">
                                <use xlink:href="images/sprite.svg#quickview-16"></use>
                              </svg> 
                              <span class="fake-svg-icon"></span>
                            </button>

                            <!-- <div class="product-card__badges-list">
                                <div class="product-card__badge product-card__badge--new">{{ shop }}</div>
                            </div> -->                      

                            <div class="product-card__image">
                              <a  @click="captureProduct(data)">
                                <img v-bind:src= "url_img + data.media[0].path" />
                              </a>
                            </div>

                            <div class="product-card__info">
                                <div class="product-card__name">
                                  <a  @click="captureProduct(data)">
                                    {{ data.name }}
                                  </a>
                                </div>
                                <div class="product-card__rating">
                                    <div class="rating">
                                        <div class="rating__body"><svg
                                                class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star" width="13px"
                                                height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div class="rating__star rating__star--only-edge">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-card__rating-legend">9 Reviews</div>
                                </div>
                            </div>

                            <div class="product-card__actions">
                                <div class="product-card__prices">${{ data.precio }}</div>
                                <div class="product-card__buttons">
                                  <button  v-on:click="addCartProduct(data.id_product)" class="btn btn-primary product-card__addtocart" type="button">
                                    Add To Cart
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
                        <div class="modal fade" v-bind:id="'modal'+ data.id_product" tabindex="-1" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-body">

                                <div class="quickview">
                                  
                                  <button class="quickview__close close" type="button" data-dismiss="modal" aria-label="Close">
                                    <svg width="20px" height="20px">
                                      <use xlink:href="images/sprite.svg#cross-20"></use>
                                    </svg>
                                  </button>

                                  <div class="product">
                                    <div class="product__content">

                                      <!-- .product__gallery -->
                                      <div class="product__gallery">
                                          <div class="product-gallery" >
                                              <div class="product-gallery__featured" >
                                                  <div class="owl-carousel" id="product-image" >
                                                    <div v-for="media in data.media" v-bind:key="media.id">
                                                      <a v-bind:href="url_img + media.path" target="_blank">
                                                        <img v-bind:src= "url_img + media.path" />
                                                      </a>
                                                    </div>
                                                  </div>
                                              </div>
                                              <div class="product-gallery__carousel" >
                                                  <div class="owl-carousel" id="product-carousel">
                                                    <div v-for="media in data.media" v-bind:key="media.id">
                                                      <a class="product-gallery__carousel-item">
                                                          <img class="product-gallery__carousel-image" v-bind:src= "url_img + media.path" >
                                                      </a>
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
                                                <button  v-on:click="addCartProduct(data.id_product)" class="btn btn-primary product-card__addtocart" type="button">
                                                  Add To Cart
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

          <div v-else>
            <paginate name="filterProduct" :list="filterProduct" :per="1">
              <div class="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false">
                <div class="products-list__body">
                    <div class="products-list__item" v-for="(data, index) in paginated('filterProduct')" :key="index">
                        <div class="product-card" >
                            <button class="product-card__quickview" data-toggle="modal" v-bind:data-target="'#modal' + data.id_product" type="button">
                              <svg width="16px" height="16px">
                                <use xlink:href="images/sprite.svg#quickview-16"></use>
                              </svg> 
                              <span class="fake-svg-icon"></span>
                            </button>

                            <!-- <div class="product-card__badges-list">
                                <div class="product-card__badge product-card__badge--new">{{ shop }}</div>
                            </div> -->                      

                            <div class="product-card__image">
                              <a  @click="captureProduct(data)">
                                <img v-bind:src= "url_img + data.media[0].path" />
                              </a>
                            </div>

                            <div class="product-card__info">
                                <div class="product-card__name">
                                  <a  @click="captureProduct(data)">
                                    {{ data.name }}
                                  </a>
                                </div>
                                <div class="product-card__rating">
                                    <div class="rating">
                                        <div class="rating__body"><svg
                                                class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star rating__star--active"
                                                width="13px" height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div
                                                class="rating__star rating__star--only-edge rating__star--active">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div><svg class="rating__star" width="13px"
                                                height="12px">
                                                <g class="rating__fill">
                                                    <use xlink:href="images/sprite.svg#star-normal">
                                                    </use>
                                                </g>
                                                <g class="rating__stroke">
                                                    <use
                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                    </use>
                                                </g>
                                            </svg>
                                            <div class="rating__star rating__star--only-edge">
                                                <div class="rating__fill">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                                <div class="rating__stroke">
                                                    <div class="fake-svg-icon"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-card__rating-legend">9 Reviews</div>
                                </div>
                            </div>

                            <div class="product-card__actions">
                                <div class="product-card__prices">${{ data.precio }}</div>
                                <div class="product-card__buttons">
                                  <button  v-on:click="addCartProduct(data.id_product)" class="btn btn-primary product-card__addtocart" type="button">
                                    Add To Cart
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
                        <div class="modal fade" v-bind:id="'modal'+ data.id_product" tabindex="-1" data-backdrop="static" aria-labelledby="ModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-body">

                                <div class="quickview">
                                  
                                  <button class="quickview__close close" type="button" data-dismiss="modal" aria-label="Close">
                                    <svg width="20px" height="20px">
                                      <use xlink:href="images/sprite.svg#cross-20"></use>
                                    </svg>
                                  </button>

                                  <div class="product">
                                    <div class="product__content">

                                      <!-- .product__gallery -->
                                      <div class="product__gallery">
                                          <div class="product-gallery" >
                                              <div class="product-gallery__featured" >
                                                  <div class="owl-carousel" id="product-image" >
                                                    <div v-for="media in data.media" v-bind:key="media.id">
                                                      <a v-bind:href="url_img + media.path" target="_blank">
                                                        <img v-bind:src= "url_img + media.path" />
                                                      </a>
                                                    </div>
                                                  </div>
                                              </div>
                                              <div class="product-gallery__carousel" >
                                                  <div class="owl-carousel" id="product-carousel">
                                                    <div v-for="media in data.media" v-bind:key="media.id">
                                                      <a class="product-gallery__carousel-item">
                                                          <img class="product-gallery__carousel-image" v-bind:src= "url_img + media.path" >
                                                      </a>
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
                                                <button  v-on:click="addCartProduct(data.id_product)" class="btn btn-primary product-card__addtocart" type="button">
                                                  Add To Cart
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
                    next: '>>',
                    prev: '<<'
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
                    next: '>>',
                    prev: '<<'
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

export default {
  name: "ShopContent",
  data() {
      return {
        url_img:  process.env.VUE_APP_IMG_URL,
        paginate: ['allProduct', 'filterProduct'],
      }
  },
  computed:{
    ...mapGetters("Shop", ['shop'] )  
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
      this.addProduct(id)
    },
  },   
};
</script>


