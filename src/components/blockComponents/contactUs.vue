<template>
  <div class="site__body">
    <div class="block-map block">
      <div class="block-map__body">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0739268937073!2d-75.46815738590635!3d6.384460226536992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e443b3b852aa915%3A0x3a0c6631e072fed!2sAbracol%20S.A!5e0!3m2!1ses-419!2sco!4v1615223159553!5m2!1ses-419!2sco" 
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    
    <div class="page-header">
      <div class="page-header__container container">
        <div class="page-header__breadcrumb">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
                <svg class="breadcrumb-arrow" width="6px" height="9px">
                  <use
                    xlink:href="images/sprite.svg#arrow-rounded-right-6x9"
                  ></use>
                </svg>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
        <div class="page-header__title">
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>

    <div class="block py-4">
      <div class="container">
        <div class="card ">
          <div class="card-body contact-us">
            <div class="contact-us__container">
              <div class="row">
                <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                  <h4 class="contact-us__header card-title">Nuestra Dirección</h4>
                  <div class="contact-us__address">
                    <p>
                      Kilómetro 20, Girardota Antioquia - Colombia
                      <br />
                      Email: contacto@abracol.com
                      <br />
                      Linea Nacional: 01 8000 51 54 52
                    </p>
                    <p>
                      <strong>Horario de Oficina</strong>
                      <br />
                      Lun - Vie, 7:30 a.m. - 5:30 p.m.
                    </p>
                    <p>
                      <strong>ABRACOL</strong>
                      <br />Desde 1969 ABRACOL S.A produce abrasivos de alta calidad para todo tipo de operaciones de la industria automotriz, 
                      metalmecanica, construcción, minería, fundiciones de madera , vidrios entre otras
                      <br />
                      Alta tecnología de origen Europeo, innovación constante, el control de calidad certificado bajo ISO 9001/2015
                    </p>
                  </div>
                </div>

                <div class="col-12 col-lg-6">
                  <h4 class="contact-us__header card-title">
                    Contáctanos
                  </h4>
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="form-name">Your Name</label>
                        <input
                          type="text"
                          id="form-name"
                          class="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="form-email">Email</label>
                        <input
                          type="email"
                          id="form-email"
                          class="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="form-subject">Subject</label>
                      <input
                        type="text"
                        id="form-subject"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="form-group">
                      <label for="form-message">Message</label>
                      <textarea
                        id="form-message"
                        class="form-control"
                        rows="4"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>