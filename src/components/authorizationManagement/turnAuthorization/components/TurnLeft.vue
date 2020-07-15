<template>
  <div class="turn-left">
    <LeftPanel :data="moduleTreeList" />
  </div>
</template>

<script>
export default {
  name: "TurnLeft",
  props: {
    moduleTreeList: Array
  },
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: "茶却文化有限公司",
          children: [
            {
              id: 2,
              name: "采购部"
            },
            {
              id: 3,
              name: "养护部"
            }
          ]
        }
      ]
    };
  },
  components: {
    LeftPanel: () => import("../../../common/LeftPanel")
  }
};
</script>

<style lang="less" scoped>
.turn-left {
  width: 1.5625rem;
  height: 84%;
  float: left;
  overflow: hidden;
  overflow-y: scroll;
  // background: chartreuse;
  
}
::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
</style>