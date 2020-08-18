<template>
<!-- 标准工时设置页面 -->
    <div class="main-hour">
        <div class="left">
            <AddGroup />
            <MainHourTree  :treeData="treeData"/>
        </div>
        <div class="right">
            <el-row>
                <el-col :span="5">
                    <InputBox @inputChange="getMainHourName" :defalutValue="mainHourName" title="工时名称"/>
                </el-col>
                <el-col :span="5">
                    <InputBox :defalutValue="mainHour" @inputChange="getMainHour" title="工时"/>
                </el-col>
            </el-row>
            <el-row></el-row>
            <el-row class="row-save-btn">
                <button @click="saveBtnClick" class="saveBtn">保&nbsp;存</button>
            </el-row>
        </div>
    </div>
</template>
<script>
import {get, post} from '@/utils/http'
import {queryTaskTreeAPI, listTree, editTimeSheetAPI} from '@/utils/apiList'
export default {
    name: 'StandardManHourSet',
    inject: ['reload'],
    data(){
        return{
            treeData:[],
            mainHourName: '',//工时名称
            setMainHourName: '',//修改工时名称
            mainHour: '' ,//修改工时
            setMainHour: '',
            itmeList:[
                {
                    id: 1,
                    label: 'aaa'
                }
            ],
            props:{
                label: 'name',
                children: 'parent'
            }
        }
    },
    computed:{
        mainHourNodeData(){
            return this.$store.state.mainHourNodeData
        }
    },
    watch:{
        mainHourNodeData: function(newVal, oldVal){
            this.mainHourName = newVal.laborName;
            this.mainHour = newVal.laborHour ? newVal.laborHour : '';
            // if(newVal.laborHour){
            //     this.mainHour = newVal.laborHour;
            // }else{
            //     this.mainHour = '';
            // }
        }
    },
    created(){
        console.log('标准工时整个页面刷新');
        get(listTree).then(res =>{
                this.treeData = res.data;
                console.log(this.treeData);
        }).catch(err => console.log(err));
    },
    components:{
        InputBox: () => import('../../../common/InputBox'),
        MainHourTree: () => import('./MainHourTree'),
        AddGroup: () => import('./AddGroup')
    },
    methods:{
        loadNode(node, resolve){
            if(node.level === 0){
                console.log(this.treeData);
                return resolve(this.treeData);
            }
        },
        handleNodeClick(data, node, component){
            // data是节点自身的数据，noe是节点NODE包括一些事件，component节点组件本身
            this.$store.dispatch('setMainHourNodeData', data);
        },
        saveBtnClick(){
            post(editTimeSheetAPI, {
                "id": this.mainHourNodeData.id,
                "laborName": this.mainHourName,
                "laborHour": this.mainHour
            }).then(res => {
                console.log(res);
                this.reload();
            })
        },
        // 获取工时名称
        getMainHourName(val){
            // this.mainHourName = val;
            this.mainHourName = val;
        },
        // 获取工时
        getMainHour(val){
            this.mainHour = val;
        }
    }
}
</script>
<style lang="less" scoped>
.main-hour{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 250px;
        height: 100%;
        box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    }
    .right{
        width: 81%;
        /deep/ .el-row{
            height: 150px;
            display: flex;
            align-items: center;
            padding-left: 10px;
            .el-col{
                display: flex;
                justify-content: center;
                .input-box{
                    .title{
                        font-size: 14px;
                    }
                    .el-input{
                        .el-input__inner{

                        }
                    }
                }
            }
        }
        .row-save-btn{
            display: flex;
            // justify-content: center;
            margin-left: 200px;
            .saveBtn{
                width:200px;
                height:40px;
                background:rgba(0,102,204,1);
                border-radius: 20px;
                font-size:16px;
                font-family:Microsoft YaHei;
                color:rgba(255,255,255,1);
                border: none;
                outline: none;
            }
        }
    }
}
</style>