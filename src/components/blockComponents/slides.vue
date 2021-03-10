<template>
  <div class="block-slideshow block-slideshow--layout--full block">
    <div class="container">
      <div class="row">
        <div class="col-12">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" >
                <div class="carousel-item active">
                  <img v-bind:src= "url_img + initial.path" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                     <div class="block-slideshow__slide-content">
                        <div class="block-slideshow__slide-title">
                          {{ initial.name }}
                        </div>
                        <div class="block-slideshow__slide-button">
                          <span class="btn btn-danger btn-lg">Shop Now</span>
                        </div>
                      </div>
                  </div>
                </div>

                <div v-for="(data , index) in allSlides" :key="index" class="carousel-item">
                  <img v-bind:src= "url_img + data.path" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <div class="block-slideshow__slide-content">
                        <div class="block-slideshow__slide-button">
                          <span class="btn btn-danger btn-lg">Shop Now</span>
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
  name: 'Slides',
  data() {
    return {
      allSlides: [],
      url_img : process.env.VUE_APP_IMG_URL,
      initial: ""
    }
  },
  created(){
    this.loadSlides();
  },
  methods: {
    async loadSlides(){
      try {
        const result = await this.axios.get("/slides");
        if(result.data != 0){
          this.initial = result.data.data[0];
        }
        for (let i = 1; i < result.data.data.length; i++) {
          this.allSlides.push(result.data.data[i]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

