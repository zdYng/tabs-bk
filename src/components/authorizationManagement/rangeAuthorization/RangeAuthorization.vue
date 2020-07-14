<template>
  <div class="range-container">
    <range-query></range-query>
    <range-left></range-left>
    <!-- <range-content></range-content> -->
    <first-test></first-test>
  </div>

</template>

<script>
export default {
  name:'rangeAuthorization',
  components : {
    RangeQuery: ()=> import('./components/RangeQuery'),
    RangeLeft:()=> import('./components/RangeLeft'),
    // RangeContent:()=> import('./components/RangeContent')
    FirstTest:()=>import('./test')
  }
}
</script>

<style lang="less" scoped>
  .range-container {
    width: 100%;
    overflow: hidden;
  }
</style>