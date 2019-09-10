
<template>
  <div>
    <div class="header">
      <input>
      <div class="classification">
        <div class="icon"
        v-for="(item,index) in iconlist"
        v-bind:key="`iconlist-${index}`"
        v-on:click="$router.push(item.path)">
        <svg-icon v-bind:icon-class="item.icon" class="pic"></svg-icon><br>
        <span v-bind:class="{'active':$route.path===item.path}">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div>
      <baidu-map class="map" center="武汉" ak="oIK5hbeO8Zb74VgFY3DWL8KccHWx8hI2">
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'
export default {
  components: {
    BaiduMap,
    BmGeolocation
  },
  data () {
    return {
      iconlist: [
        {
          text: '服装闲置',
          icon: 'clothing'
        },
        {
          text: '二手书籍',
          icon: 'book'
        },
        {
          text: '美妆饰品',
          icon: 'makeup'
        },
        {
          text: '数码产品',
          icon: '数码产品'
        },
        {
          text: '共享出行',
          icon: 'trip'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.map {
  width: 100%;
  height: 459px;
}
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
    display: flex;
      .icon {
        text-align: center;
        width: 20%;
        cursor: pointer
      }
      .pic{
        width: 40px;
        height: 35px;
      } 
  }
  input {
    margin: 12px 0 8px 0;
    width: 90vw;
    height: 40px;
    opacity: 0.8;
  }
}
</style>