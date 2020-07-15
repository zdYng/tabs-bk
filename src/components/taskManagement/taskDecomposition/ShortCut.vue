<template>
<!-- 任务分解页面下的快捷维护弹窗 -->
    <div class="short-cut">
        <el-button type="text" @click="dialogFormVisible = true">快捷维护</el-button>
        <el-dialog 
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="30vh"
          :title="dialogData.title">
          <el-form :model="form">
              <el-form-item 
              label="任务完成百分比"
              :label-width="formLableWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注" :label-width="formLableWidth">
                  <el-input type="textarea" v-model="form.remark" autocomplete="off"></el-input>
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
    name: 'ShortCut',
    data(){
        return {
            dialogData: {
                title:'快捷维护'
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
}
</style>