<template>
  <div>
    <ul class="chatlist">
      <li v-for="(item, index) in records" 
        v-bind:key="`records-${index}`"
        class="chat-item"
        :class="item.type==1?'chat-mine':'chat-friend'">
        <img v-bind:src="item.avator">
        <div class="meta">
          <div class="info">{{ item.info }}</div>
          <div class="chat-text">{{ item.content }}</div>
        </div>
      </li>
    </ul>
    <div class="foot">
      <el-input v-model="input" placeholder="请输入内容" style="width: 80%"></el-input>
      <el-button type="warning" plain v-on:click="send">发送</el-button>
    </div>
  </div>
</template>

<script>
import mine from '@/assets/img/lsq.png'
import friend from '@/assets/img/Sueyeah.png'
export default {
  data () {
    return {
      showSelBox: 0, // 0隐藏 1显示表情 2显示其他
      topStatus: '',
      input: '',
      records: [
        {
          type: 2,
          info: 'Sueyeah',
          content: '姐妹，你今天想拼哪里的麻辣香锅？',
          avator: friend
        },
        {
          type: 1,
          info: 'lsq210',
          content: '广八路那家吧',
          avator: mine
        },
        {
          type: 2,
          info: 'Sueyeah',
          content: '好滴好滴~',
          avator: friend
        }
      ]
    }
  },
  methods: {
    send: function () {
      this.records.push(
        {
          type: 1,
          info: 'lsq210',
          content: this.input,
          avator: mine
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.chatlist {
  position: absolute;
  top: 60px;
  bottom: 48px;
  left: 0px;
  right: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px;
  .chat-item {
    display: flex;
    margin-bottom: 15px;
    .meta {
      .chat-text {
        position: relative;
        line-height: 22px;  
        padding: 10px 15px;
        background-color: #eee;
        border-radius: 16px;
        color: #333;
        word-break: break-all;
        max-width: 462px\9;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
      }
      .chat-text::after {
        content: "";
        position: absolute;
        left: -10px;
        top: 15px;
        width: 0;
        height: 0;
        border-style: solid dashed dashed;
        border-color: #eee transparent transparent;
        overflow: hidden;
        border-width: 10px;
      }
      .info {
        font-style: normal;
        font-size: 12px;
        right: 60px;
        line-height: 24px;
        white-space: nowrap;
        color: #999;
      }
    }
    &.chat-mine {
      text-align: right;
      padding-left: 0;
      padding-right: 10px;
      flex-direction: row-reverse;
      .meta {
        margin-right: 10px;
        .info {
          margin-right: 5px;
        }
        .chat-text {
          background-color: rgb(225, 243, 216);
        }
        .chat-text::after {
          left: auto;
          right: -10px;
          border-color: rgb(225, 243, 216) transparent transparent transparent;
        }
      }
    }
    &.chat-friend {
      padding-left: 10px;
      min-height: 68px;
      .meta {
        margin-left: 10px;
        .info {
          margin-left: 5px;
        }
      }
    }
  } 
  img {
    width: 40px;
		height: 40px;
		border-radius: 100%;
  }
}
.chatlist-bottom {
  bottom: 48px;
}
.chatlist-bottom-collapse {
  bottom: 198px;
}
.foot {
  width: 100%;
  min-height: 48px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #F8F8F8;
}
</style>