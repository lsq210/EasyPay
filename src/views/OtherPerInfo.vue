<template>
  <el-container>
    <el-header height="40">
      <svg-icon class="back" icon-class='back'></svg-icon>
      <svg-icon class="share" icon-class='share'></svg-icon>
    </el-header>

    <div class="profile-intro">
      <el-avatar :size="90">
        <img src="@/assets/img/Juhua.png">
      </el-avatar>
      <div class="name">
        <span>Juhua</span>
        <svg-icon class="icon-style" icon-class='IDauthen'></svg-icon>       
        <span class="icon-style">已认证</span><br>
        <span class="signature">菊花残，满地伤</span><br>
      </div>
      <el-row class="btnfollow">
        <el-button round type="warning" size="small">私聊</el-button>
      </el-row>
      <el-row class="btnfollow">
        <el-button round type="danger" size="small">关注</el-button>
      </el-row>
    </div>

    <div class="switchbar">
      <div :class="{theme:imshow,default:!imshow}" v-on:click="$router.push('/personal-page/my-deal');imshow=true">我的</div>
      <div :class="{theme:!imshow,default:imshow}" v-on:click="$router.push('/personal-page/comment');imshow=false">评价</div>
    </div>
    <router-view></router-view>
  </el-container>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '@/styles/variables.scss';
  .el-header {
    width: 100%;
    background:$theme-color;
    line-height:40px;
    .share{
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
    .theme{
    color:$theme-color;
    width:50%;
    border-bottom: 1px solid;
  }
  .default{
    color:black;
    width:50%;
    border-bottom: 1px solid;
  }


.profile-intro {
  height: 130px;
  display: flex;
  background: rgb(50,50,50);
  color:white;
  .el-avatar{
    margin:15px;
  }
  .name{
    font-size:25px;
    margin-top:30px;  
    .signature{
    font-size:12px;
    }
  }    

  .btnfollow{
    float:right;
    margin-right:10px;
    margin-top:60px;
  }
}

.icon-style{
  color:rgb(200,200,200);
  margin-top:5px;
  font-size:10px;
}
</style>