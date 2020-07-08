<template>
    <!-- 日志管理列表 -->
    <div class="table">
        <el-table class="tab-border-radius scroll-bar" :data="list" height="500px" border style="width: 100%;">
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
    data(){
        return{
            list:[
                {
                    id:1,
                    personnel: '人员',
                    timer: '2020-07-06',
                    status: '状态',
                    conductor: '处理人',
                    processingTime: '处理时间',
                    remark: '备注'
                }
            ],
            itemOptions:[
                { id: 1, title:'序号',type: 'text', key: 'id', width:'100'},
                { id: 2, title: "人员", type: "text", key: "personnel", width:'200'},
                { id: 3, title: "时间", type: "text", key: "timer", width:'250' },
                { id: 4, title: "状态", type: "text", key: "status", width:'150' },
                { id: 5, title: "处理人", type: "text", key: "conductor", width:'200' },
                { id: 6, title: "处理时间" , type: "text", key: "processingTime", width:'250' },
                { id: 7, title: "备注", type: "text", key: "remark", width:'400' },
            ]
        }
    },
    methods:{
        getDataName(scope, items){
            return scope[items]
        }
    }
}
</script>
<style lang="less" scoped>
.table{
    .tab-border-radius{
        /deep/ .el-table__header{
            border-top: 1px solid #EBEEF5;
            border-left: 1px solid #EBEEF5;
            .has-gutter{
                font-family:Microsoft YaHei;
                color: #000;
            }
        }
        /deep/ .el-table__row{
            color:rgba(102,102,102,1);
        }
    }
    /deep/ .el-table::before{
        height: 0;
    }
    /deep/ .el-table--border{
        border: none;
    }
}
</style>