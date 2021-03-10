<template>
  <div class="block block-products block-products--layout--large-first">
    <div class="container">
      <div class="block-header">
        <h3 class="block-header__title">Algunos de Nuestros Productos</h3>
        <div class="block-header__divider"></div>
      </div>
      <div class="block-products__body">
        <div class="block-products__featured">
          <div class="block-products__featured-item">
            <div class="product-card">
              <div class="product-card__image">
                <a>
                  <img v-bind:src= "url_img + img.path" />
                </a>
              </div>
              <div class="product-card__info">
                <div class="product-card__name">
                  <a href="product.html" >
                    {{ itemInitial.name }}
                  </a>
                </div>
                <div class="product-card__rating">
                  <div class="rating">
                    <div class="rating__body">
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg class="rating__star" width="13px" height="12px">
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
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
                <div class="mt-3 text-justify">
                  <p>
                    {{ itemInitial.material }}
                  </p>
                  <p>
                    {{ itemInitial.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="block-products__list">
          <div class="block-products__list-item" v-for="(data , index) in allProduct" :key="index">
            <div class="product-card">
              <div class="product-card__image">
                <a>
                  <img v-bind:src= "url_img + data.media[0].path" alt=""/>
                </a>
              </div>
              <div class="product-card__info">
                <div class="product-card__name">
                  <a>
                    {{ data.name }}
                  </a>
                </div>
                <div class="product-card__rating">
                  <div class="rating">
                    <div class="rating__body">
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                      <svg
                        class="rating__star rating__star--active"
                        width="13px"
                        height="12px"
                      >
                        <g class="rating__fill">
                          <use xlink:href="images/sprite.svg#star-normal"></use>
                        </g>
                        <g class="rating__stroke">
                          <use
                            xlink:href="images/sprite.svg#star-normal-stroke"
                          ></use>
                        </g>
                      </svg>
                      <div
                        class="rating__star rating__star--only-edge rating__star--active"
                      >
                        <div class="rating__fill">
                          <div class="fake-svg-icon"></div>
                        </div>
                        <div class="rating__stroke">
                          <div class="fake-svg-icon"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="product-card__rating-legend">11 Reviews</div>
                </div>
              </div>
              <div class="product-card__actions">
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
  name: 'Products',
  data() {
    return {
      allProduct: [],
      itemInitial: [],
      img: "",
      url_img : process.env.VUE_APP_IMG_URL
    }
  },
  created(){
    this.loadProduct();
  },
  methods: {
    async loadProduct(){
      try {
        const result = await this.axios.get("/product");
        this.itemInitial = result.data.data[0];
        this.img = result.data.data[0].media[0];
        for (let i = 1; i < result.data.data.length; i++) {
          this.allProduct.push(result.data.data[i]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

