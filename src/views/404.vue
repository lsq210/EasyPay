<template>
  <div>
    这是404页面<br><br>
    <button v-on:click="$router.push('home-page')">点击我回主页</button>
    <div>{{ dealMessages }}</div>
  </div>
</template>

<script>
// import dealMessages from '@/apis/mock/dealMessages'
import dealApi from '@/apis/dealMessages.api.js'
export default {
  data () {
    return {
      dealMessages: ''
    }
  },
  mounted: function () {
    dealApi.getDealMessages()
      .then(response => {
        console.log('mock', response.data)
        this.dealMessages = response.data.dealMessages
      })
      .catch(error => {
        console.error(error.message)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
</style>