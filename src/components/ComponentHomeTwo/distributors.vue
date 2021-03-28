<template>
<div class="site__body">
    <div class="page-header">
        <div class="page-header__container container">
            <div class="page-header__breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/">Home</a> 
                                <svg class="breadcrumb-arrow" width="6px" height="9px">
                            </svg>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <div class="block ">
        <div class="container">

            <div class="block-header">
                <h3 class="block-header__title">Distribuidores</h3>
                <div class="block-header__divider"></div>
            </div>

            <div class="block-categories__list" >
                <div class="row" >
                    <div class="col-lg-6" v-for="data in alldistributor" v-bind:key="data.id">
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img v-bind:src= "url_img + data.media[0].path"  class="img-fluid"/>
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ data.name }}</h5>
                                        <a class="btn btn-outline-warning"  v-on:click="loadData(data.id, data.name)"  href="/shop">
                                            Ver Productos
                                        </a>
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
    name: 'Distributor',
    data() {
        return {
            url_img : process.env.VUE_APP_IMG_URL,
        }
    },
    props: {
        alldistributor: Array
    },
    methods: {
        loadData(id, name){
            localStorage.setItem("idDistributor", id)
            localStorage.setItem("nameDistributor", name);
        }
    },

}
</script>

