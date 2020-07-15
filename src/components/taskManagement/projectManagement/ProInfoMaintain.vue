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
                            <InputBox v-model="value" :showIcon="true" title="项目名称"/>
                        </div>
                        <div class="item-input">
                            <SelectBox @selectEvent="getProTypeId" :options="proTypeSelect" :showIcon="true" title="项目类型"/>
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <SelectBox @selectEvent="getProStageId" :options="proStageSelect" :showIcon="true" title="项目阶段"/>
                        </div>
                        <div class="item-input">
                            <SelectBox @selectEvent="getProManagerId" :options="proManagerSelect" :showIcon="false" title="项目经理"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>项目Code</span>
                            </div>
                            <el-input class="input-code" :disabled="true" v-model="category_name" placeholder="请输入内容"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                        <SelectBox @selectEvent="getProBDId" :options="proBDSelect" :showIcon="false" title="项目BD"/>
                        </div>
                        <div class="item-input">
                            <SelectBox :options="customerSelect" :showIcon="false" title="客户名称"/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>计划周期</span>
                            </div>
                            <DateSelect @pickDate="getPickDate"/>
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-col-class">
                        <div class="item-input">
                            <div class="title">
                                <span>实际周期</span>
                            </div>
                            <DateSelect/>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="el-col-class">
                        <div style="height: 120px" class="item-input">
                            <div class="title">
                                <span>需求描述</span>
                            </div>
                            <el-input type="textarea" rows="3" class="input-code" v-model="category_name" placeholder="请输入内容"></el-input>
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
                            <InputBox :showIcon="false" title="客户名称"/>
                        </div>
                    </el-col>
                    <el-col :span="6" class="col-user-info">
                        <div class="item-input">
                            <InputBox :showIcon="false" title="客户等级"/>
                        </div>
                    </el-col>
                    <el-col :span="6" class="col-user-info">
                        <div class="item-input">
                            <InputBox :showIcon="false" title="客户类型"/>
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
import { projectSelectAPI, addProjectAPI } from "@/utils/apiList";
export default {
    name:'ProInfoMaintain',
    data(){
        return{
            selectId:{
                projectName: '', // 项目名称
                projectTypeId: Number,//项目类型id
                projectStageId: Number, //项目阶段id
                projectManagerId: Number,//项目经理id
                projectBDId: Number, //项目BD id
                customerId: Number, //客户id
                planStartTime: '', //计划开始时间
                planEndTime: '', //、计划结束时间
            },
            name:'baseInfo',
            value: 'aa',
            category_name: '',
            projectCod: Number, // 项目code  
            proTypeSelect: [], // 项目类型下拉选项
            proStageSelect:[], //项目阶段下拉选项
            proManagerSelect: [], //项目经理下拉选项
            proBDSelect:[], //项目BD下拉选项
            customerSelect: [],//客户名称下拉选项
            isShowBaseInfo: true,
            isShowCustomInfo:true,
            isShowUserInfo: true
        }
    },
    mounted(){
        get(projectSelectAPI).then(res => {
            console.log(res);
            this.proTypeSelect = res.data.type;
            this.proStageSelect = res.data.stage;
            this.proManagerSelect = res.data.user;
            this.proBDSelect = res.data.user;
        })
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
            console.log(this.isShowBaseInfo);
        },
        getCustomData(data){
            this.isShowCustomInfo = data;
            console.log(this.isShowCustomInfo);
        },
        getUserMsgData(data){
            this.isShowUserInfo = data;
            console.log(this.isShowUserInfo);
        },
        // 每个下拉菜单，选择后获取对应的id值传给后端
        getProTypeId(id){
            this.selectId.projectTypeId = id;
        },
        getProStageId(id){
            this.selectId.projectStageId = id;
        },
        getProManagerId(id){
            this.selectId.projectManagerId = id;
        },
        getProBDId(id){
            this.selectId.projectBDId = id;
        },
        getPickDate(data){
            this.selectId.planStartTime = data[0];
            this.selectId.planEndTime = data[1];
        },
        submitData(){
            post(addProjectAPI, this.selectId).then(res => {
                console.log(res);
            })
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
    }
}
/deep/ .el-textarea__inner{
    width: 7.708333rem;
    resize: none;
    border-radius: .078125rem;
}
</style>