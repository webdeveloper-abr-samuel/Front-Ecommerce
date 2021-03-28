<template>
  <div
    class="block block--highlighted block-categories block-categories--layout--classic"
  >
    <div class="container">
      <div class="block-header">
        <h3 class="block-header__title">Nuestros Distribuidores</h3>
        <div class="block-header__divider"></div>
      </div>
      <div class="block-categories__list">
        <div class="block-categories__item category-card category-card--layout--classic" v-for="(data , index) in allDistributor" :key="index">
          <div class="category-card__body">
            <div class="category-card__image">
              <img style="width: 90px;" v-bind:src= "url_img + data.media[0].path" class="img-fluid" />
            </div>
            <div class="category-card__content">
              <div class="category-card__name"><a>{{ data.name }}</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Distributors',
  data() {
    return {
      allDistributor: [],
      url_img : process.env.VUE_APP_IMG_URL
    }
  },
  created(){
    this.loadDistributor();
  },
  methods: {
    async loadDistributor(){
      try {
        const result = await this.axios.get("/distributor/media");
        this.allDistributor = result.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>
