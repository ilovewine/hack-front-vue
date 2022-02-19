<template>
  <b-row no-gutters>
    <b-col cols="12">
      <h1 class="text-center my-4 my-sm-5 display-4 header-font">O nas</h1>
    </b-col>
    <b-col class="mx-auto" cols="11" lg="8" md="10">
      <p class="text-justify mb-4 mb-sm-5">
        Jako EESTEC AGH Kraków tworzymy lokalne i międzynarodowe projekty dając studentom kierunków
        elektrycznych, informatycznych i pokrewnych możliwość rozwoju umiejętności liderskich i
        technicznych oraz poznawania nowych kultur.
      </p>
      <span>Za tegoroczną edycją wydarzenia Hacknarök stoją odważni wikingowie na czele z:</span>
      <br>
      <br>

      <Coordinators/>

<!--      <b-row class="text-center d-flex justify-content-center">-->
<!--        <b-col xl="2" lg="4">-->
<!--          <img :src="require('@/assets/images/coordinators/main.png')" class="rounded-circle mb-4 img-fluid">-->
<!--          <span class="font-weight-bold secondary-font">Koordynator Główny</span>-->
<!--          <p class="third-font">Paweł Potaczała</p>-->
<!--        </b-col>-->
<!--        <b-col xl="2" lg="4">-->
<!--          <img :src="require('@/assets/images/coordinators/fr.png')" class="rounded-circle mb-4 img-fluid">-->
<!--          <span class="font-weight-bold secondary-font">Koordynator ds. Pozyskiwania Funduszy</span>-->
<!--          <p class="third-font">Anna Pietrzyńska</p>-->
<!--        </b-col>-->
<!--        <b-col xl="2" lg="4">-->
<!--          <img :src="require('@/assets/images/coordinators/pr.png')" class="rounded-circle mb-4 img-fluid">-->
<!--          <span class="font-weight-bold secondary-font">Koordynator ds. Promocji</span>-->
<!--          <p class="third-font">Karolina Jaśnikowska</p>-->
<!--        </b-col>-->
<!--        <b-col xl="2" lg="4">-->
<!--          <img :src="require('@/assets/images/coordinators/logistics.png')" class="rounded-circle mb-4 img-fluid">-->
<!--          <span class="font-weight-bold secondary-font">Koordynator ds. Logistyki i Barteru</span>-->
<!--          <p class="third-font">Kamil Pytel</p>-->
<!--        </b-col>-->
<!--        <b-col xl="2" lg="4">-->
<!--          <img :src="require('@/assets/images/coordinators/contact.png')" class="rounded-circle mb-4 img-fluid">-->
<!--          <span class="font-weight-bold secondary-font">Koordynator ds. Kontaktu z Uczestnikami i Administracji</span>-->
<!--          <p class="third-font">Filip Pilarek</p>-->
<!--        </b-col>-->
<!--      </b-row>-->

    </b-col>
  </b-row>
</template>

<script>
import Coordinators from "./Coordinators";

export default {
  name: 'AboutUs',
  components: {
    Coordinators
  }
}
</script>

<style scoped lang="scss">

</style>
