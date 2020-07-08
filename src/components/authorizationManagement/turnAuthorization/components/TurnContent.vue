<template>
  <div class="turn-content">
    <el-table :data="tableData" border style="width:1560">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="序号" width="60"></el-table-column>
      <el-table-column prop="name" label="人员名字" width="150"></el-table-column>
      <el-table-column prop="address" label="人员编号" width="150"></el-table-column>
      <el-table-column prop="address" label="所属部门" width="150"></el-table-column>
      <el-table-column prop="address" label="转授权时间" width="180"></el-table-column>
      <el-table-column prop="address" label="授权开始时间" width="180"></el-table-column>
      <el-table-column prop="address" label="授权结束时间" width="180"></el-table-column>
      <el-table-column prop="address" label="中止时间" width="180"></el-table-column>
      <el-table-column prop="address" label="状态" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TurnContent",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  }
};
</script>

<style lang='less' scoped>
.turn-content {
  float: right;
  width: 83.2%;
  height: 4.145833rem;
  // background: red;
  margin: 0 auto;
  /deep/ .el-table {
    height: 2.552083rem;
    div:nth-child(1) {
     
      text-align: center;
     
    }
  }
}
</style>