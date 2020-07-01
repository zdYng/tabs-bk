<template>
    <div class="add-btn-group">
        <img :src="url">
        <span class="btn-group">
            <span 
              v-for="(item, index) in btnGroup"
              :key="index"
              class="btn-item">
              {{item}}
            </span>
        </span>
    </div>
</template>
<script>
export default {
    name:'BtnGroup',
    props:{
        url:String,
        btnGroup:Array
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.add-btn-group{
    display: flex;
    align-items: center;
    height: .260417rem;
    img{
        width: .119792rem;
        height: .119792rem;
        margin-left: .104167rem;
    }
    .btn-group{
        display: flex;
        align-items: center;
        height: .208333rem;
        box-shadow:0px 0px 10px 0px rgba(0,102,204,0.05);
        border-radius:20px;
        padding: 0 .052083rem;
        margin-left: .104167rem;
        .btn-item{
            font-size: .083333rem;
            color:rgba(102,102,102,1);
            padding: 0 .052083rem;
        }
        .btn-item:hover{
            color: #0066cc;
        }
    }
}
</style>