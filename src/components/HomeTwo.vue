<template>
  <div>
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
import Header from "./layouts/header";
import { mapGetters } from 'vuex'

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
  computed:{
    ...mapGetters("Ubications", ['Dep'] ),
  },
  created(){
      this.loadDistributor();
  },
  methods: {
    async loadDistributor(){
      const idStates = this.Dep;
      try {
        const result = await this.axios.get(`/distributor/filter_ubication/${idStates}`);
        this.alldistributor = result.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>