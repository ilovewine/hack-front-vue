<template>
    <div class="ripple-container" :style="{ left, top }">
        <div class="ripple" ref="ripple"></div>
    </div>
</template>

<script>
  export default {
    name: 'Ripple',
    props: ['left', 'top'],
    methods: {
      animateRipple() {
        const player = this.$refs.ripple.animate([
          {
            transform: 'scale(0)',
            opacity: '1',
          },
          {
            transform: 'scale(7)',
            opacity: '0',
          },
        ], {
          duration: 1000,
        });
        player.onfinish = () => {
          this.$emit('animation-finish')
        }
      }
    }
  };
</script>

<style scoped lang="scss">
    .ripple {
        &-container {
            position: absolute;
            transform: translate(-50%);
        }

        position: relative;
        width: 10px;
        height: 10px;
        opacity: 0;
        border-radius: 50%;
        background-color: $dark;
    }
</style>
