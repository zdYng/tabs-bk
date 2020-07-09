<template>
  <div class="turn-left">
    <left-panel></left-panel>
  </div>
</template>

<script>
export default {
    name:'TurnLeft',
    components :{
      LeftPanel:() => ('../../../common/LeftPanel.vue')
    }
}
</script>

<style lang="less" scoped>
.turn-left {
  width: 1.666667rem;
  height: 4.145833rem;
  float: left;
  // background: chartreuse;
}
</style>