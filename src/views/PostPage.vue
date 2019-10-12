<template>
  <div>
<!-- 页面头 -->
    <div class="header">
      <svg-icon @click.native="$router.push('/home-page')" v-bind:icon-class="'back'" class="icon"></svg-icon>
    </div>
    <div class="page_title">
      发布消息
    </div>
    <div class="page_subtitle">
      消息发布后将实时显示在首页上，感兴趣的人可以随时点击进入你的消息界面并与你取得联系
    </div>

<!-- 主要内容输入模块 -->
    <div class="maintext">
      <textarea type="message"
        placeholder="请简要叙述你要发布的信息......"
        v-model="message_text"
        onpropertychange= "this.style.posHeight=this.scrollHeight "
        style="margin: 40px 30px;"
        rows="5"
        name="S1"
        cols="50">
      </textarea>
    </div>

<!-- 上传图片 -->
    <div style="margin: 10px 20px;">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>

<!-- 选择时间模块 -->
    <div>
      <el-row>
        <el-col :span="8">
          <div class="Bottom_subtitle">
            <svg-icon  v-bind:icon-class="'time'" class="icon"></svg-icon>
            完成时间
          </div>
        </el-col>

        <el-col :span="16">
          <div class="block">
            <el-date-picker
              v-model="time_picker"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-col>
      </el-row>
    </div>

<!-- 选择地点模块 -->
    <div>
      <el-row>
        <el-col :span="8">
          <div class="Bottom_subtitle">
            <svg-icon  v-bind:icon-class="'location'" class="icon"></svg-icon>
            发布地址
          </div>
        </el-col>
        <el-col :span="16">
          <div class="block">
            <!-- {{ location.creditProvince }} {{ location.creditCity }} {{ location.creditArea }} {{ location.creditStreet }} -->
          </div>
        </el-col>
      </el-row>
    </div>

<!-- 设置价格模块 -->
    <div>
      <el-row>
        <el-col :span="8">
          <div class="Bottom_subtitle">
            <svg-icon  v-bind:icon-class="'money'" class="icon"></svg-icon>
            设置价格
          </div>
        </el-col>

        <el-col :span="16">
          <div class="money">
            <input v-model="money_input" placeholder="输入金额">元
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
// import BMap from 'BMap'
export default {
  data () {
    return {
      location: null,
      title_text: '',
      message_text: '',
      dialogImageUrl: '',
      dialogVisible: false,
      pickerOptions: {
        shortcuts: {
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }
      },
      time_picker: ''
    }
  },
  methods: {
    // getmylocation () {
    //   let _this = this
    //   var geolocation = new BMap.Geolocation()
    //   /* this.getStatus() === BMAP_STATUS_SUCCESS */
    //   geolocation.getCurrentPosition(function (r) {
    //     if (r.accuracy == null) {
    //       alert('您已拒绝地理位置授权')
    //     } else {
    //       const myGeo = new BMap.Geocoder()
    //       myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), data => {
    //         if (data.addressComponents) {
    //           const result = data.addressComponents
    //           const location = {
    //             creditLongitude: r.point.lat, // 经度
    //             creditLatitude: r.point.lng, // 纬度
    //             creditProvince: result.province || '', // 省
    //             creditCity: result.city || '', // 市
    //             creditArea: result.district || '', // 区
    //             creditStreet: (result.street || '') + (result.streetNumber || '') // 街道
    //           }
    //           _this.location = location
    //           _this.creditLongitude = location.creditLongitude
    //           _this.creditLatitude = location.creditLatitude
    //           _this.creditCity = location.creditCity
    //           // alert(this.getStatus())
    //         }
    //       })
    //     }
    //   })
    // },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    goBack () {
      console.log('go back')
    }
  }
  // mounted () {
  //   this.getmylocation()
  // }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.header {
  width: 100%;
  height: 60px;
  margin-top: 10px;
  .icon {
    width: 30px;
    height: 30px;
    margin-left : 10px;
    
  }
}
.page_title{
  margin-left : 30px;
  font-size:40px;
  font-family:"微软雅黑";
  color: rgb(0, 0, 0);
  font-weight:bold
}
.page_subtitle{
  margin-top : 20px;
  margin-left : 30px;
  margin-right : 30px;
  font-size:15px;
  font-family:"微软雅黑";
  color: rgb(70, 68, 68)
}
.maintext{
  textarea{
    border: 0;
    outline: none;
    background-color:rgba(255, 255, 255, 255);
    margin-left : 10px;
    font-size:20px
  }
  textarea::placeholder {
    color:rgb(172, 172, 172);
    font-family:"微软雅黑";
  }
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.Bottom_subtitle{
  text-align: center;
  margin-top: 10px;
  color:rgb(114, 114, 114);
  font-size:15px;
}
.money{
  input{
    border: 0;
    outline: none;
    background-color:rgba(255, 255, 255, 255);
    margin-top : 11px;
    font-size:15px
  }
  input::placeholder {
  /* Mozilla Firefox 19+ */
  color:rgb(172, 172, 172);
  font-family:"微软雅黑";
  }
}

</style>