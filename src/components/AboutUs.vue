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
