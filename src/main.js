import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VuePaginate from 'vue-paginate'
import VueToastr from "vue-toastr";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueToastr);
Vue.use(VueSweetalert2);


//Paginacion con Vue
Vue.use(VuePaginate)

//importando axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//axios
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

//URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/abracol';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
