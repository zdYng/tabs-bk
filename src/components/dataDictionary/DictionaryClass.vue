<template>
    <!-- 字典分类 -->
    <div class="container">
        <DicLeftPanel :data="data.tree" />
        <router-view></router-view>
    </div>
</template>
<script>
import { get } from '../../utils/http'
import { dictionaryAPI,  termDicAPI, dicget } from '../../utils/apiList'
export default {
    name: 'DictionaryClass',
    data(){
        return {
            value: '',
            menuName: '',
            data: []
        }
    },
    components: {
        DicLeftPanel: () => import('./DicLeftPanel'),
    },
    created(){
        get(dictionaryAPI).then(res => {
            this.data = res;
        })
        .catch(err => {
            console.log(err);
        })
    },
    destroyed(){
        console.log('DicClass destoryed');
    },
    watch:{
        $route(to, from){
            if(Object.keys(to.params).length !== 0){
                get(termDicAPI + `${to.params.id}`).then(res => {
                    localStorage.setItem('dicMenuMessage', JSON.stringify(res));
                });
            }
        }
    }    
}
</script>
<style scoped>
    .container{
        display: flex;
        flex-grow: 1;
        justify-content: flex-start;
    }
</style>