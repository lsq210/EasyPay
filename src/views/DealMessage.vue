<template>
  <el-container>
    <el-header height="40">
      <svg-icon class="back" icon-class='back'></svg-icon>
      <svg-icon class="share" icon-class='share'></svg-icon>
    </el-header>

    <div class="person-info">
      <el-avatar :size="90">
        <img src="@/assets/img/Juhua.png">
      </el-avatar>
      <div class="name">
        <span> Juhua</span>
        <svg-icon class="icon-style" icon-class='IDauthen'></svg-icon>
        <span class="icon-style">已认证</span><br>
        <span class="MessageInfo">2019年9月12日13:38  发布于信息学部一教</span>
      </div>

      <el-row class="btnfollow">
        <el-button round type="warning" size="small">私聊</el-button>
      </el-row>
    </div>

    <el-main>
      <div class="MessageBody">
        <svg-icon class="icon-style" icon-class='money'></svg-icon>
        <span>40r</span><br>
        <svg-icon class="icon-style" icon-class='time'></svg-icon>
        <span>2019/9/13  18:00前</span><br>
        <svg-icon class="icon-style" icon-class='address'></svg-icon>
        <span>信息学部六舍</span><br>
        <svg-icon class="icon-style" icon-class='dealmessage'></svg-icon>
        <span>出一张明晚创意城的《哪吒》电影票，位置不错</span><br><br>
        <img src="@/assets/img/nezha.jpg">
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    goBack () {
    //  console.log('go back')
    }
  }
}
</script>

<style lang="scss" scoped>
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
.el-main {
  background-color:white;
  text-align:left;
  height: 100%;
  color:black;
  font-size:13px;
  line-height:2rem;
  .MessageBody{
    .icon-style{
      margin-right:8px;
      font-size:18px;
    }
    img{
      height:300px;
      width:200px;
      margin-left:40px;
    }
  }
}
.person-info {
  color:black;
  display: flex;
  border-bottom:1px solid rgb(200,200,200);
  .el-avatar{
    margin:15px;
  }
  .name{
   // width:5%;
    margin-top:40px;
    font-size:25px;
  }
  .icon-style{
    margin-top:10px;
    color:rgb(37, 172, 104);
    font-size:8px;
    font-weight: bold;  
  }
  .MessageInfo{
    font-size:8px;
    color:rgb(100,100,100);
  }
  .btnfollow{
    margin-top:40px;
  }
}

</style>