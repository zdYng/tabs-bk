<template>
    <div class="left-panel">
        <AddMenu />
        <el-tree
            class="menu-tree"
            :data="data" 
            :props="defaultProps" 
            @node-click="handleNodeClick"
            :expand-on-click-node="false" 
            >
            <span @mouseenter="isShow" @mouseleave="unShow" class="menu-icon" slot-scope="{node, data}">
                <router-link :id="data.id" :to="{name: 'MenuDetail', params: {id: data.id}}">
                    <span @click="handle(data.id)">{{node.label}}</span>
                </router-link>
                <i v-show="showIcon" :class="data.icon" :iconId="data.id"></i>
            </span>
            </el-tree>
    </div>
</template>
<script>
export default {
    name: 'LeftPanel',
    props: ['data'],
    data(){
        return {
            // menuData: this.$store.state.menuData,
            showIcon: false,
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        }
    },
    components:{
        AddMenu: () => import('../common/AddMenu')
    },
    methods: {
        handleNodeClick(data){
            // console.log(data);
        },
        isShow(e){
            e.target.children[1].style= 'display: true';
            // console.log(e.target.children[1]);
        },
        unShow(e){
            e.target.children[1].style= 'display: none';
            // console.log(e.target.children[1]);
        },
        handle(id){
            this.$store.dispatch('setNodeId', id);
        }
    }
}
</script>
<style scoped>
    .left-panel{
        width: 20%;
        height: 100%;
        box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
        /* padding: .09375rem .104167rem 0 0; */
        /* overflow: auto; */
    }
    .menu-tree{
       height: 100%;
    }
    >>> .el-tree-node__content{
        height: .260417rem;
        font-size: .067708rem;
        color: #303133;
        position: relative;
    }
    >>> .menu-icon{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    >>> .el-icon-more{
        font-size: .072917rem;
    }
</style>
