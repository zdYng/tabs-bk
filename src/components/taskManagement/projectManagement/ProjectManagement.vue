<template>
    <!-- 项目管理主页面 -->
    <div class="pro-management">
        <header>
           <div class="input-group">
               <InputSearch @inputChange="getProNameValue" class="margin-left" title="项目名称:" placeholder="请输入" />
               <InputSearch @inputChange="getProCODEValue" class="margin-left" title="项目CODE:" placeholder="请输入" />
               <SelectSearch @selectChange="getProStageId" class="margin-left" :itemList="selectGroup" title="项目阶段:" placeholder="请选择"/>
               <button @click="handleSearch" class="select-btn">查询</button>
           </div>
            <div class="btn-group">
                <button @click="alterBtn"  class="change-btn" title="选中项目后再修改">修改</button>
                <ProInfoMaintainDialog :proStageOptions="selectGroup"/>
                <button @click.stop="toProInfoManagement" class="add-btn">新增项目</button>
            </div>
        </header>
        <section class="tab-section">
            <ProjectTable :list="list" :itemOptions="itemOptions"/>
        </section>
    </div>
</template>
<script>
import { get, post } from "@/utils/http";
import { projectSelectAPI, queryListAPI, editProject, selProjectAPI} from "@/utils/apiList";
export default {
    name: 'ProjectManagement',
    data(){
        return{
            selectGroup: [],//项目阶段下拉框的下拉框数据
            getSelectData:[],
            proTypeSelect: [], //项目类型下拉数据
            proStageSelect: [], //项目阶段下拉数据
            list: [],
            itemOptions:[
                { id: 1, title: "项目名称", type: "text", key: "projectName", width:'150'},
                { id: 2, title: "项目CODE", type: "text", key: "projectCode", width:'150' },
                { id: 3, title: "项目类型", type: "text", key: "projectType", width:'100' },
                { id: 4, title: "项目阶段", type: "text", key: "projectStage", width:'100' },
                { id: 5, title: "项目创建时间", type: "text", key: "createTime", width:'179' },
                { id: 6, title: "计划周期", type: "text", key: "planCycle", width:'200' },
                { id: 7, title: "实际周期", type: "text", key: "actualCycle", width:'200' },
                { id: 8, title: "项目进度", type: "text", key: "projectProgress", width:'100' },
                { id: 9, title: "项目经理", type: "text", key: "projectBD", width:'150' },
                { id: 10, title: "客户名称", type: "text", key: "customer", width:'100' },
                { id: 11, title: "所属BD", type: "text", key: "projectManager", width:'100' },
            ],
            // 点击查询按钮提交的参数
            searchBtnSubmit:{},
            // 点击修改按钮发送的信息
            alterSubmitId: null,
            currentRowData: {},
        }
    },
    computed:{
        getRowData(){
            if(Object.keys(this.$store.state.projectMaintainRowData).length > 0){
                return this.$store.state.projectMaintainRowData
            }else{
                return false
            }
        }
    },
    created(){
        //项目阶段下拉框的下拉框数据
        get(projectSelectAPI).then(res => {
            console.log(res);
            this.selectGroup = res.data.stage;
            this.getSelectData = res.data;
        });
        // 项目类型、项目阶段下拉数据
        get(selProjectAPI).then(res => {
            console.log(res);
            res.data.stage.forEach(item => {
                this.proStageSelect.push(
                    Object.assign(
                        {},
                        {
                            id: item.dictionary_number,
                            name: item.dictionary_name
                        }
                    )
                )
            });
            res.data.type.forEach(item => {
                this.proTypeSelect.push(
                    Object.assign(
                        {},
                        {
                            id: item.dictionary_number,
                            name: item.dictionary_name
                        }
                    )
                )
            });
            // console.log(this.proTypeSelect);
        });
        get(queryListAPI).then(res => {
            res.data.forEach(item => {
                item.checked = false;
            });
            this.list = res.data;
        });
    },
    components:{
        ProjectTable: () => import('./ProjectTable'),
        InputSearch: () => import('../../common/InputSearch'),
        SelectSearch: () => import('../../common/SelectSearch'),
        ProInfoMaintainDialog: () => import('./ProInfoMaintainDialog')
    },
    methods:{
        // 点击“新增项目”按钮，实现跳转项目信息维护页面
        toProInfoManagement(){
            this.$router.push({name: 'ProInfoMaintain'});
        },
        // 点击“调整项目阶段”按钮，实现跳转项目进度维护页面
        toProScheduleMantain(){
            this.$router.push({name: 'ProScheduleMantain'});
        },
        // 点击查询按钮实现数据回填
        handleSearch(){
            get(queryListAPI, this.searchBtnSubmit).then(res => {
                this.list = res.data;
            })
        },
        //获取项目名称输入框传过来的实际值
        getProNameValue(value){
            this.searchBtnSubmit.projectName = value;
        },
        // 获取项目CODE输入框传过来的实际值
        getProCODEValue(value){
            this.searchBtnSubmit.projectCode = value;
        },
        // 获取项目阶段下拉框的实际id
        getProStageId(id){
            this.searchBtnSubmit.stageId = id;
        },
        // 点击修改按钮
        alterBtn(){
            if(this.getRowData){
                this.$router.push({name: 'ProInfoMaintain', query: {isChange: 1}});
            }
        },
        // 获取到任务管理页面，点击列表某一个行传过来的行数据
        getCurrentRowData(val){
            console.log(val);
            // this.currentRowData = val;
        }

    }
}
</script>
<style lang="less" scoped>
.pro-management{
    width: 100%;
    header{
        width: 100%;
        padding-top: .133333rem;
        display: flex;
        justify-content: space-between;
        .input-group{
            display: flex;
            align-items: center;
            .margin-left{
                margin-left: .078125rem;
            }
            .select-btn{
                width: .416667rem;
                height: 30px;
                background-color: #fff;
                border-radius: .052083rem;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                margin-left: .104167rem;
                outline: none;
                cursor: pointer;
            }
        }
        .btn-group{
            display: flex;
            .change-btn{
                width: .416667rem;
                height: 30px;
                background-color: #fff;
                border-radius: 10px;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                margin-left: .104167rem;
                outline: none;
                cursor: pointer;
            }
            .set-btn{
                width: .625rem;
                height: 30px;
                font-weight: 400;
                background-color: #fff;
                border-radius: .052083rem;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                margin-left: .104167rem;
                outline: none;
                cursor: pointer;
            }
            .add-btn{
                width: .520833rem;
                height: 30px;
                background-color: #0066cc;
                border-radius: 10px;
                font-size: .083333rem;
                color: #fff;
                border: none;
                margin: 0 .104167rem 0 .104167rem;
                outline: none;
                cursor: pointer;
            }
        }
    }
    .tab-section{
        display: flex;
        justify-content: center;
        padding: .15625rem .104167rem 0 .104167rem;
    }
}
</style>
