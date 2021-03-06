<template>
  <div
    class="block block-posts block-posts--layout--list-sm"
    data-layout="list-sm"
  >
    <div class="container">
      
      <div class="block-header">
        <h3 class="block-header__title">Noticias</h3>
        <div class="block-header__divider"></div>
        <div class="block-header__arrows-list">
          <a  href="#carouselExampleControls" class="block-header__arrow block-header__arrow--left" role="button" data-slide="prev">
            <svg width="7px" height="11px">
              <use xlink:href="images/sprite.svg#arrow-rounded-left-7x11"></use>
            </svg>
          </a> 
          <a href="#carouselExampleControls" class="block-header__arrow block-header__arrow--right" role="button" data-slide="next">
            <svg width="7px" height="11px">
              <use xlink:href="images/sprite.svg#arrow-rounded-right-7x11"></use>
            </svg>
          </a>
        </div>
      </div>

      <div class="block-posts__slider">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner text-justify">

            <div class="carousel-item active">
               <div class="card mb-3 card-border"  style="max-width: auto">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img  class="img-responsive img-fluid"  src="images/posts/post-1.jpg" >
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="carousel-item">
               <div class="card mb-3 card-border" style="max-width: auto">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img  class="img-responsive img-fluid"  src="images/posts/post-2.jpg" >
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="carousel-item">
               <div class="card mb-3 card-border" style="max-width: auto">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img  class="img-responsive img-fluid"  src="images/posts/post-3.jpg" >
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

<style lang="css">
  .card-border{
      background: transparent;
      border: none;
  }
</style>
