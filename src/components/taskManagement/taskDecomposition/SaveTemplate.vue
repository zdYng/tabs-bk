<template>
<!-- 任务分解页面下的保存模版弹窗 -->
    <div class="save-template">
        <el-button type="text" @click="dialogFormVisible = true">保存模版</el-button>
        <el-dialog 
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="20vh"
          :title="dialogData.title">
          <el-form :model="form">
              <el-form-item 
              label="模版名称"
              :label-width="formLableWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="模版类型" :label-width="formLableWidth">
                  <el-select v-model="form.region" placeholder="选择模版类型">
                      <el-option 
                        v-for="item in selectItem"
                        :label="item.label"
                        :value="item.value"
                        :key="item.id">
                      </el-option>
                  </el-select>
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
    name: 'SaveModelDialog',
    data(){
        return {
            dialogData: {
                title:'保存模版'
            },
            selectItem:[
                {
                    id: 1,
                    lable: '类型1',
                    value: '菜单类型'
                },
                {
                    id: 2,
                    lable: '类型2',
                    value: '按钮类型'
                }
            ],
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
            formLableWidth: '80px'
        }
    }
}
</script>
<style lang="less" scoped>
.save-template{
    /deep/ .el-button{
        span{
            font-size: 14px;
        }
    }
    /deep/ .custom-dialog{
        .el-dialog{
            width: 550px;
            border-radius: 15px;
            .el-dialog__header{
                padding: 0;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                background:rgba(184,218,252,1);
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
            /deep/ .el-dialog__body{
                padding: 0;
                height: 350px;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                .el-form{
                    padding-left: 40px;
                    .el-input__inner{
                        width: 350px;
                        height: 50px;
                        border-radius: 10px;
                    }
                    .el-form-item{
                        .el-textarea__inner{
                            width: 350px;
                            height: 100px;
                            resize: none;
                            border-radius: 10px;
                        }
                    }
                }
            }
            .el-dialog__footer{
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
    }
}
</style>