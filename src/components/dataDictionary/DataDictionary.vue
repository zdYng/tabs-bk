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
                   <InputBox @inputChange="getDictionaryName" :defalutValue="dictionaryMsg.dictionaryName" title="字典名称"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-input">
                    <SearchSelect @selectChange="getDictionaryTransferId" title="字典转移" :options="dictionaryMsg.dictionaryTransfer"/>
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
                <button @click="saveDictionaryMsg" class="msg-save-btn">保&nbsp;存</button>
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
                    <InputBox @inputChange="getItemNameChange" :defalutValue="dictionaryItemName" title="字典项名称"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-input">
                    <InputBox @inputChange="getItemUnitChange" :defalutValue="dictionaryItemUnit" title="字典项单位"/>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="check-status">
                    <div class="title">启用状态</div>
                    <div class="status">
                        <span class="title">启用</span>
                        <el-switch
                            v-model="dictionaryItemStatus"
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
                    <InputBox @inputChange="getItemMarkChange" :defalutValue="dictionaryItemMark" title="备注"/>
                </div>
            </el-col>
            <el-col :span="2" class="col-add-btn">
                <button @click="saveItemDataClick" class="add-item-btn">保&nbsp;存</button>
            </el-col>
            <el-col :span="2" class="col-save-btn">
                <button @click="changeItemDataClick" class="save-btn">修&nbsp;改</button>
            </el-col>
        </el-row>
        <el-row class="row-table">
           <DictionaryTable />
        </el-row>
    </div>
