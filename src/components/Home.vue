<template>
  <div>

   <Ubicacion />

    <div id="quickview-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content"></div>
      </div>
    </div>

   

    <!-- site -->
    <div class="site">
      <!-- site__header -->
      <Header />
      <!-- site__header / end -->

      <!-- site__body -->
      <div class="site__body">
        <!-- .block-slideshow -->
        <SlideShow />
        <!-- .block-slideshow / end -->

        <!-- .block-features -->
        <Features />
        <!-- .block-features / end -->

        <!-- .block-banner -->
        <Banner />
        <!-- .block-banner / end -->

        <!-- .block-products -->
        <Products />
        <!-- .block-products / end -->

        <!-- .block-categories -->
        <Categories />
        <!-- .block-categories / end -->

        <!-- .block-posts -->
        <Post />
        <!-- .block-posts / end -->

      </div>
      <!-- site__body / end -->

      <!-- site__footer -->
      <Footer />
      <!-- site__footer / end -->
    </div>
    <!-- site / end -->
  </div>
</template>

<script>
//Blocks
import SlideShow from "./blockComponents/slideShow";
import Features from "./blockComponents/features";
import Banner from "./blockComponents/banner";
import Products from "./blockComponents/products";
import Categories from "./blockComponents/categories";
import Post from "./blockComponents/post";
import Ubicacion from './blockComponents/ubicacion';

//Layouts
import Footer from "./layouts/footer";
import Header from "./layouts/header";


export default {
  name: "Home",
  components: {
    SlideShow,
    Features,
    Banner,
    Products,
    Categories,
    Post,
    Ubicacion,
    Footer,
    Header,
  }
};
</script>