<template>
<!-- 调整项目阶段弹窗 -->
    <div class="ProInfoMaintainDialog">
        <el-button class="btn-text" type="text" @click="dialogFormVisible = true">调整项目阶段</el-button>
        <el-dialog
          v-if="this.projectMaintainRowData" 
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="20vh"
          :title="dialogData.title">
          <el-form :model="form">
              <el-form-item>
                <div class="pro-stage">
                    <span>项目阶段</span>
                    <el-select v-model="form.projectStageId" autocomplete="off">
                        <el-option
                          v-for="item in proStageOptions"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                    </el-select>
                </div>
              </el-form-item>
              <el-form-item>
                  <div class="date">
                      <DatePicker 
                        text="实际开始时间" 
                        placeholder="请选择日期" />
                      <DatePicker 
                        text="实际结束时间" 
                        placeholder="请选择日期" />
                  </div>
              </el-form-item>
              <el-form-item>
                  <div class="text-area">
                    <span>备注</span>
                    <el-input type="textarea" v-model="form.remark" autocomplete="off"></el-input>
                  </div>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" @click="handleSubmitClick">确定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取消</button>
          </div>
        </el-dialog>
        <el-dialog
          v-else
          class="tips"
          :visible.sync="dialogFormVisible"
          center
          top="30vh">
          <span>请选中要维护的项目</span>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="dialogFormVisible = false">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import {post} from '@/utils/http'
import {updateStageAPI} from '@/utils/apiList'
export default {
    name: 'ProInfoMaintainDialog',
    props:{
        btnText: String,
        proStageOptions: Array
    },
    inject: ['reload'],
    data(){
        return {
            dialogData: {
                title:'项目进度维护'
            },
            dialogFormVisible: false,
            form: {
                projectStageId: '',
                remark:'',
                actualStartTime: '',
                actualEndTime: '',
            },
            formLableWidth: '130px',
        }
    },
    computed:{
        projectMaintainRowData(){
            if(Object.keys(this.$store.state.projectMaintainRowData).length > 0){
                return this.$store.state.projectMaintainRowData
            }else{
                return false
            }
        }
    },
    components:{
        DatePicker: () => import('../../common/DatePicker')
    },
    methods:{
        // 获取更改后的实际开始日期
        getStartDate(date){
            console.log(date);
            this.form.actualStartTime = date;
        },
        // 获取更改后的实际结束时间
        getEndDate(date){
            console.log(date);
            this.form.actualEndTime = date;
        },
        //点击确认提交项目调整阶段信息
        handleSubmitClick(){
            post(updateStageAPI, {
                id: this.projectMaintainRowData.id,
                projectStageId: this.form.projectStageId,
                projectDesc: this.form.remark
            }).then(res => {
                console.log(res);
            }).catch(err => console.log(err));
            this.dialogFormVisible = false;
            this.reload();
        }
    }
}
</script>
<style lang="less" scoped>
.ProInfoMaintainDialog{
    /deep/ .el-button{
        border: 1px solid #0066cc;
        border-radius: 10px;
        padding: 0 15px;
        height: 30px;
        margin-left: 20px;
        span{
            font-size: 14px;
            color: #0066cc;
        }
    }
    .custom-dialog{
        /deep/ .el-dialog{
            width: 600px;
            border-radius: 15px;
            .el-dialog__header{
                height: 80px;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background:rgba(184,218,252,1);
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
            .el-dialog__body{
                height: 400px;
                display: flex;
                align-items: center;
                padding: 0;
                box-sizing: border-box;
                .el-form{
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 30px 0;
                    /deep/ .el-form-item{
                        margin-bottom: 0;
                        .pro-stage{
                            display: flex;
                            flex-direction: column;
                            margin-left: 50px;
                        }
                        .date{
                            display: flex;
                            margin-left: 50px;
                            .date-picker{
                                margin-right: 20px;
                                .title{
                                    font-size: 14px;
                                    padding-bottom: 0;
                                }
                            }
                        }
                        .text-area{
                            margin-left: 50px;
                        }
                        .el-form-item__content{
                            display: flex;
                        }
                        .el-form-item__label{
                            height: 50px;
                            line-height: 50px;
                            font-size: 16px;
                        }
                        .el-input__inner{
                            width: 200px;
                            height: 50px;
                        }
                    }
                }
            }
            /deep/ .el-dialog__footer{
                padding: 0;
                height: 80px;
                .dialog-footer{
                    .confirm-btn{
                        border: 1px solid #0066cc;
                        border-radius: 10px;
                        padding: 0 15px;
                        height: 30px;
                        margin-left: 20px;
                        background-color: #0066cc;
                        color: #fff;
                        outline: none;
                    }
                    .cancel-btn{
                        border: 1px solid #0066cc;
                        border-radius: 10px;
                        padding: 0 15px;
                        height: 30px;
                        margin-left: 20px;
                        color: #0066cc;
                        background-color: #fff;
                        outline: none;
                    }
                }
            }
        }
        /deep/ .el-input__inner{
            height: 40px;
            border-radius: 10px;
            width: 300px;
        }
        /deep/ .el-textarea__inner{
            width: 440px;
            height: 100px;
            resize: none;
            border-radius: 10px;
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