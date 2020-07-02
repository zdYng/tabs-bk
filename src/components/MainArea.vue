<template>
    <!-- 菜单维护 -->
    <div class="container">
        <LeftPanel :data='menuData' />
        <router-view></router-view>  
    </div>
</template>
<script>
import { get } from '../utils/http'
import { menuAPI } from '../utils/apiList'
export default {
    name: 'MainArea',
    data(){
        return {
            menuData: [],
            menuTypeOptions: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '龙须面'
                },
                {
                    value:'选项4',
                    label:'大乖'
                }
            ],
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
        LeftPanel: () => import('./common/LeftPanel'),
    },
    created(){
        get(menuAPI).then(res => {
            this.menuData = res;
            // console.log(this.menuData);
        })
        // console.log('Main created')
    },
    destroyed(){
        console.log('MainArea destoryed');
    }
}
</script>
<style scoped>
    .container{
        /* width: 100%; */
        display: flex;
        flex-grow: 1;
        justify-content: flex-start;
    }
</style>