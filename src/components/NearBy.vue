<template>
  <div class="body">
    <div v-for="item in arrDatas" :key="item.id" class="text item">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
           <el-avatar :size="40">
           <img :src="item.img">
            </el-avatar>
          <div class="name">
            <span> {{item.name}}</span><br>
            <span class="MessageInfo">{{item.ReleaseTime}}  发布于{{item.ReleaseAddr}}</span>
          </div>
        </div>
        {{item.thing}}<br>
        {{item.ddl}}<br>
        {{item.money}}<br>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrDatas: [
        {
          id: 1,
          name: 'Sueyeah',
          ReleaseTime: '2019/9/25/17:09',
          ReleaseAddr: '信息学部一教',
          ddl: '2019/9/26/18:00',
          money: '40r',
          thing: '出一张明天的《哪吒》电影票，创意城位置很好',
          img: require('../assets/img/Sueyeah.png')
        },

        {
          id: 2,
          name: 'lsq210',
          ReleaseTime: '2019/9/18/8:43',
          ReleaseAddr: '教五',
          ddl: '2019/9/20/18:00',
          money: '10r',
          thing: '求帮打印一份材料送到教五',
          img: require('../assets/img/lsq.png')
        },
        {
          id: 3,
          name: 'bxcisthesonofjxc',
          ReleaseTime: '2019/9/15/16:48',
          ReleaseAddr: '信息学部图书馆',
          ddl: '2019/9/15/18:00',
          money: '价格可议',
          thing: '求一个小姐姐陪我看电影',
          img: require('../assets/img/baixuechen.png')
        },
        {
          id: 4,
          name: 'ljc',
          ReleaseTime: '2019/9/10/10:38',
          ReleaseAddr: '武汉大学信息学部七舍',
          ddl: '2019/9/12/18:00',
          money: '0r',
          thing: '王者开黑啊',
          img: require('../assets/img/liujunchen.png')
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
  }

 .text {
    font-size: 12px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix{
    display: table;
    content: "";
    color:black;
    display: flex;

    .name{
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