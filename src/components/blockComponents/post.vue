<template>
  <div class="block block-posts block-posts--layout--list-sm" data-layout="list-sm">
    <div class="container">
      
      <div class="block-header">
        <h3 class="block-header__title">Noticias</h3>
        <div class="block-header__divider"></div>
        <div class="block-header__arrows-list">
          <a  href="#carouselPost" class="block-header__arrow block-header__arrow--left" role="button" data-slide="prev">
            <svg width="7px" height="11px">
              <use xlink:href="images/sprite.svg#arrow-rounded-left-7x11"></use>
            </svg>
          </a> 
          <a href="#carouselPost" class="block-header__arrow block-header__arrow--right" role="button" data-slide="next">
            <svg width="7px" height="11px">
              <use xlink:href="images/sprite.svg#arrow-rounded-right-7x11"></use>
            </svg>
          </a>
        </div>
      </div>

      <div class="block-posts__slider">
        <div id="carouselPost" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner text-justify">

            <div class="carousel-item active">
               <div class="card mb-3 card-border"  style="max-width: auto">
                  <div class="row no-gutters">
                    <div class="col-md-8">
                      <img  class="img-responsive img-fluid"  v-bind:src= "url_img + initialPost.path" >
                    </div>
                    <div class="col-md-4">
                      <div class="card-body">
                        <p class="card-text"><small class="text-muted">{{ initialPost.date_post }}</small></p>
                        <p class="card-text"><small class="text-muted">Autor : {{ initialPost.autor }}</small></p>
                        <h5 class="card-title text-center">{{ initialPost.title }}</h5>
                        <p class="card-text">{{ initialPost.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="carousel-item" v-for="(data , index) in allPost" :key="index">
               <div class="card mb-3 card-border" style="max-width: auto">
                  <div class="row no-gutters">
                    <div class="col-md-8">
                      <img  class="img-responsive img-fluid"  v-bind:src= "url_img + data.path" >
                    </div>
                    <div class="col-md-4">
                      <div class="card-body">
                        <p class="card-text"><small class="text-muted">{{ data.date_post }}</small></p>
                        <p class="card-text"><small class="text-muted">{{ data.autor }}</small></p>
                        <h5 class="card-title text-center">{{ data.name }}</h5>
                        <p class="card-text">{{ data.description }}</p>
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
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      allPost: [],
      initialPost: [],
      url_img : process.env.VUE_APP_IMG_URL,
    }
  },
  created(){
    this.loadPromotion();
  },
  methods: {
    async loadPromotion(){
      try {
        const result = await this.axios.get("/post");        
        this.initialPost = result.data.data[0];
        for (let i = 1; i < result.data.data.length; i++) {
          this.allPost.push( result.data.data[i]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style lang="css">
  .card-border{
      background: transparent;
      border: none;
  }
</style>
