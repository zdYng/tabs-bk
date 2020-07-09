<template>
    <div class="left-panel">
        <el-tree
            class="menu-tree"
            :data="data" 
            :props="defaultProps" 
            @node-click="handleNodeClick"
            :expand-on-click-node="false" 
            >
            <span class="menu-icon" slot-scope="{node, data}">
                <router-link :id="data.id" to="#">
                    <span @click="handle(data.id)">{{node.label}}</span>
                </router-link>
            </span>
            </el-tree>
    </div>
</template>
<script>
export default {
    name: 'LeftPanel',
    props: {
        data:Array
    },
    data(){
        return {
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        }
    },
    components:{
       
    },
    methods: {
        handleNodeClick(data){
            // console.log(data);
        },
        handle(id){
            this.$store.dispatch('setNodeId', id);
        }
    }
}
</script>
<style lang="less" scoped>
.left-panel{
    width: 1.5625rem;
    height: 100%;
    box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    .menu-tree{
        height: 100%;
        /deep/ .el-tree-node__content{
            height: .260417rem;
            font-size: .067708rem;
            color: #303133;
            position: relative;
            .menu-icon{
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
        }
    }
}
</style>
