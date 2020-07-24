<template>
    <!-- 任务看板 -->
    <div class="task-board">
        <div class="content">
            <div class="task-msg">
                <div>
                    <ul>
                        <li class="text-row">
                            <span class="label">任务名称:</span>
                            <span>{{taskMsg.taskName}}</span>
                        </li>
                        <li>
                            <span class="label">负责人:</span>
                            <span>{{taskMsg.principal}}</span>
                        </li>
                        <li>
                            <span class="label">任务当前阶段:</span>
                            <span>{{taskMsg.stage}}</span>
                        </li>
                        <li>
                            <span class="label">任务优先级:</span>
                            <span>{{taskMsg.priority}}</span>
                        </li>
                        <li>
                            <span class="label">完成百分比:</span>
                            <span>{{taskMsg.timeSheet}}</span>
                        </li>
                        <li>
                            <span class="label">标准工时:</span>
                            <span>{{taskMsg.timeSheet}}</span>
                        </li>
                        <li class="li-plan-task">
                            <div>
                                <span class="label">计划任务周期:</span>
                                <span class="date-time">{{taskMsg.planCycle}}</span>
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
                <div class="query">
                    <InputBox @inputChange="getPrincipalChange" placeholder="维护人" />
                    <DatePicker @datePickerChange='getDateTimeChange' placeholder="维护时间"/>
                </div>
                <div class="search-btn">
                    <button @click="getTabData">查询</button>
                </div>
                <!-- <QuerySelect :itemList1="itemList1" buttonText="查询"/> -->
            </div>
            <div class="table-info">
                <TaskTable :tabList="taskTabData" />
            </div>
            <div class="task-log">
                <TaskLog />
            </div>
        </div>
    </div>
</template>
<script>
import {get} from '@/utils/http'
import {getTaskByIdAPI,queryTaskAPI} from '@/utils/apiList'
export default {
    name:'TaskBoard',
    data(){
        return{
            searchBtn:{
                principal: '',
                dateTime: ''
            },
            taskTabData:[], //任务看板列表信息
            taskMsg: {
                taskName: '',
                principal: '',
                stage: '',
                priority:'',
                timeSheet: '',
                planEndTime: '',
                planStartTime: '',
                planCycle: ''
            },
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
    computed:{
        rowId(){
            return this.$store.state.taskRowId;
        }
    },
    mounted(){
        this.getTaskMsg();
    },
    watch:{
        rowId: function(){
            this.getTaskMsg();
        },
        immediate: true
    },
    methods:{
        getTaskMsg(){
            if(Object.keys(this.rowId).length>0){
                // 获取任务基础信息数据
                get(getTaskByIdAPI, {"id": Number(this.rowId.id), "flag": this.rowId.flag})
                    .then(res => {
                        if(res.code == '000'){
                            console.log(res);
                            this.taskMsg.taskName = res.data.taskName;
                            this.taskMsg.principal = res.data.principal;
                            this.taskMsg.stage = res.data.stage;
                            this.taskMsg.priority = res.data.priority;
                            this.taskMsg.timeSheet = res.data.timeSheet;
                            this.taskMsg.planStartTime = res.data.planStartTime;
                            this.taskMsg.planEndTime = res.data.planEndTime;
                            this.taskMsg.planCycle = res.data.planCycle;
                        }else{
                            console.log('err');
                        }
                    });
                // 获取任务看板的列表数据
                get(queryTaskAPI,{"id": Number(this.rowId.id), "flag":this.rowId.flag})
                    .then(res => {
                        console.log(res);
                        if(res.code == '000' && res.data.length > 0){
                            res.data.forEach(item => {
                                item.checked = false;
                            });
                            this.taskTabData = res.data;
                            console.log(res.data);
                        }
                    })
            }
        },
        // 获取用户改变的维护人信息
        getPrincipalChange(val){
            this.searchBtn.principal = val;
        },
        // 获取用户改变的日期值
        getDateTimeChange(date){
            this.searchBtn.dateTime = date;
        },
        // 点击查询按钮，发送请求获取列表信息
        getTabData(){
            // console.log('sss');
            get(queryTaskAPI, {"updateTime": this.searchBtn.dateTime, "principal": this.searchBtn.principal})
                .then(res => {
                    this.taskTabData = res.data;
                })
        }
    },
    components:{
        // QuerySelect: () => import('../../common/QuerySelect'),
        TaskTable: () => import('./TaskTable'),
        TaskLog: () => import('./TaskLog'),
        ShortCut: () =>import('./ShortCut'),
        InputBox: () => import('../../common/InputBox'),
        DatePicker: () => import('../../common/DatePicker')
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
        width: 90%;
        background:rgba(247,251,255,1);
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
                width: 33%;
                height: 40px;
                font-size: 16px;
                color: #333;
                line-height: .260417rem;
                    .label{
                        padding-right: .052083rem;
                        color: #000;
                        font-weight: 500;
                        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    }
                }
                .li-plan-task{
                    width: 100%;
                    display: flex;
                    div{
                        display: flex;
                        justify-content: flex-start;
                        // .title{
                        //     color: #000;
                        // }
                        // .date-time{
                        //     width: 300px;
                        // }
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
        width: 90%;
        padding: 10px 0 15px 0; 
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        /deep/ .query{
            display: flex;
            .input-box{
                .el-input{
                    .el-input__inner{
                        width: 180px;
                    }
                }
            }

        }
        .search-btn{
            height: 40px;
            display: flex;
            align-items: center;
            button{
                width: .416667rem;
                height: 30px;
                background-color: #fff;
                border-radius: .052083rem;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                margin-left: .104167rem;
                outline: none;
            }
        }
        /deep/ .date-picker{
            width: 220px;
            margin-left: 50px;
            .el-input__inner{
                width: 180px;
            }
        }
    }
    .table-info{
        width: 90%;
    }
}
</style>