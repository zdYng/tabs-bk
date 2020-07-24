<template>
    <div class="menu-tree">
        <label v-for="(menu, index) in data" :key="index">
            <el-submenu :index="index" v-if="menu.chilren">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{menu.name}}</span>
                </template>
                <label>
                    <MenuTree />
                </label>
            </el-submenu>
            <el-menu-item v-else :index="index">
                <span slot="title">{{menu.name}}</span>
            </el-menu-item>
        </label>
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

</style>