<template>
  <div>
    <div class="welcome">欢迎加入我们🎉</div>
    <div class="register">
      <div v-for="(item, index) in registerList"
      v-bind:key="`registerList-${index}`">
        <span>{{ item.text }}</span>
        <input placeholder="" 
        v-bind:type="item.type" 
        v-model="item.value"
        style="width: 50vw"><br>
      </div>
      <el-button round style="width: 30vw; margin-top: 30px">注册</el-button>
    </div>
    <div class="foot">
      <span>注册代表您已同意</span>
      <a>《供需宝用户协议》</a>
    </div>
  </div>
</template>

<script>
// import loginApi from '@/apis/login.api'
import cache from '@/cache'
import { USER_TOKEN } from '@/cache/keys'
// import md5 from 'blueimp-md5'

export default {
  data () {
    return {
      registerList: [{
        value: '',
        type: 'text',
        text: '用户名'
      }, {
        value: '',
        type: 'password',
        text: '密码'
      }, {
        value: '',
        type: 'password',
        text: '确认密码'
      }, {
        value: '',
        type: 'text',
        text: '邮箱地址'
      }]
    }
  },
  mounted () {
    cache.set(USER_TOKEN, null)
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.welcome {
  font-size: 30px;
  margin: 10vh 0 0 10vw;
}
.register {
  line-height: 4rem;
  text-align: center;
  padding: 6vh 10vw 0 10vw;
  // display: inline-flex;
  input {
    font-size: 20px;
    border-top: 0;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 1px solid #888899;
    margin-right: 10px;
    padding: 6px;
    float: right;
  }
  span {
    float: left;
  }
}
.foot {
  position: absolute;
  text-align: center;
  color:#888888;  
	bottom: 0;
	height: 4vh;
	width: 100%;
  font-size: 12px;
  a {
    color: $theme-color;
  }
}
</style>