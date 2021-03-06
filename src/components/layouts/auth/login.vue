<template>
  <div>
    <div
      class="modal fade"
      id="modalLogin"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              <div class="indicator">login</div>
            </h5>
            
          </div> -->
          <div class="modal-body">

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <!-- <span aria-hidden="true">&times;</span> -->
            </button>

            <div class="container">
              <div class="row justify-content-center align-items-center minh-100">

                <div class="page-header__title">
                  <h1>Login</h1>
                </div>

                <div class="col-lg-12 d-flex">
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                      </div>

                      

                      <div class="btn-group mb-2">
                        <button type="submit" class="btn btn-primary">Login</button>
                      </div>

                      <small class="form-text text-muted">
                        <router-link to="register">Registrar</router-link>
                      </small>

                    </form>
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

<style>
.modal-backdrop {
  display: hidden !important;
  opacity: 0 !important;
  z-index: -1 !important;
}
</style>