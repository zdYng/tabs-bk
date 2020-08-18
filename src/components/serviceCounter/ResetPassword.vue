<template>
    <!-- 修改密码页面 -->
    <div class="container">
        <div class="reset-password">
            <el-row>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <InputBox title="请输入旧密码"/>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <InputBox title="请输入新密码"/>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <InputBox title="请确认新密码"/>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="2">
                    <div class="item-input">
                        <InputBox title="请输入验证码"/>
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
    },
    components:{
        InputBox: () => import('../common/InputBox')
    }
}
</script>
<style lang="less" scoped>
@deep: ~'>>>';
.container{
    // padding: 10px 0 0 10px;
    @{deep} .reset-password{
        width: 900px;
        height: 500px;
        // box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.05);
        border-radius:20px;
        box-sizing: border-box;
        padding-top: 20px;
        .item-input{
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .input-box{
                .title{
                    span{
                        font-size: 14px;
                    }
                }
                .el-input{
                    .el-input__inner{

                    }
                }
            }
            .confim-code{
                width: 100px;
                height: 40px;
                background:rgba(166,210,255,1);
                margin-left: .15625rem;
                font-size: 14px;
                color: #fff;
                line-height: 40px;
                text-align: center;
            }
        }
        .row-confit-btn{
            display: flex;
            height: 150px;
            align-items: flex-end;
            margin-left: 230px;
            .confirm-btn{
                width: 200px;
                height: 40px;
                border: none;
                background:rgba(0,102,204,1);
                border-radius: 20px;
                color: #fff;
                font-size: 16px;
                margin-top: .15625rem;
                outline: none;
            }
        }
    }
}
</style>