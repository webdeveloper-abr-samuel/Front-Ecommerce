<template>
    <div>
        <Header></Header>
        <div class="mt-4 py-3 site__body">
            
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
                        <h1>Carrito de Compras</h1>
                    </div>
                </div>
            </div>

            <div class="cart block">
                <div class="container">
                    <table class="cart__table cart-table">
                        <thead class="cart-table__head">
                            <tr class="cart-table__row">
                                <th class="cart-table__column cart-table__column--image">Imagen</th>
                                <th class="cart-table__column cart-table__column--product">Producto</th>
                                <th class="cart-table__column cart-table__column--price">Precio</th>
                                <th class="cart-table__column cart-table__column--quantity">Cantidad</th>
                                <th class="cart-table__column cart-table__column--total">Total</th>
                                <th class="cart-table__column cart-table__column--remove">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody class="cart-table__body" v-for="(product, index) in products" v-bind:key="index">
                            <tr class="cart-table__row">
                                <td class="cart-table__column cart-table__column--image">
                                    <a href="#">
                                        <img v-bind:src= "url_img + product.ref.media[0].path" alt="">
                                    </a>
                                </td>
                                <td class="cart-table__column cart-table__column--product"><a href="#"
                                    class="cart-table__product-name">{{ product.ref.name }}</a>
                                </td>
                                <td class="cart-table__column cart-table__column--price" data-title="Price">${{ product.ref.precio}}</td>
                                <td class="cart-table__column cart-table__column--quantity" data-title="Quantity">
                                    <div class="input-number">
                                        <input class="form-control input-number__input" :value="product.qty" type="number" min="1" >
                                        <div class="input-number__add"  v-on:click="addCartProduct(product.ref.id)" ></div>
                                        <div class="input-number__sub" v-on:click="deleteQty(product.ref.id)"></div>
                                    </div>
                                </td>
                                <td class="cart-table__column cart-table__column--total"  data-title="Total">${{ product.total }}
                                </td>
                                <td class="cart-table__column cart-table__column--remove">
                                    <button v-on:click="Delete(index)" class="btn btn-link">
                                        <span style="color: Tomato;">
                                            <i class="fas fa-trash"></i>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="cart__actions">
                        <form class="cart__coupon-form">
                            <input type="text" class="form-control" id="input-coupon-code" placeholder="Codigo del cupon">
                            <button type="submit" class="btn btn-primary">Aplicar Cupon</button>
                        </form>
                        <div class="cart__buttons">
                            <a href="/home" class="btn btn-light">Continuar Comprando</a> 
                        </div>
                    </div>

                    <div class="row justify-content-end pt-5">
                        <div class="col-12 col-md-7 col-lg-6 col-xl-5">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Total Carrito</h3>
                                    <table class="cart__totals">
                                        <thead class="cart__totals-header" >
                                            <tr>
                                                <th>Subtotal</th>
                                                <td>$1</td>
                                            </tr>
                                        </thead>
                                        <tbody class="cart__totals-body">
                                            <tr>
                                                <th>Iva</th>
                                                <td>$1</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="cart__totals-footer">
                                            <tr>
                                                <th>Total</th>
                                                <td>${{total}}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <a @click="loadShop()" class="btn btn-primary btn-xl btn-block cart__checkout-button" >
                                        Procesar Compra
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

import { mapActions, mapGetters } from 'vuex'
import Header from "../layouts/header";

export default {
    name: "Cart",
    data() {
        return {
            url_img:  process.env.VUE_APP_IMG_URL,
        }
    },
    components: {
        Header,
        
    },
    computed: {
         ...mapGetters("Shop", ['shop'] ),

        products() {
            const prd = []
            for (let i = 0; i < this.shop.length; i++) {
                prd.push(this.shop[i])
            }
            return prd
        },

        total(){
            var CountTotal = 0
            for (let i = 0; i < this.shop.length; i++) {
                CountTotal += (this.shop[i].total)
            }
            return CountTotal;
        }
    },
    methods: {
        ...mapActions('Shop', ['addProduct', 'removeProduct', 'removeQty']),

        Delete(id){
            this.$swal.fire({
                title: '¿Esta Seguro que desea eliminar este Producto?',
                showDenyButton: true,
                confirmButtonText: `Si`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removeProduct(id)
                    this.$swal.fire('Eliminado Correctamente', '', 'success')
                }
            })
        },

        deleteQty(id){
            this.removeQty(id);
        },

        addCartProduct(id){
            this.addProduct(id)
        },

        loadShop(){
            const user = localStorage.getItem('nitUSer')
            if (user == null) {
                this.$toastr.Add({
                    title: "Bienvenido", 
                    msg: "Debe Iniciar Sesion para Procesar su compra", 
                    clickClose: true, 
                    timeout: 3500, 
                    progressbar: true, 
                    position: "toast-top-right", 
                    type: "info", 
                    preventDuplicates: true, 
                    style: {fontWeight: "bold"} 
                });
            }else{
                location.href = "/checkout"
            }
        }
        
    }
}
</script>
