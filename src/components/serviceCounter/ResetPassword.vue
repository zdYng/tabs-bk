<template>
    <!-- 修改密码页面 -->
    <div class="container">
        <div class="reset-password">
            <el-row>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <div class="title">请输入旧密码:</div>
                        <el-input></el-input>
                    </div>
                </el-col>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <div class="title">请输入新密码:</div>
                        <el-input></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <div class="title">请确认新密码:</div>
                        <el-input></el-input>
                    </div>
                </el-col>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <div class="title">请输入验证码:</div>
                        <el-input></el-input>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="item-input">
                        <div class="confim-code">此处验证码</div>
                    </div>
                </el-col>
            </el-row>
            <el-row class="row-confit-btn">
                <button class="confirm-btn">确&nbsp;认</button>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResetPassword',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.container{
    padding: .3125rem 0 0 .3125rem;
}

.reset-password{
    width: 5.208333rem;
    height: 2.604167rem;
    box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius:20px;
    box-sizing: border-box;
}
.item-input{
    height: .78125rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.item-input .title{
    font-size: .083333rem;
    padding: 0 0 .078125rem .026042rem;
}
.item-input .el-input  >>> .el-input__inner{
    height: .260417rem;
    border:1px solid rgba(221,221,221,1);
    border-radius: .078125rem;
}
.confim-code{
    width: .729167rem;
    height: .260417rem;
    background:rgba(166,210,255,1);
    margin-left: .15625rem;
    font-size: .083333rem;
    color: #fff;
    line-height: .260417rem;
    text-align: center;
}
.row-confit-btn{
    display: flex;
    justify-content: center;
    height:.78125rem;
    align-items: flex-end;
}
.confirm-btn{
    width: 1.25rem;
    height: .260417rem;
    border: none;
    background:rgba(0,102,204,1);
    border-radius:.104167rem;
    color: #fff;
    font-size: .104167rem;
    margin-top: .15625rem;
    outline: none;
}
</style>