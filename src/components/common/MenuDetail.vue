<template>
    <div>
        <div class="right">
        <div class="menu-area">
            <el-row>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">菜单名称:</div>
                        <el-input v-model="menuNameSys" placeholder="请输入内容"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">菜单类型:</div>
                        <el-select v-model="menuTypeSys" clearable placeholder="请选择">
                            <el-option
                            v-for="item in menuTypeOptions"
                            :key="item.dictionary_number"
                            :label="item.dictionary_name"
                            :value="item.dictionary_number"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">菜单code:</div>
                        <el-input v-model="menuCodeSys"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">对应功能:</div>
                        <el-autocomplete
                          popper-class="menuFunction"
                          v-model="state"
                          :fetch-suggestions="querySearch"
                          placeholder="请输入内容"
                          @select="handleSelect">
                          <template slot-scope="{ item }">
                            <div :id="item.dictionary_number" class="name">{{item.dictionary_name}}</div>  
                          </template>
                        </el-autocomplete>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">功能图标:</div>
                        <el-select v-model="iconSys" clearable placeholder="请选择">
                            <el-option
                            v-for="item in menuTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">使用状态:</div>
                        <el-select v-model="statuSys" clearable placeholder="请选择">
                            <el-option
                            v-for="item in menuStatus"
                            :key="item.dictionary_number"
                            :label="item.dictionary_name"
                            :value="item.dictionary_number"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">创建人:</div>
                        <el-input
                        v-model="creatPersonSys"
                        :disabled="true"
                        ></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">序号:</div>
                        <el-select v-model="numberSys" clearable placeholder="请选择">
                            <el-option
                            v-for="item in menuTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">菜单转移:</div>
                        <el-select v-model="menuType" clearable placeholder="请选择">
                            <el-option
                            v-for="item in menuTypeOptions"
                            :key="item.value"
                            :label="item.dictionary_number"
                            :value="item.dictionary_name"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="item">
                        <div class="title">创建时间:</div>
                        <el-input
                        v-model="creatTimeSys"
                        :disabled="true"
                        ></el-input>
                    </div>
                </el-col>
                <el-col :span="16" class="remark">
                    <div class="item">
                        <div class="title">备注:</div>
                        <el-input  
                        v-model="remarkSys" 
                        placeholder="请输入内容"
                        ></el-input>
                    </div>
                </el-col>
            </el-row>
            <div class="button">
                <button>确&nbsp;认</button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { get } from '../../utils/http'
import { menuAPI, dropAPI } from '../../utils/apiList'
export default {
    name: 'MenuDetail',
    data(){
        return {
            menuData: [],
            menuTypeOptions: [],
            menuFunction:[],
            menuStatus: [],
            menuTypeSys: '',
            menuNameSys: '',
            toolFunctionSys: '',
            menuCodeSys: '',
            creatPersonSys: '',
            creatTimeSys: '',
            menuType:'',
            iconSys: '',
            statuSys: '',
            numberSys: '',
            remarkSys: '',
            state: '',
        }
    },
    mounted(){
        get(menuAPI).then(res => {
            this.menuData = res;
        });
        get(dropAPI).then(res => {
            console.log(res);
            this.menuTypeOptions = res.menuType;
            this.menuFunction = res.menuFunction;
            this.menuStatus = res.menuStatus;
        });
    },
    methods:{
        querySearch(queryString, cb){
            let menuFunction = this.menuFunction;
            let results = queryString ? menuFunction.filter(this.createFilter(queryString)) : menuFunction;
            cb(results);
        },
        createFilter(queryString){
            return (str) => {
                return (str.dictionary_name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            }
        },
        handleSelect(item){
            this.state = item.dictionary_name;
        },
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
    watch:{
        $route(to, from){
            let detailData = this.deepQuery(this.menuData,this.$store.state.nodeId);
            // this.menuNameSys = detailData.name;
            // this.menuTypeSys = detailData.typeName;
            // this.menuCodeSys = detailData.code;
            // this.toolFunctionSys = detailData.mfunctionName;
            // this.iconSys = detailData.icon;
            // this.statuSys = detailData.mstatu;
            // this.creatPersonSys = detailData.created_by;
            // this.numberSys = detailData.number;
            // this.creatTimeSys = detailData.created_time;
            // this.remarkSys = detailData.remark;
            // console.log(detailData);
        }
    }
}
</script>
<style scoped>
 .right{
        display: flex;
        flex-grow: 1;
        justify-content: center;
        padding-top: .15625rem;
    }
    .menu-area{
        width: 6.25rem;
        height: 5.208333rem;
    }
    .el-col{
        display: flex;
        justify-content: center;
    }
    .item {
        height: .625rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .remark{
        display: flex;
        justify-content: start;
    }
    .remark .item{
        margin-left: .416667rem;
    }
    .title{
        font-size: .083333rem;
        padding: 0 0 .078125rem .026042rem;
    }
    .el-input{
        width: 1.25rem;
    }f
    >>> .el-input__inner{
       width: 1.25rem;
       height: .260417rem;
       border:1px solid rgba(221,221,221,1);
       border-radius: .078125rem;
    }
    .button{
        display: flex;
        justify-content: center;
        margin-top: .260417rem;
    }
    .button button{
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
    >>> .el-scrollbar{
        height: 1.015625rem;
        overflow: hidden;
    }
    >>> .el-scrollbar {
         height: 1.015625rem;
    }
</style>