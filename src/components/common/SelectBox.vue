<template>
    <div class="select-box">
        <div class="title">
            <span>{{title}}</span>
        </div>
        <el-select class="select-box" v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name: 'SelectBox',
    props:{
        options: Array,
        title: String,
    },
    data(){
        return{
            value:''
        }
    }
}
</script>
<style lang="less" scoped>
.select-box{
    .title{
        font-size: .083333rem;
        padding: 0 0 .078125rem 0;
    }
    /deep/ .el-input__inner{
        width: 1.25rem;
        height: .260417rem;
        border-radius: .078125rem;
    }
}
</style>