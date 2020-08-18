<template>
    <div class="container">
        <!-- 消息提醒 -->
        <div class="message-remind">
            <div class="item">
                <span class="title">消息提醒</span>
                <el-switch
                v-model="value1"
                active-color="#0066cc"
                inactive-color="#cdcdcd">
                </el-switch>
            </div>
            <div class="item">
                <span class="title">弹出消息</span>
                <el-switch
                v-model="value2"
                active-color="#0066cc"
                inactive-color="#cdcdcd">
                </el-switch>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'MessageRemind',
    data(){
        return {
            value1: true,
            value2: false
        }
    }
}
</script>
<style scoped>
.container{
    
}
.message-remind {
    width:430px;
    height:300px;
    /* box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.05); */
    border-radius:20px;
    box-sizing: border-box;
    padding: .15625rem 0;
}
.item{
    width: 100%;
    height: 80px;
    display: flex;
    padding-left: 80px;
    /* justify-content: space-around; */
    align-items: center;
}
.item .title{
    font-size: 16px;
    margin-right: 80px;
}
</style>