<template>
  <div class="bottom">
    <div class="item" 
      v-for="(item, index) in NavList"
      v-bind:key="`NavList-${index}`"
      v-on:click="$router.push(item.path)">
      <svg-icon :icon-class="item.icon" :style="item.size"></svg-icon><br>
      <span class="text" v-bind:class="{'active':$route.path.indexOf(item.path) != -1}">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
import NavList from '@/router/NavList'
export default {
  name: 'navigation',
  data () {
    return {
      NavList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.bottom {
  width: 100%;
  height: 68px;
  position: fixed;
  bottom: 0px;
  background-color: white;
  display: flex;
  z-index: 1;
  .item {
    margin-top: 4px;
    text-align: center;
    width: 20%;
    cursor: pointer;
  }
  .text {
    margin-top: 3px;
    font-size: 14px;
  }
  .active {
    color: $theme-color;
  }
}
</style>
