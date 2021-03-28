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
                    <use
                      xlink:href="images/sprite.svg#arrow-rounded-right-6x9"
                    ></use>
                  </svg>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <a>Politicas de Tratamiento de Datos</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div class="block py-3">
        <div class="container">
          <div class="document">
            <div class="document__header">
              <h1 class="document__title">Politica de Tratamiento de Datos</h1>
            </div>
            <div class="document__content typography">
              <p class="text-justify">
                ABRASIVOS DE COLOMBIA S.A., en cumplimiento de la Ley 1581 de
                2012 y demás normas concordantes, es responsable del tratamiento
                de sus datos personales. Los datos personales que ABRASIVOS DE
                COLOMBIA S.A solicita serán utilizados para los siguientes
                fines: Dar a conocer los productos y servicios de la empresa
                Participar en eventos organizados por la entidad Evaluar la
                calidad de los servicios de la empresa Envío de información de
                carácter publicitario, comercial o mercadeo Como titular de
                información tiene derecho a conocer, actualizar y rectificar sus
                datos personales y, sólo en los casos en que sea procedente, a
                suprimirlos o revocar la autorización otorgada para su
                tratamiento. Si requiere mayor información para conocer nuestra
                política de tratamiento de datos personales y los cambios
                sustanciales que se produzcan en ella, consulte 
                <a class="font-weight-bold" target=" _blank" href="../../../public/doc/tratamientodedatos.pdf">aquí</a>  
                políticas de privacidad Si desea presentar una consulta, reclamo o
                petición de información relacionada con la protección de datos
                personales, escríbanos de inmediato a este correo electrónico:
                s.ocampo@abracol.com o comuníquese al teléfono 289 51 50, o en
                la Sede Principal, MK 20 en el Municipio de Girardota –
                 Antioquia.
              </p>
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
  name: "TratamientoDeDatos",
  components: {
    Header,
  },
};
</script>