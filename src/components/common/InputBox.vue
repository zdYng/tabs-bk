<template>
    <div class="input-box">
        <div class="title">
            <i v-if="showIcon" class="iconfont icon-bitian">&#xe603;</i>
                <span>{{title}}</span>
        </div>
        <el-input v-model="value" placeholder="请输入内容"></el-input>
    </div>
</template>
<script>
export default {
    name:'InputBox',
    props:{
        title:String,
        showIcon: Boolean
    },
    data(){
        return {
            value:''
        }
    }
}
</script>
<style lang="less" scoped>
.input-box{
    .title{
        display: flex;
        font-size: .083333rem;
        padding: 0 0 .078125rem 0;
        .icon-bitian{
            color: red;
            font-size: .0625rem;
            padding-right: .026042rem;
        }
    }
    /deep/ .el-input__inner{
        width: 1.25rem;
        height: .260417rem;
        border-radius: .078125rem;
    }
}
</style>