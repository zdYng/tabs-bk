<template>
    <!-- ---------------------任务信息----------------------------- -->
    <div class="task-msg">
        <el-row>
            <el-col :span="6">
                <InputBox @inputChange="getTaskNameChange" :defalutValue='taskMsgData.taskName' title="任务名称" />
            </el-col>
            <el-col :span="6">
                <SelectBox @selectEvent="getPrincipalChange" :defaultValue="taskMsgData.principalId" title="负责人" :options="maintainer"/>
            </el-col>
            <el-col class="col-date" :span="12">
                <div class="date">
                    <div class="title">
                        <span>计划任务周期</span>
                    </div>
                        <DateSelect @pickDate="getPlanCycleChange" :defaultDateTime="formDate"/>
                    </div>
            </el-col>
        </el-row>
        <!-- ---------------------任务优先级----------------------------- -->
        <el-row>
            <el-col :span="6">
                <SelectBox @selectEvent="getPriorityChange" :defaultValue="taskMsgData.priorityId"  title="任务优先级" :options="priority"/>
            </el-col>
            <el-col :span="6">
                <InputBox @inputChange="getWorkloadChange" :defalutValue='taskMsgData.workload' title="计划投入工作量" />
            </el-col>
            <el-col :span="6">
                <SelectBox @selectEvent="getTimeSheetChange" :defaultValue="taskMsgData.timeSheetId" title="标准工时" :options="normalHours"/>
            </el-col>
        </el-row>
        <!-- ---------------------标准工时----------------------------- -->
        <el-row>
            <el-col :span="6">
                <SelectBox @selectEvent="getStageChange" :defaultValue="taskMsgData.stageId" title="任务当前阶段" :options="taskStage"/>
            </el-col>
            <el-col :span="6">
                <InputBox @inputChange="getPercentageChange" :defalutValue='taskMsgData.percentage' title="任务完成百分比" />
            </el-col>
            <el-col class="col-describe" :span="12">
                <div class="describe">
                    <div class="title">
                        <span>任务描述</span>
                    </div>
                    <el-input v-model="taskMsgData.description" type="textarea"></el-input>
                </div>
            </el-col>
        </el-row>
        <!-----------------------按钮------------------------------->
        <el-row class="btn-group">
            <el-col :span="6" :offset="4">
                <button @click="confirmBtn" class="affirm">确&nbsp;定</button>
            </el-col>
            <el-col :span="6" :offset="1">
                <button @click.stop="clearBtn" class="delete">清&nbsp;空</button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {get, post} from '@/utils/http'
