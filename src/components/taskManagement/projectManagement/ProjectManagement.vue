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
                <button class="change-btn">修改</button>
                <button @click.stop="toProScheduleMantain" class="set-btn">调整项目阶段</button>
                <button @click.stop="toProInfoManagement" class="add-btn">新增项目</button>
            </div>
        </header>
        <section class="tab-section">
            <ProjectTable :list="list" :itemOptions="itemOptions"/>
        </section>
    </div>
</template>
<script>
import { get } from "@/utils/http";
import { projectSelectAPI, queryListAPI } from "@/utils/apiList";
export default {
    name: 'ProjectManagement',
    data(){
        return{
            selectGroup: [],
            list: [],
            itemOptions:[
                { id: 1, title: "项目名称", type: "text", key: "projectName", width:'150'},
                { id: 2, title: "项目CODE", type: "text", key: "projectCode", width:'150' },
                { id: 3, title: "项目类型", type: "text", key: "projectType", width:'100' },
                { id: 4, title: "项目阶段", type: "text", key: "projectStage", width:'100' },
                { id: 5, title: "项目创建时间", type: "text", key: "createTime", width:'179' },
                { id: 6, title: "计划周期", type: "text", key: "planCycle", width:'200' },
                { id: 7, title: "实际周期", type: "text", key: "actualCycle", width:'200' },
                { id: 8, title: "项目进度", type: "text", key: "projectProgress", width:'200' },
                { id: 9, title: "项目经理", type: "text", key: "projectBD", width:'100' },
                { id: 10, title: "客户名称", type: "text", key: "customer", width:'100' },
                { id: 11, title: "所属BD", type: "text", key: "projectManager", width:'100' },
            ],
            // 点击查询按钮提交的参数
            searchBtnSubmit:{
                projectName: '',
                projectCode: '',
                stageId: ''
            }
        }
    },
    mounted(){
        get(projectSelectAPI).then(res => {
            this.selectGroup = res.data.stage;
        });
        get(queryListAPI).then(res => {
            console.log(res);
            this.list = res.data;
        })
    },
    components:{
        ProjectTable: () => import('./ProjectTable'),
        InputSearch: () => import('../../common/InputSearch'),
        SelectSearch: () => import('../../common/SelectSearch')
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
            // this.$router.push({name: 'EmptyPage'});
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
            .margin-left{
                margin-left: .078125rem;
            }
            .select-btn{
                width: .416667rem;
                height: .182292rem;
                background-color: #fff;
                border-radius: .052083rem;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                margin-left: .104167rem;
                outline: none;
            }
        }
        .btn-group{
            .change-btn{
                width: .416667rem;
                height: .182292rem;
                background-color: #fff;
                border-radius: .052083rem;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                margin-left: .104167rem;
                outline: none;
            }
            .set-btn{
                width: .625rem;
                height: .182292rem;
                font-weight: 400;
                background-color: #fff;
                border-radius: .052083rem;
                border: solid 1px #0066cc;
                font-size: .083333rem;
                color: #0066cc;
                margin-left: .104167rem;
                outline: none;
            }
            .add-btn{
                width: .520833rem;
                height: .182292rem;
                background-color: #0066cc;
                border-radius: .104167rem;
                font-size: .083333rem;
                color: #fff;
                border: none;
                margin: 0 .104167rem 0 .104167rem;
                outline: none;
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
