<template>
    <!-- 个人信息 -->
    <div class="person-info">
        <div class="avater">
            <span class="title">我的头像:</span>
            <img src="../../assets/img/avater.png" alt="avater">
        </div>
        <div class="nickname">
            <span class="title">我的昵称:</span>
            <span>孩子气</span>
        </div>
        <div class="user-email">
            <span class="title">我的邮箱:</span>
            <span>mytest@126.com</span>
        </div>
        <div class="job-status">
            <span class="title">我的工作状态:</span>
            <el-select v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                 ></el-option>
            </el-select>
        </div>
        <div class="custom-sign">
            <span class="title">我的个性签名:</span>
            <span>梦想还是要有的，万一实现了呢？</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PersonInfo',
    data(){
        return {
            options:[
                {
                    value: '在职',
                    lable: '选项1'
                },
                {
                    value: '离职',
                    lable: '选项2'
                },
                 {
                    value: '创业',
                    lable: '选项3'
                },
            ],
            value:''
        }
    }
}
</script>
<style scoped>
.person-info{
    width: 5.208333rem;
    height: 5.208333rem;
    padding: .3125rem 0 0 .520833rem;
}
.avater{
    width: 3.125rem;
    height: .625rem;
    display: flex;
    align-items: flex-end;
    font-size: .083333rem;
    color: #333;
}
.avater img{
    display: inline-block;
    width: .625rem;
    height: .625rem;
    background-color: skyblue;
    margin-left: .104167rem;
}
.nickname{
    width: 3.125rem;
    height: .260417rem;
    line-height: .260417rem;
    font-size: .083333rem;
    margin-top: .208333rem;
}
.nickname span:nth-child(2){
    margin-left: .104167rem;
}
.user-email{
   width: 3.125rem;
    height: .260417rem;
    line-height: .260417rem;
    font-size: .083333rem;
    margin-top: .208333rem;
}
.user-email span:nth-child(2){
     margin-left: .104167rem;
}
.job-status{
    width: 3.125rem;
    height: .520833rem;
    margin-top: .208333rem;
    font-size: .083333rem;
}
.job-status .el-select{
    margin-left: .104167rem;
}
.title{
    display: inline-block;
    width: .625rem;
    text-align: end;
}
.custom-sign {
    width: 3.125rem;
    height: .260417rem;
    font-size: .083333rem;
}
.custom-sign span:nth-child(2){
    margin-left: .104167rem;
}
</style>