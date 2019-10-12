<template>
  <div>
    <div class="header">
      <div class="back" v-on:click="$router.go(-1)">
        <svg-icon icon-class="return" style="width: 28px; height: 28px"></svg-icon>
      </div>
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
  }
}
</style>