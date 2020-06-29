<template>
    <!-- 项目进度维护 -->
    <div class="schedule">
        <div class="content">
            <el-row class="row-one">
                <el-col :span="10" :offset="2">
                    <SelectBox :options="optionList"  :title="title"/>
                </el-col>
            </el-row>
            <el-row class="row-date">
                <el-col :span="10" :offset="2">
                    <DatePicker :text="startDate"/>
                </el-col>
                <el-col :span="10" :offset="1">
                    <DatePicker :text="endDate"/>
                </el-col>
            </el-row>
            <el-row class="row-area">
                <el-col :span="20" :offset="2">
                    <div class="title">
                        <span>备注</span>
                    </div>
                    <el-input
                      type="textarea"
                      v-model="areaValue">
                    </el-input>
                </el-col>
            </el-row>
            <el-row class="row-btn">
                <button>确&nbsp;定</button>
            </el-row>
        </div>      
    </div>
</template>
<script>
export default {
    name: 'ProScheduleMantain',
    data(){
        return {
            title: '项目阶段',
            startDate: '实际开始时间',
            endDate: '实际结束时间',
            areaValue: '',
            optionList:[
                {
                   value: '选项一',
                   label: 'javascript' 
                },
                {
                    value: '选项二',
                    label: 'vue'
                }
            ]
        }
    },
    components:{
        SelectBox: () => import('../../common/SelectBox'),
        DatePicker: () => import('../../common/DatePicker')
    }
}
</script>
<style lang="less" scoped>
.schedule{
    width: 700px;
    height:500px;
    box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius:20px;
    margin: .3125rem 0 0 .3125rem;
    padding-top: .260417rem;
    justify-content: space-between;
    .el-row{
        height: .572917rem;   
    }
    .row-one{
        display: flex;
        justify-content: flex-start;
    }
    .row-date{
        display: flex;
        justify-content: flex-start;
    }
    .row-area{
        height: .78125rem;
        .title{
            font-size: .083333rem;
            padding: 0 0 .078125rem 0;
        }
        /deep/ .el-textarea__inner{
            width: 2.927083rem;
            height: .625rem;
            border-radius: .078125rem;
            resize: none;
        }
    }
    .row-btn{
        width: 100%;
        display: flex;
        justify-content: center;;
        align-items: flex-end;
        button{
            width: 1.041667rem;
            height: .260417rem;
            background:rgba(0,101,203,1);
            border-radius:20px;
            color: #fff;
            border: none;
            outline: none;
            font-size: .104167rem;
        }
    }
}
</style>