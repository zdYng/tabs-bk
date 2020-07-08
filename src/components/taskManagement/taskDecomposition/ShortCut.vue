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
            formLableWidth: '120px'
        }
    }
}
</script>
<style lang="less" scoped>
.short-cut{
    .custom-dialog{
        /deep/ .el-dialog{
            width: 2.604167rem;
            border-radius: .078125rem;
            .el-dialog__header{
                background:rgba(184,218,252,1);
                border-top-left-radius: .078125rem;
                border-top-right-radius: .078125rem;
            }
            .dialog-footer{
                .el-button{
                    border-radius: .052083rem;
                    width: 100px;
                    margin-right: .104167rem;
                }
                .el-button--primary{
                    background-color: #0066cc;
                }
            }
        }
        /deep/ .el-input__inner{
            height: .208333rem;
            border-radius: .052083rem;
            width: 1.5625rem;
        }
        /deep/ .el-textarea__inner{
            width: 1.5625rem;
            height: .520833rem;
            resize: none;
            border-radius: .052083rem;
        }
    }
}
</style>