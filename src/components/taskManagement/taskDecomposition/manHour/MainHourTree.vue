<template>
    <el-tree
        class="menu-tree"
        :props="props"
        :load="loadNode"
        lazy
        @node-click="handleNodeClick"
        :default-expand-all="false"
        :expand-on-click-node="false">
    </el-tree>
</template>
<script>
import {get} from '@/utils/http'
import {listTree} from '@/utils/apiList'
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
            }
        }
    },
    methods:{
        // 点击一级菜单逐级加载子节点
        loadNode(node, resolve){
            if(node.level === 0){
                return resolve(this.treeData)
            }else{
                get(listTree, {"id": node.data.id})
                    .then(res => {
                        if(Object.keys(res.data).length > 0){
                            res.data.map(item => {
                                if(item.parent){
                                    resolve(res.data)
                                }else{
                                    resolve([]);
                                }
                            })
                        }else{
                            resolve([]);
                        }
                    })
                    .catch(err => console.log(err));
            }
        },
        handleNodeClick(data, node, component){
            // data是节点自身的数据，noe是节点NODE包括一些事件，component节点组件本身
            this.$store.dispatch('setMainHourNodeData', data);
        }
    }
}
</script>
<style lang="less" scoped>
.menu-tree{
    // height: 100%;
    /deep/ .el-tree-node__content{
    // height: .260417rem;
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
</style>