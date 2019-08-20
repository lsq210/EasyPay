<template>
  <div>
    <div class="header">
      <input>
      <div class="classification"></div>
    </div>
    <div>
      这里加载地图
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
  height: 142px;
  text-align: center;
  background-color: $theme-color;
  .classification {
    width: 90vw;
    height: 60px;
    background-color: white;
    margin:0 auto;
  }
  input {
    margin: 12px 0 8px 0;
    width: 90vw;
    height: 40px;
    opacity: 0.8;
  }
}
</style>