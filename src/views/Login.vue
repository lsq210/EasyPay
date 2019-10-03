<template>
  <div>
    <span class="title">欢迎来到供需宝</span>
    <div class="loginbody">
      <input v-model="userId" placeholder="手机号码" style="width: 245px"><br>
      <input v-model="password" placeholder="短信验证码" style="width: 125px"><el-button round>获取验证码</el-button>
    </div>
    <div class="third-login">
      <div class="split-line">-第三方登录-</div>
      <div class="ways">
        <div class="item" 
        v-for="(item, index) in loginList"
        v-bind:key="`loginList-${index}`">
        <svg-icon v-bind:icon-class="item.icon" style="width: 50px; height: 50px"></svg-icon><br>
        <span>{{ item.text }}</span>
        </div>
      </div> 
    </div>
    <div class="foot">登录代表您已同意《供需宝用户协议》</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userId: '',
      password: '',
      loginList: [{
        icon: 'weixin',
        text: '微信'
      }, {
        icon: 'QQ',
        text: 'QQ'
      }, {
        icon: 'login',
        text: '学号'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 30px;
  line-height: 15rem;
  margin: 30px;
}
.loginbody {
  line-height: 5rem;
  text-align: center;
  input {
    font-size: 20px;
    border-top: 0;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 1px solid #888899;
    margin-right: 10px;
    padding: 6px;
  }
}
.third-login {
  margin: 60px;
  text-align: center;
  .split-line {
    color:#888888
  }
  .ways {
    margin-top: 30px;
    .item {
      cursor: pointer;
      float: left;
      margin: 17.5px;
    }
  }
}
.foot {
  position: absolute;
  text-align: center;
  color:#888888;  
	bottom: 0;
	height: 40px;
	width: 100%;
	// background-color: green;
  font-size: 12px;
}
</style>