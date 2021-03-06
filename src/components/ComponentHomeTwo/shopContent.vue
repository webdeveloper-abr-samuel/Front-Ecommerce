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

        <div class="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false">
          <div class="products-list__body">
              <div class="products-list__item" v-for="data in allProduct" v-bind:key="data.id_product">
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
                            
                            <button class="quickview__close close" v-on:click="reset()" type="button" data-dismiss="modal" aria-label="Close">
                              <svg width="20px" height="20px">
                                <use xlink:href="images/sprite.svg#cross-20"></use>
                              </svg>
                            </button>

                            <div class="product">
                              <div class="product__content">

                                <!-- .product__gallery -->
                                <div class="product__gallery">
                                  <div class="product-gallery" >
                                    <div v-bind:id="'carouselExampleControls' + data.id_product" class="carousel slide" data-ride="carousel">

                                      <a class="carousel-control-prev" v-bind:href="'#carouselExampleControls'+data.id_product" role="button" data-slide="prev">
                                        <span style="font-size: 2em; color: black;">
                                          <i class="fas fa-chevron-circle-left"></i>
                                        </span>
                                      </a>
                                      <a class="carousel-control-next " v-bind:href="'#carouselExampleControls'+data.id_product" role="button" data-slide="next">
                                        <span style="font-size: 2em; color: black;">
                                          <i class="fas fa-chevron-circle-right"></i>
                                        </span>
                                      </a>

                                      <div class="carousel-inner" >
                                        <div class="carousel-item active">
                                          <img  v-bind:src= "url_img + data.media[1].path"  class="d-block w-100">
                                        </div>
                                        <div class="carousel-item " v-for="media in data.media" v-bind:key="media.id">
                                          <img  v-bind:src= "url_img + media.path"  class="d-block w-100">
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

                                    <div class="form-group product__option">
                                      <div class="product__actions">
                                        <div class="product__actions-item">
                                          <div class="input-number product__quantity">
                                            <input id="product-quantity" v-model="quanty" class="input-number__input form-control form-control-lg" type="number" />
                                            <div  class="input-number__add" v-on:click="aumentar()" ></div>
                                            <div  class="input-number__sub" v-on:click="disminuir()"></div>
                                          </div>
                                        </div>
                                        <div class="product__actions-item product__actions-item--addtocart">
                                          <button v-on:click="addCartProduct(data.id_product)" class="btn btn-primary btn-lg">Add to cart</button>
                                        </div>
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

        <div class="products-view__pagination">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a
                class="page-link page-link--with-arrow"
                href="#"
                aria-label="Previous"
                ><svg
                  class="page-link__arrow page-link__arrow--left"
                  aria-hidden="true"
                  width="8px"
                  height="13px"
                >
                  <use
                    xlink:href="images/sprite.svg#arrow-rounded-left-8x13"
                  ></use></svg
              ></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
              <a class="page-link" href="#"
                >2 <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a
                class="page-link page-link--with-arrow"
                href="#"
                aria-label="Next"
                ><svg
                  class="page-link__arrow page-link__arrow--right"
                  aria-hidden="true"
                  width="8px"
                  height="13px"
                >
                  <use
                    xlink:href="images/sprite.svg#arrow-rounded-right-8x13"
                  ></use></svg
              ></a>
            </li>
          </ul>
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
          quanty: 0
      }
  },
  computed:{
    ...mapGetters("Shop", ['shop'] )  
  },
  props: {
    allProduct: Array,
  },
  methods: {
    ...mapActions('Shop', ['addProduct']),

    captureProduct(prod){
        localStorage.setItem("Product", JSON.stringify( prod ));
        location.href = "/details_product"
    },

    aumentar(){
        this.quanty += 1
    },
    disminuir(){
        this.quanty = ( (this.quanty < 2) ? 1 : this.quanty -= 1)
    },
    reset() {
      this.quanty = 1;
    },

    addCartProduct(id){
      this.addProduct(id)
    },

    /* ...mapMutations(['aumentar', 'disminuir', 'reset']),
    ...mapMutations('Product',['addProduct']) */
  },   
};
</script>