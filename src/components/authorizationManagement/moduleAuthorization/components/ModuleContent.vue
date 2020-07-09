<template>
  <div class="turn-content">
    <NavBar :NavBar='cutbarList' /> 

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
  name: "ModuleContent",
  components: {
    NavBar: () => import('../../NavBar')
  },
  data() {
    return {
      tableData: [
        {
          id:1,
          date: "2016-05-03",
          name: "王小虎",
          type: "研发",
          code: "001",    
          person:"张三",
          time:"2020-06-23/2020-06-25",
          detail:"备注。。。"
        },
        {
          id:2,
          date: "2016-05-03",
          name: "王小虎",
          type: "研发",
          code: "001",    
          person:"张三",
          time:"2020-06-23/2020-06-25",
          detail:"备注。。。"
        },{
          id:3,
          date: "2016-05-03",
          name: "王小虎",
          type: "研发",
          code: "001",    
          person:"张三",
          time:"2020-06-23/2020-06-25",
          detail:"备注。。。"
        },
      ],
      itemOptions:[
                { id: 1, title:'序号',type: 'text', key: 'id', width:'70'},
                { id: 2, title: "主体名称", type: "text", key: "name", width:'150'},
                { id: 3, title: "主体类型", type: "text", key: "type", width:'150' },
                { id: 4, title: "主体编码", type: "text", key: "code", width:'150' },
                { id: 5, title: "授权人", type: "text", key: "person", width:'150' },
                { id: 6, title: "授权时间", type: "text", key: "time", width:'230' },
                { id: 7, title: "说明", type: "text", key: "detail", width:'300' },
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
  float: left;
  width: 6.5625rem;
  height: 4.145833rem;
  margin: 0 auto;

  

  .tab-secton {
    display: flex;
    justify-content: center;
    // padding: 0 .104167rem 0 .427083rem;


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