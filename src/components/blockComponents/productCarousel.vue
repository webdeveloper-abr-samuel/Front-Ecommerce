<template>
  <div class="block block-products-carousel" data-layout="grid-4">
    <div class="container">
      <div class="block-header">
        <h3 class="block-header__title">Nuestros Productos</h3>
        <div class="block-header__divider"></div>
        <ul class="block-header__groups-list">
          <li>
            <button type="button" class="block-header__group block-header__group--active">All</button>
          </li>
          <li>
            <button type="button" class="block-header__group">Aglomerados</button>
          </li>
          <li>
            <button type="button" class="block-header__group">Recubiertos</button>
          </li>
          <li>
            <button type="button" class="block-header__group">Productos Complementarios</button>
          </li>
          <li>
            <button type="button" class="block-header__group">Segmentos</button>
          </li>
        </ul>
        <div class="block-header__arrows-list">
          <button
            class="block-header__arrow block-header__arrow--left"
            type="button"
          >
            <svg width="7px" height="11px">
              <use xlink:href="images/sprite.svg#arrow-rounded-left-7x11"></use>
            </svg>
          </button>
          <button
            class="block-header__arrow block-header__arrow--right"
            type="button"
          >
            <svg width="7px" height="11px">
              <use
                xlink:href="images/sprite.svg#arrow-rounded-right-7x11"
              ></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="block-products-carousel__slider">
        <div class="block-products-carousel__preloader"></div>
        <div class="owl-carousel">
          <div class="block-products-carousel__column">
            <div class="block-products-carousel__cell">
              <div class="product-card">
                <button class="product-card__quickview" type="button">
                  <svg width="16px" height="16px">
                    <use xlink:href="images/sprite.svg#quickview-16"></use>
                  </svg>
                  <span class="fake-svg-icon"></span>
                </button>
                <!-- <div class="product-card__badges-list">
                  <div class="product-card__badge product-card__badge--new">
                    New
                  </div>
                </div> -->
                <div class="product-card__image">
                  <a href="#"><img src="images/products/product-1.jpg" alt=""/></a>
                </div>
                <div class="product-card__info">
                  <div class="product-card__name">
                    <a href="product.html">Name Product</a
                    >
                  </div>
                  <div class="product-card__rating mt-mb-3">
                    <div class="product-card__rating-legend">Descripcion Producto</div>
                  </div>
                </div>
                <div class="product-card__actions">
                  <div class="product-card__prices">$749.00</div>
                  <div class="product-card__buttons">
                    <button class="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                    <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                      <svg width="16px" height="16px">
                        <use xlink:href="images/sprite.svg#wishlist-16"></use>
                      </svg>
                      <span
                        class="fake-svg-icon fake-svg-icon--wishlist-16"
                      ></span>
                    </button>
                    <button
                      class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare"
                      type="button"
                    >
                      <svg width="16px" height="16px">
                        <use xlink:href="images/sprite.svg#compare-16"></use>
                      </svg>
                      <span
                        class="fake-svg-icon fake-svg-icon--compare-16"
                      ></span>
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
</template>

<script>
export default {
  name : "productCarousel",
  data() {
    return {
      products: []
    }
  },
  created() {
    this.loadProduct();
  },
  methods: {
    async loadProduct(){
      try {
        const result = await this.axios.get("/product");
        this.products = result.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>