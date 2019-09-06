<template>
  <div class="personal">
    <div class="header"></div>
    <div class="intro">
      <img src="@/assets/img/cordova.png">
      <div class="intro-meta">
        <span>lsq2000</span><br>
        <span>长期出售二手书~</span><br>
        <span class="authentication">已认证</span>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.personal {
  width: 100%;
  background: $theme-color;
  .header {
    height: 36px;
  }
  .intro {
    height: 150px;
    display: flex;
    margin: 1rem 1.5rem 0 1.5rem;
    img {
      height: 120px;
      width: 120px;
      border: 1px solid #888888;
      margin-right: 1.2rem;
    }
    .intro-meta {
      line-height: 2.2rem;
      .authentication {
        background-color: white;
      }
    }
  }
}
</style>