<template>
    <!-- 数据字典页面-->
    <div class="data-dictionary">
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span style="margin-left: .078125rem">字典信息</span>
                    </span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="5" :offset="2">
                <div class="item-input">
                    <div class="title">字典名称</div>
                    <el-input v-model="category_name" placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :span="5" :offset="2">
                <div class="item-input">
                    <div class="title">字典转移</div>
                    <el-select
                      v-model="value"
                      clearable
                      placeholder="请选择"
                    >
                        <!-- <el-option
                          v-for="item in data"
                          :key="item.value"
                          :label="item.value"
                          :value="item.label"
                        >
                        </el-option> -->
                    </el-select>
                </div>
            </el-col>
            <el-col :span="5" :offset="2">
                <div class="item-input">
                    <div class="title">创建人</div>
                    <el-input v-model="created_by" :disabled="true"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
           <el-col :span="5" :offset="2">
                <div class="item-input">
                    <div class="title">创建时间</div>
                    <el-input v-model="created_time" :disabled="true"></el-input>
                </div>
            </el-col>
            <el-col :span="12" :offset="2">
                <div class="item-input">
                    <div class="title">备注</div>
                    <el-input v-model="remark"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="item-top">
                    <span class="top-text">
                        <span class="before-span"></span>
                        <span style="margin-left: .078125rem">字典项维护</span>
                    </span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="5" :offset="2">
                <div class="item-input">
                    <div class="title">字典项名称</div>
                    <el-input></el-input>
                </div>
            </el-col>
            <el-col :span="5" :offset="2">
                <div class="item-input">
                    <div class="title">字典项单位</div>
                    <el-input></el-input>
                </div>
            </el-col>
            <el-col :span="5" :offset="2">
                <div class="item-input">
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
        <el-row>
            <el-col :span="12" :offset="2">
                <div class="item-input">
                    <div class="title">备注</div>
                    <el-input></el-input>
                </div>
            </el-col>
            <el-col :span="5" :offset="2">
                <div 
                class="btn-group">
                    <button class="save-btn">保&nbsp;存</button>
                    <img class="edit" src="http://47.111.232.105:5000/img/add.png">
                    <img class="delete" src="http://47.111.232.105:5000/img/delet.png">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { get } from '../../utils/http'
import { termDicAPI } from '../../utils/apiList';
export default {
    name: 'DataDictionary',
    data(){
        return {
            value:'',
            value1: true,
            // categoryID: this.data.category.categoryID,
            category_name: '',
            created_by: '',
            created_time: '',
            remark: '',
            father_id: '',
            data: [{label: 1, value: 'aaa'},{label: 2, value: 'bbb'}],
        }
    },
    mounted(){
        let menuMessage = JSON.parse(localStorage.getItem('dicMenuMessage'));
        this.category_name = menuMessage.category.category_name;
        this.created_by = menuMessage.category.created_by;
        this.created_time = menuMessage.category.created_time;
        this.remark = menuMessage.category.categoryRemark;
        console.log('mounted');
    },
    watch:{
        $route(to, from){
            console.log(to);
            get(termDicAPI + `${to.params.id}`).then(res => {
                console.log(res);
                this.category_name = res.category.category_name;
                this.created_by = res.category.created_by;
                this.created_time = res.category.created_time;
                this.remark = res.category.categoryRemark;
            })
            .catch(err => console.log(err));
        }
    }
}
</script>
<style scoped>
.data-dictionary{  
    width: 100%;
}
.item-top{
    height: .3125rem;
    display: flex;
    justify-content: space-between;
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
.item-input{
    height: .520833rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.item-input .title{
    font-size: .083333rem;
    padding: 0 0 .078125rem .026042rem;
}
>>> .el-input__inner{
    height: .260417rem;
    border:1px solid rgba(221,221,221,1);
    border-radius: .078125rem;
}
.status{
    width: 100%;
    height: .260417rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.status .title{
    font-size: .09375rem;
    color:rgba(102,102,102,1);
}
.btn-group{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: .520833rem;
}
.btn-group .save-btn{
    width: .520833rem;
    height: .208333rem;
    background:rgba(0,102,204,1);
    border-radius:20px;
    border: none;
    font-size: .104167rem;
    color: #fff;
    outline: none;
}
.edit,.delete{
    display: inline-block;
    width: .15625rem;
    height: .15625rem;
}
</style>