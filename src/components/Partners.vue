<template>
    <b-row class="pb-5" no-gutters>
<!--        <b-modal :header-class="['py-2', 'd-flex', 'align-items-center', 'justify-content-between']" centered footer-class="py-2" id="partner" lazy size="lg">-->
<!--            <template slot="modal-title">-->
<!--                <h2 class="secondary-font text-uppercase m-0">{{ currentPartner.name }}</h2>-->
<!--            </template>-->
<!--            <p class="secondary-font m-0">-->
<!--                {{ currentPartner.text }}-->
<!--            </p>-->
<!--            <template slot="modal-footer">-->
<!--                <div class="d-flex justify-content-end align-items-center">-->
<!--                    <b-link :href="currentPartner.href" class="secondary-font" target="_blank">Więcej</b-link>-->
<!--                </div>-->
<!--            </template>-->
<!--        </b-modal>-->
<!--        <b-col cols="12">-->
<!--            <h1 class="text-center my-4 my-sm-5 display-3 header-font">Partner główny</h1>-->
<!--        </b-col>-->

<!--        <b-col class="mx-auto" cols="11" lg="8" md="10">-->
<!--            <b-row>-->
<!--                <Partner mainPartner :partner="partners.first" @choose-partner="choosePartner($event)"/>-->
<!--            </b-row>-->
<!--        </b-col>-->


<!--        <b-col class="mx-auto" cols="11" lg="8" md="10">-->
<!--            <b-row>-->
<!--                <Partner :key="index" :partner="partner" @choose-partner="choosePartner($event)" v-for="(partner, index) in partners.second"/>-->
<!--            </b-row>-->
<!--        </b-col>-->

<!--        <b-col cols="12">-->
<!--          <h1 class="text-center my-4 my-sm-5 display-3 header-font"> Partnerzy</h1>-->
<!--        </b-col>-->

<!--        <b-col class="mx-auto" cols="11" lg="8" md="10">-->
<!--            <b-row>-->
<!--                <Partner :key="index" :partner="partner" @choose-partner="choosePartner($event)" v-for="(partner, index) in partners.third"/>-->
<!--            </b-row>-->
<!--        </b-col>-->
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-3 header-font">Partnerzy medialni</h1>
        </b-col>
        <b-col class="mx-auto" cols="12" lg="8" md="10">
          <template>
            <b-modal id="modal-partner" size="lg" centered title="Partner" title-tag="h3" ok-only>
              <b-row no-gutters class="d-flex flex-column">
                <b-col cols="6" class="align-self-center">
                  <a :href="currentPartner.href"><img :src="currentPartner.image || ''" class="img-fluid mb-4" :alt="currentPartner.name"></a>
                </b-col>
                <h3 class="mb-3">{{ currentPartner.name }}</h3>
                <article class="text-justify mt-2 small" v-html="currentPartner.description">
                </article>
              </b-row>
            </b-modal>
          </template>
          <b-row class="justify-content-between">
              <b-col :key="partner.id" class="my-1 d-flex align-items-center" cols="6" lg="3" sm="4" v-for="partner in partnersSocial">
                <template v-if="partner.description !== ''">
                  <b-button v-b-modal.modal-partner
                            variant="none"
                            class="partner"
                            @click="choosePartner(partner)"
                  >
                    <img class="img-fluid" :src="partner.image" :alt="partner.name">
                  </b-button>
                </template>
                <template v-else>
                  <a :href="partner.href" target="_blank">
                    <img class="img-fluid mx-auto" :src="partner.image" :alt="partner.name">
                  </a>
                </template>
              </b-col>
          </b-row>
        </b-col>
    </b-row>
</template>

<script>
  import PARTNERS from '../data/partners'
  import PARTNERS_SOCIAL from '../data/partners-social'

  export default {
    name: 'Partners',
    data () {
      return {
        partners: PARTNERS,
        partnersSocial: PARTNERS_SOCIAL,
        currentPartner: {
          image: '',
          href: '',
          name: '',
          description: '',
        },
      }
    },
    methods: {
      choosePartner (partner) {
        this.currentPartner = partner
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
