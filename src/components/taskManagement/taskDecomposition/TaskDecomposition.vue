<template>
    <div class="main">
        <section class="left">
            <div class="top">
                <ShortCut />
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
            ]
        }
    },
    components:{ 
        TableTree: () => import('./TableTree'),
        CutBar: () => import('../../common/CutBar'),
        ShortCut: () => import('./ShortCut')
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
            display: flex;
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