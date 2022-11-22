<template>
  <b-row class="pb-5" no-gutters>
    <b-col cols="12">
      <h1 class="text-center my-4 my-sm-5 display-3 header-font">Partner główny poprzedniej edycji </h1>
    </b-col>
    <b-col class="mx-auto" cols="11" lg="8" md="10">
      <b-row>
        <Partner is-main :partner="partnersFr.main"/>
      </b-row>
    </b-col>
    <b-col cols="12">
      <h1 class="text-center my-4 my-sm-5 display-3 header-font">Partnerzy poprzedniej edycji </h1>
    </b-col>
    <b-col class="mx-auto" cols="11" lg="8" md="10">
      <b-row>
        <Partner :key="index" :partner="partner" v-for="(partner, index) in partnersFr.normal"/>
      </b-row>
    </b-col>
    <b-col cols="12">
        <h1 class="text-center my-4 my-sm-5 display-3 header-font">Partnerzy medialni poprzedniej edycji </h1>
    </b-col>
    <b-col class="mx-auto" cols="11" lg="8" md="10">
      <b-row>
        <Partner :key="index" :partner="partner" v-for="(partner, index) in partnersPr"/>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
  import Partner from './Partner'
  import PARTNERS_FR from '../data/partners-fr'
  import PARTNERS_PR from '../data/partners-pr'

  export default {
    name: 'Partners',
    data () {
      return {
        partnersFr: PARTNERS_FR,
        partnersPr: PARTNERS_PR,
      }
    },
    components: {
      Partner,
    },
  }
</script>

<style lang="scss" scoped>
</style>
