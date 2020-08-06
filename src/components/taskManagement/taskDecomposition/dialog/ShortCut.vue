<template>
<!-- 任务分解页面下的快捷维护弹窗 -->
    <div class="short-cut">
        <el-button type="text" @click="dialogFormVisible = true">{{btnText}}</el-button>
        <el-dialog
          v-if="rowId.flag != 0 && this.rowId" 
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="30vh"
          :title="dialogData.title">
          <el-form :model="form">
              <el-form-item 
              label="任务完成百分比"
              :label-width="formLableWidth">
                <el-input v-model="form.percentage" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注" :label-width="formLableWidth">
                  <el-input type="textarea" v-model="form.remark" autocomplete="off"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitMsg">确定</el-button>
              <el-button @click="dialogFormVisible = false">取消</el-button>
          </div>
        </el-dialog>
        <el-dialog
          v-else
          class="tips"
          :visible.sync="dialogFormVisible"
          center
          top="30vh">
          <span>请选中要维护的任务</span>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="dialogFormVisible = false">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import {post} from '@/utils/http'
import {taskMarkAPI} from '@/utils/apiList'
export default {
    name: 'ShortCut',
    props:{
        btnText:String
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
            dialogData: {
                title:'快捷维护'
            },
            dialogFormVisible: false,
            form: {
                percentage: '',//任务完成百分比
                remark:'' //备注
            },
            formLableWidth: '130px'
        }
    },
    methods:{
        submitMsg(){
            post(taskMarkAPI,{
                taskId: this.rowId.id,
                completeRate: this.form.percentage,
                notes: this.form.remark
            }).then(res => {
                this.reload();
                console.log(res);
            }).catch(err => console.log(err));
            this.dialogFormVisible = false;
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
            width: 550px;
            border-radius: 10px;
            border: none;
            .el-dialog__header{
                height: 80px;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background:rgba(184,218,252,1);
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
            .el-dialog__body{
                height: 280px;
                display: flex;
                align-items: center;
                padding: 0;
                box-sizing: border-box;
                .el-form{
                    padding-left: 30px;
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .el-form-item{
                        margin-bottom: 0;
                        .el-form-item__label{
                            height: 50px;
                            line-height: 50px;
                            font-size: 16px;
                        }
                        .el-input__inner{
                            height: 50px;
                        }
                    }
                }
            }
            /deep/ .el-dialog__footer{
                padding: 0;
                height: 80px;
                .el-button{
                    border-radius: 10px;
                    width: 100px;
                    margin-right: 20px;
                }
                .el-button--primary{
                    background-color: #0066cc;
                }
            }
        }
        /deep/ .el-input__inner{
            height: 40px;
            border-radius: 10px;
            width: 300px;
        }
        /deep/ .el-textarea__inner{
            width: 300px;
            height: 100px;
            resize: none;
            border-radius: 10px;
        }
    }
    .tips{
        /deep/ .el-dialog{
            width: 400px;
            border-radius: 10px;
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