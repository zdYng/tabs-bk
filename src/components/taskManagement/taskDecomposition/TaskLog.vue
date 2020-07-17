<template>
    <div class="task-log">
        <div class="log-header">
            <span class="title">任务完成内容</span>
            <span class="answer">回复</span>
        </div>
        <div class="log-text">
            <div class="logo-item"></div>
            <el-input type="textarea" v-model="value" placeholder="请输入内容"></el-input>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TaskLog',
    data(){
        return {
            value: ''
        }
    }
}
</script>
<style lang="less" scoped>
.task-log{
    width: 80%;
    border:1px solid rgba(221,221,221,1);
    // border-radius: .078125rem;
    margin-top: .104167rem;
    .log-header{
        width: 100%;
        height: .260417rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .078125rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(221,221,221,1);
        .title{
            font-size: .083333rem;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(51,51,51,1);
        }
        .answer{
            font-size: .083333rem;
            color:rgba(0,102,204,1);
        }
    }
    .log-text{
        width: 100%;   
        .logo-item{
            width: 100%;
            height: 100px;
        }
        /deep/ .el-textarea{
            .el-textarea__inner{
                height: .520833rem;
                resize: none;
                border-right: none;
                border-left: none;
                border-bottom: none;
                border-radius: 0%;
            }
            /deep/ .el-textarea__inner:focus{
                border-color: #ddd;
            }
        }
    }
}
</style>