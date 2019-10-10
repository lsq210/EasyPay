<template>
  <div class="body">
    <div v-for="item in MyOrganizations" :key="item.id" class="text item">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <el-avatar :size="50">
          <img :src="item.avatar">
          </el-avatar>
          <div class="name">
            <span> {{item.name}}</span>
            <el-tag type="warning" style="float: right; padding: 1px 0">进入组织</el-tag><br>
            <span class="MessageInfo">关注:{{item.attention}}</span>
          </div>
        </div>
        {{item.solgan}}<br>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      MyOrganizations: [
        {
          name: '武汉大学',
          avatar: require('../assets/img/wuda.png'),
          attention: 7500,
          solgan: '欢迎武大学子加入组织！'
        },
        {
          name: '华中科技大学',
          avatar: require('../assets/img/huake.png'),
          attention: 8800,
          solgan: '有小姐姐加入吗？'
        },
        {
          name: '武大遥感',
          avatar: require('../assets/img/yaogan.png'),
          attention: 1500,
          solgan: '卖全站仪，3万一个，10万3个'
        },
        {
          name: '武汉大学信息学部供需',
          avatar: require('../assets/img/xinbu.png'),
          attention: 3500,
          solgan: '有偿汉姆一元一次'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
  .body{
    background-color:white;
    width: 99%
    height：600px
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