<template>
    <div class="menu-left-panel">
        <el-tree
            class="menu-tree"
            :data="data"
            node-key="id"
            @node-click="handleNodeClick"
            :props="props"
            highlight-current
            :default-expand-all="false"
            :expand-on-click-node="false">
        </el-tree>
    </div>
</template>
<script>
export default {
    name:'MenuLeftPanel',
    props:{
        data:Array
    },
    data(){
        return{
            props:{
                children: 'children',
                label: 'name'
            }
        }
    },
    methods:{
        handleNodeClick(event, data, node){
            this.$store.dispatch('setMenuDetailData', data);
        }
    }
}
</script>
<style lang="less" scoped>
.menu-left-panel{
    width: 200px;
    min-width: 200px;
    height: 100%;
    box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    .menu-tree{
        height: 100%;
        /deep/ .el-tree-node__content{
            height: 30px;
            // font-size: .067708rem;
            color: #303133;
            position: relative;
            .el-tree-node__label{
                font-size: 12px;
            }
            .menu-icon{
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
        }
    }
}
</style>