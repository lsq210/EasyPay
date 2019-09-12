<template>

  <el-container>
    <el-header>Header</el-header>
    <div class="person-info">
      <el-avatar>
        <img src="@/assets/img/Avatar.png">
      </el-avatar>
      <div class="name">Juhua</div>
      <div class="authen">
        <svg-icon class="icon-style" icon-class='IDauthen'></svg-icon>
        <span>已认证</span>
      </div>
    </div>

    <el-main>
    
    </el-main>
  </el-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.el-header {
  width: 100%;
  background:$theme-color;
}
.el-main {
  background-color:rgb(236, 225, 225);
  text-align: center;
  height: 100%;
}
.person-info {
  color:black;
  display: flex;
  .name{
    width:5%;
    margin-top:5px;
    .authen{
    color:rgb(100,100,100);
    font-size:4px;
   }
  .icon-style{
    margin-left:5px;
  }
  }

}

</style>