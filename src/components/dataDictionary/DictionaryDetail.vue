<template>
    <div class="right">
        <div class="dictionary">
            <el-row>
                    <el-col :span="8">
                        <div class="item">
                            <div class="title">字典分类名称:</div>
                            <el-input v-model="category_name" placeholder="请输入内容"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="item">
                            <div class="title">字典分类CODE:</div>
                            <el-input v-model="category_code" :disabled="true" placeholder="请输入内容"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="item">
                            <div class="title">字典分类转移:</div>
                            <el-input v-model="menuName" placeholder="请输入内容"></el-input>
                        </div>
                    </el-col>
            </el-row>
            <el-row class="el-row-2">
                    <el-col :span="8">
                        <el-row class="el-row-2-row">
                                <el-col :span="24">
                                    <div class="item">
                                        <div class="title">创建人:</div>
                                        <el-input v-model="created_by" :disabled="true" placeholder="请输入内容"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="24">
                                    <div class="item">
                                        <div class="title">创建时间:</div>
                                        <el-input v-model="created_time" :disabled="true" placeholder="请输入内容"></el-input>
                                    </div>
                                </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="16">
                        <!-- 备注框 -->
                            <div class="item remask">
                                <div class="title">备注:</div>
                                <el-input type="textarea" v-model="remark" placeholder="请输入内容"></el-input>
                            </div>
                    </el-col>
            </el-row>
            <el-row class="btn-row">
                    <el-col :span="8">
                        <button class="confirm-btn">确&nbsp;认</button>
                    </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { get } from '../../utils/http'
import { dictionaryAPI } from '../../utils/apiList'
export default {
    name: 'DictionaryDetail',
    data(){
        return {
            dicClassMsg: [],
            value: '',
            menuName: '',
            category_code: '',
            category_name: '',
            created_by: '',
            created_time: '',
            father_id: '',
            id: '',
            leaf: '',
            remark: '',
            nodeId: this.$store.state.DicNodeId,
        }
    },
    created(){
        get(dictionaryAPI).then(res => {
            this.dicClassMsg = res;
            let dicMessage = this.deepQuery(this.dicClassMsg.tree, this.nodeId);
            this.category_code = dicMessage.category_code;
            this.category_name = dicMessage.category_name;
            this.created_by = dicMessage.created_by;
            this.created_time = dicMessage.created_time;
            this.leaf = dicMessage.leaf;
            this.id = dicMessage.id;
            this.remark = dicMessage.remark;
        })
        .catch(err => console.log(err))
    },
    methods:{
        // 根据id获取对象信息
        deepQuery(arr, id){
            let isGet = false;
            let retNode = null;
            function deepSearch(arr, id){
                for(let i = 0; i < arr.length; i++){
                    if(arr[i].children && arr[i].children.length > 0){
                        deepSearch(arr[i].children, id);
                    }
                    if(id === arr[i].id || isGet){
                        isGet || (retNode = arr[i]);
                        isGet = true;
                        break;
                    }
                }
            }
            deepSearch(arr, id);
            return retNode;
        }
    },
}
</script>
<style scoped>
    .right{
        display: flex;
        flex-grow: 1;
        justify-content: center;
        padding-top: .15625rem;
    }
    .dictionary{
        width: 6.25rem;
        height: 5.208333rem;
    }
    .el-row-2{
        height: 1.5625rem;
    }
    .el-row-2 .el-col{
        height: 100%;
    }
    .el-col{
        display: flex;
        justify-content: center;
    }
    .item {
        height: .625rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .title{
        font-size: .083333rem;
        padding: 0 0 .078125rem .026042rem;
    }
    .el-input{
        width: 1.25rem;
    }
    >>> .el-input__inner{
       width: 1.25rem;
       height: .260417rem;
       border:1px solid rgba(221,221,221,1);
       border-radius: .078125rem;
    }
    .el-row-2-row{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .el-row-2-row .el-col{
        height: .625rem;
    }
    .remask{
       width: 3.385417rem;
    }
    >>> .el-textarea textarea{
        width: 3.385417rem;
        height: .885417rem;
        resize: none;
        border-radius: .104167rem;
    }
    /* 确认按钮 */
    .btn-row{
        height: .625rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .confirm-btn{
        width: 1.25rem;
        height: .260417rem;
        border: none;
        background:rgba(0,102,204,1);
        border-radius:.104167rem;
        color: #fff;
        font-size: .104167rem;
        margin-top: .15625rem;
        outline: none;
    }
</style>