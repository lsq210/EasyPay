<template>
  <div class="main-body">
    <div class="title">消息</div>
    <div class="search">
      <el-input
      placeholder="搜索"
      prefix-icon="el-icon-search"
      v-model="input">
      </el-input>
    </div>	
    <div class="chat">
      <div class="chat-box"
      v-for="(item, index) in chat"
      v-bind:key="`chat-${index}`"
      v-on:click="$router.push('chat')">
        <img :src="item.avatar">
        <div class="name">{{ item.name }}</div><br>
        <div class="content">{{ item.content }}</div>
        <div class="date">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import newsAvatar from '@/assets/img/news.png'
import SueyeahAvatar from '@/assets/img/Sueyeah.png'
export default {
  data () {
    return {
      input: null,
      chat: [
        {
          avatar: newsAvatar,
          name: '通知',
          content: '您收到了一条新的评价！',
          date: '2019/8/17 20:00'
        },
        {
          avatar: SueyeahAvatar,
          name: 'Sueyeah',
          content: '姐妹，你今天想拼哪里的麻辣香锅？',
          date: '2019/8/17 21:00'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.main-body {
  height: 100vh;
  .title {
    background-color: $theme-color;
    border: 1px solid $theme-color;
    font: $title-font;
    text-align: center;
    padding-top: 6px;
    line-height: 1.5rem;
  }
  .search {
    background-color: $theme-color;
    border: 1px solid $theme-color;
    padding: 0.5rem 1rem 1rem 1rem;
    opacity: 0.95;
  }
  .chat {
    .chat-box {
      border-bottom: 0.1px  solid #b1b1b1;
      padding: 12px;
      .el-avatar {
        display: inline-block;
        vertical-align: middle;
      }
      .name {
        font-size: 18px;
        margin: -46px 0 0 50px;
      }
      .content{
        font-size: 14px;
        color: #606266;
        margin: -18px 0 0 50px;
      }
      .date{
        font-size: 14px;
        color: #b1b1b1;
        margin: 6px 0 0 0;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin: 8px 0 0 0;
      }
    }
  }
}
</style>