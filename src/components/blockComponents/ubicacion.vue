<template>
  <div
    class="modal fade ubication-modal"
    id="staticBackdrop"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#484639"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path
                  d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                />
              </svg>
            </div>
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <p>
            Esta ubicación nos ayudará a brindarte una mejor experiencia de
            compra.
          </p>
          <div class="row">
            <div class="form-group col">
              <label for="SelectDepartamento">Departamento</label>
              <select v-model="selectStates" class="form-control">
                <option
                  v-for="(item, index) in states"
                  :key="index"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-link"
            title="Salir"
            data-dismiss="modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-square-x"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff2825"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
          </button>
          <a
            type="button"
            class="btn btn-link"
            v-on:click="loadData()"
            title="Guardar Ubicacion"
            href="/home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-check"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00b341"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
export default {
  name: "Ubication",
  data() {
    return {
      selectStates: "",
      states: []
    }
  },
  mounted() {
    this.selectStates = localStorage.getItem("idUbication");
  },
  created(){
    this.loadStates();
  },
  computed: {
    ...mapGetters("Ubications", ["Dep"])
  },
  methods: {
    ...mapActions("Ubications", ["addDep"]),
    async loadStates(){
        try {
            const result = await this.axios.get("/ubication/states");
            this.states = result.data.data;
        } catch (error) {
            console.log(error);
        }
    },
    loadData() {
      this.addDep(this.selectStates);
      localStorage.setItem("idUbication", this.Dep);
    },
  },
};
</script>

<style>
.modal-backdrop {
  display: hidden !important;
  opacity: 0 !important;
  z-index: -1 !important;
}
</style>