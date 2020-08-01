<template>
<!-- 调整项目阶段弹窗 -->
    <div class="ProInfoMaintainDialog">
        <el-button class="btn-text" type="text" @click="dialogFormVisible = true">调整项目阶段</el-button>
        <el-dialog 
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="20vh"
          :title="dialogData.title">
          <el-form :model="form">
              <el-form-item>
                <div class="pro-stage">
                    <span>项目阶段</span>
                    <el-select v-model="form.name" autocomplete="off"></el-select>
                </div>
              </el-form-item>
              <el-form-item>
                  <div class="date">
                      <DatePicker text="实际开始时间" placeholder="请选择日期"/>
                      <DatePicker text="实际结束时间" placeholder="请选择日期"/>
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
              <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
              <el-button @click="dialogFormVisible = false">取消</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'ProInfoMaintainDialog',
    props:{
        btnText: String
    },
    data(){
        return {
            dialogData: {
                title:'项目进度维护'
            },
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                remark:''
            },
            formLableWidth: '130px'
        }
    },
    components:{
        DatePicker: () => import('../../common/DatePicker')
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
            font-size: 16px;
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
            width: 440px;
            height: 100px;
            resize: none;
            border-radius: 10px;
        }
    }
}
</style>