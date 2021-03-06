<template>
<div class="site__body">
    <div class="page-header">
        <div class="page-header__container container">
            <div class="page-header__breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Home</router-link> 
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

            <div class="block-categories__list" v-for="data in alldistributor" v-bind:key="data.id">
                <div class="block-categories__item category-card category-card--layout--classic">
                    <div class="category-card__body">
                        <div class="category-card__image">
                            <img src="images/categories/category-1.jpg" />
                        </div>
                        <div class="category-card__content px-5" >
                            <div class="category-card__name">
                                <h1>{{ data.name }}</h1>
                                <a
                                    class="btn btn-outline-warning" 
                                    v-on:click="loadData(data.id, data.name)" 
                                    href="/shop"
                                >
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
</template>

<script>
export default {
    name: 'Distributor',
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

