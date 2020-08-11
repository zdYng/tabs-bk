<template>
    <!-- 字典分类 -->
    <div class="container">
        <DicLeftPanel :treeData="treeData"/>
        <!-- <router-view></router-view> -->
        <DataDictionary />
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
            treeData: []
        }
    },
    components: {
        DicLeftPanel: () => import('./DicLeftPanel'),
        DataDictionary: () => import('./DataDictionary')
    },
    created(){
        get(dictionaryAPI).then(res => {
            this.treeData = res.tree;
            console.log(res);
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
        height: 100%;
        display: flex;
        flex-grow: 1;
        justify-content: flex-start;
    }
</style>