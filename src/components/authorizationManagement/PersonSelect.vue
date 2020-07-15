<template>
  <div class="person-select">
    <div class="all-box">
      <div class="left-list">
        <el-table row-key="id" :data="personData" border class="tab-border-radius scroll-bar">
          <el-table-column type="selection" width="60" align="center"></el-table-column>
          <el-table-column
            :prop="item.key"
            :label="item.title"
            :width="item.width"
            align="center"
            v-for="item in itemOptions"
            :key="item.id"
          ></el-table-column>
        </el-table>
      </div>
      <div class="right-select">
        <div class="right-top">
          <div class="right-title">确认选择人员</div>
        </div>
      </div>
    </div>
    <div class="all-button">
      <div>确定</div>
      <div>取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonSelect",
  data() {
    return {
      personData: [
        { id: 1, code: "001", name: "张三", depart: "研发" },
        { id: 2, code: "001", name: "张三", depart: "研发" },
        { id: 3, code: "001", name: "张三", depart: "研发" },
        { id: 4, code: "001", name: "张三", depart: "研发" },
        { id: 5, code: "001", name: "张三", depart: "研发" },
        { id: 6, code: "001", name: "张三", depart: "研发" },
        { id: 7, code: "001", name: "张三", depart: "研发" },
        { id: 8, code: "001", name: "张三", depart: "研发" },
        { id: 9, code: "001", name: "张三", depart: "研发" }
      ],
      itemOptions: [
        { id: 1, title: "人员编码", type: "text", key: "code", width: "140" },
        { id: 2, title: "人员名字", type: "text", key: "name", width: "160" },
        { id: 3, title: "所属部门", type: "text", key: "depart", width: "140" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.person-select {
  width: 6.770833rem;
  margin-top: 0.104167rem;
  float: left;
  // display: flex;
  // overflow: hidden;
  // margin-left: .520833rem;
  .all-box {
    display: flex;
    justify-content: flex-start;
    .left-list {
      // width: 2.604167rem;
      display: inline-block;
      margin: .052083rem 0 0 .052083rem;
    }
    .right-select {
      display: inline-block;
      width: 2.604167rem;
      height: 2.552083rem;
      border: 1px solid rgba(221, 221, 221, 1);
      border-radius: 0.052083rem;
      margin: .052083rem 0 0 .104167rem;
      .right-title {
        height: 0.255208rem;
        border-bottom: 1px rgba(221, 221, 221, 1) solid;
        line-height: 0.255208rem;
        font-size: 0.072917rem;
        text-indent: 0.208333rem;
      }
    }
  }
  .all-button {
    margin-top: .260417rem;
    display: flex;
    justify-content:initial;
    div:first-child,div:last-child {
      width: 1.041667rem;
      height: .260417rem;
      background: rgba(0, 102, 204, 1);
      border-radius: 0.104167rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: .09375rem;
      font-family: Microsoft YaHei;
    }
    div:last-child {
      border:1px solid rgba(0,102,204,1);
      background: white;
      color: rgba(0,102,204,1);
    }
  }
  /deep/ .el-table__header .has-gutter {
    /* color:rgba(51,51,51,1); */
    font-family: Microsoft YaHei;
    color: #000;
  }
  /deep/ .tab-border-radius {
    border-radius: .104167rem;
  }
}
</style>
