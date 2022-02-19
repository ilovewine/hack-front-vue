<template>
  <b-col xl="2" lg="4">
    <img :src="coordinator.image" class="rounded-circle mb-4 img-fluid">
    <span class="font-weight-bold secondary-font">{{coordinator.title}}</span>
    <p class="third-font">{{coordinator.name}}</p>
  </b-col>
</template>

<script>
export default {
  name: 'Coordinator',
  props: {
    coordinator: {
      required: true,
      type: Object,
    }
  },
}
</script>

<style scoped lang="scss">
</style>