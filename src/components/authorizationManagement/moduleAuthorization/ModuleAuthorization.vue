<template>
  <div class="turn-container">
    <module-query></module-query>
    <module-left></module-left>
    <!-- <module-content ></module-content> -->
    <person-select></person-select>
  </div>
</template>

<script>
export default {
    name:'turnAuthorization',
    components:{
      ModuleQuery:()=> import('./components/ModuleQuery'),
      ModuleLeft:()=> import('./components/ModuleLeft'),
      // ModuleContent:()=> import('./components/ModuleContent')
      PersonSelect: ()=> import('../PersonSelect')
    }
}
</script>

<style lang="less" scoped>
  .turn-container {
    width: 100%;
    overflow: hidden;
  }
</style>