<template>
    <!-- 项目管理主页面 -->
    <div class="pro-management">
        <header>
            <QuerySelect 
              :itemList1="selectGroup"
              placeholder1="请选择搜索类型"
              placeholder2="请选择搜索条件"
              buttonText="查询"/>
            <div class="btn-group">
                <button class="change-btn">修改</button>
                <button class="set-btn">调整项目阶段</button>
                <button class="add-btn">新增项目</button>
            </div>
        </header>
        <section class="tab-section">
            <ProjectTable />
        </section>
    </div>
</template>
<script>
export default {
    name: 'ProjectManagement',
    data(){
        return{
            selectGroup: [{id:1, label: '菜单类型'}, {id: 2, label: '按钮类型'}]
        }
    },
    components:{
        QuerySelect: () => import('../../common/QuerySelect'),
        ProjectTable: () => import('./ProjectTable')
    }
}
</script>
<style scoped>
.pro-management{
    width: 100%;
}
header {
    width: 100%;
    padding-top: .133333rem;
    display: flex;
    justify-content: space-between;
}
.change-btn,.set-btn{
    width: .416667rem;
    height: .182292rem;
    background-color: #fff;
    border-radius: .052083rem;
    border: solid 1px #0066cc;
    font-size: .083333rem;
    color: #0066cc;
    margin-left: .104167rem;
    outline: none;
}
.set-btn{
    width: .625rem;
    font-weight: 400;
}
.add-btn{
    width: .520833rem;
    height: .182292rem;
    background-color: #0066cc;
    border-radius: .104167rem;
    font-size: .083333rem;
    color: #fff;
    border: none;
    margin: 0 .104167rem 0 .104167rem;
    outline: none;
}
.tab-section{
    display: flex;
    justify-content: center;
    padding: .15625rem .104167rem 0 .104167rem;
}
</style>