<template>
    <div>
        <staticLogo></staticLogo>
        <Header></Header>
        <div class="mt-4 py-3">
            
            <!-- site__body -->
            <div class="site__body">
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
                                        <a href="/shop">Productos</a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="block">
                    <div class="container" >
                        <div class="product product--layout--standard" data-layout="standard" >
                            <div class="product__content" >
                                <!-- .product__gallery -->
                                <div class="product__gallery">
                                    <div class="product-gallery">
                                        <div class="product-gallery__featured">
                                            <div class="owl-carousel" id="product-image" >
                                                <a v-bind:href="url_img + media" target="_blank" v-for="(media, index) in allProduct.media" :key="index">
                                                   <img v-bind:src= "url_img + media" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product-gallery__carousel">
                                            <div class="owl-carousel" id="product-carousel">
                                                <a class="product-gallery__carousel-item"  v-for="(media, index) in allProduct.media" :key="index">
                                                    <img class="product-gallery__carousel-image" v-bind:src= "url_img + media">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- .product__gallery / end -->

                                <!-- .product__info -->
                                <div class="product__info mb-4">
                                    <div class="product__wishlist-compare">
                                        <button type="button" class="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Wishlist">
                                            <svg width="16px" height="16px">
                                                <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                            </svg>
                                        </button> 
                                        <button type="button" class="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Compare">
                                            <svg width="16px" height="16px">
                                                <use xlink:href="images/sprite.svg#compare-16"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <h1 class="product__name">{{ allProduct.name }}</h1>
                                    <div class="mb-3 row justify-content-center align-items-center minh-100">
                                        <span class="mt-2 px-2">Calificación:</span>
                                        <div v-if="loguser != null">
                                            <star-rating
                                                v-bind:increment="1"
                                                v-bind:max-rating="5"
                                                inactive-color="#ccc"
                                                active-color="#ffd333"
                                                v-bind:star-size="20"
                                                :rating=raiting
                                                @rating-selected="saveLoginRating"
                                            >
                                            </star-rating>
                                        </div>
                                        <div v-else>
                                            <star-rating 
                                                data-toggle="modal" 
                                                data-target="#exampleModal"
                                                :rating=raiting
                                                :read-only="true" 
                                                v-bind:increment="1"
                                                v-bind:max-rating="5"
                                                inactive-color="#ccc"
                                                active-color="#ffd333"
                                                v-bind:star-size="20"
                                            ></star-rating>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Califica Nuestro Producto</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body mb-3 ">
                                                        Seleccion tu Calificacion
                                                        <div class="row justify-content-center align-items-center minh-100">
                                                            <star-rating
                                                                v-bind:increment="1"
                                                                v-bind:max-rating="5"
                                                                inactive-color="#ccc"
                                                                active-color="#ffd333"
                                                                v-bind:star-size="20"
                                                                :rating=raiting
                                                                @rating-selected="setRating"
                                                            >
                                                            </star-rating>
                                                        </div>
                                                        <div class="form mt-4">
                                                            <div class="form-group">
                                                                <label for="checkout-first-name">Nombre</label> 
                                                                <input type="text" v-model="name" class="form-control" id="checkout-first-name" placeholder="Name">
                                                            </div>
                                                            <div class="form-group ">
                                                                <label for="checkout-email">Email</label> 
                                                                <input type="email" class="form-control" v-model="email" id="checkout-email" placeholder="Correo">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="checkout-email">Ciudad/Población</label> 
                                                                <input type="email" class="form-control" v-model="address" id="checkout-email" placeholder="Direccion">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                        <button type="button" @click="saveRating" class="btn btn-primary">Guardar Calificacion</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div class="mb-4 product__description text-justify">{{ allProduct.description }}</div>
                                </div>
                                <!-- .product__info / end -->

                                <div class="product__sidebar">
                                    <div class="mb-5 form-group product__option">
                                        <label class="product__option-label">Material</label>
                                        <p class="text-justify">{{ allProduct.material }}</p>  
                                    </div>
                                    <div class="form-group product__option py-3 row justify-content-center align-items-center minh-100">
                                        <div class="product__actions">
                                            <div class="product__actions-item product__actions-item--addtocart">
                                                <button v-on:click="addCartProduct()" class="btn btn-primary btn-lg">Agregar al Carrito</button>
                                            </div>
                                            <div class="product__actions-item product__actions-item--wishlist">
                                                <button type="button" class="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="Wishlist">
                                                    <svg width="16px" height="16px">
                                                        <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="product-tabs" >
                            <div class="product-tabs__list">
                                <a href="#tab-description" class="product-tabs__item product-tabs__item--active">Descripción</a> 
                                <a href="#tab-specification" class="product-tabs__item">Especificaciones</a> 
                                <a href="#tab-reviews" class="product-tabs__item">Comentarios</a>
                            </div>
                            <div class="product-tabs__content" >
                                <div class="product-tabs__pane product-tabs__pane--active" id="tab-description">
                                    <div class="typography">
                                        <h3>Descripcion del producto</h3>
                                        <p>{{ allProduct.description }}</p>
                                    </div>
                                </div>
                                <div class="product-tabs__pane" id="tab-specification">
                                    <div class="spec">
                                        <h3 class="spec__header">Especificaciones</h3>
                                        <div class="spec__disclaimer font-weight-bold">
                                            {{ allProduct.material }}
                                        </div>
                                    </div>
                                </div>
                                <div class="product-tabs__pane" id="tab-reviews">
                                    <div class="reviews-view">
                                        <!-- Reviwers -->
                                        <div class="reviews-view__list">
                                            <h3 class="reviews-view__header">Comentario de los clientes</h3>
                                            <div class="reviews-list">
                                                    <paginate name="CommentAndRaiting" ref="paginator" :list="CommentAndRaiting" :per="1">
                                                        <ol class="reviews-list__content">
                                                            <li class="reviews-list__item" v-for="(item, index) in paginated('CommentAndRaiting')" :key="index">
                                                                <div class="review">
                                                                    <div class="review__content" >
                                                                        <div class="review__author">
                                                                            <span class="font-weight-bold">{{ item.name }}</span> 
                                                                            <span class="px-3">Comentario : {{ item.description }}</span> 
                                                                            <span class="px-3">Fecha Publicacion: {{ item.fecha }}</span> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </paginate>
                                                <div class="reviews-list__pagination">
                                                    <ul class="pagination justify-content-center">
                                                        <paginate-links 
                                                            for="CommentAndRaiting" 
                                                            :show-step-links="true" 
                                                            :step-links="{
                                                                next: 'Siguiente',
                                                                prev: 'Anterior'
                                                            }" 
                                                            :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}">
                                                        </paginate-links>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Comment -->
                                        <div class="reviews-view__form">
                                            <h3 class="reviews-view__header">Escribe Un Comentario</h3>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-12 col-lg-10 col-xl-10">
                                                    <div class="form-group">
                                                        <label for="review-text">Comentario</label>
                                                        <textarea v-model="comment" class="form-control" id="review-text" rows="6"></textarea>
                                                    </div>

                                                    <div class="form-group mb-0">
                                                        <button @click="saveComment()" type="submit" class="btn btn-primary btn-lg">Publicar Comentario</button>
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
            </div>
            <!-- site__body / end -->
        </div>
    </div>
