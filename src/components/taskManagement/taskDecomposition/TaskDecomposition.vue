<template>
<!-- 任务分解页面 -->
    <div class="main">
        <section class="left">
            <div class="top">
                <BtnGroup :btnGroup="btnGroup"/>
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
    data(){
        return {
            value:'',
            tableList:[],//渲染列表树形列表数据
            CutBarList: [
                { id: 1, value: '任务信息', path: 'TaskMsgPanel'},
                { id: 2, value: '任务看板', path: 'TaskBoard'},
            ],
            btnGroup:['新增分组', '新增任务', '新增子任务']
        }
    },
    components:{ 
        FixTableTree: () => import('./FixTableTree'),
        CutBar: () => import('../../common/CutBar'),
        BtnGroup: () => import('../../common/BtnGroup'),
        DialogBtnGroup: () => import('./DialogBtnGroup'),
    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
.main{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 40%;
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
        width: 60%;
        margin-left: 10px;
        overflow: hidden;
        overflow-y: scroll;
    }
    .right::-webkit-scrollbar{
        display: none;
    }
}

</style>