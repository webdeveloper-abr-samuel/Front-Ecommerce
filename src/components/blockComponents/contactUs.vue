<template>
  <div>
    <Header></Header>
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
                  Contactos
                </li>
              </ol>
            </nav>
          </div>
          <div class="page-header__title">
            <h1>Contactos</h1>
          </div>
        </div>
      </div>

      <div class="block py-4">
        <div class="container">
          <div class="card contact-us">
            <div class="contact-us__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0739268937073!2d-75.46815738590635!3d6.384460226536992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e443b3b852aa915%3A0x3a0c6631e072fed!2sAbracol%20S.A!5e0!3m2!1ses-419!2sco!4v1615223159553!5m2!1ses-419!2sco"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
            <div class="card-body">
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
                        <br />Desde 1969 ABRACOL S.A produce abrasivos de alta calidad para todo tipo de operaciones de
                        la industria automotriz,
                        metalmecanica, construcción, minería, fundiciones de madera , vidrios entre otras
                        <br />
                        Alta tecnología de origen Europeo, innovación constante, el control de calidad certificado bajo
                        ISO 9001/2015
                      </p>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6">
                    <h4 class="contact-us__header card-title">Contáctanos</h4>
                    <div class="form-group">
                      <label for="form-email">Correo</label>
                      <input type="email" v-model="email" id="form-email" class="form-control" placeholder="Correo" />
                    </div>

                    <div class="form-group">
                      <label for="form-email">Telefono</label>
                      <input type="number" v-model="phone" id="form-email" class="form-control" placeholder="Telefono" />
                    </div>
                    
                    <div class="form-group">
                      <label for="form-subject">Asunto</label>
                      <input type="text" v-model="subject" id="form-subject" class="form-control" placeholder="Asunto" />
                    </div>
                    <div class="form-group">
                      <label for="form-message">Mensaje</label>
                      <textarea id="form-message" v-model="menssage" class="form-control" rows="4"></textarea>
                    </div>
                    <button v-on:click="upMenssage()" class="btn btn-primary">
                      Enviar Mensaje
                    </button>
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

<script>
  import Header from "../layouts/header";

  export default {
    name: "ContactUs",
    data() {
      return {
        email: "",
        subject: "",
        menssage: "",
        phone: ""
      }
    },
    components: {
      Header,
    },
    methods: {
      async upMenssage(){
        try {
          if ( this.email == "" || this.subject == "" || this.menssage == "" || this.phone == ""){
             this.$toastr.Add({
              title: "Algo Salio Mal!", 
              msg: "Por Favor Digilenciar Todo Los Campos Solicitados", 
              clickClose: true, 
              timeout: 3500, 
              progressbar: true, 
              position: "toast-top-right", 
              type: "error", 
              preventDuplicates: true, 
              style: {fontWeight: "bold"} 
            });
            return;
          }

          let newMessage = {
            email : this.email,
            phone: this.phone,
            subject: this.subject,
            text: this.menssage, 
          }

          const result = await this.axios.post("/contact", newMessage);  
          if (result.status == 200) {
            this.$toastr.Add({
              title: result.data["message"], 
              msg: "", 
              clickClose: true, 
              timeout: 2500, 
              progressbar: true, 
              position: "toast-top-right", 
              type: "success", 
              preventDuplicates: true, 
              style: {fontWeight: "bold"} 
            });
            this.clear();
          }else{
            this.$toastr.Add({
              title: "Algo Salio Mal!!", 
              msg: "Rectificar los Datos Por Favor", 
              clickClose: true, 
              timeout: 2500, 
              progressbar: true, 
              position: "toast-top-right", 
              type: "error", 
              preventDuplicates: true, 
              style: {fontWeight: "bold"} 
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      clear(){
        this.email = "",
        this.subject = "",
        this.menssage = ""
        this.phone = ""
      }
    },
  }
</script>