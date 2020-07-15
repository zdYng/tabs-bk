<template>
    <div class="date-select">
        <el-date-picker
          @change="getPickDate"
          v-model="planDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:'DateSelect',
    data(){
        return{
            planDate: '',
        }
    },
    methods:{
        getPickDate(){
            console.log(this.planDate);
            this.$emit('pickDate', this.planDate);
        }
    }
}
</script>
<style lang="less" scoped>
.date-select{
    /deep/ .el-input__inner{
        width: 3.385417rem;
        .el-range-separator{
            line-height: .21875rem;
        }
    }
}
</style>