<template>
    <div class="pro-table">
        <el-table class="tab-border-radius scroll-bar" :data="list" height="500px" border style="width: 100%;">
            <el-table-column
              type="selection"
              width="50">
              </el-table-column>
            <el-table-column
              v-for="item in itemOptions"
              :key="item.id"
              :label="item.title"
              :prop="item.key"
              align="center"
              :width="item.width">
              </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'ProjectTable',
    data(){
        return{
            list:[
                {
                    id:1,
                    proName: '项目名称1',
                    proCode: '项目CODE1',
                    proType:'项目类型1',
                    proStage:'项目阶段1',
                    proCreateTime:'2020-06-23',
                    planCycle: '2020-06-23/2020-06-25',
                    infactTime:'2020-06-25/2020-06-27',
                    proProgress:'项目进度',
                    proManager:'项目经理',
                    userName:'客户名称',
                    fromBD:'所属BD',
                    custom:'自定义字段'
                },
                {
                    id:2,
                    proName: '项目名称2',
                    proCode: '项目CODE2',
                    proType:'项目类型2',
                    proStage:'项目阶段2',
                    proCreateTime:'2020-06-23',
                    planCycle: '2020-06-23/2020-06-25',
                    infactTime:'2020-06-25/2020-06-27',
                    proProgress:'项目进度',
                    proManager:'项目经理',
                    userName:'客户名称',
                    fromBD:'所属BD',
                    custom:'自定义字段'
                },
                {
                    id:3,
                    proName: '项目名称2',
                    proCode: '项目CODE2',
                    proType:'项目类型2',
                    proStage:'项目阶段2',
                    proCreateTime:'2020-06-23',
                    planCycle: '2020-06-23/2020-06-25',
                    infactTime:'2020-06-25/2020-06-27',
                    proProgress:'项目进度',
                    proManager:'项目经理',
                    userName:'客户名称',
                    fromBD:'所属BD',
                    custom:'自定义字段'
                },
                {
                    id:4,
                    proName: '项目名称2',
                    proCode: '项目CODE2',
                    proType:'项目类型2',
                    proStage:'项目阶段2',
                    proCreateTime:'2020-06-23',
                    planCycle: '2020-06-23/2020-06-25',
                    infactTime:'2020-06-25/2020-06-27',
                    proProgress:'项目进度',
                    proManager:'项目经理',
                    userName:'客户名称',
                    fromBD:'所属BD',
                    custom:'自定义字段'
                },
                {
                    id:5,
                    proName: '项目名称2',
                    proCode: '项目CODE2',
                    proType:'项目类型2',
                    proStage:'项目阶段2',
                    proCreateTime:'2020-06-23',
                    planCycle: '2020-06-23/2020-06-25',
                    infactTime:'2020-06-25/2020-06-27',
                    proProgress:'项目进度',
                    proManager:'项目经理',
                    userName:'客户名称',
                    fromBD:'所属BD',
                    custom:'自定义字段'
                },
                {
                    id:6,
                    proName: '项目名称2',
                    proCode: '项目CODE2',
                    proType:'项目类型2',
                    proStage:'项目阶段2',
                    proCreateTime:'2020-06-23',
                    planCycle: '2020-06-23/2020-06-25',
                    infactTime:'2020-06-25/2020-06-27',
                    proProgress:'项目进度',
                    proManager:'项目经理',
                    userName:'客户名称',
                    fromBD:'所属BD',
                    custom:'自定义字段'
                },
                {
                    id:7,
                    proName: '项目名称2',
                    proCode: '项目CODE2',
                    proType:'项目类型2',
                    proStage:'项目阶段2',
                    proCreateTime:'2020-06-23',
                    planCycle: '2020-06-23/2020-06-25',
                    infactTime:'2020-06-25/2020-06-27',
                    proProgress:'项目进度',
                    proManager:'项目经理',
                    userName:'客户名称',
                    fromBD:'所属BD',
                    custom:'自定义字段'
                },
            ],
            itemOptions:[
                { id: 1, title:'序号',type: 'text', key: 'id', width:'50'},
                { id: 2, title: "项目名称", type: "text", key: "proName", width:'150'},
                { id: 3, title: "项目CODE", type: "text", key: "proCode", width:'100' },
                { id: 4, title: "项目类型", type: "text", key: "proType", width:'100' },
                { id: 5, title: "项目阶段", type: "text", key: "proStage", width:'100' },
                { id: 6, title: "项目创建时间", type: "text", key: "proCreateTime", width:'179' },
                { id: 7, title: "计划周期", type: "text", key: "planCycle", width:'200' },
                { id: 8, title: "实际周期", type: "text", key: "infactTime", width:'200' },
                { id: 9, title: "项目进度", type: "text", key: "proProgress", width:'200' },
                { id: 10, title: "项目经理", type: "text", key: "proManager", width:'100' },
                { id: 11, title: "客户名称", type: "text", key: "userName", width:'100' },
                { id: 12, title: "所属BD", type: "text", key: "fromBD", width:'100' },
                { id: 13, title: "自定义字段", type: "text", key: "custom", width:'100' },
            ]
        }
    },
    methods:{
        getDataName(scope, items){
            return scope[items]
        }
    }
}
</script>
<style scoped>
.pro-table{
    width: 100%;
}
.tab-border-radius{
    border-radius: .052083rem;
}
>>> .el-table__header .has-gutter{
    /* color:rgba(51,51,51,1); */
    font-family:Microsoft YaHei;
    color: #000;
}
>>> .el-table__row{
    color:rgba(102,102,102,1);

}
</style>