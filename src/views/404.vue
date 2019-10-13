<template>
  <div>
    这是404页面<br><br>
    <button v-on:click="$router.push('home-page')">点击我回主页</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
</style>