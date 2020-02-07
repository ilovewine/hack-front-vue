<template>
    <div>
        <h2>Hover over the page to find the hidden clue.</h2>
        <h3 class="answer display-1">apex-155</h3>
    </div>
</template>

<script>
  export default {
    name: 'Midhgardhsormr',
    data () {
      return {}
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
