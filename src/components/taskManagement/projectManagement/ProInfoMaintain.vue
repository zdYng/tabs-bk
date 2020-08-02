<template> 
    <!-- 项目信息维护页面 -->
    <div class="pro-info">
            <!-- -------------基础信息--------------------- -->
            <el-row>
                <el-col :span="24">
                    <BannerBar :isShow="true" :showDisappear="true" bannerText="基础信息" @listenChildEvent="getBaseInfoData"/>
                </el-col>
            </el-row>
            <div v-show="isShowBaseInfo">
                <el-row>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <InputBox :defalutValue="selectId.projectName" @inputChange="getProNameValue" :showIcon="true" title="项目名称"/>
                        </div>
                        <div class="item-input">
                            <SelectBox :defaultValue="selectId.projectTypeId" @selectEvent="getProTypeId" :options="proTypeSelect" :showIcon="true" title="项目类型"/>
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <SelectBox :defaultValue="selectId.projectStageId" @selectEvent="getProStageId" :options="proStageSelect" :showIcon="true" title="项目阶段"/>
                        </div>
                        <div class="item-input">
                            <SelectBox :defaultValue="selectId.projectManagerId" @selectEvent="getProManagerId" :options="proManagerSelect" :showIcon="false" title="项目经理"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>项目Code</span>
                            </div>
                            <el-input v-model="selectId.projectCode" class="input-code" :disabled="true"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                        <SelectBox :defaultValue="selectId.projectBDId" @selectEvent="getProBDId" :options="proBDSelect" :showIcon="false" title="项目BD"/>
                        </div>
                        <div class="item-input">
                            <SelectBox :defaultValue="selectId.customNameId" @selectEvent="getCustomName" :options="customerSelect" :showIcon="false" title="客户名称"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>计划周期</span>
                            </div>
                            <DateSelect @pickDate="getPlanPickDate" :defaultDateTime="selectId.planDateTime"/>
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>实际周期</span>
                            </div>
                            <DateSelect @pickDate="getActualDate" :defaultDateTime="selectId.actualDateTime"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="el-col-class">
                        <div style="height: 120px" class="item-input">
                            <div class="title">
                                <span>需求描述</span>
                            </div>
                            <el-input v-model="selectId.projectDesc" type="textarea" rows="3" class="input-code" placeholder="请输入内容"></el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- -------------自定义信息--------------------- -->
            <el-row>
                <el-col :span="24">
                <BannerBar :isShow="true" :showDisappear="true" bannerText="自定义信息" @listenChildEvent="getCustomData"/>
                </el-col>
            </el-row>
            <div v-show="isShowCustomInfo">
                <el-row class="row-custom">
                    <el-col :span="6" class="col-custom">
                        <div class="item-input">
                            <InputBox :showIcon="false" title="自定义"/>
                        </div>
                    </el-col>
                    <el-col :span="6" class="col-custom">
                        <div class="item-input">
                            <InputBox :showIcon="false" title="自定义"/>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- -------------客户信息--------------------- -->
            <el-row>
                <el-col :span="24">
                <BannerBar :isShow="true" :showDisappear="true" bannerText="客户信息" @listenChildEvent="getUserMsgData"/>
                </el-col>
            </el-row>
            <div v-show="isShowUserInfo">
                <el-row class="row-user-info">
                    <el-col :span="6" class="col-user-info">
                        <div class="item-input">
                            <SelectBox @selectEvent="getProTypeId" :options="customerSelect" title="客户名称"/>
                        </div>
                    </el-col>
                    <el-col :span="6" class="col-user-info">
                        <div class="item-input">
                            <SelectBox @selectEvent="getProTypeId" :options="customerGrade" title="客户等级"/>
                        </div>
                    </el-col>
                    <el-col :span="6" class="col-user-info">
                        <div class="item-input">
                            <SelectBox @selectEvent="getProTypeId" :options="customerType" title="客户类型"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="el-col-class">
                        <div style="height: 120px" class="item-input">
                            <div class="title">
                                <span>客户信息描述</span>
                            </div>
                            <el-input type="textarea" rows="3" class="input-code" v-model="category_name"></el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-row class="row-btn">
                <button @click="submitData" class="save-btn">保&nbsp;存</button>
            </el-row>
    </div>
