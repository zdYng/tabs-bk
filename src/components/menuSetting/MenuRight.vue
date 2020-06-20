<template>
    <div class="content">
        <div class="select-tree">
            <div class="tree">
                <el-tree
                    :data="data"
                    ref="tree"
                    node-key="id">
                    <span class="custom-tree-node" slot-scope="{ node, data}">
                        <span :id="data.id">{{node.label}}</span>
                    </span>
                </el-tree>
            </div>
            <div class="submit">
                <button>确&nbsp;认</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MenuRight',
    data(){
        return {
            data: [
                {
                  id: 1,
                  label: '系统设置',
                  children:[
                      {
                          id: 4,
                          label: '菜单维护'
                      },
                      {
                          id: 5,
                          label: '数据字典'
                      },
                      {
                          id: 6,
                          label: '个性化设置'
                      },
                  ]  
                },
                {
                    id: 2,
                    label: '服务台',
                    children:[
                        {
                            id: 7,
                            label: '个人信息'
                        },
                        {
                            id: 8,
                            label: '菜单设置'
                        },
                        {
                            id: 9,
                            label: '我的门户设置'
                        },
                        {
                            id: 10,
                            label: '消息提醒'
                        },
                    ]
                }
            ],
        }
    },
}
</script>
<style scoped>
.select-tree{
    width: 2.083333rem;
    height: 5.208333rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
}
.tree{
    width: 100%;
    height: 3.125rem;
    overflow: auto;
    padding: 30px 0 0 30px;
    box-sizing: border-box;
}
.submit{
    width: 2.083333rem;
    height: .260417rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.submit button{
    width: .520833rem;
    height: .208333rem;
    background:rgba(0,102,204,1);
    border-radius:20px;
    border: none;
    color: #fff;
    font-size: .083333rem;
    font-weight: 500;
    outline: none;
}
</style>