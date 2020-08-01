<template>
    <div class="right">
        <div class="menu-area">
            <el-row>
                <el-col :span="8">
                    <InputBox :itemValue="defaultMenuName" title="菜单名称" placeholder="请输入内容"/>
                </el-col>
                <el-col :span="8">
                    <SelectBox :options="menuType" title="菜单类型"/>
                </el-col>
                <el-col :span="8">
                    <InputBox title="菜单CODE" placeholder="请输入内容"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <SearchSelect title="对应功能" :options="menuFunction"/>
                </el-col>
                <el-col :span="8">
                    <SelectBox title="功能图标"/>
                </el-col>
                <el-col :span="8">
                    <SelectBox :options="menuStatus" title="使用状态"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <InputBox title="创建人" :disable="true" />
                </el-col>
                <el-col :span="8">
                    <SelectBox title="序号"/>
                </el-col>
                <el-col :span="8">
                    <SelectBox title="菜单转移"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <InputBox title="创建时间" :disable="true" />
                </el-col>
                <el-col :span="16">
                    <div class="remark">
                        <div class="title">
                            <span>备注</span>
                        </div>
                        <el-input 
                        type="textarea" 
                        v-model="value" 
                        placeholder="请输入内容"
                        >
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <button class="submit">确&nbsp;定</button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { get } from '../../utils/http'
import { menuAPI, dropAPI } from '../../utils/apiList'
export default {
    name: 'MenuDetail',
    inject:['rush'],
    data(){
        return {
            defaultMenuName: '',
            value:'',
            menuData: [],
            menuType: [], // 菜单类型下拉选项
            menuFunction:[], //对应功能下拉选项
            menuStatus: [], // 使用状态下拉选项
            // menuTypeSys: [],
            // menuNameSys: '',
            // toolFunctionSys: '',
            // menuCodeSys: '',
            // creatPersonSys: '',
            // creatTimeSys: '',
            // iconSys: 'aaa',
            // statuSys: '',
            // numberSys: '',
            // remarkSys: '',
            // state: '',
        }
    },
    components:{
        InputBox: () => import('../common/InputBox'),
        SelectBox: () => import('../common/SelectBox'),
        SearchSelect: () => import('../common/SearchSelect')
    },
    computed:{
        menuDetailData(){
            return this.$store.state.MenuDetailData.data
        }
    },
    watch:{
        menuDetailData: function (newVal, oldVal){
            this.defaultMenuName = newVal.name;
        }
    },
    mounted(){
        get(menuAPI).then(res => {
            this.menuData = res;
        });
        get(dropAPI).then(res => {
            // 把后端传过来的值进行复制，好在select组件上用
            let propArr = Object.keys(res);
            propArr.forEach(item => {
                res[item].forEach(element => {
                    // console.log(element);
                    this[item].push(
                        Object.assign(
                            {},
                            {
                                label: element.dictionary_name,
                                value: element.dictionary_number
                            }
                        )
                    )
                })
            });
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
    
    // watch:{
    //     // $route(to, from){
    //     //     let detailData = this.deepQuery(this.menuData,this.$store.state.nodeId);
    //     // }
    // }
}
</script>
<style lang="less" scoped>
.right{
    width: 80%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    .menu-area{
        height: 100%;
        .el-row{
            height: 20%;
            display: flex;
            align-items: center;
            .el-col{
                display: flex;
                justify-content: center;
                .remark{
                    .title{
                        display: flex;
                        font-size: .083333rem;
                        padding: 0 0 .078125rem 0;
                    }
                    /deep/ .el-textarea__inner{
                        width: 3.489583rem;
                        height: .260417rem;
                        resize: none;
                        border-radius: .078125rem;
                    }
                }
                .submit{
                    width: 1.041667rem;
                    height: .260417rem;
                    border-radius: .104167rem;
                    color: #fff;
                    background-color: #0066cc;
                    outline: none;
                    border: none;
                    font-size: .104167rem;
                }
            }
        }
    }
}
</style>