<template>
<!-- 删除、快捷维护、保存模版、导入模版，弹窗按钮组件 -->
    <div class="dialog-group">
        <i @click="handleClick" class="el-icon" :class="[ isShow ? 'el-icon-remove-outline' : 'el-icon-circle-plus-outline']"></i>
        <span v-show="isShow" class="btn-group">
            <span class="btn-item">
                <ConfirmDeleteDialog btnText="删除"/>
            </span>
            <span class="btn-item">
                <ShortCut btnText="快捷维护"/>
            </span>
            <span class="btn-item">
                <SaveModelDialog />
            </span>
            <span class="btn-item">
                <ImportTemplate />
            </span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'DialogBtnGroup',
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
        ShortCut: () => import('./dialog/ShortCut'),
        SaveModelDialog: () => import('./dialog/SaveTemplate'),
        ImportTemplate: () => import('./dialog/ImportTemplate'),
        ConfirmDeleteDialog: () => import('./dialog/ConfirmDeleteDialog')
    }
}
</script>
<style lang="less" scoped>
.dialog-group{
    display: flex;
    align-items: center;
    margin-left: .104167rem;
    .el-icon{
        font-size: 24px;
        color: #0066cc;
        cursor: pointer;
    }
    img{
        width: .130208rem;
        height: .130208rem;
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