</template>

<script>
import Header from "../layouts/header";
import { mapActions, mapGetters } from 'vuex'
import StarRating from 'vue-star-rating';
import staticLogo from '../blockComponents/staticLogo'
export default {
    name: "DetailsProduct",
    data() {
        return {         
            url_img:  process.env.VUE_APP_IMG_URL,   
            allProduct: [],
            CommentAndRaiting : [],
            raiting: 0,
            comment: "",
            paginate: ['CommentAndRaiting'],
            loguser: localStorage.getItem('idUSer'),
            name: '',
            email: '',
            address: '',
            calificaciones: ''
        }
    },
    components: {
        Header,
        StarRating,
        staticLogo
    },
    computed:{
       ...mapGetters("Shop", ['shop'] ),
        ...mapGetters("Users", ['datauser'] )
    },
    created() {
        this.loadProduct();
        this.CommentRaiting();
    },
    methods: 
    {
       ...mapActions('Shop',['addProduct']),
        async loadProduct(){           
            const Product = JSON.parse( localStorage.getItem("Product") );
            this.allProduct = Product
        },
        async addCartProduct(){
            this.$toastr.Add({
                title: "", 
                msg: "Producto Agregado Con Exito", 
                clickClose: true, 
                timeout: 1000, 
                progressbar: false, 
                position: "toast-top-right", 
                type: "success", 
                preventDuplicates: true, 
                style: {fontWeight: "bold"} 
            });
            this.addProduct(this.allProduct.id)
        },
        async CommentRaiting(){
            try {
                const id = this.allProduct.id

                const resultComment = await this.axios.get(`comment/product/${id}`);
                const resultRaiting = await this.axios.get(`raiting/product/${id}`);
                this.CommentAndRaiting = resultComment.data.data
                this.raiting = resultRaiting.data.data
            } catch (error) {
                console.log(error);
            }
        },
        async saveComment(){
            try {
                const idProduct = this.allProduct.id
                const idUser = localStorage.getItem("idUSer");
                const fecha = new Date();
                const fecha_formatiada = fecha.getFullYear() + "/" + (fecha.getMonth() +1) + "/" + fecha.getDate()
                let newComment = {
                    id_product: idProduct, 
                    id_user : idUser, 
                    description : this.comment,
                    fecha : fecha_formatiada,
                    status: 0
                }
                if (idUser == null) {
                    this.$toastr.Add({
                    title: "Upps!!", 
                    msg: "Debe Iniciar Sesion Para Comentar y Calificar Este Producto", 
                    clickClose: true, 
                    timeout: 3500, 
                    progressbar: true, 
                    position: "toast-top-right", 
                    type: "info", 
                    preventDuplicates: true, 
                    style: {fontWeight: "bold"} 
                    });
                }else{
                    const Upcomment = await this.axios.post('comment',newComment);  
                    if (Upcomment.status == 200) {
                        location.href = "/details_product"
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },        
        setRating(rating) {
            this.calificaciones = rating
        },
        async saveRating(){
            const idProduct = this.allProduct.id
             let newRaiting = {
                id_product: idProduct, 
                name: this.name,
                email:this.email,
                address: this.address,
                rating: this.calificaciones
            }
            try {
                if (this.name != "" || this.email != "" || this.address != "") {
                    const UpRaiting = await this.axios.post('raiting',newRaiting);  
                    if (UpRaiting.status == 200) {
                        location.href = "/details_product"
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        async saveLoginRating(rating){
            const idProduct = this.allProduct.id
            let newRaiting = {
                id_product: idProduct, 
                name: this.datauser[0].name,
                email: this.datauser[0].email,
                address: this.datauser[0].address,
                rating: rating
            };
            try {
                const UpRaiting = await this.axios.post('raiting',newRaiting);  
                if (UpRaiting.status == 200) {
                    location.href = "/details_product"
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

