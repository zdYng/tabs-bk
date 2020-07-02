<template>
  <div class="memory-tab">  
    <span class="item"
          v-for="(item, index) in memoryList"
          :key="index"
    >
      <span>{{item.title}}</span>
      <i class="el-icon-close"></i>
    </span>
  </div>
</template>

<script>
export default {
  name:'MemoryTab',
  methods:{
    // handleMemoryLink (){
    //   console.log('suc');

      
    // },
    // handleMemoryDelete () {
    //   // console.log(this.data);
      
    // }
  },
  data() {
    return {
      memoryList:this.$store.state.memoryList
    }
  },
  
  watch:{
    $route(to, from){
      // console.log(this.$store.state.memoryList);
      // console.log('list->',this.memoryList);
      
    },
    
  }
};
 

</script>

<style lang="less" scoped>
.memory-tab {
          height: 7%;
          line-height: 0.3125rem;
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          .item {
            display: block;
            width: 0.625rem;
            height: 0.234375rem;
            justify-content: space-around;
            align-items: center;
            font-size: 0.072917rem;
          }
          span {
            i {
              align-self: center;
              font-size: 0.0625rem;
            }
          }
        }
</style>