<template>
  <div>    

    <Logo></Logo>

    <Ubicacion />

    <!-- site -->
    <div class="site">
      <!-- site__header -->
      <Header />
      <!-- site__header / end -->

      <!-- site__body -->
      <div class="site__body">
        <!-- .block-slideshow -->
        <Slides />
        <!-- .block-slideshow / end -->

        <!-- .block-banner -->
        <Promotions />
        <!-- .block-banner / end -->

        <!-- .block-products -->
        <Products />
        <!-- .block-products / end -->

        <!-- .block-categories -->
        <Distributors />
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
import Slides from "./blockComponents/slides";
import Promotions from "./blockComponents/promotions";
import Products from "./blockComponents/products";
import Distributors from "./blockComponents/distributors";
import Post from "./blockComponents/post";
import Ubicacion from "./blockComponents/ubicacion";
import Logo from './blockComponents/staticLogo'

//Layouts
import Footer from "./layouts/footer";
import Header from "./layouts/header";

export default {
  name: "Home",
  components: {
    Slides,
    Promotions,
    Products,
    Distributors,
    Post,
    Ubicacion,
    Footer,
    Header,
    Logo
  },
};
</script>
