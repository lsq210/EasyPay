<template>
  <div class="bottom">
    <div class="item" 
      v-for="(item, index) in NavList"
      v-bind:key="`NavList-${index}`"
      v-on:click="$router.push(item.path)">
      <svg-icon v-bind:icon-class="item.icon"></svg-icon><br>
      <span v-bind:class="{'active':$route.path===item.path}">{{ item.text }}</span>
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
  height: 60px;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #aaaaaa;
  background-color: white;
  display: flex;
  z-index: 1;
  .item {
    text-align: center;
    width: 20%;
    cursor: pointer
  }
  .active {
    color: $theme-color;
  }
}
</style>
