<template>
    <div class="add-task">
        <el-button class="answer" :plain="taskBoardTable ? true : false"  type="text" @click="handleAnswerClick">回复</el-button>
        <el-dialog
          class="tips"
          :visible.sync="dialogFormVisible"
          center
          top="30vh">
          <el-input type="textarea" v-model="textareaValue" placeholder="请输入您回复的内容"></el-input>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="handleConfirm">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import { post } from '@/utils/http'
import { replyAPI } from '@/utils/apiList'
export default {
    name: 'Answer',
    computed:{
        taskBoardTable(){
            if(Object.keys(this.$store.state.taskBoardTable).length > 0){
                return this.$store.state.taskBoardTable
            }else{
                return false
            }
        }
    },
    inject:['reload'],
    data(){
        return {
            dialogFormVisible: false,
            textareaValue: ''
        }
    },
    methods:{
        handleAnswerClick(){
            if(!this.taskBoardTable){
                this.$message({
                    message: '请选中要回复的任务',
                    type: 'warning'
                })
            }else{
                this.dialogFormVisible = true;
                return this.dialogFormVisible
            }
        },
        handleConfirm(){
            post(replyAPI, {
                "taskId": this.taskBoardTable.id,
                "operator": '前端幼托园',
                "notes": this.textareaValue
            }).then(res => {
                console.log(res);
                this.reload();
            }).catch(err => console.log(err));
            this.dialogFormVisible = false;
            return this.dialogFormVisible
        }
    }
}
</script>
<style lang="less" scoped>
.add-task{
    .answer{
        width: 80px;
        height: 30px;
        padding: 0;
        background-color: #fff;
        border: 1px solid #0066cc;
        color: #0066cc;
        border-radius: 10px;
        font-size: 16px;
    }
    .tips{
        /deep/ .el-dialog{
            width: 350px;
            border-radius: 10px;
            .el-dialog__header{
                padding: 0;
            }
            .el-dialog__body{
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: 20px 20px;
                .el-textarea{
                    .el-textarea__inner{
                        height: 150px;
                        resize: none;
                        color: #333;
                        border: none;
                    }
                    .el-textarea__inner::placeholder{
                        font-weight: 100;
                        color: #d3d3d3;
                    }
                }
            }
            /deep/ .el-dialog__footer{
                padding: 0;
                border-top: 1px solid #0066cc;
            }
            /deep/ .dialog-footer{
                display: flex;
                .confirm-btn{
                    width: 50%;
                    height: 40px;
                    background-color: #0066cc;
                    border: none;
                    outline: none;
                    color: #fff;
                    font-size: 14px;
                    border-bottom-left-radius: 8px;
                }
                .cancel-btn{
                    width: 50%;
                    height: 40px;
                    background-color: #fff;
                    border: none;
                    outline: none;
                    color: #0066cc;
                    font-size: 14px;
                    border-bottom-right-radius: 10px;
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