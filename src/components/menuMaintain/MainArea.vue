<template>
    <!-- 菜单维护 -->
    <div class="container">
        <MenuLeftPanel :data='menuData' />
        <router-view v-if="routerActive"></router-view>  
    </div>
</template>
<script>
import { get } from '../../utils/http'
import { menuAPI } from '../../utils/apiList'
export default {
    name: 'MainArea',
    provide(){
        return {
            rush: this.rush,
        }
    },
    data(){
        return {
            menuData: [],
            menuTypeSys: '',
            menuNameSys: '',
            toolFunctionSys: '',
            menuCodeSys: '',
            creatPersonSys: '',
            creatTimeSys: '',
            menuType:'',
            iconSys: '',
            statuSys: '',
            numberSys: '',
            remarkSys: '',
            routerActive: true
        }
    },
    components:{
        MenuLeftPanel: () => import('./MenuLeftPanel'),
    },
    created(){
        get(menuAPI).then(res => {
            this.menuData = res;
            console.log(this.menuData);
        })
    },
    methods:{
        rush(){
            this.routerActive = false;
            this.$nextTick(function (){
                this.routerActive = true;
            })
        }
    }
}
</script>
<style scoped>
    .container{
        /* width: 100%; */
        display: flex;
        flex-grow: 1;
        justify-content: flex-start;
        overflow: hidden;
    }
</style>