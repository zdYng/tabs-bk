<template>
<!--新增分组、新增任务、新增子任务，弹窗按钮组件 -->
    <div class="add-dialog-group">
        <i @click="handleClick" class="el-icon" :class="[ isShow ? 'el-icon-remove-outline' : 'el-icon-circle-plus-outline']"></i>
        <span v-show="isShow" class="btn-group">
            <span class="btn-item">
                <AddGroup btnText="新增分组" title="新增分组" label="分组名称"/>
            </span>
            <span class="btn-item">
                <AddTask btnText="新增任务"/>
            </span>
            <span class="btn-item">
                <AddChilrenTask btnText="新增子任务"/>
            </span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'AddDialogBtnGroup',
    data(){
        return{
            isShow: true
        }
    },
    methods:{
        handleClick(){
            this.isShow = !this.isShow;
        }
    },
    components:{
        AddGroup:() => import('./dialog/AddGroup'),
        AddTask: () => import('./dialog/AddTask'),
        AddChilrenTask: () => import('./dialog/AddChildrenTask')
    }
}
</script>
<style lang="less" scoped>
.add-dialog-group{
    display: flex;
    align-items: center;
    margin-left: .104167rem;
    .el-icon{
        font-size: 24px;
        color: #0066cc;
        cursor: pointer;
    }
    .btn-group{
        display: flex;
        align-items: center;
        box-shadow:0px 0px 10px 0px rgba(0,102,204,0.05);
        border-radius: 20px;
        overflow: hidden;
        .delete-btn{
            width: 40px;
            display: inline-block;
            color:rgba(102,102,102,1);
            font-size: 14px;
            text-align: center;
            font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        }
        .btn-item{
            display: flex;
            color:rgba(102,102,102,1);
            padding: 0 .052083rem;
        }
        .btn-item:hover{
            color: #409EFF;
        }
    }
    /deep/ .el-button--text{
        color:rgba(102,102,102,1);
    }
    /deep/ .el-button--text:hover{
        color: #409EFF;
    }
}
</style>