</template>
<script>
import { get, post } from "@/utils/http";
import { projectSelectAPI, addProjectAPI, selProjectAPI, getProjectByIdAPI} from "@/utils/apiList";
export default {
    name:'ProInfoMaintain',
    inject:['reload'],
    data(){
        return{
            // projectNameValue:'',
            selectId:{
                projectName: '', // 项目名称
                projectTypeId: '',//项目类型id
                projectDesc: '',// 需求描述
                projectStageId: '', //项目阶段id
                projectManagerId: '',//项目经理id
                projectCode: '', // 项目code
                projectBDId: '', //项目BD id
                customerId: '', //客户id
                planStartTime: '', //计划开始时间
                planEndTime: '', //、计划结束时间
                planDateTime: [], //计划周期
                actualDateTime: [], //实际周期
                actualStartTime: '',//实际开始时间
                actualEndTime: '',//实际结束时间
                customerGradeId: '', // 客户等级id
                customerTypeId: '', // 客户类型id
                customNameId: '', // 客户名称id
            },
            // defaultData:{
            //     defaultProName: '',//项目名称
            //     defaultProType: '', //项目类型
            //     defaultProStage:'', // 项目阶段
            //     defaultProjectManager: '', // 项目经理
            //     defaultProCODE: '', // 项目code
            //     defaultProBD: '', //项目BD
            //     defaultCustom: '', //客户名称
            //     defaultPlanCycle: '', // 计划周期
            //     defaultActualCycle: '', // 实际周期
            //     defaultRemark: '' ,// 需求描述,
            //     defaultPlanDateTime: []
            // },
            name:'baseInfo',
            value: 'aa',
            category_name: '',
            // projectCod: Number, // 项目code  
            proTypeSelect: [], // 项目类型下拉选项
            proStageSelect:[], //项目阶段下拉选项
            proManagerSelect: [], //项目经理下拉选项
            proBDSelect:[], //项目BD下拉选项
            customerSelect: [],//客户名称下拉选项
            customerGrade: [], //客户等级下拉选项
            customerType: [], // 客户类型下拉选项
            isShowBaseInfo: true,
            isShowCustomInfo:true,
            isShowUserInfo: true,
        }
    },
    computed:{
        rowData(){
            return this.$store.state.projectMaintainRowData
        }
    },
    created(){
        this.isFromChangeBtn();
    },
    mounted(){
        // 拿到项目类型、项目阶段下拉数据
        get(selProjectAPI).then(res => {
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
        })
        get(projectSelectAPI).then(res => {
            console.log(res);
            this.proManagerSelect = res.data.user;
            this.proBDSelect = res.data.user;
            this.customerSelect = res.data.customer;
            this.customerGrade = res.data.customerGrade;
            this.customerType = res.data.customerType;
        });
    },
    components:{
        SelectBox: () =>  import('../../common/SelectBox'),
        InputBox: () => import('../../common/InputBox'),
        BannerBar: () => import('../../common/BannerBar'),
        DateSelect: () => import('./DateSelect')
    },
    methods:{
        getBaseInfoData(data){
            this.isShowBaseInfo = data;
        },
        getCustomData(data){
            this.isShowCustomInfo = data;
        },
        getUserMsgData(data){
            this.isShowUserInfo = data;
        },
        // 每个下拉菜单，选择后获取对应的id值传给后端
        getProTypeId(data){
            // 项目类型id
            this.selectId.projectTypeId = data.id + '-' + data.name;
        },
        getProStageId(data){
            // 项目阶段id
            this.selectId.projectStageId = data.id + '-' + data.name;
        },
        getProManagerId(data){
            // 项目经理id
            this.selectId.projectManagerId = data.id + '-' + data.name;
        },
        getProBDId(data){
            // 项目BD的id
            this.selectId.projectBDId = data.id + '-' + data.name;
        },
        getCustomName(data){
            // 客户名称id
            this.selectId.customNameId = data.id + '-' + data.name;
        },
        getPlanPickDate(date){
            console.log(date);
            // 计划周期
            this.selectId.planStartTime = date[0];
            this.selectId.planEndTime = date[1];
        },
        getActualDate(date){
            this.selectId.actualStartTime = date[0];
            this.selectId.actualEndTime = date[1];
        },
        getCustomerGrade(data){
            // 客户等级id
            this.selectId.customerGradeId = data.id + '-' + data.name;
        },
        getCustomerType(data){
            // 客户类型id
            this.selectId.customerTypeId = data.id + '-' + data.name;
        },
        // 点击保存按钮，提交数据
        submitData(){
            // 判断要提交的数据有没有值是为空的，有就把这个属性删除
           Object.keys(this.selectId).forEach(item => {
               if(this.selectId[item] == ''){
                   delete this.selectId[item];
               }
           });
            post(addProjectAPI, this.selectId).then(res => {
                console.log(res);
                this.$router.push({name: 'ProjectManagement'});
                this.reload();
            });

        },
        // 拿到项目名称输入框的数据
        getProNameValue(val){
            this.selectId.projectName = val;
        },
        // 判断是否是点击修改按钮跳转到项目信息维护页面
        isFromChangeBtn(){
            if(this.$route.query.isChange){
                get(getProjectByIdAPI,{"id": this.rowData.id}).then(res => {
                    console.log(res);
                    if(res.code == '000'){
                        this.selectId.projectName = res.data.projectName;
                        this.selectId.projectTypeId = res.data.projectTypeId;
                        this.selectId.projectStageId = res.data.projectStageId;
                        this.selectId.projectManagerId = res.data.projectManagerId;
                        this.selectId.projectCode = res.data.projectCode;
                        this.selectId.projectBDId = res.data.projectBDId;
                        this.selectId.customNameId= res.data.customerId;
                        this.selectId.projectDesc = res.data.projectDesc;
                    }else{
                        console.log('请求错误');
                    }
                })
            } 
        }
    }
}
</script>
<style lang="less" scoped>
.pro-info{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    .el-col-class{
        display: flex;
        justify-content: space-around;
    }
    .item-input{
        height: .520833rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .title{
            font-size: .083333rem;
            padding: 0 0 .078125rem 0;
            display: flex;
        }
    }
    .row-custom{
        display: flex;
        flex-wrap: wrap;
        .col-custom{
            display: flex;
            justify-content: center;
        }
    }
    .row-user-info{
        display: flex;
        flex-wrap: wrap;
        .col-user-info{
            display: flex;
            justify-content: center;
        }
    }
    .row-btn{
        height: .78125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .save-btn{
            width: 1.041667rem;
            height: .260417rem;
            background:rgba(0,102,203,1);
            border-radius: .104167rem;
            color: #fff;
            border: none;
            outline: none;
            font-size: .104167rem;
        }
    }
}
/deep/ .el-input__inner{
    width: 1.25rem;
    height: .260417rem;
    border:1px solid rgba(221,221,221,1);
    border-radius: .078125rem;
}
/deep/ .input-code{
    .el-input__inner{
        width: 3.385417rem;
        height: 40px;
    }
}
/deep/ .el-textarea__inner{
    width: 7.572917rem;
    resize: none;
    border-radius: .078125rem;
}
</style>