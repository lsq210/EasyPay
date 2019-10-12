<template>
<div class="body">
    <div v-for="item in Hots" :key="item.id" class="text item">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <img :src="item.img" class="image">
          <div class="name">
            <span> {{item.name}}</span>
            <el-tag type="warning" style="float: right; padding: 1px 0">详情</el-tag><br>
            <span class="MessageInfo">阅读:{{item.read}}</span><br>
            <span class="MessageInfo">讨论:{{item.discuss}}</span>
          </div>
        </div>
        {{item.text}}<br>
      </el-card>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      Hots: [
        {
          img: require('../assets/img/dianying.png'),
          name: '#看电影#',
          text: '当下最受欢迎的电影都在这里',
          read: 318000,
          discuss: 503822
        },
        {
          img: require('../assets/img/kaoyan.png'),
          name: '#备战考研#',
          text: '考研书籍、学霸笔记、考验攻略...',
          read: 198000,
          discuss: 578961
        },
        {
          img: require('../assets/img/meishi.png'),
          name: '#中华美食#',
          text: '有什么好吃又实惠的美味呢',
          read: 118089,
          discuss: 439282
        },
        {
          img: require('../assets/img/yanchu.png'),
          name: '#艺人演出#',
          text: '说不定有你想要的演唱会门票哦',
          read: 10086,
          discuss: 725827
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.body{
    background-color:white;
    width: 99%
    height：600px
  }

  .image {
    width: 20%;
    height: 60px;
    }
  .text {
    font-size: 10px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix {
    display: table;
    content: "";
    color:black;
    display: flex;
    .name{
      width: 80%;
      font-size:12px;
      margin:5px;
    }
    .MessageInfo{
    font-size:8px;
    color:rgb(100,100,100);
    }
  }  

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 99.5%;
  }

  .el-card__header{
    padding:4px 20px;
  }
  .el-card__body{
    padding:8px 20px;
  }
</style>