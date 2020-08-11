<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){
    if(localStorage.token){
        //分发action，更改store里面的是否授权
        this.$store.dispatch('setIsAuthorization', !this.isEmpty(localStorage.token));
        this.$store.dispatch('setUser', JSON.parse(localStorage.userData));
    }
  },
  methods:{
    isEmpty(value){
      return (
        value === undefined || value === null ||
          (typeof value === 'object' && Object.keys(value).length === 0) ||
          (typeof value === 'string' && value.trim().length === 0)
      );
    }
  }
}
</script>
<style lang="scss">

</style>
