<template>
   <b-form>
       <label>
           <span class="text-white">What is the longest number in the world?</span>
           <b-input v-model="number" type="number" />
           <span class="text-white secondary-font" v-if="passed">flag_Gimle</span>
       </label>
   </b-form>
</template>

<script>
  export default {
    name: 'LongestNumber',
    data() {
      return {
        number: ''
      }
    },
    computed: {
      passed() {
        return this.number.length > 150
      }
    }
  };
</script>

<style scoped>

</style>
