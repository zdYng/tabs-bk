<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){
      if(localStorage.jwtToken){
        const decode = jwt_decode(localStorage.jwtToken);
        //分发action，更改store里面的是否授权
        this.$store.dispatch('setIsAuthorization', !this.isEmpty(decode));
        //分发action，更改store里面的用户信息
        this.$store.dispatch('setUser', decode);
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
