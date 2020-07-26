<template>
<!-- 可搜索的下拉框 -->
    <div class="search-select">
        <div class="title">
            <i v-if="showIcon" class="iconfont icon-bitian">&#xe603;</i>
            <span>{{title}}</span>
        </div>
        <el-select
          v-model="value"
          filterable
          clearable
          placeholder="请选择">  
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"></el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name: 'SearchSelect',
    props:{
        title: String,
        options: Array,
        showIcon: Boolean,

    },
    data(){
        return {
            value: ''
        }
    }
}
</script>
<style lang="less" scoped>
.search-select{
    .title{
        display: flex;
        font-size: .083333rem;
        padding: 0 0 .078125rem 0;
        .icon-bitian{
            color: red;
            font-size: .0625rem;
            padding-right: .026042rem;
        }
    }
    /deep/ .el-input__inner{
        width: 1.25rem;
        height: .260417rem;
        border-radius: 10px;
    }
}
</style>