<template>
    <div>
        <h2 class="invisible">Hover over the page to find the hidden clue.</h2>
        <p v-for="number in 249" :key="number">
            <span class="d-none">{{ lorem }}</span>
        </p>
        <p>
            <span class="answer display-1 font-weight-bold">/helheim</span>
        </p>
        <p v-for="number in 158" :key="-number">
            <span class="d-none">{{ lorem }}</span>
        </p>
    </div>
</template>

<script>
    import lorem from '@/assets/lorem'
  export default {
    name: 'Midhgardhsormr',
    data () {
      return {
        lorem
      }
    },
    components: {},
    methods: {},
    computed: {},
    watch: {},
  }
</script>

<style scoped lang="scss">
    .answer {
        position: absolute;
        left: 35%;
        top: 74%;
        opacity: 0;
        transition: $transition-base;
        &:hover {
            opacity: 1;
        }
    }
</style>
