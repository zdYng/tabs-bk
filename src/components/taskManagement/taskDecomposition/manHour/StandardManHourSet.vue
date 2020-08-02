<template>
<!-- 标准工时设置页面 -->
    <div class="main-hour">
        <div class="left">
            <AddGroup />
            <MainHourTree :treeData="treeData" />
        </div>
        <div class="right">
            <el-row>
                <el-col :span="10">
                    <InputBox title="工时名称"/>
                </el-col>
                <el-col :span="10">
                    <InputBox title="工时"/>
                </el-col>
            </el-row>
            <el-row></el-row>
            <el-row class="row-save-btn">
                <button class="saveBtn">保&nbsp;存</button>
            </el-row>
        </div>
    </div>
</template>
<script>
import {get} from '@/utils/http'
import {queryTaskTreeAPI, listTree} from '@/utils/apiList'
export default {
    name: 'StandardManHourSet',
    data(){
        return{
            treeData:[],
            menuList:[],
            itmeList:[
                {
                    id: 1,
                    label: 'aaa'
                }
            ]
        }
    },
    created(){
        get(listTree).then(res =>{
            this.treeData = res.data;
            console.log(this.treeData);
        }).catch(err => console.log(err));
        // get(queryTaskTreeAPI).then(res => {  
        //     let arr = res.project;
        //     arr.forEach(item => {
        //         this.menuList.push(
        //             Object.assign(
        //                 {},
        //                 {
        //                     "id": Number(item.id),
        //                     "label": item.name,
        //                     "level": item.level,
        //                     "parentId": item.parentId,
        //                     "projectId": item.projectId,
        //                     "children": item.parent
        //                 }
        //             )
        //         )
        //     });
        // })
    },
    components:{
        InputBox: () => import('../../../common/InputBox'),
        MainHourTree: () => import('./MainHourTree'),
        AddGroup: () => import('./AddGroup')
    },
}
</script>
<style lang="less" scoped>
.main-hour{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 19%;
        height: 100%;
        box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
        .menu-tree{
            height: 100%;
            /deep/ .el-tree-node__content{
                height: .260417rem;
                font-size: .067708rem;
                color: #303133;
                position: relative;
                .menu-icon{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }
            }
        }
    }
    .right{
        width: 81%;
        /deep/ .el-row{
            height: 150px;
            display: flex;
            align-items: center;
            .el-col{
                display: flex;
                justify-content: center;
            }
        }
        .row-save-btn{
            display: flex;
            justify-content: center;
            .saveBtn{
                width:200px;
                height:55px;
                background:rgba(0,102,204,1);
                border-radius:20px;
                font-size:22px;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(255,255,255,1);
                border: none;
                outline: none;
            }
        }
    }
}
</style>