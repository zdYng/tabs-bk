<template>
    <!-- Home页面的左侧菜单树面板，暂时没有用 -->
    <div class="nav-menu">
        <el-menu
          default-active="2"
          class="el-munu"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
              <template slot="title">
                 <i class="el-icon-location"></i>
                 <span>导航一</span>
              </template>
              <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项一</el-menu-item>
                  <el-menu-item index="1-2">选项二</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                  <template slot="title">分组二</template>
                  <el-menu-item index="1-3">选项一</el-menu-item>
                  <el-menu-item index="1-4">选项二</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-5">
                  <template slot="title">选项三</template>
                  <el-menu-item index="1-5-1">选项一</el-menu-item>
              </el-submenu>
          </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'NavMenu',
    data(){
        return {

        }
    },
    method:{
        handleOpen(){

        },
        handleClose(){
            
        }
    }
}
</script>
<style lang="less" scoped>

</style>