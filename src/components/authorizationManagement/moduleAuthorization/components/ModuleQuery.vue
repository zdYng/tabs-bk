<template>
  <div class="turn-query">
    <select-box class="turn-sleect-box"></select-box>
    <div class="box1">查询</div>
    <div class="box1">删除</div>
    <div class="box2">设定范围</div>
    <div class="box2">选择人员授权</div>
    <div class="box2">选择部门授权</div>
    <div class="box2">选择角色授权</div>

  </div>
</template>

<script>
export default {
  name: "ModuleQuery",
  components: {
    SelectBox: () => import("../../../common/SingleSelectBox")
  }
};
</script>

<style lang="less" scoped>
.turn-query {
  height: 0.625rem;
  width: 100%;
  background: rgba(255,255,255,1);
  box-shadow: 15px 0px 15px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  position: relative;
  .box1,
  .box2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: .416667rem;
    height: .182292rem;
    border-radius: .052083rem;
    border: solid 1px #0066cc;
    font-family: Microsoft YaHei;
    font-size: .083333rem;
    color: #0066cc;
    text-align: center;
    line-height: 0.260417rem;
  }
  .box2 {
    background: rgba(0, 102, 204, 1);
    color: #ffffff;
    width: .78125rem;
  }
  div:nth-child(1) {
    margin: 0 0.161458rem;
  }

  div:nth-child(3){
    position: absolute;
    right: 3.645833rem;
  }
  div:nth-child(4){
    position: absolute;
    right: 2.760417rem;
  }
  div:nth-child(5){
    position: absolute;
    right: 1.875rem;
  }
  div:nth-child(6) {
    position: absolute;
    right: .989583rem;
  }
  div:nth-child(7) {
    position: absolute;
    right: .09375rem;
  }
}
</style>