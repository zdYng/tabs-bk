<template>
    <!-- 项目信息列表 -->
    <div class="table">
        <el-table 
          class="tab-border-radius scroll-bar"
          :data="list"
          height="100%"
          style="width: 100%;"
          row-key="id"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column
              v-for="item in itemOptions"
              :key="item.id"
              :label="item.title"
              :prop="item.key"
              align="center"
              :width="item.width">
              </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'ProjectTable',
    props:{
        list:Array
    },
    data(){
        return{
            itemOptions:[
                { id: 1, title:'任务名称',type: 'text', key: 'name', width:'300'},
                { id: 2, title: "负责人", type: "text", key: "id", width:'100'},
                { id: 3, title: "任务周期", type: "text", key: "id", width:'200' },
                { id: 4, title: "当前完成百分比", type: "text", key: "id", width:'150' },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.table{
    width: 100%;
    height: 93%;
    .el-table{
        /deep/ .el-table__header{
            .has-gutter{
                font-family:Microsoft YaHei;
                color: #000;
                .is-leaf{
                    background:rgba(249,252,255,1);
                }
            }
        }
        /deep/ .el-table__row{
            color:rgba(102,102,102,1); 
            td{
                border-bottom: none;
            }
        }
    }
    /deep/ .el-table::before{
        height: 0;
    }
}
</style>