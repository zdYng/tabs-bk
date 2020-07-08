<template>
  <div class="turn-container">
    <turn-query></turn-query>
    <turn-left></turn-left>
    <turn-content></turn-content>
  </div>
</template>

<script>
export default {
    name:'turnAuthorization',
    components:{
      TurnQuery:()=> import('./components/TurnQuery'),
      TurnLeft:()=> import('./components/TurnLeft'),
      TurnContent:()=> import('./components/TurnContent')
    }
}
</script>

<style lang="less" scoped>
  .turn-container {
    width: 100%;
    overflow: hidden;
    // height: 1.041667rem;
  }
</style>