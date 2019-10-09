
<template>
  <div>
    <div class="header">
      <div>
        <el-input v-model="input"
          placeholder="请输入内容" 
          clearable
          style="margin-top: 5px"
        >
        </el-input>
        <el-button type="success" 
          icon="el-icon-search" 
          style="margin-top: 5px;"
          size="medium" round>搜索
        </el-button>
      </div>
      <div class="classification" style="margin-top: 15px;">
        <div class="icon"
        v-for="(item, index) of iconlist"
        v-bind:key="`inconlist-${index}`"
        v-on:click="$router.push(item.path)">
        <svg-icon v-bind:icon-class="item.icon" class="pic" ></svg-icon><br>
        <span v-bind:class="{'active':$route.path===item.path}" @click="iconclick(item)">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div>
      <baidu-map class="map" @ready="handler" :center="centerr" :zoom=17 >
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <div v-for="(point, index) in pointlist1"
        :key="`pointList1-${index}`">
          <bm-marker
            :position="{lng: point.position.lng, lat: point.position.lat}" 
            :dragging="false" 
            @click="infoWindowOpen(item)" 
            :icon="{
              url: require('@/assets/img/location.png'),
              size: {width: 35, height: 35},
              opts: {
                imageSize: {width: 35, height: 35}
              }
            }"
            >
            <bm-info-window
            :show="point.showinfowin" @close="infoWindowClose(point)"
            @open="infoWindowOpen(point)">{{point.text}}
            </bm-info-window> 
          </bm-marker>
        </div>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import {BaiduMap, BmNavigation, BmView, BmGeolocation, BmCityList} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmGeolocation,
    BmNavigation,
    BmCityList,
    BmView
  },
  data () {
    return {
      autoLocationPoint: {lng: 114.3678, lat: 30.541},
      centerr: {lng: 114.3678, lat: 30.541},
      initLocation: false,
      showinfowin: false,
      input: '',
      iconlist: [
        {
          text: '服装闲置',
          icon: 'clothing',
          num: 1
        },
        {
          text: '二手书籍',
          icon: 'book',
          num: 2
        },
        {
          text: '美妆饰品',
          icon: 'makeup',
          num: 3
        },
        {
          text: '数码产品',
          icon: '数码产品',
          num: 4
        },
        {
          text: '共享出行',
          icon: 'trip',
          num: 5
        }
      ],
      pointlist1: [
        {
          type: '服装闲置',
          text: '出售军训服',
          position: {lng: 114.369, lat: 30.542},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '服装闲置',
          text: '低价出售遥感专业书',
          position: {lng: 114.366, lat: 30.543},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '服装闲置',
          text: '出cherry机械键盘一个',
          position: {lng: 114.367, lat: 30.541},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '二手书籍',
          text: '出售军训服',
          position: {lng: 114.373, lat: 30.549},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '二手书籍',
          text: '低价出售遥感专业书',
          position: {lng: 114.372, lat: 30.550},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '二手书籍',
          text: '出cherry机械键盘一个',
          position: {lng: 114.371, lat: 30.548},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '美妆饰品',
          text: '出售军训服',
          position: {lng: 114.369, lat: 30.536},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '美妆饰品',
          text: '低价出售遥感专业书',
          position: {lng: 114.366, lat: 30.534},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '美妆饰品',
          text: '出cherry机械键盘一个',
          position: {lng: 114.367, lat: 30.535},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '数码产品',
          text: '出售军训服',
          position: {lng: 114.369, lat: 30.547},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '数码产品',
          text: '低价出售遥感专业书',
          position: {lng: 114.366, lat: 30.548},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '数码产品',
          text: '出cherry机械键盘一个',
          position: {lng: 114.367, lat: 30.549},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '共享出行',
          text: '出售军训服',
          position: {lng: 114.381, lat: 30.542},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '共享出行',
          text: '低价出售遥感专业书',
          position: {lng: 114.372, lat: 30.543},
          showinfowin: false,
          showpoint: false
        },
        {
          type: '共享出行',
          text: '出cherry机械键盘一个',
          position: {lng: 114.373, lat: 30.541},
          showinfowin: false,
          showpoint: false
        }
      ]
    }
  },
  methods: {
    infoWindowClose (point) {
      point.showinfowin = false
    },
    infoWindowOpen (point) {
      point.showinfowin = true
    },
    handler ({BMap, map}) {
      console.log(BMap, map)
      let _this = this// 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        console.log(r)
        _this.centerr.lng = r.lng
        _this.centerr.lat = r.lat// 设置center属性值
        _this.autoLocationPoint = {lng: r.lng, lat: r.lat}// 自定义覆盖物
        _this.initLocation = true
        console.log('center', _this.centerr)
      }, {enableHighAccuracy: true})
    },
    showpo (point) { // 在某一距离内显示点
      var X = (point.position.lng - this.centerr.lng) * 85.5 // 将经纬度转距离
      var Y = (point.position.lat - this.centerr.lat) * 111
      if ((X * X) + (Y * Y) < 0.64) { // 设定距离800m
        point.showpoint = true
      }
      return point.showpoint
    },
    iconclick (item) { // 点击不同种类在地图上显示相应点
      var i = 0
      for (i = 0; i < this.pointlist1.length; i++) {
        var X1 = (this.pointlist1[i].position.lng - this.centerr.lng) * 85.5
        var Y1 = (this.pointlist1[i].position.lat - this.centerr.lat) * 111
        if (this.pointlist1[i].type === item.text && (X1 * X1) + (Y1 * Y1) < 0.64) {
          this.pointlist1[i].showpoint = true
        } else {
          this.pointlist1[i].showpoint = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.map {
  width: 100%;
  height: 75vh;
  z-index: 0;
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
  // input {
  //   margin: 12px 0 8px 0;
  //   width: 50vw;
  //   height: 40px;
  //   opacity: 0.8;
  // }
  .el-input{
    width: 70vw;
  }
}
</style>