import {getTaskByIdAPI, taskSelectAPI, updateTaskById} from '@/utils/apiList'
export default {
    name:'TaskMsgPanel',
    inject: ['reload'],
    data(){
        return{
            formDate: [],//日历组件数据
            value: '',
            taskMsgData:{
                id: '',
                taskName: '', // 任务名称
                principalId: 0, // 负责人
                priorityId: 0, // 任务优先级
                workload: '', // 计划投入工作量
                timeSheetId: 0, // 标准工时
                stageId: 0, // 任务当前阶段
                percentage: '', // 任务完成百分比
                description: '' // 任务描述
            },
            // 负责人下拉选项
            maintainer: [
            ],
            // 任务优先级下拉选项
            priority:[],
            // 标准工时下拉选项
            normalHours:[],
            taskStage: [],
        }
    },
    created(){
        get(taskSelectAPI).then(res => {
            console.log(res);
            this.maintainer = res.data.principal;
            this.priority = res.data.priority;
            res.data.timeSheet.forEach(item => {
                this.normalHours.push(
                    Object.assign(
                        {},
                        {
                            "id": item.id,
                            "flag": item.flag,
                            "name": item.laborHour,
                            "level": item.level,
                            "parentId": item.parentId
                        }
                    )
                )
            });
            console.log(this.normalHours);
            this.taskStage = res.data.stage;
        });
    },
    components:{
        InputBox: () => import('../../common/InputBox'),
        SelectBox: () => import('../../common/SelectBox'),
        DateSelect: () => import('../projectManagement/DateSelect')
    },
    computed:{
        // 列表的的行id
        rowId(){
            return this.$store.state.taskRowId;
        },
    },
    watch:{
        // 监听点击列表之后id的变化
        rowId: function(){
            this.getTaskMsg();
        }
    },
    methods:{
        // 给日历组件回填数据
        // getDetails(obj){
        //     this.formDate = [obj.planStartTime,obj.planEndTime];
        // },
        getTaskMsg(){
            // 判断从vuex里面的对象中数据是不是为空
            if(Object.keys(this.rowId).length>0){
                //发送请求，把id和falg传给后端，后端返回对应的任务信息数据
                get(getTaskByIdAPI, {"id": Number(this.rowId.id), "flag": this.rowId.flag})
                    .then(res => {
                        if(res.code == '000'){
                            console.log(res);
                            if(res.data.id){
                                this.taskMsgData.id = res.data.id; // 任务id
                            }
                            this.taskMsgData.taskName = res.data.taskName; // 任务名称
                            // 判断后端返回的数据是否有这个字段
                            if(res.data.principalId){
                                this.taskMsgData.principalId = Number(res.data.principalId);// 负责人
                            }else{
                                this.taskMsgData.principalId = 0;
                            }
                            // 判断后端返回的数据是否有这个字段
                            if(res.data.priorityId){
                                this.taskMsgData.priorityId = Number(res.data.priorityId); //任务优先级
                            }else{
                                // this.taskMsgData.priorityId = 0;
                            }
                            this.taskMsgData.workload = res.data.workload;//计划投入工作量
                            // 判断后端返回的数据是否有这个字段
                            if(res.data.timeSheetId){
                                this.taskMsgData.timeSheetId = Number(res.data.timeSheetId);//标准工时
                            }else{
                                // this.taskMsgData.timeSheetId = 0;
                            }
                            // 判断后端返回的数据是否有这个字段
                            if(res.data.stageId){
                                this.taskMsgData.stageId = Number(res.data.stageId); // 任务当前阶段
                            }else{
                                this.taskMsgData.stageId = 0
                            }
                            this.taskMsgData.percentage = res.data.percentage; //任务完成百分比
                            this.taskMsgData.description = res.data.description; // 任务描述
                            // 把数据传给日历
                            if(res.data.planCycle){
                                this.formDate = [res.data.planCycle.split('/')[0], res.data.planCycle.split('/')[1]];
                            }else{
                                this.formDate = [];
                            }
                        }else {
                            console.log('err');
                        }
                    })
            }
        },
        //改变日历组件触发的函数
        handleDateChange(date){
            console.log(date);
            // this.formDate = date;
        },
        // 点击清空按钮
        clearBtn(){
            for(let key in this.taskMsgData){
                this.taskMsgData[key] = '';
                this.formDate = [];
            }
        },
        //点击确定按钮
        confirmBtn(){
            post(updateTaskById, {
                "id": this.taskMsgData.id,
                "taskName": this.taskMsgData.taskName,
                "timeSheet": this.taskMsgData.timeSheetId,
                "workload": this.taskMsgData.workload,
                "principal": this.taskMsgData.principalId,
                "priority": this.taskMsgData.priorityId,
                "percentage": this.taskMsgData.percentage,
                "planStartTime": this.formDate[0],
                "planEndTime": this.formDate[1],
                "stage": this.taskMsgData.stageId,
                "description": this.taskMsgData.description
            }).then(res => {
                console.log(res);
            }).catch(err => console.log(err));
            this.reload();
        },
        // 负责人下拉框改变获取到的对应id
        getPrincipalChange(value){
            this.taskMsgData.principalId = value.id;
        },
        // 任务优先级下拉改变对应的id
        getPriorityChange(value){
            this.taskMsgData.priorityId = value.id;
        },
        // 标准工时下拉改变id
        getTimeSheetChange(value){
            this.taskMsgData.timeSheetId = value.id;
        },
        // 任务当前阶段下拉改变id
        getStageChange(value){
            this.taskMsgData.stageId = value.id;
        },
        // 任务名称改变
        getTaskNameChange(val){
            this.taskMsgData.taskName = val;
        },
        // 计划投入工作量改变
        getWorkloadChange(val){
            this.taskMsgData.workload = val;
        },
        // 任务完成百分比改变
        getPercentageChange(val){
            this.taskMsgData.percentage = val;
        },
        // 计划任务周期改变
        getPlanCycleChange(date){
            this.formDate = date;
        }
    }
}
</script>
<style lang="less" scoped>
.task-msg{
    .el-row{
        display: flex;
        height: 90px;
        align-items: center;
        /deep/ .el-col{
            display: flex;
            // justify-content: center;
            .input-box{
                .title{
                    font-size: 14px;
                }
                .el-input__inner{
                    
                }
            }
            .select-box{
                .title{
                    font-size: 14px;
                }
                .el-input__inner{
                    padding: 0 10px;
                }
            }
        }
        /deep/ .col-date{
            .date{
                .title{
                    padding-bottom: 15px;
                    span{
                        font-size: 14px;
                    }
                }
                .date-select{
                    .el-date-editor{
                        width: 400px;
                        border-radius: 8px;
                        .el-range-input{
                            width: 150px;
                        }
                        .el-range-input::placeholder{
                            font-weight: 100;
                            font-size: 12px;
                        }
                        .el-range-separator{
                            line-height: 32px;
                        }
                    }
                }
            }
        }
        /deep/ .col-describe{
            .describe{
                .title{
                    padding-bottom: 15px;
                    font-size: 14px;
                }
                .el-textarea{
                    .el-textarea__inner{
                        width: 400px;
                        height: 40px;
                        resize: none;
                        border-radius: 8px;
                    }
                }
            }
        }
    }
    .btn-group{
        height: 250px;
        button{
            width: 150px;
            height: .208333rem;
            border-radius: 20px;
            font-size: 14px;
            outline: none;
            font-family: Microsoft YaHei;
        }
        .affirm{
            background-color: #0066cc;
            color: #fff;
             border: none;
        }
        .delete{
            background-color: #fff;
            color: #0066cc;
            border: 1px solid #0066cc;
        }
    }
}
</style>