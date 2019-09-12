<template>

  <el-container>
    <el-header>Header</el-header>

    <div class="profile-intro">
      <img class="avatar_pic" src="@/assets/img/Avatar.png">
      <div class="personal-info">
        <span class="name">Juhua</span><br>
        <span class="signature">菊花残，满地伤</span><br>
        <svg-icon class="icon-style" icon-class='IDauthen'></svg-icon>
        <span class="icon-style">已认证</span>  
      </div>
      <div class="profile-personal-letter">
        <el-link underline="false" href="https://element.eleme.io" target="_blank">私聊</el-link>
      </div>
      <el-row class="btnfollow">
        <el-button round type="danger" size="medium">关注</el-button>
      </el-row>
    </div>

    <el-main>
      <div >
        <div>
          <el-avatar src="@/assets/img/Avatar.png"></el-avatar>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.el-header {
  width: 100%;
  background:$theme-color;
}
.el-main {
  background-color:rgb(236, 225, 225);
  text-align: center;
  height: 100%;
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
    height:26px;
    width:28px;
    border: 1px solid $theme-color;
    border-radius:20px;
    line-height:24px;
    padding:4px 20px;
  }
  .btnfollow{
    margin-right:10px;
    margin-left:10px;
    margin-top:70px;
  }
}

.icon-style{
  color:rgb(200,200,200);
  margin-top:5px;
  font-size:10px;
}
</style>