<template>
    <div>
        <Header></Header>
        <div class="mt-4 py-3">
            
            <div class="page-header">
                <div class="page-header__container container">
                     <div class="page-header__breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="/">Home</a> 
                                        <svg class="breadcrumb-arrow" width="6px" height="9px">
                                        <use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                    </svg>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <a href="/home">Distribuidores</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div class="page-header__title">
                        <h1>Distribuidor {{ nameDistributor }}</h1>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="shop-layout shop-layout--sidebar--start">
                    <div class="shop-layout__sidebar">
                        <div class="block block-sidebar">
                            <div class="block-sidebar__item">
                                <div class="card container text-center" style="width: 16rem;">
                                    <div class="card-body">

                                        <h5 class="card-title">Productos</h5>
                                        <div class="dropdown-divider"></div>

                                        <div class="filter filter--opened" data-collapse-item>
                                            <div class="filter__body" data-collapse-content>
                                                <div class="filter__container">
                                                    <div class="filter-categories">
                                                        <ul class="filter-categories__list">

                                                            <!-- AGLOMERADOS -->
                                                            <li class="filter-categories__item filter-categories__item--current">
                                                                <h6>Aglomerados</h6>
                                                            </li>
                                                            <li class="filter-categories__item filter-categories__item--child">
                                                                <a href="#">Discos</a>
                                                                <div class="filter-categories__counter">15</div>
                                                            </li>
                                                            <li class="filter-categories__item filter-categories__item--child">
                                                                <a href="#">Ruedas</a>
                                                                <div class="filter-categories__counter">2</div>
                                                            </li>
                                                            <li class="filter-categories__item filter-categories__item--child">
                                                                <a href="#">Otros</a>
                                                                <div class="filter-categories__counter">30</div>
                                                            </li>

                                                            <!-- RECUBIERTOS -->
                                                            <li class="filter-categories__item filter-categories__item--current mt-4">
                                                                <h6>Recubiertos</h6>
                                                            </li>
                                                            <li class="filter-categories__item filter-categories__item--child">
                                                                <a href="#">Discos</a>
                                                                <div class="filter-categories__counter">15</div>
                                                            </li>
                                                            <li class="filter-categories__item filter-categories__item--child">
                                                                <a href="#">Ruedas</a>
                                                                <div class="filter-categories__counter">2</div>
                                                            </li>
                                                            <li class="filter-categories__item filter-categories__item--child">
                                                                <a href="#">Otros</a>
                                                                <div class="filter-categories__counter">30</div>
                                                            </li>

                                                            <!-- COMPLEMENTARIOS -->
                                                            <li class="filter-categories__item filter-categories__item--current mt-4">
                                                                <a href=""><h6>Complementarios</h6></a>
                                                            </li>

                                                            <!-- SEGMENTOS -->
                                                            <li class="filter-categories__item filter-categories__item--current mt-4">
                                                                <a href=""><h6>Segmentos</h6></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <ShopContent v-bind:allProduct="allProduct"></ShopContent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../layouts/headerTwo'
import ShopContent from './shopContent';

export default {
    name: "Shop",
    data() {
        return {
            nameDistributor: "",
            allProduct: []
        }
    },
    components: {
        Header,
        ShopContent
    },
    created() {
        this.loadProduct();
    },
    methods: {
       async loadProduct(){
            this.nameDistributor = localStorage.getItem("nameDistributor");
            const id = localStorage.getItem("idDistributor");
            try {
                const result = await this.axios.get(`/price/filter/product/${id}`);
                this.allProduct = result.data.data
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
