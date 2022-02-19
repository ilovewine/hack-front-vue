<template>
  <b-row class="text-center d-flex justify-content-center">
    <Coordinator :key="index" :coordinator="coordinator" v-for="(coordinator, index) in coordinators"/>
  </b-row>
</template>

<script>
import Coordinator from './Coordinator'
import COORDINATORS from '../data/coordinators'

export default {
  name: 'Coordinators',
  data () {
    return {
      coordinators: COORDINATORS,
    }
  },
  components: {
    Coordinator,
  },
}
</script>

<style scoped lang="scss">
</style>