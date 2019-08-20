<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/Navigation'
export default {
  name: 'easy-pay',
  components: {
    navigation
  }
}
</script>
