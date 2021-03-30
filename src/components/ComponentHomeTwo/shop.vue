<template>
    <div>
        <staticLogo></staticLogo>
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
                        <h1>DISTRIBUIDOR {{ nameDistributor }}</h1>
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
                                                        <ul class="filter-categories__list" v-for="(item, index) in category" :key="index">
                                                            <li class="filter-categories__item filter-categories__item--current">
                                                                <button class="btn btn-link text-dark font-weight-bold"  @click="loadProduct(item.category)">{{ item.category }}</button>
                                                            </li>
                                                            <li class="filter-categories__item filter-categories__item--child" v-for="(data, index) in subcategory" :key="index" v-show="data.category == item.category">
                                                                <button class="btn btn-link text-dark" @click="loadProduct(item.category,data.subcategory)">{{ data.subcategory }}</button>
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

                    <ShopContent v-bind:allProduct="allProduct" v-bind:filterProduct="filterProduct"></ShopContent>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>

import Header from "../layouts/header";
import ShopContent from './shopContent';
import staticLogo from '../blockComponents/staticLogo'

export default {
    name: "Shop",
    data() {
        return {
            nameDistributor: "",
            allProduct: [],
            filterProduct: [],
            category: [],
            subcategory: []
        }
    },
    components: {
        Header,
        ShopContent,
        staticLogo
    },
    created() {
        this.loadProduct();
        this.loadCategories();
    },
    methods: {
       async loadProduct(categoria, subcategoria){
            this.nameDistributor = localStorage.getItem("nameDistributor");
            const id = localStorage.getItem("idDistributor");
            const ubication = localStorage.getItem("idUbication");

            try {
                const result = await this.axios.get(`/priceList/filter/product/${id}/${ubication.trim()}`);
                const filter = result.data.data.filter((element) => {
                    if (element.category === categoria && element.subcategory === subcategoria) {
                        return element
                    }
                });


                const filterCategoria = result.data.data.filter((element) => {
                    if (element.category === categoria) {
                        return element
                    }
                });


                if (filter != "") {
                    this.filterProduct = filter;
                }else{
                    this.filterProduct = filterCategoria;
                }
                
                this.allProduct = result.data.data
            } catch (error) {
                console.log(error);
            }
        },

        async loadCategories(){
            try {
                const result = await this.axios.get('/relation_category_subcategory');
                const map = new Map();
                for (const item of result.data.data) {
                    if(!map.has(item.category)){
                        map.set(item.category, true);    // set any value to Map
                        this.category.push({category: item.category});
                    }
                }
                
                this.subcategory = result.data.data;
                
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
