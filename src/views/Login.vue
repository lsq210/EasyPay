<template>
  <div>
    <div class="title">
      <div class="welcome">欢迎来到供需宝</div>
      <div class="register" @click="$router.push('register')">注册新账号</div>
    </div>
    <div class="loginbody">
      <input v-model="userName" placeholder="用户名" style="width: 66vw"><br>
      <input v-model="password" type="password" placeholder="密码" style="width: 66vw"><br>
      <el-button round style="width: 30vw; margin-top: 30px" @click="login()">登录</el-button>
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
    <div class="foot">
      <span>登录代表您已同意</span>
      <a>《供需宝用户协议》</a>
    </div>
  </div>
</template>

<script>
import loginApi from '@/apis/login.api'
import cache from '@/cache'
import { USER_TOKEN } from '@/cache/keys'
import md5 from 'blueimp-md5'

export default {
  data () {
    return {
      userName: '',
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
  },
  mounted () {
    cache.set(USER_TOKEN, null)
  },
  methods: {
    login () {
      loginApi.validate(this.userName, md5(this.password)).then(res => {
        if (res.data.token) {
          cache.set(USER_TOKEN, res.data.token)
          this.$router.push({
            name: 'home-page'
          })
        } else {
          cache.set(USER_TOKEN, null)
          this.$message.error({
            message: res.data.message
          })
        }
      }).catch(e => {
        cache.set(USER_TOKEN, null)
        this.$message.error({
          message: e.message
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.title {
  padding: 12vh 25px 12vh 25px;
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  .welcome {
    font-size: 30px;
    display: inline-flex;
  }
  .register {
    font-size: 16px;
    color: $theme-color;
    display: inline-flex;
    float: right;
    right: 0;
  }
}
.loginbody {
  line-height: 4rem;
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
  margin: 6vh 6vh 0 6vh;
  text-align: center;
  .split-line {
    color:#888888
  }
  .ways {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    .item {
      cursor: pointer;
      margin: 17.5px;
    }
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