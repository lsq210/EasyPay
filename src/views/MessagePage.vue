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
        <el-avatar>
          <img :src="item.avatar">
        </el-avatar>
        <span class="name">{{ item.name }}</span><br>
        <span>{{ item.content }}</span><br>
        <span class="date">{{ item.date }}</span>
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
          content: '你好，一起拼麻辣香锅吗？',
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
  background-color: $theme-color;
  height: 100vh;
  .title {
    font: $title-font;
    text-align: center;
    line-height: 2rem;
  }
  .search {
    margin: 1rem 2rem 1rem 2rem;
    opacity: 0.95;
  }
  .chat {
    margin: 1rem 2rem 1rem 2rem;
    background-color: white;
    height: 77vh;
    .chat-box {
      border-bottom: solid #b1b1b1;
      padding: 8px;
      .el-avatar {
        display: inline-block;
        vertical-align: middle;
      }
      .name {
        font-size: 18px;
      }
    }
  }
}
</style>