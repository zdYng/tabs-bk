<template>
    <el-tree
        class="menu-tree"
        :props="props"
        :load="loadNode"
        lazy
        :data="tData"
        @node-click="handleNodeClick"
        :default-expand-all="false"
        :expand-on-click-node="false">
    </el-tree>
</template>
<script>
import {get} from '@/utils/http'
import {listTree, getSheetByIdAPI} from '@/utils/apiList'
export default {
    name: 'MainHourTree',
    props:{
        treeData:Array
    },
    data(){
        return{
            props:{
                label: 'name',
                children: 'parent'
            },
            tData: []
        }
    },
    created(){
        get(listTree).then(res => {
            this.tData = res.data;
        })
    },
    methods:{
        // 点击一级菜单逐级加载子节点
        loadNode(node, resolve){
            if(node.level === 0){
                return resolve(this.treeData)
            }
            if(node.level > 0){
                if(node.data.parent){
                    get(listTree, {"id": node.data.id})
                        .then(res => {
                            if(res.data.length > 0){
                                resolve(res.data);
                            }else{
                                resolve([]);
                            }
                        })
                }else{
                    resolve([]);
                }
            } 
        },
        handleNodeClick(data, node, component){
            console.log(data);
            // data是节点自身的数据，noe是节点NODE包括一些事件，component节点组件本身
            get(getSheetByIdAPI, {"id": data.id})
                .then(res => {
                    this.$store.dispatch('setMainHourNodeData', res.data);
                })
            
        }
    }
}
</script>
<style lang="less" scoped>
.menu-tree{
    // height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    /deep/ .el-tree-node__content{
    height: 30px;
    font-size: 12px;
    color: #303133;
    position: relative;
        .menu-icon{
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
    }
}
.menu-tree::-webkit-scrollbar{
    display: none;
}
</style>