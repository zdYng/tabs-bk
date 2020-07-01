<template>
    <div class="main">
        <!-- <SaveTemplate />
        <ImportTemplate /> -->
        <section class="left">
            <div class="top">
            </div>
            <TableTree />
        </section>
        <section class="right">
            <TaskMsgPanel />
        </section>
    </div>
</template>
<script>
export default {
    name: 'TaskDecomposition',
    data(){
        return {
            value:''
        }
    },
    components:{ 
        TableTree: () => import('./TableTree'),
        TaskMsgPanel: () => import('./TaskMsgPanel')
        // SaveTemplate: () => import('../../common/SaveTemplate'),
        // ImportTemplate: () => import('../../common/ImportTemplate')
    }
}
</script>
<style lang="less" scoped>
.main{
    display: flex;
    .left{
        .top{
            display: flex;
        }
    }
    .right{
        width: 3.125rem;
    }
}

</style>