<template>
    <b-col class="my-4 d-flex align-items-center mx-auto" :cols="mainPartner ? '11' : '6'" :lg="mainPartner ? '6' : '3'" :sm="mainPartner ? '8' : '4'">
        <b-link @click="$emit('choose-partner', partner)" class="flex-fill d-flex align-items-center" v-b-modal="'partner'" v-if="partner.text">
            <img :alt="partner.name" :src="partner.image" class="img-fluid mx-auto"/>
        </b-link>
        <b-link :href="partner.href" class="flex-fill d-flex align-items-center" target="_blank" v-else>
            <img :alt="partner.name" :src="partner.image" class="img-fluid mx-auto"/>
        </b-link>
    </b-col>
</template>

<script>
  export default {
    name: 'Partner',
    props: {
      partner: {
        required: true,
        type: Object
      },
      mainPartner: {
        default: false,
        type: Boolean
      }
    },

  }
</script>

<style scoped lang="scss">

</style>
