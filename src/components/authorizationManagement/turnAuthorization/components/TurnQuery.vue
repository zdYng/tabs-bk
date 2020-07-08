<template>
  <div class="turn-query">
    <select-box class="turn-sleect-box"></select-box>
    <div class="box1">查询</div>
    <div class="box1">再授权</div>
    <div class="box1">中止授权</div>
    <div class="box2">新增授权人员</div>
  </div>
</template>

<script>
export default {
  name: "TurnQuery",
  components: {
    SelectBox: () => import("../../../common/SelectBox.vue")
  }
};
</script>

<style lang="less" scoped>
.turn-query {
  height: 0.625rem;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  position: relative;
  .box1,
  .box2 {
    display: flex;
    justify-content: center;
    align-items: center;

    
    height: 0.260417rem;
    border: 1px solid rgba(0, 102, 204, 1);
    border-radius: 20px;
    font-family: Microsoft YaHei;
    color: rgba(0, 102, 204, 1);
    font-size: 0.104167rem;
    text-align: center;
    line-height: 0.260417rem;
  }
  .box2 {
    background: rgba(0, 102, 204, 1);
    color: #ffffff;
  }
  div:nth-child(1) {
    margin: 0 0.161458rem;
  }
  div:nth-child(2){
    width: .46875rem;
  }
  div:nth-child(3){
    position: absolute;
    width: .520833rem;
    right: 1.703125rem;
  }
  div:nth-child(4){
    position: absolute;
    right: .979167rem;
    width: .625rem;
  }
  div:nth-child(5) {
    position: absolute;
    right: .09375rem;
    width: .78125rem;
  }
}
</style>