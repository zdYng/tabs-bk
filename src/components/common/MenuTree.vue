<template>
    <!-- Home页面的左侧树形结构菜单 -->
     <div class="menu-tree">
       <div v-for="item in data" :key="item.id">
        <el-submenu
            :index="item.id"
            v-if="item.children">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.name}}</span>
                </template>
                <MenuTree :data="item.children"/>
        </el-submenu>
        <el-menu-item v-else :index="item.id">
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
       </div>
    </div>
</template>
<script>
export default {
    name: 'MenuTree',
    props:{
        data: Array
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.menu-tree{
    width: 100%;
}
</style>