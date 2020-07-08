<template>
<!-- 任务分解页面 -->
    <div class="main">
        <section class="left">
            <div class="top">
                <BtnGroup :btnGroup="btnGroup"/>
                <DialogBtnGroup />
            </div>
            <TableTree />
        </section>
        <section class="right">
            <CutBar :CutBar="CutBarList"/>
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
export default {
    name: 'TaskDecomposition',
    data(){
        return {
            value:'',
            CutBarList: [
                { id: 1, value: '任务信息', path: 'TaskMsgPanel'},
                { id: 2, value: '任务看板', path: 'TaskBoard'},
            ],
            btnGroup:['新增分组', '新增任务', '新增子任务']
        }
    },
    components:{ 
        TableTree: () => import('./TableTree'),
        CutBar: () => import('../../common/CutBar'),
        BtnGroup: () => import('../../common/BtnGroup'),
        DialogBtnGroup: () => import('./DialogBtnGroup')
    },
}
</script>
<style lang="less" scoped>
.main{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 50%;
        overflow: hidden;
        overflow-y: scroll;
        .top{
            height: 7%;
            display: flex;
            align-items: center;
        }
    }
    // 解决div溢出部分滚动且隐藏滚动条
    .left::-webkit-scrollbar{
        display: none;
    }
    .right{
        width: 50%;
        overflow: hidden;
        overflow-y: scroll;
        scrollbar-width: none;
    }
    .right::-webkit-scrollbar{
        display: none;
    }
}

</style>