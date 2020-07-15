<template>
    <!-- ---------------------任务信息----------------------------- -->
    <div class="task-msg">
        <el-row>
            <el-col :span="12">
                <InputBox :itemValue='taskMsgData.taskName' title="任务名称" />
            </el-col>
            <el-col :span="12">
                <SelectBox :itemValue="taskMsgData.principal" title="负责人" :options="maintainer"/>
            </el-col>
        </el-row>
        <!-- ---------------------日期选择----------------------------- -->
        <div class="date-select">
            <el-row>
                <el-col :span="24">
                    <div>
                        <div class="title">
                            <span>计划任务周期</span>
                        </div>
                        <el-date-picker
                        v-model="formDate"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- ---------------------任务优先级----------------------------- -->
        <el-row>
            <el-col :span="12">
                <SelectBox :itemValue="taskMsgData.priority"  title="任务优先级" :options="priority"/>
            </el-col>
            <el-col :span="12">
                <InputBox :itemValue="taskMsgData.workload" v-model="value" title="计划投入工作量" />
            </el-col>
        </el-row>
        <!-- ---------------------标准工时----------------------------- -->
        <el-row>
            <el-col :span="12">
                <SelectBox :itemValue="taskMsgData.timeSheet" title="标准工时" :options="priority"/>
            </el-col>
            <el-col :span="12">
                <SelectBox :itemValue="taskMsgData.stage" title="任务当前阶段" :options="priority"/>
            </el-col>
        </el-row>
        <!-- ---------------------任务完成百分比----------------------------- -->
        <el-row>
            <el-col :span="12">
                <InputBox :itemValue="taskMsgData.percentage" title="任务完成百分比" />
            </el-col>
        </el-row>
        <!-- ---------------------任务描述----------------------------- -->
        <el-row class="task-describe">
            <el-col :span="24">
                <div>
                    <div class="title">
                        <span>任务描述</span>
                    </div>
                    <el-input v-model="taskMsgData.description" type="textarea"></el-input>
                </div>
            </el-col>
        </el-row>
        <!-----------------------按钮------------------------------->
        <el-row class="btn-group">
            <el-col>
                <button class="affirm">确&nbsp;定</button>
            </el-col>
            <el-col>
                <button class="delete">清&nbsp;空</button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {get} from '@/utils/http'
import {getTaskByIdAPI} from '@/utils/apiList'
export default {
    name:'TaskMsgPanel',
    data(){
        return{
            formDate: '',
            value: '',
            taskMsgData:{},
            // 负责人下拉选项
            maintainer: [
                {
                    label:'负责人一',
                    value: '负责人的id'
                },
                {
                    label:'负责人二',
                    value: '负责人的id'
                }
            ],
            // 任务优先级下拉选项
            priority:[
                {
                    label:'优先级一',
                    value: '优先级一的id'
                },
                {
                    label:'优先级二',
                    value: '优先级二的id'
                }
            ],
            // 标准工时下拉选项
            normalHours:[
                {
                    label:'标准工时一',
                    value:'标准工时一的id'
                },
                {
                    label:'标准工时二',
                    value:'标准工时二的id'
                }
            ]
        }
    },
    components:{
        InputBox: () => import('../../common/InputBox'),
        SelectBox: () => import('../../common/SelectBox')
    },
    created(){
        get(getTaskByIdAPI, {id: 1}).then(res => {
            console.log(res);
            this.taskMsgData = res.data;
            this.getDetails(res.data);
        })
    },
    methods:{
        getDetails(obj){
            this.formDate = [obj.planStartTime,obj.planEndTime];
        }
    }
}
</script>
<style lang="less" scoped>
.task-msg{
    .el-row{
        display: flex;
        height: .520833rem;
        align-items: center;
        .el-col{
            display: flex;
            justify-content: center;
        }
    }
    .date-select{
       display: flex;
       justify-content: center;
       .el-row{
        //    width: 2.708333rem;
           .title{
                font-size: .083333rem;
                padding: 0 0 .078125rem 0;
           }
           /deep/ .el-input__inner{
                width: 3.359375rem;
                height: .260417rem;
                border-radius: .078125rem;
                .el-range-separator{
                    line-height: .21875rem;
                }
           }
       }
    }
    .task-describe{
        height: .625rem;
        .title{
            font-size: .083333rem;
            padding: 0 0 .078125rem 0;
        }
        /deep/ .el-textarea__inner{
            width: 3.359375rem;
            height: .416667rem;
            border-radius: .078125rem;
            resize: none;
        }
    }
    .btn-group{
        button{
            width: .520833rem;
            height: .208333rem;
            border-radius: .104167rem;
            border: 2px solid #0066cc;
            font-size: .083333rem;
            outline: none;
        }
        .affirm{
            background-color: #0066cc;
            color: #fff;
        }
        .delete{
            background-color: #fff;
            color: #0066cc;
        }
    }
}
</style>