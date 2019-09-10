<template>
  <div class="dealmessage">
    <div class="header"></div>
    <div class="profile-intro">
      <img class="avatar_pic" src="@/assets/img/Avatar.jpg">
      <div class="personal-info">
        <span class="name">Juhua</span><br>
        <span class="signature">菊花残，满地伤</span><br>
        <svg-icon class="icon-style" icon-class='IDauthen'></svg-icon>
        <span class="icon-style">已认证</span>  
      </div>
      <div class="profile-personal-letter">
        <el-link href="https://element.eleme.io" target="_blank">私聊</el-link>
      </div>
      <div>
        <input type="button" value="关注" class="btnfollow" @click="follow()">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.dealmessage {
  width: 100%;
  background: white;
  .header {
    height: 50px;
    background:$theme-color;
  }
  .profile-intro {
    height: 160px;
    display: flex;
    background: rgb(50,50,50);
    color:white;

    .avatar_pic { 
      display: block;
      margin-left:40px;
      margin-top:20px;
      margin-bottom: 20px;
      width:120px;
      height:120px;
      border-radius:50%;
      border:2px solid rgb(150,150,150);
    }

    .personal-info {
      display: block;
      margin-left:30px;
      margin-right:30px;
      margin-top:40px;
      margin-bottom: 20px;
      font-weight:bold;
      .name{
        font-size:30px;
      }
      .signature{
        font-size:12px;
      }
    }

    .profile-personal-letter{
      background:$theme-color;
      margin-right:20px;
      margin-left:20px;
      margin-top:70px;
      font-size:15px;
      height:24px;
      border: 1px solid $theme-color;
      border-radius:4px;
      line-height:24px;
      padding:4px 10px;
    }
    .btnfollow{
      background:rgb(207,26,26);
      color:white;
      margin-right:10px;
      margin-left:10px;
      margin-top:70px;
      min-width:auto;
      font-size:15px;
      height:36px;
      width:55px;
      border: 1px solid rgb(207,26,26);
      border-radius:4px;
      line-height:24px;
      //padding:4px 10px;
    }
  }

  .icon-style{
    color:rgb(200,200,200);
    margin-top:5px;
    font-size:10px;
  }
}
</style>