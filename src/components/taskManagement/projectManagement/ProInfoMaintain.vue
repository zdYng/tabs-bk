<template> 
    <!-- 项目信息维护页面 -->
    <div class="pro-info">
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span style="margin-left: .078125rem">基础信息</span>
                    </span>
                    <span class="disappear">隐藏信息</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="el-col-class">
                <div class="item-input">
                    <div class="title">
                        <i class="iconfont icon-bitian">&#xe603;</i>
                        <span>项目名称</span>
                    </div>
                    <el-input v-model="category_name" placeholder="请输入内容"></el-input>
                </div>
                <div class="item-input">
                    <div class="title">
                        <i class="iconfont icon-bitian">&#xe603;</i>
                        <span>项目类型</span>
                    </div>
                    <el-select clearable placeholder="请选择">
                        <el-option>选择一</el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="12" class="el-col-class">
                <div class="item-input">
                    <div class="title">
                        <i class="iconfont icon-bitian">&#xe603;</i>
                        <span>项目阶段</span>
                    </div>
                    <el-select clearable placeholder="请选择">
                        <el-option>选择一</el-option>
                    </el-select>
                </div>
                <div class="item-input">
                    <div class="title">项目经理</div>
                    <el-select clearable placeholder="请选择">
                        <el-option>选择一</el-option>
                    </el-select>
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
                    <div class="title">
                        <span>项目BD</span>
                    </div>
                    <el-select clearable placeholder="请选择">
                        <el-option>选择一</el-option>
                    </el-select>
                </div>
                <div class="item-input">
                    <div class="title">客户名称</div>
                    <el-select clearable placeholder="请选择">
                        <el-option>选择一</el-option>
                    </el-select>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="el-col-class">
                <div class="item-input">
                    <div class="title">
                        <span>计划周期</span>
                    </div>
                    <el-input class="input-code" v-model="category_name" placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :span="12" class="el-col-class">
                <div class="item-input">
                    <div class="title">
                        <span>实际周期</span>
                    </div>
                    <el-input class="input-code" v-model="category_name" placeholder="请输入内容"></el-input>
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
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span style="margin-left: .078125rem">自定义信息</span>
                    </span>
                    <span class="disappear">隐藏信息</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="el-col-class">
                <div class="item-input">
                    <div class="title">
                        <span>项目名称</span>
                    </div>
                    <el-input v-model="category_name" placeholder="请输入内容"></el-input>
                </div>
                <div class="item-input">
                    <div class="title">
                        <span>项目名称</span>
                    </div>
                    <el-input v-model="category_name" placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :span="12" class="el-col-class">
                <div class="item-input">
                    <div class="title">
                        <span>项目名称</span>
                    </div>
                    <el-input v-model="category_name" placeholder="请输入内容"></el-input>
                </div>
                <div class="item-input">
                    <div class="title">
                        <span>项目名称</span>
                    </div>
                    <el-input v-model="category_name" placeholder="请输入内容"></el-input>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'ProInfoMaintain',
    data(){
        return{
            category_name: ''
        }
    }
}
</script>
<style scoped>
.pro-info{
    width: 100%;
}
.item-top{
    height: .3125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3125rem;
}
.item-top .top-text{
    font-size: .114583rem;
    display: flex;
    vertical-align: center;
    align-self: center;
}
.before-span{
    display: inline-block;
    width: .03125rem;
    height: .114583rem;
    background-color: #000;
}
.disappear{
    font-size: .083333rem;
    color: #0066cc;
}
.el-col-class{
    display: flex;
    justify-content: space-around;
}
/* input输入框 */
.item-input{
    height: .520833rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.item-input .title{
    font-size: .083333rem;
    padding: 0 0 .078125rem 0;
    display: flex;
}
>>> .el-input__inner{
    width: 1.25rem;
    height: .260417rem;
    border:1px solid rgba(221,221,221,1);
    border-radius: .078125rem;
}
>>> .input-code .el-input__inner{
    width: 3.385417rem;
}
.icon-bitian{
    color: red;
    font-size: .0625rem;
    padding-right: .026042rem;
}
>>> .el-textarea__inner{
    width: 7.708333rem;
    resize: none;
    border-radius: .078125rem;
}
</style>
