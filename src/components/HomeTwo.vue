<template>
  <div>

    <div
      id="quickview-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
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
        <Distributors v-bind:alldistributor="alldistributor"/>
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
//Layouts
import Distributors from "./ComponentHomeTwo/distributors";

import Footer from "./layouts/footer";
import Header from "./layouts/headerTwo";


export default {
  name: "Home",
  data() {
    return {
      alldistributor: []
    }
  },
  components: {
    Distributors,
    Footer,
    Header,
  },
  created(){
      this.loadDistributor();
  },
  methods: {
    async loadDistributor(){
      const idStates = localStorage.getItem("Dep");
      const idCity = localStorage.getItem("Ciu");
      try {
        const result = await this.axios.get(`/distributor/filter_ubication/${idStates}/${idCity}`);
        this.alldistributor = result.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>