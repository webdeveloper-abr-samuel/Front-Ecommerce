<template>
    <div>
        <Header></Header>

        <div class="site__body">
            <div class="page-header mt-3">
                <div class="page-header__container container">
                    <div class="page-header__breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="/home">Distribuidores</a> 
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
                    <div class="page-header__title">
                        <h1>Carrito de Compras</h1>
                    </div>
                </div>
            </div>

            <div class="checkout block">
                <div class="container">
                    <div class="row">

                        <div class="col-12 col-lg-6 col-xl-7">
                            <div class="card mb-lg-0">
                                <div class="card-body">
                                    <h3 class="card-title">Detalles De Facturación</h3>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="checkout-first-name">Nombre</label> 
                                            <input type="text" class="form-control" id="checkout-first-name" placeholder="Name">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="checkout-last-name">Apellido</label>
                                            <input type="text" class="form-control" id="checkout-last-name" placeholder="Last Name">
                                        </div>
                                    </div>

                                    
                                    <div class="form-group">
                                        <label for="checkout-country">Ciudad</label> 
                                        <select id="checkout-country" class="form-control">
                                            <option>Selecciona una ciudad...</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="checkout-country">Municipio</label> 
                                        <select id="checkout-country" class="form-control">
                                            <option>Selecciona un Municipio...</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="checkout-street-address">Dirección</label>
                                        <input type="text" class="form-control" id="checkout-street-address" placeholder="Dirección">
                                    </div>

                                   
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="checkout-email">Email</label> 
                                            <input type="email" class="form-control" id="checkout-email" placeholder="Email address">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="checkout-phone">Telefono</label>
                                            <input type="text" class="form-control" id="checkout-phone" placeholder="Telefono"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <h3 class="card-title">Resumen de tu Pedido</h3>

                                    <table class="checkout__totals">
                                        <thead class="checkout__totals-header">
                                            <tr>
                                                <th>Product</th>
                                                <th>Cantidad</th>
                                                <th>Total</th>
                                                <th>Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody class="checkout__totals-products" v-for="(product, index) in productts" v-bind:key="index">
                                            <tr>
                                                <td>{{ product.ref.name }}</td>
                                                <td>{{ product.qty }}</td>
                                                <td>${{ product.ref.precio * product.qty }}</td>
                                                <th>
                                                    <button v-on:click="Delete(index)" class="btn btn-link"><i class="fas fa-trash"></i></button>
                                                </th>
                                            </tr>
                                        </tbody>
                                        <tfoot class="checkout__totals-footer">
                                            <tr>
                                                <th>Total</th>
                                                <td>$5,882.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <div class="payment-methods">
                                        <ul class="payment-methods__list">

                                            <li class="payment-methods__item payment-methods__item--active">
                                                <label class="payment-methods__item-header">
                                                    <span class="payment-methods__item-radio input-radio">
                                                        <span class="input-radio__body">
                                                            <input class="input-radio__input" name="checkout_payment_method" type="radio" checked="checked">
                                                            <span class="input-radio__circle"></span> 
                                                        </span>
                                                    </span>
                                                    <span class="payment-methods__item-title">Direct bank transfer</span>
                                                </label>
                                                <div class="payment-methods__item-container">
                                                    <div class="payment-methods__item-description text-muted">
                                                        Make your payment directly into our bank account. Please use your Order ID
                                                        as the payment reference. Your order will not be shipped until
                                                        the funds have cleared in our account.
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="payment-methods__item">
                                                <label class="payment-methods__item-header">
                                                    <span class="payment-methods__item-radio input-radio">
                                                        <span class="input-radio__body">
                                                            <input class="input-radio__input" name="checkout_payment_method" type="radio">
                                                             <span class="input-radio__circle"></span> 
                                                        </span>
                                                    </span>
                                                    <span class="payment-methods__item-title">Check payments</span>
                                                </label>
                                                <div class="payment-methods__item-container">
                                                    <div class="payment-methods__item-description text-muted">
                                                        Please send a check to Store Name, Store Street, Store Town, Store
                                                        State / County, Store Postcode.
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="payment-methods__item">
                                                <label class="payment-methods__item-header">
                                                    <span class="payment-methods__item-radio input-radio">
                                                        <span class="input-radio__body">
                                                            <input class="input-radio__input" name="checkout_payment_method" type="radio">
                                                            <span class="input-radio__circle"></span> 
                                                        </span>
                                                    </span>
                                                    <span class="payment-methods__item-title">Cash on delivery</span>
                                                </label>
                                                <div class="payment-methods__item-container">
                                                    <div class="payment-methods__item-description text-muted">
                                                        Pay with
                                                        cash upon delivery.
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="payment-methods__item">
                                                <label class="payment-methods__item-header">
                                                    <span class="payment-methods__item-radio input-radio">
                                                        <span class="input-radio__body">
                                                            <input class="input-radio__input" name="checkout_payment_method" type="radio">
                                                                <span class="input-radio__circle"></span>
                                                        </span>
                                                    </span>
                                                    <span class="payment-methods__item-title">PayPal</span>
                                                </label>
                                                <div class="payment-methods__item-container">
                                                    <div class="payment-methods__item-description text-muted">
                                                        Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="checkout__agree form-group">
                                        <div class="form-check">
                                            <span class="form-check-input input-check">
                                                <span class="input-check__body">
                                                    <input class="input-check__input" type="checkbox" id="checkout-terms"> 
                                                    <span class="input-check__box"></span> 
                                                    <svg class="input-check__icon" width="9px" height="7px">
                                                        <use xlink:href="images/sprite.svg#check-9x7"></use>
                                                    </svg> 
                                                </span>
                                            </span>
                                            <label class="form-check-label" for="checkout-terms">I have read and agree to the website 
                                                <a target="_blank" href="terms-and-conditions.html">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-xl btn-block">Procesar Compra</button>
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
import Header from '../layouts/headerTwo'

export default {
    name: "Checkout",
    data() {
        return {
            products : [],
        }
    },

    components: {
        Header
    }, 

    computed: {

        ...mapGetters("Shop", ['shop'] ),

        productts() 
        {
            const prd = []
            for (let i = 0; i < this.shop.length; i++) {
                prd.push(this.shop[i])
            }
            return prd
        }
    },

    methods: {

        ...mapActions('Shop',['removeProduct']),

        Delete(id){
            this.removeProduct(id)
        },
    },
}
</script>