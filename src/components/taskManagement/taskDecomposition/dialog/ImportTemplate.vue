<template>
    <div class="import-template">
        <el-button type="text" @click="dialogFormVisible = true">导入模版</el-button>
        <el-dialog
          class="custom-dialog"
          top="30vh"
          center
          :visible.sync="dialogFormVisible"
          :title="title">
            <el-form :model="form">
                <el-form-item
                  :label-width="formLableWidth"
                  label="模版选择:">
                    <el-select v-model="form.region">
                      <el-option 
                        v-for="item in selectItem"
                        :label="item.label"
                        :value="item.value"
                        :key="item.id">
                      </el-option>
                    </el-select>
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
    name: 'ImportTemplate',
    data(){
        return {
            title:'导入模版',
            dialogFormVisible: false,
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
            form:{
                name: '',
                region: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                remark:''
            },
            formLableWidth: '100px'
        }
    }
}
</script>
<style lang="less" scoped>
.import-template{
    /deep/ .el-button{
        span{
            font-size: 14px;
        }
    }
    /deep/ .custom-dialog{
        .el-dialog{
            width: 500px;
            height: 300px;
            border-radius: 10px;
            .el-dialog__header{
                background:rgba(184,218,252,1);
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
            /deep/ .el-dialog__body{
                height: 150px;
                display: flex;
                align-items: center;
                padding: 0;
                .el-form{
                    padding-left: 20px;
                    display: flex;
                    align-items: center;
                    .el-form-item{
                        margin-bottom: 0;
                        .el-form-item__label{
                            height: 50px;
                            font-size: 16px;
                            line-height: 50px;
                        }
                        .el-input__inner{
                            width: 300px;
                            height: 50px;
                        }
                    }
                }
                
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
    }
    /deep/ .el-input__inner{
        height: .15625rem;
        border-radius: .052083rem;
        width: 1.5625rem;
    }
}
</style>