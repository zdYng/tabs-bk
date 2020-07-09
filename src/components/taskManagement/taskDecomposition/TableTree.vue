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
    data(){
        return{
            list:[
                {
                    id:1,
                    taskName: '任务名称',
                    principal: '负责人',
                    taskCycle:'项目类型1',
                    progress:'当前完成百分比',
                    children:[
                        {
                            id:11,
                            taskName: '任务名称',
                            principal: '负责人',
                            taskCycle:'项目类型1',
                            progress:'当前完成百分比',
                            children:[
                                {
                                    id:111,
                                    taskName: '任务名称',
                                    principal: '负责人',
                                    taskCycle:'项目类型1',
                                    progress:'当前完成百分比',
                                },
                                {
                                    id:112,
                                    taskName: '任务名称',
                                    principal: '负责人',
                                    taskCycle:'项目类型1',
                                    progress:'当前完成百分比',
                                }
                            ]
                        },
                        {
                            id:12,
                            taskName: '任务名称',
                            principal: '负责人',
                            taskCycle:'项目类型1',
                            progress:'当前完成百分比',
                        },
                        {
                            id:13,
                            taskName: '任务名称',
                            principal: '负责人',
                            taskCycle:'项目类型1',
                            progress:'当前完成百分比',
                        },
                        {
                            id:14,
                            taskName: '任务名称',
                            principal: '负责人',
                            taskCycle:'项目类型1',
                            progress:'当前完成百分比',
                        },
                    ]
                },
            ],
            itemOptions:[
                { id: 1, title:'任务名称',type: 'text', key: 'taskName', width:'300'},
                { id: 2, title: "负责人", type: "text", key: "principal", width:'100'},
                { id: 3, title: "任务周期", type: "text", key: "taskCycle", width:'200' },
                { id: 4, title: "当前完成百分比", type: "text", key: "progress", width:'150' },
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