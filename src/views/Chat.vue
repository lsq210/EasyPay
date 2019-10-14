<template>
  <div>
    <div class="header">
      <div class="back" v-on:click="$router.go(-1)">
        <svg-icon icon-class="back" style="width: 20px; height: 20px"></svg-icon>
      </div>
      <span>Sueyeah</span>
    </div>
    <ChatList></ChatList>
  </div>
  
</template>

<script>
import ChatList from '../components/ChatList'
export default {
  name: 'app',
  components: {
    ChatList
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.header {
  height: 40px;
  background-color: $theme-color;
  display: flex;
  
  .back {
    margin: auto 0;
    padding-left: 5px;
    text-align: center;
  }
  span {
    text-align: center;
    margin: auto 0;
    padding-left: 33vw;
  }
}
</style>