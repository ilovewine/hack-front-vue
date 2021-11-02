<template>
  <b-container fluid class="vh-100">
    <b-row class="vh-100">
      <b-col cols="12" class="vh-100">
        <font-awesome-icon icon="play" ref="playButton" class="play-icon"
                           @click="runPuzzle"></font-awesome-icon>
        <br>
        <span>{{ text }}</span><br>
        <span v-if="isSolved" class="secondary-font">flag_Forseti</span>
        <Ripple :left="`${location.left}px`" :top="`${location.top}px`"
                @animation-finish="changeRippleLocation" ref="rippleAccessor"
                v-if="currentRipple < 7"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Ripple from '../../components/ctf/Ripple';

const TOUCH_AREA = 70;
const RIPPLES_COUNT = 7;

function distance({x1, y1}, {x2, y2}) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export default {
  name: 'Pattern',
  data() {
    return {
      touchLocations: [{top: 0, left: 0}],
      touchedLocations: Array(7).fill(false),
      currentRipple: 0,
      text: '',
      disableClick: false,
      isSolved: false,
    };
  },
  components: {Ripple},
  methods: {
    runPuzzle() {
      this.touchedLocations.fill(false);
      this.generateRandomLocations();
      this.currentRipple = 0;
      this.text = '';
      this.$refs.rippleAccessor.animateRipple();
    },
    generateRandomLocations() {
      this.touchLocations = [...Array(RIPPLES_COUNT).keys()].map(() => ({
        left: Math.floor(Math.random() * (window.innerWidth - TOUCH_AREA)),
        top: Math.floor(Math.random() * (window.innerHeight - TOUCH_AREA)),
      }));
    },
    clickHandler(event) {
      if (this.location.left && !event.target.isEqualNode(
          this.$refs.playButton.querySelector('path'))) {
        if (distance({x1: this.location.left, y1: this.location.top},
            {x2: event.clientX, y2: event.clientY}) <=
            TOUCH_AREA) {
          this.touchedLocations[this.currentRipple++] = true;
          this.text = `Dobrze x${this.currentRipple}!`;
          this.isSolved = this.touchedLocations[RIPPLES_COUNT - 1];
        } else {
          this.disableClick = true;
          this.text = 'Źle! Spróbuj ponownie...';
        }
      }
    },
    changeRippleLocation() {
      if (++this.currentRipple < RIPPLES_COUNT) {
        this.$refs.rippleAccessor.animateRipple();
      } else {
        this.currentRipple = 0;
        document.addEventListener('click', this.clickHandler);
      }
    },
  },
  computed: {
    location() {
      return this.touchLocations[this.currentRipple];
    },
  },
  watch: {
    disableClick() {
      if (this.disableClick) {
        document.removeEventListener('click', this.disableClick);
        this.disableClick = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.play-icon {
  cursor: pointer;
}
</style>
