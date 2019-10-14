<template>
  <div class="body">
    <el-card class="box-card" style="padding-top: 20px; padding-bottom: 20px">
      <span>买家信誉:</span>
      <el-rate
          v-model="buy"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
          style="display: inline-block">
      </el-rate><br>
      <span>卖家信誉:</span>
      <el-rate
        v-model="sale"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
        style="display: inline-block">
      </el-rate>
    </el-card>
    
    <div v-for="item in arrDatas" :key="item.id" class="text item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
           <el-avatar :size="40">
           <img :src="item.avatar">
            </el-avatar>
          <div class="name">
            <span> {{item.name}}</span><br>
            <span class="MessageInfo">{{item.ReleaseTime}}  发布于{{item.ReleaseAddr}}</span>
          </div>
        </div>
        {{item.comment}}
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buy: 4.5,
      sale: 5.0,
      arrDatas: [
        {
          id: 1,
          avatar: require('../assets/img/Juhua.png'),
          name: 'Juhua',
          ReleaseTime: '2019/9/25/17:09',
          ReleaseAddr: '信息学部一教',
          comment: '小姐姐很爽快'
        },

        {
          id: 2,
          avatar: require('../assets/img/Sueyeah.png'),
          name: 'Sueyeah',
          ReleaseTime: '2019/9/18/8:43',
          ReleaseAddr: '教五',
          comment: '同学人很好'
        },
        {
          id: 3,
          avatar: require('../assets/img/Bai.png'),
          name: 'Baibai',
          ReleaseTime: '2019/9/15/16:48',
          ReleaseAddr: '信息学部图书馆',
          comment: '小姐姐可漂亮了'
        },
        {
          id: 4,
          avatar: require('../assets/img/Juhua.png'),
          name: 'Juhua',
          ReleaseTime: '2019/9/10/10:38',
          ReleaseAddr: '教三',
          comment: '小姐姐很爽快'
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
  .name {
    font-size:12px;
    margin:5px;
  }
  .MessageInfo {
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
.comment {
  margin: 20px 0 20px 0;
  padding-left: 20vw;
  span {
    font-size: 16px;
  }
}
</style>