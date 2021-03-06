<template>
  <div class="content">
    <!-- site -->
    <div class="site">
      <!-- site__body -->
      <div class="site__body">
        <div class="page-header">
          <div class="page-header__container container">
            <div class="page-header__title mt-3">
              <h1>Register</h1>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-center align-items-center minh-100">
            <div class="col-lg-5 d-flex mt-4 mt-md-0">
              <div class="card format border-0 flex-grow-1 py-1 mb-2">
                <div class=" card-body">
                  <form>

                    <div class="row">
                      <div class="col-lg-6 form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" placeholder="Enter Name"/>
                      </div>
                      <div class="col-lg-6 form-group">
                        <label>Apellido</label>
                        <input type="text" class="form-control" placeholder="Enter Last Name"/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 form-group">
                        <label>Nit</label>
                        <input type="text" class="form-control" placeholder="Enter Nit"/>
                      </div>
                      <div class="col-lg-6 form-group">
                        <label>Telefono</label>
                        <input type="number" class="form-control" placeholder="Enter Phone"/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6 form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Enter email"/>
                      </div>
                      <div class="col-lg-6 form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                      </div>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Dirección</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="submit" class="btn btn-dark">
                        Register
                      </button>
                      <router-link type="button" class="btn btn-outline-dark" to="/home">Atras</router-link>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- site__body / end -->
    </div>
    <!-- site / end -->
  </div>
</template>

<style lang="css">
  .content {
      background: url('../../../../public/images/logos/logo-register.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-attachment: fixed;
  }  
  .format{
    background-color: #f1ce00;
  }
</style>






