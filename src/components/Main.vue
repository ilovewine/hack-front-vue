<template>
  <div :style="{backgroundImage: `url(${require('@/assets/images/header-background.png')})`}"
      class="background d-flex flex-column position-relative">
    <Snowf v-bind="snowConf" v-if="isWinter"/>
    <b-row class="justify-content-center align-items-end position-absolute" no-gutters>
      <b-col class="mb-2 mb-lg-5 d-flex justify-content-center" cols="12">
        <!-- <b-button :href="applicationForm" class="apply" target="_blank" disabled>ZAPISY WKRÓTCE</b-button> -->
        <b-button :href="applicationForm" class="apply" target="_blank">ZAPISZ SIĘ</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Snowf from 'vue-snowf'

export default {
  name: 'Main',
  data() {
    return {
      applicationForm: 'https://forms.gle/onpnUqFZQKveyA5EA',
      snowConf: {
        amount: 150,
        size: 7,
        speed: 4,
        wind: 2,
        opacity: 0.6
      },
    }
  },
  components: {
    Snowf,
  },
  computed: {
    applicable() {
      return new Date(2020, 1, 17) <= Date.now() && new Date(2020, 2, 3) >= Date.now()
    },
    isWinter() {
      const today = new Date()
      return (today.getMonth() === 12 && today.getDate() >= 22) || (today.getMonth() <= 2
          && today.getDate() <= 20)
    }
  },
}
</script>

<style scoped lang="scss">
.background {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .position-absolute {
    bottom: 0;
    left: 0;
    right: 0;

    .apply {
      @include media-breakpoint-up(md) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
