<template>
  <div class="range-content">
    <el-row>
      <el-col :span="24">
        <div class="item-top">
          <span class="top-text">
            <span class="before-span"></span>
            <span style="margin-left: .078125rem">设定"养护部"的范围权限</span>
          </span>
        </div>
      </el-col>
    </el-row>
    <div class="select-list">
      <div class="select-box" 
            v-for="item in list" 
            :key="item.id">
            {{item.title}}</div>
     
    </div>

    <!-- <table width="100%">
     <tr><td class="left_title bottom_border">表头1</td></tr>
     <tr><td class="left_title bottom_border">表头2</td></tr>
     <tr><td class="left_title bottom_border">表头3</td></tr>
  </table> -->

    <div class="select-box">
      设定数据范围
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeContent",
  components: {
    // NavBar: () => import("../../NavBar")
  },
  data() {
    return {
      list: [{ id: 1, title: "选择授权人员" },
      { id: 2, title: "选择授权部门" },
      { id: 3, title: "选择授权角色" },
      ]
    };
  }
};
</script>

<style lang='less' scoped>
.range-content {
  float: left;
  width: 6.5625rem;
  height: 4.145833rem;
  margin: 0 auto;

  .select-box {
    width: 0.625rem;
    height: 0.182292rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #0066cc;
    font-family: Microsoft YaHei;
    font-size: 0.083333rem;
    color: #0066cc;
    border-radius: 0.052083rem;
    margin-right: 0.098958rem;
  }
  .item-top {
    height: 0.3125rem;
    display: flex;
    justify-content: space-between;
    padding: 0;
    .top-text {
      font-size: 0.114583rem;
      display: flex;
      vertical-align: center;
      align-self: center;
      .before-span {
        display: inline-block;
        width: 0.03125rem;
        height: 0.114583rem;
        background-color: #000;
      }
    }
  }
  .select-list {
    display: flex;
    justify-content: flex-start;
  }
  .tab-secton {
    display: flex;
    justify-content: center;
    // padding: 0 .104167rem 0 .427083rem;

    /deep/ .el-table {
      height: 2.552083rem;
      border-radius: 0.052083rem;
    }

    /deep/ .el-table__header .has-gutter {
      /* color:rgba(51,51,51,1); */
      font-family: Microsoft YaHei;
      color: #000;
    }
  }
}
</style>