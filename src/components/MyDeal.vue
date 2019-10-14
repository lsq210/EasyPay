<template>
  <div class="body">
    <div 
      v-for="item in arrDatas"
      :key="item.id"
      class="text item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
           <el-avatar :size="40">
           <img src="@/assets/img/lsq.png">
            </el-avatar>
          <div class="name">
            <span> lsq210</span><br>
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
          id: 2,
          ReleaseTime: '2019/9/18/8:43',
          ReleaseAddr: '教五',
          ddl: '2019/9/20/18:00',
          money: '10r',
          thing: '求帮打印一份材料送到教五'
        },
        {
          id: 3,
          ReleaseTime: '2019/9/15/16:48',
          ReleaseAddr: '信息学部图书馆',
          ddl: '2019/9/15/18:00',
          money: '价格可议',
          thing: '求拼麻辣香锅'
        },
        {
          id: 4,
          ReleaseTime: '2019/9/10/10:38',
          ReleaseAddr: '教三',
          ddl: '2019/9/12/18:00',
          money: '20r',
          thing: '出一本《C语言程序设计》'
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
    width: 100%;
  }

  .el-card__header{
    padding:4px 20px;
  }
  .el-card__body{
    padding:8px 20px;
  }
</style>