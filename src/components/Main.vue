<template>
    <div :style="{backgroundImage: `url(${require('@/assets/images/header-bg.jpg')})`}" class="background d-flex flex-column position-relative">
        <template v-for="(rune, index) of runes">
            <Snowf v-bind="snowConf" :image="rune" :key="index" />
        </template>
        <b-row class="justify-content-center align-items-center flex-fill" no-gutters>
            <b-col class="mx-auto" cols="10" lg="12" md="8">
                <div class="d-flex flex-column align-items-center">
                    <img :src="require('@/assets/images/header-logo.png')" alt="Hacknarök" class="img-fluid"/>
                    <h1 class="text-white text-center mt-4 primary-font">Krakowski Park Technologiczny<br/>21-22 marca</h1>
                </div>
            </b-col>
        </b-row>
        <b-row class="justify-content-center align-items-end position-absolute" no-gutters v-if="applicable">
            <b-col class="mb-2 mb-lg-5 d-flex justify-content-center" cols="12">
                <b-button :href="applicationForm" class="apply" target="_blank">APLIKUJ</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import Snowf from 'vue-snowf'

  export default {
    name: 'Main',
    data () {
      return {
        applicationForm: 'https://forms.gle/V4kbnGhSp1P9KF496',
        snowConf: {
          amount: 10,
          size: 15,
          speed: 1.5,
        },
        runes: {
          algiz: require('@/assets/icons/runes/png/algiz.png'),
          mannaz: require('@/assets/icons/runes/png/mannaz.png'),
          thurisaz: require('@/assets/icons/runes/png/thurisaz.png'),
          tiwaz: require('@/assets/icons/runes/png/tiwaz.png'),
          raido: require('@/assets/icons/runes/png/raido.png'),
        }
      }
    },
    components: {
      Snowf,
    },
    computed: {
      applicable () {
        return new Date(2020, 1, 17) <= Date.now() && new Date(2020, 2, 2) >= Date.now()
      },
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
