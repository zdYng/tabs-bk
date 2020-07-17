<template>
<!-- 标准工时设置页面 -->
    <div class="main-hour">
        <div class="left">
            <LeftPanel  :data="menuList"/>
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
import {get} from '../../../utils/http'
import {queryTaskTreeAPI} from '../../../utils/apiList'
export default {
    name: 'StandardManHourSet',
    data(){
        return{
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
        get(queryTaskTreeAPI).then(res => {  
            let arr = res.project;
            arr.forEach(item => {
                this.menuList.push(
                    Object.assign(
                        {},
                        {
                            "id": Number(item.id),
                            "label": item.name,
                            "level": item.level,
                            "parentId": item.parentId,
                            "projectId": item.projectId,
                            "children": item.parent
                        }
                    )
                )
            });
        })
    },
    components:{
        LeftPanel: () => import('../../common/LeftPanel'),
        InputBox: () => import('../../common/InputBox')
    }
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