<template>
  <div class="personal">
    <div class="header"></div>
    <div class="intro">
      <img src="@/assets/img/cordova.png">
      <div class="intro-meta">
        <span>lsq210</span><br>
        <span>长期出售二手书~</span><br>
        <span class="authentication">已认证</span>
      </div>
    </div>
    <div class="switchbar">
      <span v-on:click="$router.push('/personal-page/my-deal')">我的</span>
      <span v-on:click="$router.push('/personal-page/comment')">评价</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import homeApi from '@/apis/user.api.js'
export default {
  // data () {
  //   return {
  //     userId: ''
  //   }
  // },
  mounted: function () {
    homeApi.getUserInfor()
      .then(response => {
        console.log('mock', response.data)
      })
      .catch(error => {
        console.error(error.message)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.personal {
  width: 100%;
  background: $theme-color;
  .header {
    height: 36px;
  }
  .intro {
    height: 150px;
    display: flex;
    margin: 1rem 1.5rem 0 1.5rem;
    img {
      height: 120px;
      width: 120px;
      border: 1px solid #888888;
      margin-right: 1.2rem;
    }
    .intro-meta {
      line-height: 2.2rem;
      .authentication {
        background-color: white;
      }
    }
  }
  .switchbar {
    background-color: white;
    height: 2.2rem;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #888888;
    span {
      margin: 10%;
    }
  }
}
</style>