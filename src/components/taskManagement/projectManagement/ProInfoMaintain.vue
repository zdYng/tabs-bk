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
                            <SelectBox :defaultValue="selectId.customerId" @selectEvent="getCustomName" :options="customerSelect" :showIcon="false" title="客户名称"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>计划周期</span>
                            </div>
                            <DateSelect @pickDate="getPlanPickDate" :defaultDateTime="planDateTime"/>
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>实际周期</span>
                            </div>
                            <DateSelect @pickDate="getActualDate" :defaultDateTime="actualDateTime"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="el-col-class col-remark">
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
import { projectSelectAPI, addProjectAPI, selProjectAPI, getProjectByIdAPI, editProject} from "@/utils/apiList";
export default {
    name:'ProInfoMaintain',
    inject:['reload'],
    data(){
        return{
            selectId:{
                id: '',
                projectName: '', // 项目名称
                projectTypeId: 0,//项目类型id
                projectDesc: '',// 需求描述
                projectStageId: 0, //项目阶段id
                projectManagerId: 0,//项目经理id
                projectCode: '', // 项目code
                projectBDId: 0, //项目BD id
                customerId: 0, //客户id
                planStartTime: '', //计划开始时间
                planEndTime: '', //、计划结束时间
                actualStartTime: '',//实际开始时间
                actualEndTime: '',//实际结束时间
                // customerGradeId: 0, // 客户等级id
                // customerTypeId: 0, // 客户类型id
            },
            planDateTime: [], //计划周期
            actualDateTime: [], //实际周期
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
                            id: Number(item.dictionary_number),
                            name: item.dictionary_name
                        }
                    )
                )
            });
            console.log(this.proStageSelect);
            res.data.type.forEach(item => {
                this.proTypeSelect.push(
                    Object.assign(
                        {},
                        {
                            id: Number(item.dictionary_number),
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
            // this.selectId.projectTypeId = data.id + '-' + data.name;
            this.selectId.projectTypeId = Number(data.id);
        },
        getProStageId(data){
            // 项目阶段id
            // this.selectId.projectStageId = data.id + '-' + data.name;
            this.selectId.projectStageId = Number(data.id);
        },
        getProManagerId(data){
            // 项目经理id
            // this.selectId.projectManagerId = data.id + '-' + data.name;
            this.selectId.projectManagerId = Number(data.id);
        },
        getProBDId(data){
            // 项目BD的id
            // this.selectId.projectBDId = data.id + '-' + data.name;
            this.selectId.projectBDId = Number(data.id);
        },
        getCustomName(data){
            // 客户名称id
            // this.selectId.customNameId = data.id + '-' + data.name;
            this.selectId.customNameId = Number(data.id);
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
               if(this.selectId[item] == '' || this.selectId[item] == 0){
                   delete this.selectId[item];
               }
           });
           if(this.selectId.id){
               console.log(this.selectId.id);
                post(editProject, this.selectId).then(res => {
                    console.log(res);
                    this.$router.push({name: 'ProjectManagement'});
                    this.reload();
                });
            }else{
                console.log(this.selectId.id);
                console.log(this.selectId);
                post(addProjectAPI, this.selectId).then(res => {
                    this.$router.push({name: 'ProjectManagement'});
                    this.reload();
                })
            }

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
                        console.log(res);
                        this.selectId.id = res.data.id;
                        this.selectId.projectName = res.data.projectName;
                        // 判断后端返回的是否有这个属性
                        if(res.data.projectTypeId){
                            this.selectId.projectTypeId = Number(res.data.projectTypeId);
                        }else{
                            this.selectId.projectTypeId = 0;
                        }
                        // 判断后端返回的是否有这个属性
                        if(res.data.projectStageId){
                            this.selectId.projectStageId = Number(res.data.projectStageId);
                        }else{
                            this.selectId.projectStageId = 0;
                        }
                        // 判断后端返回的是否有这个属性
                        if(res.data.projectManagerId){
                            this.selectId.projectManagerId = Number(res.data.projectManagerId);//项目经理id
                        }else{
                            this.selectId.projectManagerId = 0;
                        }
                        this.selectId.projectCode = res.data.projectCode;
                         // 判断后端返回的是否有这个属性
                        if(res.data.projectBDId){
                            this.selectId.projectBDId = Number(res.data.projectBDId);
                        }else{
                            this.selectId.projectBDId = 0;
                        }
                         // 判断后端返回的是否有这个属性
                        if(res.data.customerId){
                            this.selectId.customerId = Number(res.data.customerId);
                        }else{
                            this.selectId.customerId = 0;
                        }
                        this.selectId.projectDesc = res.data.projectDesc;
                        this.selectId.planStartTime = res.data.planCycle.split('/')[0];
                        this.selectId.planEndTime = res.data.planCycle.split('/')[1];
                        this.planDateTime = res.data.planCycle.split('/');
                        this.actualDateTime = res.data.actualCycle.split('/');
                        this.selectId.actualStartTime = this.actualDateTime[0];
                        this.selectId.actualEndTime = this.actualDateTime[1];
                    }else{
                        console.log('请求错误');
                    }
                })
            }else{
                console.log('通过新增项目按钮进来的!');
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
    .col-remark{
      height: 130px;  
    }
    /deep/ .item-input{
        height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title{
            font-size: .083333rem;
            padding: 0 0 .078125rem 0;
            display: flex;
        }
        .date-select{
            .el-range-separator{
                line-height: 32px;
            }
        }
        .input-code {
            .el-input__inner{
                border: none;
                color: rgb(96, 98, 102);
            }
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
    border-radius: 10px;
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
    border-radius: 10px;
    border: 1px solid #e5e5e5;
}
/deep/ .el-textarea__inner:focus{
    border: 1px solid #e5e5e5;
}
</style>