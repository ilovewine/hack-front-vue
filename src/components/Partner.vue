<template>
  <b-col class="d-flex flex-column align-items-center justify-content-center my-4 mx-auto"
         :cols="isMain ? '11' : '6'"
         :lg="isMain ? '6' : '3'"
         :sm="isMain ? '8' : '4'">
      <b-link :href="partner.href" target="_blank">
        <img class="img-fluid mx-auto" :src="partner.image" :alt="partner.name">
      </b-link>
  </b-col>
</template>

<script>
export default {
  name: 'Partner',
  props: {
    partner: {
      required: true,
      type: Object,
    },
    isMain: {
      default: false,
      type: Boolean,
    }
  },
}
</script>

<style scoped lang="scss">
</style>