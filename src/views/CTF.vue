<template>
  <div>
    <b-container fluid class="background" :style="{backgroundImage: `url(${require('@/assets/images/sea.png')})`}">
      <b-row>
        <b-col>
          <h1>Capture The Flag</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
