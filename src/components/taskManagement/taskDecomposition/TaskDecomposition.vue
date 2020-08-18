<template>
<!-- 任务分解页面 -->
    <div class="main">
        <section class="left">
            <div class="top">
                <AddDialogBtnGroup />
                <DialogBtnGroup />
            </div>
            <FixTableTree />
        </section>
        <section class="right">
            <CutBar :CutBar="CutBarList"/>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </section>
    </div>
</template>
<script>
import { get } from '@/utils/http';
import { queryTaskInfoAPI } from '@/utils/apiList'
export default {
    name: 'TaskDecomposition',
    // provide(){
    //     return {
    //         reload: this.reload
    //     }
    // },
    data(){
        return {
            value:'',
            // isRouterAlive: true,
            tableList:[],//渲染列表树形列表数据
            CutBarList: [
                { id: 1, value: '任务信息', path: 'TaskMsgPanel'},
                { id: 2, value: '任务看板', path: 'TaskBoard'},
            ],
        }
    },
    components:{ 
        FixTableTree: () => import('./FixTableTree'),
        CutBar: () => import('../../common/CutBar'),
        // BtnGroup: () => import('../../common/BtnGroup'),
        DialogBtnGroup: () => import('./DialogBtnGroup'),
        AddDialogBtnGroup: () => import('./AddDialogBtnGroup')
    },
    methods:{
        // reload(){
        //     this.isRouterAlive = false;
        //     this.$nextTick(function(){
        //         this.isRouterAlive = true;
        //     })
        // }
    }
}
</script>
<style lang="less" scoped>
.main{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #f5f5f5;
    padding-top: 2px;
    box-sizing: border-box;
    .left{
        width: 35%;
        background-color: #fff;
        box-sizing: border-box;
        padding-right: 5px;
        .top{
            overflow: hidden;
            height: 7%;
            display: flex;
            align-items: center;
        }
    }
    // 解决div溢出部分滚动且隐藏滚动条
    .left::-webkit-scrollbar{
        display: none;
    }
    .right{
        width: 66%;
        margin-left: 10px;
        overflow: hidden;
        overflow-y: scroll;
        background-color: #fff;
        margin-left: 8px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .right::-webkit-scrollbar{
        display: none;
    }
}

</style>