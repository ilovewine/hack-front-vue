<template>
  <b-container class="p-0" fluid id="app-wrapper">
    <router-view/>
  </b-container>
</template>

<script>

  export default {
    name: 'app',
    components: {},
  }
</script>

<style lang="scss">
    @font-face {
        font-family: 'Norse';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("assets/fonts/Norse.otf");
    }

    @font-face {
        font-family: 'Futhark';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("assets/fonts/BabelStoneRunicElderFuthark.ttf");
    }

    @font-face {
        font-family: 'Elegant';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("assets/fonts/ElegantLux.otf");
    }

    * {
        box-sizing: border-box;
        @extend .primary-font;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 30px;
    }

    #app-wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        position: relative;
    }

    main {
        flex: 1 0 auto;
    }

    .btn {
        @extend .rounded-0, .font-weight-bold, .bg-transparent, .border, .border-white, .px-4, .py-2;
        border-width: 5px !important;

        &:hover {
            @extend .bg-white, .text-black;
        }

        &:focus {
            box-shadow: none !important;
        }
    }

    a {
        &:hover {
            text-decoration: none;
        }
    }

    @for $i from 1 through 6 {
        h#{$i} {
            @extend .font-weight-bold;
        }
    }

    .flip-card__top, .flip-card__bottom, .flip-card__back, .flip-card__back-bottom {
        &, &::before {
            width: 5em !important;
            @extend .third-font;
        }
    }
</style>
