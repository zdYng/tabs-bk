<template>
<!-- 新增分组按钮弹窗 -->
    <div class="short-cut">
        <el-button type="text" @click="handleAddGroupClick">{{btnText}}</el-button>
        <!-- <el-dialog
          v-if="!isShow"
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="30vh"
          :title="title">
          <el-form :model="form">
              <el-form-item 
              :label="label"
              :label-width="formLableWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="handleClick">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog> -->
        <el-dialog 
          v-if="isShow"
          class="tips"
          :visible.sync="dialogFormVisible"
          center
          top="30vh">
          <span>请选中需要添加的项目</span>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="dialogFormVisible = false">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import { post } from '@/utils/http'
import { addTaskAPI } from '@/utils/apiList'
export default {
    name: 'AddGroup',
    props:{
        btnText:String,
        title: String,
        label: String,
    },
    computed:{
        rowId(){
            if(Object.keys(this.$store.state.taskRowId).length > 0){
                return this.$store.state.taskRowId
            }else{
                return false
            }
        }
    },
    inject:['reload'],
    data(){
        return {
            isShow: false,
            dialogFormVisible: false,
            form: {
                name: '',
                flag: 0,
            },
            formLableWidth: '100px'
        }
    },
    methods:{
        handleAddGroupClick(){
            if(this.rowId){
                this.isShow = false;
                if(this.rowId.flag == 0){
                    post(addTaskAPI,{
                        projectId: this.rowId.id,
                        level: this.rowId.flag + 1,
                        taskName: '新增分组',
                        flag: 0
                    }).then(res => {
                        this.reload();
                    }).catch(err => {
                        console.log(err)
                    });
                }else{
                    post(addTaskAPI, {
                        parentId: this.rowId.id,
                        level: this.rowId.flag + 1,
                        taskName: '新增分组',
                        flag: 0
                    }).then(res => {
                        this.reload();
                    }).catch(err => {
                    });
                }
            }else{
                this.isShow = true;
            }
            this.dialogFormVisible = true;
            return this.dialogFormVisible
        }
    }
}
</script>
<style lang="less" scoped>
.short-cut{
    /deep/ .el-button{
        span{
            font-size: 14px;
        }
    }
    .custom-dialog{
        /deep/ .el-dialog{
            width: 400px;
            border-radius: 15px;
            .el-dialog__header{
                height: 60px;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background:rgba(184,218,252,1);
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
            .el-dialog__body{
                height: 100px;
                display: flex;
                align-items: center;
                padding: 0;
                box-sizing: border-box;
                .el-form{
                    // padding-left: 30px;
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .el-form-item{
                        margin-bottom: 0;
                        .el-form-item__label{
                            height: 40px;
                            line-height: 40px;
                            font-size: 16px;
                        }
                        .el-input__inner{
                            width: 250px;
                            height: 40px;
                        }
                    }
                }
            }
            .dialog-footer{
                .confirm-btn{
                    border-radius: 10px;
                    width: 80px;
                    height: 30px;
                    margin-right: 20px;
                    background-color: #0066cc;
                    border: none;
                    outline: none;
                    color: #fff;
                }
                .cancel-btn{
                    border-radius: 10px;
                    width: 80px;
                    height: 30px;
                    margin-right: 20px;
                    background-color: #fff;
                    border: 1px solid #0066cc;
                    outline: none;
                    color: #0066cc;
                }
            }
        }
        /deep/ .el-input__inner{
            height: 40px;
            border-radius: 10px;
            width: 300px;
        }
    }
    .tips{
        /deep/ .el-dialog{
            width: 400px;
            border-radius: 15px;
            .el-dialog__body{
                height: 50px;
                display: flex;
                align-items: center;
                padding-left: 30px;
                box-sizing: border-box;
                span{
                    font-size: 16px;
                    color: #333;
                }
                .el-form{
                    // padding-left: 30px;
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .el-form-item{
                        margin-bottom: 0;
                        .el-form-item__label{
                            height: 40px;
                            line-height: 40px;
                            font-size: 16px;
                        }
                        .el-input__inner{
                            width: 250px;
                            height: 40px;
                        }
                    }
                }
            }
            .dialog-footer{
                display: flex;
                justify-content: flex-end;
                .confirm-btn{
                    width: 60px;
                    height: 25px;
                    margin-right: 20px;
                    background-color: #0066cc;
                    border: none;
                    outline: none;
                    color: #fff;
                    font-size: 12px;
                }
                .cancel-btn{
                    width: 60px;
                    height: 25px;
                    margin-right: 20px;
                    background-color: #fff;
                    border: 1px solid #0066cc;
                    outline: none;
                    color: #0066cc;
                    font-size: 12px;
                }
            }
        }
        /deep/ .el-input__inner{
            height: 40px;
            border-radius: 10px;
            width: 300px;
        }
    }
}
</style>