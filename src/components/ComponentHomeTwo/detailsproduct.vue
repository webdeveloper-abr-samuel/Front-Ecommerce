<template>
    <div>
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
                                        <router-link to="/">Home</router-link> 
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
                                            <div class="owl-carousel" id="product-image">
                                                <a v-bind:href="url_img + allProduct.media[0].path" target="_blank">
                                                   <img v-bind:src= "url_img + allProduct.media[0].path" />
                                                </a>
                                                <a  v-bind:href="url_img + allProduct.media[1].path" target="_blank">
                                                    <img  v-bind:src= "url_img + allProduct.media[1].path" alt="">
                                                </a>
                                                <a  v-bind:href="url_img + allProduct.media[2].path" target="_blank">
                                                    <img  v-bind:src= "url_img + allProduct.media[2].path" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product-gallery__carousel">
                                            <div class="owl-carousel" id="product-carousel">
                                                <a class="product-gallery__carousel-item">
                                                    <img class="product-gallery__carousel-image" v-bind:src= "url_img + allProduct.media[0].path">
                                                </a>
                                                <a class="product-gallery__carousel-item">
                                                    <img class="product-gallery__carousel-image" v-bind:src= "url_img + allProduct.media[1].path">
                                                </a>
                                                <a class="product-gallery__carousel-item">
                                                    <img class="product-gallery__carousel-image" v-bind:src= "url_img + allProduct.media[2].path">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- .product__gallery / end -->

                                <!-- .product__info -->
                                <div class="product__info">
                                    <div class="product__wishlist-compare"><button type="button"
                                            class="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip"
                                            data-placement="right" title="Wishlist"><svg width="16px" height="16px">
                                                <use xlink:href="images/sprite.svg#wishlist-16"></use>
                                            </svg></button> <button type="button" class="btn btn-sm btn-light btn-svg-icon"
                                            data-toggle="tooltip" data-placement="right" title="Compare"><svg width="16px"
                                                height="16px">
                                                <use xlink:href="images/sprite.svg#compare-16"></use>
                                            </svg></button></div>
                                    <h1 class="product__name">{{ allProduct.name }}</h1>

                                    <div class="product__rating">
                                        <div class="product__rating-stars">
                                            <div class="rating">
                                                <div class="rating__body"><svg class="rating__star rating__star--active"
                                                        width="13px" height="12px">
                                                        <g class="rating__fill">
                                                            <use xlink:href="images/sprite.svg#star-normal"></use>
                                                        </g>
                                                        <g class="rating__stroke">
                                                            <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                        </g>
                                                    </svg>
                                                    <div class="rating__star rating__star--only-edge rating__star--active">
                                                        <div class="rating__fill">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                        <div class="rating__stroke">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                    </div><svg class="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g class="rating__fill">
                                                            <use xlink:href="images/sprite.svg#star-normal"></use>
                                                        </g>
                                                        <g class="rating__stroke">
                                                            <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                        </g>
                                                    </svg>
                                                    <div class="rating__star rating__star--only-edge rating__star--active">
                                                        <div class="rating__fill">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                        <div class="rating__stroke">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                    </div><svg class="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g class="rating__fill">
                                                            <use xlink:href="images/sprite.svg#star-normal"></use>
                                                        </g>
                                                        <g class="rating__stroke">
                                                            <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                        </g>
                                                    </svg>
                                                    <div class="rating__star rating__star--only-edge rating__star--active">
                                                        <div class="rating__fill">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                        <div class="rating__stroke">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                    </div><svg class="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g class="rating__fill">
                                                            <use xlink:href="images/sprite.svg#star-normal"></use>
                                                        </g>
                                                        <g class="rating__stroke">
                                                            <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                        </g>
                                                    </svg>
                                                    <div class="rating__star rating__star--only-edge rating__star--active">
                                                        <div class="rating__fill">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                        <div class="rating__stroke">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                    </div><svg class="rating__star rating__star--active" width="13px"
                                                        height="12px">
                                                        <g class="rating__fill">
                                                            <use xlink:href="images/sprite.svg#star-normal"></use>
                                                        </g>
                                                        <g class="rating__stroke">
                                                            <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                        </g>
                                                    </svg>
                                                    <div class="rating__star rating__star--only-edge rating__star--active">
                                                        <div class="rating__fill">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                        <div class="rating__stroke">
                                                            <div class="fake-svg-icon"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product__rating-legend">
                                            <a href="#">7 Reviews</a>
                                            <span>/</span>
                                            <a href="#">Write A Review</a>
                                        </div>
                                    </div>

                                    <div class="product__description">{{ allProduct.description }}</div>
                                </div>
                                <!-- .product__info / end -->

                                <!-- .product__sidebar -->
                                <div class="product__sidebar">
                                    <div class="product__availability">Availability: <span class="text-success">In
                                            Stock</span></div>
                                    <div class="product__prices">${{ allProduct.precio }}</div><!-- .product__options -->
                                    
                                        <div class="form-group product__option">
                                            <label class="product__option-label">Material</label>
                                            <p>{{ allProduct.material }}</p>
                                            
                                        </div>
                                        <div class="form-group product__option py-3 row justify-content-center align-items-center minh-100">
                                            <div class="product__actions">
                                                <div class="product__actions-item product__actions-item--addtocart">
                                                    <button v-on:click="addCartProduct()" class="btn btn-primary btn-lg">Add to cart</button>
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
                                    <!-- .product__options / end -->
                                </div><!-- .product__end -->

                                <div class="product__footer">
                                    <div class="product__tags tags">
                                        <div class="tags__list">
                                            <a href="#">Mounts</a> <a href="#">Electrodes</a> 
                                            <a href="#">Chainsaws</a>
                                        </div>
                                    </div>
                                    <div class="product__share-links share-links">
                                        <ul class="share-links__list">
                                            <li class="share-links__item share-links__item--type--like">
                                                <a href="#">Like</a>
                                            </li>
                                            <li class="share-links__item share-links__item--type--tweet">
                                                <a href="#">Tweet</a>
                                            </li>
                                            <li class="share-links__item share-links__item--type--pin">
                                                <a href="#">PinIt</a>
                                            </li>
                                            <li class="share-links__item share-links__item--type--counter">
                                                <a href="#">4K</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="product-tabs" >
                            <div class="product-tabs__list">
                                <a href="#tab-description" class="product-tabs__item product-tabs__item--active">Description</a> 
                                <a href="#tab-specification" class="product-tabs__item">Specification</a> 
                                <a href="#tab-reviews" class="product-tabs__item">Reviews</a>
                            </div>
                            <div class="product-tabs__content" >
                                <div class="product-tabs__pane product-tabs__pane--active" id="tab-description">
                                    <div class="typography">
                                        <h3>Product Full Description</h3>
                                        <p>{{ allProduct.description }}</p>
                                    </div>
                                </div>
                                <div class="product-tabs__pane" id="tab-specification">
                                    <div class="spec">
                                        <h3 class="spec__header">Specification</h3>
                                        <div class="spec__disclaimer font-weight-bold">
                                            {{ allProduct.material }}
                                        </div>
                                    </div>
                                </div>
                                <div class="product-tabs__pane" id="tab-reviews">
                                    <div class="reviews-view">
                                        <!-- Reviwers -->
                                        <div class="reviews-view__list">
                                            <h3 class="reviews-view__header">Customer Reviews</h3>
                                            <div class="reviews-list">
                                                <ol class="reviews-list__content">
                                                    <li class="reviews-list__item">
                                                        <div class="review">
                                                            <div class="review__avatar">
                                                                <img src="images/avatars/avatar-1.jpg" alt=""></div>
                                                            <div class="review__content">
                                                                <div class="review__author">Samantha Smith</div>
                                                                <div class="review__rating">
                                                                    <div class="rating">
                                                                        <div class="rating__body">
                                                                            <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                                                </g>
                                                                            </svg>
                                                                            <div class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div>
                                                                            <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                                                </g>
                                                                            </svg>
                                                                            <div class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div>
                                                                            <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                                                </g>
                                                                            </svg>
                                                                            <div class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div>
                                                                            <svg class="rating__star rating__star--active" width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div>
                                                                            <svg class="rating__star" width="13px"
                                                                                height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use xlink:href="images/sprite.svg#star-normal"></use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                                                                </g>
                                                                            </svg>
                                                                            <div class="rating__star rating__star--only-edge">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="review__text">
                                                                    Phasellus id mattis nulla. Mauris
                                                                    velit nisi, imperdiet vitae sodales in, maximus ut
                                                                    lectus. Vivamus commodo scelerisque lacus, at porttitor
                                                                    dui iaculis id. Curabitur imperdiet ultrices fermentum.
                                                                </div>
                                                                <div class="review__date">27 May, 2018</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="reviews-list__item">
                                                        <div class="review">
                                                            <div class="review__avatar"><img
                                                                    src="images/avatars/avatar-2.jpg" alt=""></div>
                                                            <div class="review__content">
                                                                <div class="review__author">Adam Taylor</div>
                                                                <div class="review__rating">
                                                                    <div class="rating">
                                                                        <div class="rating__body"><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg class="rating__star" width="13px"
                                                                                height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg class="rating__star" width="13px"
                                                                                height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="review__text">Aenean non lorem nisl. Duis tempor
                                                                    sollicitudin orci, eget tincidunt ex semper sit amet.
                                                                    Nullam neque justo, sodales congue feugiat ac, facilisis
                                                                    a augue. Donec tempor sapien et fringilla facilisis. Nam
                                                                    maximus consectetur diam. Nulla ut ex mollis, volutpat
                                                                    tellus vitae, accumsan ligula.</div>
                                                                <div class="review__date">12 April, 2018</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="reviews-list__item">
                                                        <div class="review">
                                                            <div class="review__avatar"><img
                                                                    src="images/avatars/avatar-3.jpg" alt=""></div>
                                                            <div class="review__content">
                                                                <div class="review__author">Helena Garcia</div>
                                                                <div class="review__rating">
                                                                    <div class="rating">
                                                                        <div class="rating__body"><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div><svg
                                                                                class="rating__star rating__star--active"
                                                                                width="13px" height="12px">
                                                                                <g class="rating__fill">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal">
                                                                                    </use>
                                                                                </g>
                                                                                <g class="rating__stroke">
                                                                                    <use
                                                                                        xlink:href="images/sprite.svg#star-normal-stroke">
                                                                                    </use>
                                                                                </g>
                                                                            </svg>
                                                                            <div
                                                                                class="rating__star rating__star--only-edge rating__star--active">
                                                                                <div class="rating__fill">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                                <div class="rating__stroke">
                                                                                    <div class="fake-svg-icon"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="review__text">Duis ac lectus scelerisque quam
                                                                    blandit egestas. Pellentesque hendrerit eros laoreet
                                                                    suscipit ultrices.</div>
                                                                <div class="review__date">2 January, 2018</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                                <div class="reviews-list__pagination">
                                                    <ul class="pagination justify-content-center">
                                                        <li class="page-item disabled"><a
                                                                class="page-link page-link--with-arrow" href="#"
                                                                aria-label="Previous"><svg
                                                                    class="page-link__arrow page-link__arrow--left"
                                                                    aria-hidden="true" width="8px" height="13px">
                                                                    <use
                                                                        xlink:href="images/sprite.svg#arrow-rounded-left-8x13">
                                                                    </use>
                                                                </svg></a></li>
                                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                        <li class="page-item active"><a class="page-link" href="#">2 <span
                                                                    class="sr-only">(current)</span></a></li>
                                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                        <li class="page-item"><a class="page-link page-link--with-arrow"
                                                                href="#" aria-label="Next"><svg
                                                                    class="page-link__arrow page-link__arrow--right"
                                                                    aria-hidden="true" width="8px" height="13px">
                                                                    <use
                                                                        xlink:href="images/sprite.svg#arrow-rounded-right-8x13">
                                                                    </use>
                                                                </svg></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Comment -->
                                        <form class="reviews-view__form">
                                            <h3 class="reviews-view__header">Write A Review</h3>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-12 col-lg-10 col-xl-10">
                                                    <div class="form-row">
                                                        <div class="form-group col-md-4">
                                                            <label for="review-stars">Review Stars</label> <select id="review-stars"
                                                                class="form-control">
                                                                <option>5 Stars Rating</option>
                                                                <option>4 Stars Rating</option>
                                                                <option>3 Stars Rating</option>
                                                                <option>2 Stars Rating</option>
                                                                <option>1 Stars Rating</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                            <label for="review-author">Your Name</label> 
                                                            <input type="text" class="form-control" id="review-author" placeholder="Your Name">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                            <label for="review-email">Email Address</label>
                                                            <input type="text" class="form-control" id="review-email" placeholder="Email Address">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="review-text">Your Review</label>
                                                        <textarea class="form-control" id="review-text" rows="6"></textarea>
                                                    </div>
                                                    <div class="form-group mb-0">
                                                        <button type="submit" class="btn btn-primary btn-lg">Post Your Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
import Header from '../layouts/headerTwo';
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "DetailsProduct",
    data() {
        return {         
            url_img:  process.env.VUE_APP_IMG_URL,   
            allProduct: [],
            quanty: 0
        }
    },
    components: {
        Header
    },
    computed:{
       ...mapGetters("Shop", ['shop'] )      
    },
    created() {
        this.loadProduct();
    },
    methods: 
    {
       ...mapActions('Shop',['addProduct']),
        async loadProduct(){           
            const Product = JSON.parse( localStorage.getItem("Product") );
            this.allProduct = Product
            console.log(this.allProduct);
        },
        async addCartProduct(){
            this.addProduct(this.allProduct.id_product)
        },
        aumentar(){
            this.quanty += 1
        },
        disminuir(){
            this.quanty = ( (this.quanty < 2) ? 1 : this.quanty -= 1)
        },
    }
}
</script>

