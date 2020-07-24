<template>
<!-- 弹窗按钮组件 -->
    <div class="add-dialog-group">
        <img @click="handleClick" src="http://47.111.232.105:5000/img/add.png">
        <span v-show="isShow" class="btn-group">
            <span class="btn-item">
                <AddDialog/>
            </span>
            <span class="btn-item">
                <AddDialog />
            </span>
            <span class="btn-item">
                <AddDialog />
            </span>
        </span>
    </div>
</template>
<script>
export default {
    name: 'AddDialogBtnGroup',
    data(){
        return{
            isShow: false
        }
    },
    methods:{
        handleClick(){
            this.isShow = !this.isShow;
        }
    },
    components:{
        AddDialog:() => import('./AddDialog')
    }
}
</script>
<style lang="less" scoped>
.add-dialog-group{
    display: flex;
    align-items: center;
    margin-left: .104167rem;
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