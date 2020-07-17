<template>
    <!-- 任务看板 -->
    <div class="task-board">
        <div class="content">
            <div class="task-msg">
                <div>
                    <ul>
                        <li class="text-row">
                            <span>极速联合:</span>
                            <span>任务名称</span>
                        </li>
                        <li>
                            <span>负责人:</span>
                            <span>BD</span>
                        </li>
                        <li>
                            <span>任务当前阶段:</span>
                            <span>准备中</span>
                        </li>
                        <li>
                            <span>任务优先级:</span>
                            <span>P0</span>
                        </li>
                        <li>
                            <span>完成百分比:</span>
                            <span>10%</span>
                        </li>
                        <li>
                            <span>标准工时:</span>
                            <span>8h</span>
                        </li>
                        <li class="li-plan-task">
                            <div>
                                <span>计划任务周期:</span>
                                <span>2020/06/01-2020/06/20</span>
                            </div>
                            <span class="short-cut">
                                <!-- 点击出现快捷维护弹窗 -->
                                <ShortCut btnText="新增维护信息"/>
                            </span>      
                        </li>
                    </ul>
                </div>
                <!-- <router-link class="add-maingtain-msg" :to="{name: 'TaskMsgPanel'}">新增维护信息</router-link> -->
            </div>
            <div class="secect-bar">
                <SelectBox title="维护人"/>
                <SelectBox title="维护时间"/>
                <SingleButton btnText="查询"/>
                <!-- <QuerySelect :itemList1="itemList1" buttonText="查询"/> -->
            </div>
            <div class="table-info">
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
        // QuerySelect: () => import('../../common/QuerySelect'),
        TaskTable: () => import('./TaskTable'),
        TaskLog: () => import('./TaskLog'),
        SelectBox: () => import('../../common/SelectBox'),
        SingleButton: () =>import('../../common/SingleButton'),
        ShortCut: () =>import('./ShortCut')
    }
}
</script>
<style lang="less" scoped>
.task-board{
    width: 100%;
    .content{
    //    margin-left: .427083rem;
    }
    .task-msg{
        width: 80%;
        // padding: .104167rem;
        background:rgba(247,251,255,1);
        // box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        div{
            width: 100%;
            display: flex;
            justify-content: center;
            ul{
                width: 90%;
                display: flex;
                flex-wrap: wrap;
                li{
                width: 50%;
                height: 40px;
                font-size: 16px;
                color: #333;
                line-height: .260417rem;
                    span:first-child{
                        padding-right: .052083rem;
                    }
                }
                .li-plan-task{
                    width: 100%;
                    display: flex;
                    div{
                        display: flex;
                        justify-content: flex-start;
                    }
                    .short-cut{
                      
                    }
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
        width: 80%;
        padding: .104167rem 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        /deep/ .single-btn{
            height: .260417rem;
            display: flex;
            align-items: center;
        }
    }
    .table-info{
        width: 80%;
    }
}
</style>