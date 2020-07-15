<template>
  <div class="turn-left">
    <LeftPanel :data="menuList"/>
  </div>
</template>

<script>
export default {
    name:'ModuleLeft',
    data(){
      return {
        menuList:[
          {
            id:1,
            name:'茶却文化有限公司',
            children:[
                {
                  id:2,
                  name:'采购部'
                },
                {
                  id:3,
                  name:'养护部'
                }
              ]
          }
        ]
      }
    },
    components:{
      LeftPanel: () => import('../../../common/LeftPanel')
    }
}
</script>

<style lang="less" scoped>
.turn-left {
  width: 1.666667rem;
  height: 4.145833rem;
  float: left;
  // background: chartreuse;
}
</style>