<template>
    <!-- 数据字典页面-->
    <div class="data-dictionary">
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span>字典信息</span>
                    </span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="5" :offset="2">
                <div class="item-input">
                   <InputBox :defalutValue="dictionaryMsg.dictionaryName" title="字典名称"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-input">
                    <InputBox :defalutValue="dictionaryMsg.dictionaryTransfer" title="字典转移"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-input">
                    <InputBox :defalutValue="dictionaryMsg.create_person" title="创建人" :disable="true"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-input">
                    <InputBox :defalutValue="dictionaryMsg.create_time" title="创建时间" :disable="true"/>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="col-msg" :span="22" :offset="2">
                <div class="item-input col-mark">
                    <div class="title">备注</div>
                    <el-input v-model="dictionaryMsg.mark"></el-input>
                </div>
                <button class="msg-save-btn">保&nbsp;存</button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span>字典项维护</span>
                    </span>
                </div>
            </el-col>
        </el-row>
        <el-row class="dic-item-name">
            <el-col :span="5" :offset="2">
                <div class="item-input">
                    <InputBox title="字典项名称"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-input">
                    <InputBox title="字典项单位"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="check-status">
                    <div class="title">启用状态</div>
                    <div class="status">
                        <span class="title">启用</span>
                        <el-switch
                            v-model="value1"
                            active-color="#0066cc"
                            inactive-color="#cdcdcd">
                        </el-switch>
                    </div> 
                </div>
            </el-col>
        </el-row>
        <el-row class="row-mark">
            <el-col :span="12" :offset="2">
                <div class="item-input remark">
                    <InputBox title="备注"/>
                </div>
            </el-col>
            <el-col :span="2" class="col-save-btn">
                <button class="save-btn">保&nbsp;存</button>
            </el-col>
            <el-col :span="2">
                <div class="btn-group">
                    <img class="edit" src="http://47.111.232.105:5000/img/add.png">
                    <img class="delete" src="http://47.111.232.105:5000/img/delet.png">
                </div>
            </el-col>
        </el-row>
        <el-row class="row-table">
           <DictionaryTable />
        </el-row>
    </div>
</template>
<script>
import { get, post } from '../../utils/http'
import { termDicAPI } from '../../utils/apiList';
export default {
    name: 'DataDictionary',
    data(){
        return {
            dictionaryMsg: {
                dictionaryName: '', // 字典名称
                dictionaryTransfer: '', // 字典转移
                create_person: '', //创建人
                create_time: '', //创建时间
                mark: '',//备注 
            },
            value1: ''
        }
    },
    computed:{
        dictionaryTreeData(){
            return this.$store.state.dictionaryTreeData
        }
    },
    watch:{
        dictionaryTreeData: function(newVal, oldVal){
            post(termDicAPI, Number(newVal.id))
            .then(res => {
                this.dictionaryMsg.dictionaryName = res.category.category_name;
                this.dictionaryMsg.dictionaryTransfer = '';
                this.dictionaryMsg.create_person = res.category.created_by;
                this.dictionaryMsg.create_time = res.category.created_time
                this.dictionaryMsg.mark = res.category.categoryRemark;
            })
        }
    },
    mounted(){
        // let menuMessage = JSON.parse(localStorage.getItem('dicMenuMessage'));
        // this.category_name = menuMessage.category.category_name;
        // this.created_by = menuMessage.category.created_by;
        // this.created_time = menuMessage.category.created_time;
        // this.remark = menuMessage.category.categoryRemark;
    },
    components:{
        InputBox: () => import('../common/InputBox'),
        DictionaryTable: () => import('./DictionaryTable')
    }
}
</script>
<style lang="less" scoped>
.data-dictionary{
    width: 88%;
    overflow: hidden;
    overflow-y: scroll;
    /deep/ .el-row{
        .el-col{
            .item-top{
                height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                padding: 0 30px 10px 30px;
                .top-text{
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    vertical-align: center;
                    font-weight: bold;
                    .before-span{
                        display: inline-block;
                        width: 6px;
                        height: 14px;
                        background-color: #000;
                    }
                    span{
                        margin-left: 10px;
                    }
                }
            }
            .item-input{
                height: 90px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                .title{
                    font-size: 14px;
                    padding: 0 0 15px 5px;
                    color: #333;
                }
                .el-input__inner{
                    height: 40px;
                    border:1px solid rgba(221,221,221,1);
                    border-radius: 10px;
                }
                .status{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    .title{
                        font-size: 14px;
                        // color:rgba(102,102,102,1);
                        color: #333;
                    }
                }
            }
            .check-status{
                width: 200px;
                height: 90px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .title{
                    font-size: 14px;
                    color: #333;
                    height: 40px;
                }
                .status{
                   .title{
                       font-size: 14px;
                       margin-right: 50px;
                   }
                }
            }
            .btn-group{
                display: flex;
                align-items: flex-end;
                height: 90px;
                box-sizing: border-box;
                padding-bottom: 10px;
                .edit{
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    margin-left: 35px;
                }
                .delete{
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    margin-left: 20px;
                }
            }
        }
        .col-msg{
            display: flex;
            align-items: flex-end;
            .col-mark{
                .el-input{
                    .el-input__inner{
                        width: 873px;
                    }
                }
            }
            .msg-save-btn{
                width: 80px;
                height: 30px;
                border-radius: 10px;
                color: #fff;
                font-size: 14px;
                background-color: #0066cc;
                border: none;
                outline: none;
                margin-left: 80px;
            }
        }
    }
    .dic-item-name{
        height: 90px;
    }
    /deep/ .row-mark{
        height: 90px;
        display: flex;
        align-items: center;
        .remark{
            width: 557px;
            .input-box{
                .el-input{
                    .el-input__inner{
                        width: 760px;
                    }
                }
            }
        }
        .col-save-btn{
            height: 90px;
            display: flex;
            align-items: flex-end;
            box-sizing: border-box;
            padding-bottom: 8px;
            margin-left: 30px;
            .save-btn{
                width: 80px;
                height: 30px;
                background:rgba(0,102,204,1);
                border-radius: 10px;
                border: none;
                font-size: 14px;
                color: #fff;
                outline: none;
            }
        }
    }
}
.data-dictionary::-webkit-scrollbar{
    display: none;
}
</style>