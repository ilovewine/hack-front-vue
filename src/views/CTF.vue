<template>
  <main class="d-flex">
    <b-container fluid class="background flex-fill" :style="{backgroundImage: `url(${require('@/assets/images/sea.png')})`}">
      <b-row>
        <b-col cols="10" offset="1">
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
name: "CTF"
}
</script>

<style scoped lang="scss">
  .background {
    @include background();
  }
</style>
