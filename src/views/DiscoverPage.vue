<template>
  <el-container>
    <el-header height="40">
      <div class="classification"
        style="margin-top: 10px; border-bottom: 1px solid rgb(255, 187, 18)">
        <div class="icon"
        style="margin-top: 15px"
        v-for="(item, index) of iconlist"
        v-bind:key="`inconlist-${index}`"
        v-on:click="$router.push(item.path)">
          <svg-icon v-bind:icon-class="item.icon" class="pic" ></svg-icon><br>
          <span v-bind:class="{'active':$route.path===item.nav}" v-on:click="$router.push(item.nav)">{{ item.text }}</span>
        </div>
      </div>
      <router-view style="margin-top: 20px"></router-view>
    </el-header>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      iconlist: [
        {
          text: '我加入的',
          icon: 'shoucang',
          nav: '/discover/my-join'
        },
        {
          text: '附近',
          icon: 'fujin',
          nav: '/discover/near-by'
        },
        {
          text: '热门',
          icon: 'remen',
          nav: '/discover/hot-info'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.el-header {
    width: 100%;
    // background:$theme-color;
    height:100vh;
    .classification {
    width: 100%;
    height: 90px;
    background-color: white;
    margin:0 auto;
    display: flex;
     .icon {
        text-align: center;
        width: 33%;
        cursor: pointer
      }
      .pic{
        width: 40px;
        height: 35px;
      } 
  }
  .active {
    color: $theme-color;
  }
}
</style>