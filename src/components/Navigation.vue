<template>
  <div class="bottom">
    <div class="item" 
      v-for="(item, index) in navList"
      v-bind:key="`navList-${index}`"
      v-on:click="$router.push(item.path)">
      <div>icon</div>
      <span v-bind:class="{'active':$route.path===item.path}">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
import navList from '@/router/navList'
export default {
  name: 'navigation',
  data () {
    return {
      navList
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
  display: flex;
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
