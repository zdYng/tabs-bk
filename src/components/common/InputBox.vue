<template>
    <div class="input-box">
        <div class="title">
            <i v-if="showIcon" class="iconfont icon-bitian">&#xe603;</i>
            <span>{{title}}</span>
        </div>
        <el-input 
          v-model="itemValue" 
          :disabled="disable" 
          @change="inputValueChange"
          :placeholder="placeholder">
        </el-input>
    </div>
</template>
<script>
export default {
    name:'InputBox',
    props:{
        title:String,
        showIcon: Boolean,
        disable: Boolean,
        placeholder: String,
        defalutValue: String,
        itemValue:{
            type: String,
            value: ''
        }
    },
    data(){
        return {
        //  itemValue: '',
        }
    },
    mounted(){
        // this.itemValue = this.defalutValue;
    },
    watch:{
        // defalutValue: function(newVal, oldVal){
        //     this.itemValue = this.defalutValue;
        // }
    },
    methods:{
        inputValueChange(){
            this.$emit('inputChange', this.itemValue);
        }
    }
}
</script>
<style lang="less" scoped>
.input-box{
    /deep/ .title{
        display: flex;
        font-size: 16px;
        font-family: Microsoft YaHei;
        padding: 0 0 .078125rem 0;
        .icon-bitian{
            color: red;
            font-size: .0625rem;
            padding-right: .026042rem;
        }
    }
    /deep/ .el-input__inner{
        width: 1.25rem;
        height: 40px;
        border-radius: 10px;
    }
}
</style>