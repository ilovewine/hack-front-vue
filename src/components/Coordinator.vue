<template>
  <b-col xl="2" lg="4">
    <img :src="coordinator.image" class="rounded-circle mb-4 img-fluid">
    <p class="primary-font">{{coordinator.name}}</p>
    <span class="font-weight-bold secondary-font">{{coordinator.title}}</span>
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