</template>
<script>
import { get, post } from '../../utils/http'
import { termDicAPI,  insertAPI, dictionaryUpdateAPI, selectdataloadAPI } from '../../utils/apiList';
export default {
    name: 'DataDictionary',
    inject: ['reload'],
    data(){
        return {
            dictionaryMsg: {
                categoryID: '',
                dictionaryName: '', // 字典名称
                dictionaryTransfer: [], // 字典转移
                category_code: '',
                create_person: '', //创建人
                create_time: '', //创建时间
                mark: '',//备注 
                dictionaryTransferId: null, //字典转移值对应的id
            },
            dictionaryItemName: '', // 字典项名称
            dictionaryItemUnit: '', // 字典项单位
            dictionaryItemMark: '', //字典项备注
            dictionaryItemStatus: false, // 字典项启用状态
        }
    },
    computed:{
        // 获取vuex中的对应点击的树形菜单的数据
        dictionaryTreeData(){
            return this.$store.state.dictionaryTreeData
        },
        // 获取vuex中的数据字典项数据
        dictionaryItem(){
            return this.$store.state.dictionaryItem
        }
    },
    watch:{
        dictionaryTreeData: function(newVal, oldVal){
            //监听用户点击左侧的菜单树，根据获取到的数据的变化，拿到不同id，请求对应的id的字典信息数据
            post(termDicAPI, Number(newVal.id))
            .then(res => {
                console.log(res);
                this.dictionaryMsg.categoryID = res.category.categoryID;
                this.dictionaryMsg.dictionaryName = res.category.category_name;
                this.dictionaryMsg.category_code = res.category.category_code;
                this.dictionaryMsg.create_person = res.category.created_by;
                this.dictionaryMsg.create_time = res.category.created_time;
                this.dictionaryMsg.mark = res.category.categoryRemark;
            });
            //监听菜单切换后，把下面的字典项维护的数据清空
            this.dictionaryItemName = null;
            this.dictionaryItemUnit = null;
            this.dictionaryItemMark = null;
        },
        // 监听vuex中的数据字典项数据变化，用户点击列表的行，
        // 发送每一行的数据到vuex，然后把数据填充进上面的input框
        // dictionaryItem: function(newVal, oldVal){
        //     console.log(newVal);
        //     this.dictionaryItemName = newVal.dictionary_name;
        //     this.dictionaryItemUnit = newVal.dictionary_unit;
        //     this.dictionaryItemMark = newVal.dictionaryRemark;
        //     this.dictionaryItemStatus = newVal.dictionaryStatus == '启用' ? true : false;
        // },
    },
    mounted(){
        // 获取到数据字典页面字典转移下拉框对应的options
        get(selectdataloadAPI).then(res => {
            this.dictionaryMsg.dictionaryTransfer = res.data.map(item => {
                item.label = item.dictionary_name;
                item.value = item.dictionary_number;
                return item
            });
        }).catch(err => console.log(err));
    },
    components:{
        InputBox: () => import('../common/InputBox'),
        DictionaryTable: () => import('./DictionaryTable'),
        SearchSelect: () => import('../common/SearchSelect')
    },
    methods:{
        // 点击保存按钮。提交字典信息部分的数据
        saveDictionaryMsg(){
            post(
                    dictionaryUpdateAPI,
                    {
                        id: this.dictionaryTreeData.id,
                        category_name: this.dictionaryMsg.dictionaryName, //字典名称
                        father_id: this.dictionaryMsg.dictionaryTransferId,
                        remark: this.dictionaryMsg.mark,
                        created_by: this.dictionaryMsg.create_person,
                        created_time: this.dictionaryMsg.create_time,
                        updated_by: this.$store.state.user.username
                    }
                ).then(res => {
                    this.reload();
                }).catch(err => console.log(err));
        },
        // 获取到字典转移更改后的值对应的id
        getDictionaryTransferId(id){
            this.dictionaryMsg.dictionaryTransferId = id;
        },
        // 获取到字典名称更改后对应的value
        getDictionaryName(value){
            this.dictionaryMsg.dictionaryName = value;
        },
        // 点击修改按钮
        changeItemDataClick(e){
            this.dictionaryItemName = this.dictionaryItem.dictionary_name;
            this.dictionaryItemUnit = this.dictionaryItem.dictionary_unit;
            this.dictionaryItemStatus = this.dictionaryItem.dictionaryStatus == '启用' ? true : false;
            this.dictionaryItemMark = this.dictionaryItem.dictionaryRemark;
        },
        // 点击字典项维护下的保存按钮
        saveItemDataClick(){
            console.log(this.dictionaryItem);
            if(this.dictionaryItem.checked){
                post(
                    dictionaryUpdateAPI,
                    {
                        id: Number(this.dictionaryItem.dictionaryID),
                        dictionary_name: this.dictionaryItemName,
                        dictionary_unit: this.dictionaryItemUnit,
                        dictionary_status: this.dictionaryItemStatus ? 0 : 1,
                        remark: this.dictionaryItemMark
                    }
                ).then(res => {
                    console.log(res)
                    this.reload();
                }).catch(err => console.log(err));
            }else{
                post(
                    insertAPI,
                    {
                        id: Number(this.dictionaryMsg.categoryID),
                        category_code: this.dictionaryMsg.category_code,
                        category_name: this.dictionaryMsg.dictionaryName,
                        dictionary_name: this.dictionaryItemName,
                        dictionary_unit: this.dictionaryItemUnit,
                        dictionary_status: this.dictionaryItemStatus ? 0 : 1,
                        remark: this.dictionaryItemMark
                    }
                ).then(res => {
                    console.log(res);
                    this.reload();
                }).catch(err => console.log(err));
            }
        },
        // 获取到字典项名称输入框内容改变后的值
        getItemNameChange(val){
            this.dictionaryItemName = val;
        },
         // 获取到字典项单位输入框内容改变后的值
        getItemUnitChange(val){
            this.dictionaryItemUnit = val;
        },
        // 获取字典项的备注输入框内容的改变后的值
        getItemMarkChange(val){
            this.dictionaryItemMark = val;
        }
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
        .col-add-btn{
            height: 90px;
            display: flex;
            align-items: flex-end;
            box-sizing: border-box;
            padding-bottom: 8px;
            margin-left: 30px;
            .add-item-btn{
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
        .col-save-btn{
            height: 90px;
            display: flex;
            align-items: flex-end;
            box-sizing: border-box;
            padding-bottom: 8px;
            // margin-left: 30px;
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