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
                  <img v-bind:src= "url_img + img" />
                </a>
              </div>
              <div class="product-card__info">
                <div class="product-card__name">
                  <button class="btn btn-link" v-on:click="captureProduct(itemInitial)">
                    {{ itemInitial.name }}
                  </button>
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
                  <img class="img-fluid px-3" v-bind:src= "url_img + data.media[0]" alt=""/>
                </a>
              </div>
              <div class="product-card__info">
                <div class="product-card__name mt-3 mb-3">
                  <button class="btn btn-link" v-on:click="captureProduct(data)">{{ data.name }}</button>
                </div>
              </div>
              <div class="product-card__actions">
                  <span class="font-weight-bold" >Materiales</span>
                  <br>
                  <p class="text-justify">
                    {{ data.material }}
                  </p>
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
        const result = await this.axios.get("/product/landing/page");
        this.itemInitial = result.data.data[0];
        this.img = result.data.data[0].media[0];
        for (let i = 1; i < result.data.data.length; i++) {
          this.allProduct.push(result.data.data[i]);
        }
      } catch (error) {
        console.log(error);
      }
    },
    captureProduct(prod){
        localStorage.setItem("Product", JSON.stringify( prod ));
        location.href = "/details_product"
    },
    
  },
}
</script>

