<template>
    <div class="short-cut">
        <el-button type="text" @click="dialogFormVisible = true">{{btnText}}</el-button>
        <el-dialog 
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="30vh"
          :title="title">
          <span>确认删除？</span>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="dialogFormVisible = false">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'ConfirmDeleteDialog',
    props:{
        btnText:String,
    },
    data(){
        return {
            dialogFormVisible: false,
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