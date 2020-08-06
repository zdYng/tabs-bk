<template>
    <div class="date-select">
        <el-date-picker
          @change="getPickDate"
          v-model="dateTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:'DateSelect',
    props:{
        defaultDateTime: Array
    },
    watch:{
        defaultDateTime: function(newVal, oldVal){
            this.defaultDateTime = newVal;
            this.taskForm.startTime = this.defaultDateTime[0];
            this.taskForm.endtime = this.defaultDateTime[1];
        }
    },
    data(){
        return{
            taskForm:{
                startTime: null,
                endtime: null
            }
        }
    },
    mounted(){
        // this.taskForm.startTime = this.defaultDateTime[0];
        // this.taskForm.endtime = this.defaultDateTime[1];
    },
    computed:{
        dateTime:{
            get(){
                if(this.taskForm.startTime && this.taskForm.endtime){
                    return [this.taskForm.startTime, this.taskForm.endtime]
                }else {
                    return []
                }
            },
            set(val){
                this.taskForm.startTime = val[0];
                this.taskForm.endtime = val[1];
            }
        }
    },
    methods:{
        getPickDate(date){
            this.$emit('pickDate', date);
        }
    }
}
</script>
<style lang="less" scoped>
.date-select{
    /deep/ .el-input__inner{
        width: 3.385417rem;
        height: 40px;
        .el-range-separator{
            line-height: .21875rem;
        }
    }
}
</style>