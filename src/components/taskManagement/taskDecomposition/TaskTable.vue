<template>
    <div class="task-table">
        <el-table class="tab-border-radius scroll-bar" :data="tabList" height="150px" border style="width: 100%;">
            <el-table-column
              type="selection"
              width="50"
              align="center">
              </el-table-column>
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
    name: 'TaskTable',
    props:{
        tabList:Array
    },
    data(){
        return {
            itemOptions:[
                { id: 1, title:'序号',type: 'text', key: 'id', width:'50'},
                { id: 2, title:'维护时间',type: 'text', key: 'createTime', width:'200'},
                { id: 3, title:'维护人',type: 'text', key: 'principal', width:'100'},
                { id: 4, title:'任务完成百分比',type: 'text', key: 'percentage', width:'150'},
            ]

        }
    }
}
</script>
<style lang="less" scoped>
.task-table{
    .tab-border-radius{
        border: none;
        // border-left: 1px solid rgb(235, 238, 245);
        /deep/ .el-table__header{
            border-left: 1px solid rgb(235, 238, 245);
            border-top: 1px solid rgb(235, 238, 245);
            .has-gutter{
                font-family:Microsoft YaHei;
                color: #000;
            }
        }
        /deep/ .el-table__body{
            border-left: 1px solid rgb(235, 238, 245);
        }
        /deep/ .el-table__row{
            color:rgba(102,102,102,1);
        }
    }
    /deep/ .tab-border-radius::before{
        height: 0;
    }
    /deep/ .tab-border-radius::after{
        height: 0;
    }
}
</style>