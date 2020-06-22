<template>
    <div class="query-select">
        <div class="select-input">
            <el-select v-model="value1" placeholder="请选择搜索类型">
                <el-option
                    v-for="item in itemList1"
                    :key="item.id"
                    :value="item.value"
                    :label="item.label">
                </el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择搜索条件">
                <el-option
                    v-for="item in itemList2"
                    :key="item.id"
                    :value="item.value"
                    :label="item.label">
                </el-option>
            </el-select>
        <button class="select-btn">查询</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'QuerySelect',
    data(){
        return {
            value1: '',
            value2: '',
            itemList1:[
                {
                    id: 1,
                    label: 'label1',
                    value: 'value1'
                },
                {
                    id: 2,
                    label: 'label2',
                    value: 'value2'
                }
            ],
            itemList2:[
                {
                    id: 3,
                    label: 'label3',
                    value: 'value1'
                },
                {
                    id: 4,
                    label: 'label4',
                    value: 'value2'
                }
            ]
        }
    }
}
</script>
<style scoped>
.el-select{
    margin-left: .133333rem;
}
>>> .el-input__inner{
    border-radius: .066667rem;
    width: 1.041667rem;
}
.select-btn{
    width: .416667rem;
    height: .182292rem;
    background-color: #fff;
    border-radius: .052083rem;
    border: solid 1px #0066cc;
    font-size: .083333rem;
    color: #0066cc;
    margin-left: .104167rem;
}
</style>