<template>
    <div class="ripple-container" :style="{ left, top }">
        <div class="ripple"></div>
    </div>
</template>

<script>
  export default {
    name: 'Ripple',
    props: ['left', 'top']
  };
</script>

<style scoped lang="scss">
    @keyframes ripple-effect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(7);
            opacity: 0;
        }
    }

    .ripple {
        &-container {
            position: absolute;
            transform: translate(-50%);
        }
        position: relative;
        width: 10px;
        height: 10px;
        &::before {
            opacity: 0;
            animation: ripple-effect .5s ease-in-out;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            content: '';
            border-radius: 50%;
            background-color: $dark;
        }
    }
</style>
