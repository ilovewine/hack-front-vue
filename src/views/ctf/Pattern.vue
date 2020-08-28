<template>
    <b-container fluid class="vh-100">
        <b-row class="vh-100">
            <b-col cols="12" class="vh-100">
                <font-awesome-icon icon="play" class="play-icon" @click="runPuzzle"></font-awesome-icon>
                <span v-if="isSolved">flag_Forseti</span>
                <Ripple :left="`${location.left}px`" :top="`${location.top}px`"/>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
  import Ripple from '../../components/ctf/Ripple';

  const TOUCH_AREA = 30;
  const RIPPLES_COUNT = 7;

  export default {
    name: 'Pattern',
    data() {
      return {
        touchLocations: [],
        touchedLocations: Array(7).fill(false),
        index: 0
      };
    },
    components: {Ripple},
    methods: {
      runPuzzle() {
        this.generateRandomLocations();

      },
      generateRandomLocations() {
        this.touchLocations = [...Array(RIPPLES_COUNT).keys()].map(() => ({
          left: Math.floor(Math.random() * (window.innerWidth - TOUCH_AREA)),
          top: Math.floor(Math.random() * (window.innerHeight - TOUCH_AREA)),
        }));
      },
    },
    computed: {
      isSolved() {
        return !this.touchedLocations.includes(false)
      },
      location() {
        return this.touchLocations[index]
      }
    },
    watch: {},
  };
</script>

<style scoped lang="scss">
    .play-icon {
        cursor: pointer;
    }
</style>
