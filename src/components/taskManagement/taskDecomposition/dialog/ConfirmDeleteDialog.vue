<template>
<!-- 新增分组按钮弹窗 -->
    <div class="short-cut">
        <el-button type="text" @click="handleDeleteClick">{{btnText}}</el-button>
        <el-dialog 
          class="tips"
          :visible.sync="dialogFormVisible"
          center
          top="30vh">
          <span v-if="rowId">您确认删除?</span>
          <span v-else>请选中要删除的项</span>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="confirmDelete">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import { get } from '@/utils/http'
import { deleteByIdAPI, taskDeleteAPI } from '@/utils/apiList'
export default {
    name: 'ConfirmDeleteDialog',
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
        handleDeleteClick(){
            if(this.rowId){
                this.isShow = false;
            
            }else{
                this.isShow = true;
            }
            this.dialogFormVisible = true;
            return this.dialogFormVisible
        },
        confirmDelete(){
            if(this.rowId){
                if(this.rowId.flag == 0){
                    get(deleteByIdAPI, {"id": this.rowId.id})
                    .then(res => {
                        this.reload();
                        console.log(res);
                    }) 
                    .catch(err => console.log(err));
                }else{
                    console.log(this.rowId);
                    get(taskDeleteAPI, {"id": Number(this.rowId.id)})
                        .then(res => {
                            this.reload();
                            console.log(res);
                        })
                        .catch(err => console.log(err));
                }
                
            }
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
            width: 400px;
            border-radius: 10px;
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