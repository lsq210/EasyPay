<template>
  <div>
    <div class="header">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        clearable
        v-model="input">
      </el-input>
      <div class="classification" style="margin-top: 15px;">
        <div class="icon"
        v-for="(item, index) of iconlist"
        v-bind:key="`inconlist-${index}`"
        v-on:click="$router.push(item.path)">
        <svg-icon v-bind:icon-class="item.icon" class="pic"></svg-icon><br>
        <span v-bind:class="{'active':$route.path===item.path}" @click="iconclick(item)">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div>
      <baidu-map class="map" @ready="handler" :center="centerr" :zoom=15 >
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-circle
          stroke-color="blue"
          :center="circlePath.center"
          :radius="circlePath.radius" 
          :stroke-opacity="0.5"
          :stroke-weight="2"
          :editing="true"
          @lineupdate="updateCirclePath">
        </bm-circle>
        <div v-for="(point, index) in pointlist1"
        :key="`pointList1-${index}`">
          <bm-marker
            :position="{lng: point.position.lng, lat: point.position.lat}" 
            :dragging="false" 
            @click="infoWindowOpen(point)" 
            :icon="{
              url: require(`@/assets/img/postion${point.type}.png`),
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
      showinfowin: true,
      input: '',
      circlePath: {
        center: {
          lng: 114.3678,
          lat: 30.541
        },
        radius: 1000
      },
      iconlist: [
        {
          text: '服装',
          icon: 'clothing',
          num: 1
        },
        {
          text: '书籍',
          icon: 'book',
          num: 2
        },
        {
          text: '美妆',
          icon: 'makeup',
          num: 3
        },
        {
          text: '数码',
          icon: '数码产品',
          num: 4
        },
        {
          text: '出行',
          icon: 'trip',
          num: 5
        }
      ],
      pointlist1: [
        {
          type: 1,
          text: '出售军训服',
          position: {lng: 114.369, lat: 30.542},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 2,
          text: '低价出售遥感专业书',
          position: {lng: 114.366, lat: 30.543},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 3,
          text: '出cherry机械键盘一个',
          position: {lng: 114.367, lat: 30.541},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 1,
          text: '闲置西装出租',
          position: {lng: 114.373, lat: 30.549},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 2,
          text: '低价出售遥感专业书',
          position: {lng: 114.372, lat: 30.550},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 2,
          text: '收大一高数课后习题那本书',
          position: {lng: 114.371, lat: 30.548},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 4,
          text: '收霸王洗发水护发素',
          position: {lng: 114.366, lat: 30.534},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 4,
          text: '求拼资生堂发膜',
          position: {lng: 114.367, lat: 30.535},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 3,
          text: '出一个二手ipad2018，价格可议',
          position: {lng: 114.369, lat: 30.547},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 3,
          text: '收一个显示屏',
          position: {lng: 114.366, lat: 30.548},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 3,
          text: '出cherry机械键盘一个',
          position: {lng: 114.367, lat: 30.549},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 5,
          text: '请问大循环晚上几点停呀',
          position: {lng: 114.372, lat: 30.540},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 5,
          text: '每周五晚公选信部到工学部，求电动车',
          position: {lng: 114.372, lat: 30.543},
          showinfowin: false,
          showpoint: false
        },
        {
          type: 5,
          text: '电动车长期出租（仅限校内）',
          position: {lng: 114.373, lat: 30.541},
          showinfowin: false,
          showpoint: false
        }
      ]
    }
  },
  methods: {
    updateCirclePath (e) {
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    },
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
  height: 72vh;
  z-index: 0;
}
.header {
  width: 100%;
  height: 142px;
  text-align: center;
  background-color: $theme-color;
  .classification {
    width: 94vw;
    height: 60px;
    // background-color: white;
    margin:0 auto;
    display: flex;
      .icon {
        text-align: center;
        width: 20%;
        cursor: pointer;
        span {
          font-size: 14px;
          color: $second-color;
        }
      }
      .pic{
        width: 40px;
        height: 40px;
        fill: $second-color;
      } 
  }
  .el-input{
    margin-top: 10px;
    width: 90vw;
  }
}
</style>
