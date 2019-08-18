<template>
  <div class="main">
    <div class="logo">
      <img src="@/assets/img/cordova.png">
        <span>+</span>
      <img src="@/assets/img/vuejs.png">
    </div>
    <h2>Vue.cordova</h2>
    <div v-if="$cordova" class="dump" v-html="$cordova"></div>
    <div v-else class="dump">未加载 cordova.js</div>
  </div>
</template>

<script>
export default {
  name: 'landing-page'
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.main {
  color: $vue-second-color;
  padding: 20px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  .logo {
    padding-bottom: 30px;
    span {
      position: relative;
      top: -30px;
      font-size: 36px;
      margin: 0 20px;
    }
    img {
      width: 90px;
      height: 90px;
    }
  }
  .dump {
    background: #eee;
    text-align: left;
    border: solid 1px #ccc;
    padding: 20px;
    box-sizing: border-box;
    font-family: monospace;
    white-space: pre;
  }
}
</style>
