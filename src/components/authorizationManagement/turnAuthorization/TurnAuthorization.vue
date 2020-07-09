<template>
  <div class="turn-container">
    <turn-query></turn-query>
    <turn-left :moduleTreeList='moduleTreeList'></turn-left>
    <turn-content></turn-content>
  </div>
</template>

<script>
import { get } from "../../../utils/http";
import { moduleQueryAPI } from "../../../utils/apiList";
export default {
  name: "turnAuthorization",
  data() {
    return {
      moduleTreeList: []
    };
  },
  components: {
    TurnQuery: () => import("./components/TurnQuery"),
    TurnLeft: () => import("./components/TurnLeft"),
    TurnContent: () => import("./components/TurnContent")
  },
  methods: {
    getModuleTree() {
      get(moduleQueryAPI).then(res => {
        this.moduleTreeList = res;
        console.log(this.moduleTreeList);
      });
    }
  },
  created() {
    this.getModuleTree();
  }
};
</script>

<style lang="less" scoped>
.turn-container {
  width: 100%;
  overflow: hidden;
  // height: 1.041667rem;
}
</style>