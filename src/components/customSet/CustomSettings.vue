<template>
    <!-- 个性化设置页面 -->
    <div class="custom-settings">
        <!-- top row -->
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span style="margin-left: .078125rem">登录页设置</span>
                        </span>
                    <button>保&nbsp;存</button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="item-input">
                    <div class="title">系统名称:</div>
                    <el-input></el-input>
                </div>
                <div class="item-input">
                    <div class="title">企业URL:</div>
                    <el-input></el-input>
                </div>
                <div class="item-input">
                    <div class="title">填充方式:</div>
                    <el-input></el-input>
                </div>
            </el-col>
            <el-col :span="16">
                <div>
                    <div class="bg-img-text">登录页面背景图片:</div>
                    <img class="bg-img" src="../../assets/img/login-bg-img.png">
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span style="margin-left: .078125rem">系统主题设置</span>
                    </span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="item-input">
                    <div class="title">填充方式:</div>
                    <el-input></el-input>
                </div>
            </el-col>
            <el-col :span="16">
                <div>
                    <div class="bg-img-text">系统主题背景图片:</div>
                    <img class="bg-img" src="../../assets/img/login-bg-img.png">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'CustomSettings',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
/* top-row */
.custom-settings{
    width: 100%;
    height: 5.208333rem; 
}
.item-top{
    height: .3125rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .3125rem;
}
.item-top .top-text{
    font-size: .114583rem;
    display: flex;
    vertical-align: center;
    align-self: center;
}
.before-span{
    display: inline-block;
    width: .03125rem;
    height: .114583rem;
    background-color: #000;
}
.item-top button{
    width: .729167rem;
    height: .234375rem;
    background:rgba(0,102,204,1);
    border-radius:20px;
    border: none;
    font-size: .104167rem;
    color: #fff;
    outline: none;
    align-self: flex-end;
}

.item-input{
    width: 1.25rem;
    height: .520833rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: .416667rem;
}
.item-input .title{
    font-size: .083333rem;
    padding: 0 0 .078125rem .026042rem;
}
.item-input .el-input  >>> .el-input__inner{
    width: 1.5625rem;
    height: .260417rem;
    border:1px solid rgba(221,221,221,1);
    border-radius: .078125rem;
}
.bg-img-text{
    font-size: .083333rem;
    height: .208333rem;
    line-height: .208333rem;
}
.bg-img{
    display: block;
    height: 1.25rem;
}
</style>