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
                            <span>{{taskMsg.percentage}}</span>
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
                    <button class="search-btn" @click="getTabData">查询</button>
                </div>
                
                <div class="answer">
                    <Answer />
                </div>
                <!-- <QuerySelect :itemList1="itemList1" buttonText="查询"/> -->
            </div>
            <div class="table-info">
                <TaskTable :tabList="taskTabData" />
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
                planCycle: '',
                percentage: ''
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
    created(){
        console.log('created')
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
                            this.taskMsg.percentage = res.data.percentage;
                        }else{
                            console.log('err');
                        }
                    });
                // 获取任务看板的列表数据
                get(queryTaskAPI,{"id": Number(this.rowId.id), "flag":this.rowId.flag})
                    .then(res => {
                        if(res.code == '000' && res.data.length > 0){
                            res.data.forEach(item => {
                                item.checked = false;
                            });
                            this.taskTabData = res.data;
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
        // TaskLog: () => import('./TaskLog'),
        ShortCut: () =>import('./dialog/ShortCut'),
        InputBox: () => import('../../common/InputBox'),
        DatePicker: () => import('../../common/DatePicker'),
        Answer: () => import('./dialog/Answer')
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
        padding-bottom: 10px;
        div{
            width: 100%;
            display: flex;
            justify-content: center;
            ul{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                padding: 0 15px;
                li{
                width: 33%;
                height: 40px;
                font-size: 14px;
                color: #333;
                line-height: .260417rem;
                    .label{
                        padding-right: .052083rem;
                        color: #000;
                        font-weight: 400;
                        font-family: Microsoft YaHei;
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
        padding: 0 0 15px 0; 
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        /deep/ .query{
            display: flex;
            align-items: flex-end;
            .search-btn{
                width: .416667rem;
                height: 30px;
                background-color: #fff;
                border-radius: .052083rem;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                outline: none;
                text-align: center;
                margin-bottom: 5px;
            }
            .date-picker{
                width: 200px;
                margin-left: 25px;
                .el-input__inner::placeholder{
                    font-weight: 200;
                }
            }
            .input-box{
                .el-input{
                    .el-input__inner{
                        width: 180px;
                    }
                    .el-input__inner::placeholder{
                        font-weight: 200;
                    }
                }
            }

        }
        .answer{
            height: 40px;
            display: flex;
            align-items: center;
            button{
                width: .416667rem;
                height: 30px;
                background-color: #0066cc;
                border-radius: 10px;
                border: solid 1px #0066cc;
                font-size: 14px;
                color: #fff;
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