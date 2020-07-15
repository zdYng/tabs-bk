<template>
    <div class="test">
        <div v-for="item in treeData" :key="item.id">
            <ul>
                <Collapse :model="item"/>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Test',
    data(){
        return{
            treeData:[
                {
                    id: 1,
                    title: '我是一级第一个',
                    children:[
                        {
                            id: 2,
                            title: '我是二级第一个',
                            children:[
                                {
                                    id: 3,
                                    title:'我是三级第一个'
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: '我是二级第二个'
                        },
                        {
                            id: 8,
                            title: '我是二级第三个'
                        }
                    ]
                },
                {
                    id: 4,
                    title: '我是第二个一级级第一个',
                    children:[
                        {
                            id: 5,
                            title: '我是第二个二级第一个',
                            children:[
                                {
                                    id: 6,
                                    title:'我是第二个三级第一个'
                                }
                            ]
                        }
                    ]
                },
            ]
        }     
    },
    components:{
        Collapse: () => import('../common/Collapse')
    }
}
</script>
<style lang="less" scoped>
.test{
    width: 300px;
    height: 100%;
    background-color: #ebf5ff;
    overflow: hidden;
}
/deep/ ul{
    width: 1.5625rem;
    // padding-left: .104167rem;
    box-sizing: border-box;
    li{
        width: 1.5625rem;
        box-sizing: border-box;
        padding-left: .104167rem;
        div:hover{
            background-color: #d9ecff;
        }
    }
}
</style>