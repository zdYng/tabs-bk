<template>
    <!-- 菜单维护 -->
    <div class="container">
        <LeftPanel :data='menuData' />
        <router-view></router-view>  
    </div>
</template>
<script>
import { get } from '../../utils/http'
import { menuAPI } from '../../utils/apiList'
export default {
    name: 'MainArea',
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
            remarkSys: ''
        }
    },
    components:{
        LeftPanel: () => import('../common/LeftPanel'),
    },
    created(){
        get(menuAPI).then(res => {
            this.menuData = res;
            console.log(res);
        })
    },
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