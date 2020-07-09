<template>
  <div class="turn-content">
    <CutBar :CutBar='cutbarList' /> 

    <div class="tab-secton">
      <el-table :data="tableData" border height="200" class="tab-border-radius scroll-bar" >
        <el-table-column 
          type="selection" 
          width="60" 
          align="center">
        </el-table-column>
        <el-table-column 
          :prop="item.key" 
          :label="item.title"
          :width="item.width"  
          align="center" 
          v-for="item in itemOptions" 
          :key="item.id">
        </el-table-column>
      </el-table>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "TurnContent",
  components: {
    CutBar: () => import('../../../common/CutBar')
  },
  data() {
    return {
      tableData: [
        {
          id:1,
          date: "2016-05-03",
          name: "王小虎",
          code: "001",
          type: "研发",
          time1: "2020-06-23/2020-06-25",
          time2:"2020-06-23/2020-06-25",
          time3:"2020-06-23/2020-06-25",
          time4:"2020-06-23/2020-06-25",
          status:"已完成"
        },
        {
          id:2,
          date: "2016-05-03",
          name: "王小虎",
          code: "001",
          type: "研发",
          time1: "2020-06-23/2020-06-25",
          time2:"2020-06-23/2020-06-25",
          time3:"2020-06-23/2020-06-25",
          time4:"2020-06-23/2020-06-25",
          status:"已完成"
        },{
          id:3,
          date: "2016-05-03",
          name: "王小虎",
          code: "001",
          type: "研发",
          time1: "2020-06-23/2020-06-25",
          time2:"2020-06-23/2020-06-25",
          time3:"2020-06-23/2020-06-25",
          time4:"2020-06-23/2020-06-25",
          status:"已完成"
        },
      ],
      itemOptions:[
                { id: 1, title:'序号',type: 'text', key: 'id', width:'70'},
                { id: 2, title: "人员名字", type: "text", key: "name", width:'100'},
                { id: 3, title: "人员编号", type: "text", key: "code", width:'100' },
                { id: 4, title: "所属部门", type: "text", key: "type", width:'100' },
                { id: 5, title: "转授权时间", type: "text", key: "time1", width:'180' },
                { id: 6, title: "授权开始时间", type: "text", key: "time2", width:'180' },
                { id: 7, title: "授权结束时间", type: "text", key: "time3", width:'180' },
                { id: 8, title: "中止时间", type: "text", key: "time4", width:'180' },
                { id: 9, title: "状态", type: "text", key: "status", width:'110' }, 
              ],
      cutbarList:[
        { id: 1, value: '新增',},
        { id: 2, value: '查看',},
        { id: 3, value: '删除', },
        { id: 4, value: '修改', },
        { id: 5, value: '导出', },
      ]
    };
  }
};
</script>

<style lang='less' scoped>

.turn-content {
  float: right;
  width: 1300px;
  height: 4.145833rem;
  // background: red;
  margin: 0 auto;

  

  .tab-secton {
    display: flex;
    justify-content: center;
    padding: 0 .104167rem 0 .427083rem;


    /deep/ .el-table {
      height: 2.552083rem;
      border-radius: .052083rem;
    }
      
    /deep/ .el-table__header .has-gutter{
        /* color:rgba(51,51,51,1); */
        font-family:Microsoft YaHei;
        color: #000;
    }
   
  }
  
  
}
</style>