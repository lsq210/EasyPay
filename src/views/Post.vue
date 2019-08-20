<template>
  <div>
    <div class="header">
      <button v-on:click="$router.push('/home-page')">x</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.header {
  width: 100%;
  height: 40px;
  top: 0;
  border-bottom: 1px solid #aaaaaa;
}
</style>