<template>
  <el-container>
    <el-header height="40">
      <div v-on:click="$router.go(-1)" style="display: inline">
        <svg-icon class="back" icon-class='back'></svg-icon>
      </div>
      <svg-icon class="share" icon-class='share'></svg-icon>
    </el-header>

    <div class="profile-intro">
      <el-avatar :size="90">
        <img src="@/assets/img/lsq.png">
      </el-avatar>
      <div class="name">
        <span>lsq210</span>
        <svg-icon class="icon-style" icon-class='IDauthen'></svg-icon>       
        <span class="icon-style">已认证</span><br>
        <span class="signature">长期拼麻辣香锅~</span><br>
      </div>
    </div>

    <div class="switchbar">
      <div :class="{theme:imshow,default:!imshow}" v-on:click="$router.push('/personal-page/my-deal');imshow=true">我的</div>
      <div :class="{theme:!imshow,default:imshow}" v-on:click="$router.push('/personal-page/comment');imshow=false">评价</div>
    </div>
    <router-view></router-view>
  </el-container>
</template>

<script>
import homeApi from '@/apis/user.api.js'
export default {
  data () {
    return {
      userName: '',
      userSignature: '',
      imshow: true
    }
  },
  mounted: function () {
    homeApi.getUserInfor()
      .then(response => {
        console.log('mock', response.data)
        this.userName = response.data.userInfor[0].userName
      })
      .catch(error => {
        console.error(error.message)
      })
  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.el-header {
  width: 100%;
  background:$theme-color;
  line-height:40px;
  .share {
    float:right;
    margin-top:12px;
    margin-right:15px;
  }
}
.switchbar {
  display: flex;
  background-color: white;
  font-size: 17px;
  text-align: center;
  height:1.8rem;
  margin-top:5px;
}
.theme {
  color:$theme-color;
  width:50%;
  border-bottom: 1px solid;
}
.default {
  color:black;
  width:50%;
  border-bottom: 1px solid;
}
.profile-intro {
  height: 130px;
  display: flex;
  background: rgb(50,50,50);
  color:white;
  border-top:1px solid  rgb(50,50,50);
  border-bottom:1px solid  rgb(50,50,50);
  .el-avatar {
    margin:15px;
  }
  .name {
    font-size:25px;
    margin-top:30px;  
    .signature {
      font-size:12px;
    }
  }    
  .btnfollow {
    float:right;
    margin-right:10px;
    margin-top:60px;
  }
}
.icon-style{
  margin-top:10px;
  color:$theme-color;
  font-size:8px;
  font-weight: bold;  
}
</style>