<template>
    <div class="right">
        <div class="dictionary">
            <el-row>
                    <el-col :span="8">
                        <div class="item">
                            <InputBox :defalutValue="dicClassName" title="字典分类名称"/>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="item">
                            <InputBox :defalutValue="dicClassCode" title="字典分类CODE" :disable="true"/>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="item">
                            <InputBox :defalutValue="dicClassTransfer" title="字典分类转移"/>
                        </div>
                    </el-col>
            </el-row>
            <el-row class="el-row-2">
                    <el-col :span="8">
                        <el-row class="el-row-2-row">
                                <el-col :span="24">
                                    <div class="item">
                                        <InputBox :defalutValue="createPerson" title="创建人" :disable="true"/>
                                    </div>
                                </el-col>
                                <el-col :span="24">
                                     <InputBox :defalutValue="createTime" title="创建时间" :disable="true"/>
                                </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="16">
                        <!-- 备注框 -->
                            <div class="item remask">
                                <div class="title">备注</div>
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
            dicClassName: '', //字典分类名称
            dicClassCode: '', //字典分类code
            dicClassTransfer: '',//字典分类转移
            createPerson: '', //创建人
            createTime: '',//创建时间
            remark: '',//备注
        }
    },
    computed:{
        dictionaryTreeData(){
            return this.$store.state.dictionaryTreeData;
        }
    },
    watch:{
        dictionaryTreeData: function(newVal, oldVal){
            console.log(newVal);
            this.dicClassName = newVal.category_name;
            this.dicClassCode = newVal.category_code;
            this.createPerson = newVal.created_by;
            this.createTime = newVal.created_time;
            this.remark = newVal.remark;
        }
    },
    created(){
        console.log('created');
        console.log(this.dictionaryTreeData);
        if(Object.keys(this.dictionaryTreeData).length > 0){
            console.log('sss');
            this.dicClassName = this.dictionaryTreeData.category_name;
            console.log(this.dicClassName);
            this.dicClassCode = this.dictionaryTreeData.category_code;
            this.createPerson = this.dictionaryTreeData.created_by;
            this.createTime = this.dictionaryTreeData.created_time;
            this.remark = this.dictionaryTreeData.remark;
        }
    },
    components:{
        InputBox: () => import('../common/InputBox')
    },
}
</script>
<style scoped>
    .right{
        height: 100%;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        padding-top: .15625rem;
        overflow: hidden;
        overflow-y: scroll;
        box-sizing: border-box;
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