<template>
    <!-- 任务看板 -->
    <div class="task-board">
        <div class="content">
            <div class="task-msg">
                <div>
                    <ul>
                        <li 
                        v-for="item in taskMsg"
                        :key="item.label">
                        <span>{{item.label}}:</span>
                        <span>{{item.value}}</span>
                        </li>
                    </ul>
                </div>
                <router-link class="add-maingtain-msg" :to="{name: 'TaskMsgPanel'}">新增维护信息</router-link>
            </div>
            <div class="secect-bar">
                <QuerySelect :itemList1="itemList1" buttonText="查询"/>
            </div>
            <div class="task-table">
                <TaskTable />
            </div>
            <div class="task-log">
                <TaskLog />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'TaskBoard',
    data(){
        return{
            taskMsg: [
                {
                    label: '极速联合',
                    value: '任务名称'
                },
                {
                    label: '负责人',
                    value: 'BD'
                },
                {
                    label: '计划任务周期',
                    value: '2020/06/01 - 2020/06/20'
                },
                {
                    label: '任务当前您阶段',
                    value: '准备中'
                },
                {
                    label: '任务优先级',
                    value: 'P0'
                },
                {
                    label: '完成百分比',
                    value: '10%'
                },
                {
                    label: '标准工时',
                    value: '8h'
                }
            ],
            itemList1: [
                {
                    id: 1,
                    label: '选项一'
                },
                {
                    id: 2,
                    label: '选项二'
                }
            ]
        }
    },
    components:{
        QuerySelect: () => import('../../common/QuerySelect'),
        TaskTable: () => import('./TaskTable'),
        TaskLog: () => import('./TaskLog')
    }
}
</script>
<style lang="less" scoped>
.task-board{
    width: 100%;
    .content{
       margin-left: .427083rem;
    }
    .task-msg{
        width: 3.125rem;
        padding: .104167rem;
        background:rgba(247,251,255,1);
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        ul{
            width: 2.083333rem;
            li{
               height: .260417rem;
               font-size: .083333rem;
               color: #333;
               line-height: .260417rem;
               span:first-child{
                   padding-right: .052083rem;
               }
            }
        }
        .add-maingtain-msg{
            height: .260417rem;
            font-size: .083333rem;
            color: #0066cc;
            line-height: .260417rem;
        }
    }
    .secect-bar{
        width: 3.125rem;
        padding: .104167rem 0; 
    }
}
</style>