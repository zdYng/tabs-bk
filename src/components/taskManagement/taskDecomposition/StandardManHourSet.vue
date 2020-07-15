<template>
<!-- 标准工时设置页面 -->
    <div class="main-hour">
        <div class="left">
            <LeftPanel  :data="menuList"/>
        </div>
        <div class="right">
            <SingleSelectBox :itemList="itmeList" buttonText="查询" placeholder="请选择"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StandardManHourSet',
    data(){
        return{
            menuList:[
                { 
                    id: 1, 
                    name: '菜单1', 
                    children:[
                        {
                            id: 2, 
                            name: '菜单1.1',
                            children:[
                                {
                                    id: 3, 
                                    name: '菜单1.1.1', 
                                }
                            ]
                        }
                    ]
                },
                { 
                    id: 4, 
                    name: '菜单2', 
                    children:[
                        {
                            id: 5, 
                            name: '菜单2.2',
                            children:[
                                {
                                    id: 6, 
                                    name: '菜单2.2.2', 
                                }
                            ]
                        }
                    ]
                }
            ],
            itmeList:[
                {
                    id: 1,
                    label: 'aaa'
                }
            ]
        }
    },
    components:{
        LeftPanel: () => import('../../common/LeftPanel'),
        SingleSelectBox: () => import('../../common/SingleSelectBox')
    }
}
</script>
<style lang="less" scoped>
.main-hour{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 2.083333rem;
        height: 100%;
    }
}
</style>