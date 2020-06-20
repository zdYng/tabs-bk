<template>
    <div class="left-panel">
        <AddMenu />
        <el-tree
            class="menu-tree"
            :data="data" 
            :props="defaultProps" 
            @node-click="handleNodeClick"
            :expand-on-click-node="false">
            <span class="menu-icon" slot-scope="{node, data}">
                <span @click.stop="handle(data.id, data.leaf)">{{node.label}}</span>
            </span>
            </el-tree>
    </div>
</template>
<script>
export default {
    name: 'DicLeftPanel',
    props: ['data'],
    data(){
        return {
            // menuData: this.$store.state.menuData,
            toName: '',
            showIcon: false,
            defaultProps: {
                children: 'children',
                label: 'category_name'
            }
        }
    },
    components: {
        AddMenu: () => import('../common/AddMenu')
    },
    mounted(){
      
    },
    methods: {
        handleNodeClick(data){
            //  console.log(data);
        },
        handle(id, leaf){
            this.$store.dispatch('setDicNodeId', id);
            if(leaf === 0) {
                this.$router.push({name: 'DictionaryDetail'});

            } else if(leaf === 1){
                this.$router.push({name: 'DataDictionary', params:{id: id}})
            }
        },
    }
}
</script>
<style scoped>
    .left-panel{
        width: 1.5625rem;
        height: 3.75rem;
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
     >>> .menu-icon span{
        display: block;
        width: 1.333333rem;
     }
    >>> .el-icon-more{
        font-size: .072917rem;
    }
</style>
