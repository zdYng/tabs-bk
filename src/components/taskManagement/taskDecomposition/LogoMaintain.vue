<template>
<!-- 日志管理页面 -->
    <div class="logo-maintain">
        <div class="logo-top">
            <QuerySelect  :itemList1="selectList" buttonText="查询"/>
            <button class="add-remark">新增备注</button>
        </div>
        <!-- 日志管理的表格 -->
        <div class="log-table">
            <LogoTable />
        </div>
    </div>
</template>
<script>
export default {
    name: 'LogoMaintain',
    data(){
        return {
            selectList: [
                {
                    id: 1,
                    label: '搜索类型一'
                },
                {
                    id: 2,
                    label: '搜索类型二'
                },
            ]
        }
    },
    components:{
        QuerySelect: () => import('../../common/QuerySelect'),
        LogoTable: () => import('./LogoTable')
    }
}
</script>
<style lang="less" scoped>
.logo-maintain{
    width: 100%;
    height: 100%;
    .logo-top{
        width: 100%;
        height: .416667rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .add-remark{
            width: .625rem;
            height: .208333rem;
            background:rgba(0,102,204,1);
            border-radius:15px;
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:500;
            color:rgba(255,255,255,1);
            border: none;
            outline: none;
            margin-right: .104167rem;
        }
    }
    .log-table{
        width: 100%;
        padding: .104167rem .104167rem 0 .104167rem;
    }
}
</style>