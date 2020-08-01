<template>
    <div class="add-task">
        <el-button type="text" @click="addTaskClick">{{btnText}}</el-button>
        <el-dialog
          v-if="isShow"
          class="tips"
          :visible.sync="dialogFormVisible"
          center
          top="30vh">
          <span>请选中需要添加的任务</span>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="dialogFormVisible = false">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import { post } from '@/utils/http'
import { addTaskAPI } from '@/utils/apiList'
export default {
    name: 'AddTask',
    props:{
        btnText: String
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
            dialogFormVisible: false
        }
    },
    methods:{
        addTaskClick(){
            if(this.rowId){
                this.isShow = false;
                // 区分两种情况，一种是在项目下新增任务
                if(this.rowId.flag == 0){
                    post(addTaskAPI, {
                        projectId: this.rowId.id,
                        level: this.rowId.flag + 1,
                        taskName: '新增任务',
                        flag: 1
                    }).then(res => {
                        this.reload();
                        console.log(res);
                    }).catch(err => console.log(err));
                }else{
                    // 一种是在任务同层级新增任务
                    post(addTaskAPI, {
                        projectId: this.rowId.projectId,//这个project是实际的项目id
                        parentId: this.rowId.id,
                        level: this.rowId.flag,
                        taskName: '新增任务',
                        flag: 1
                    }).then(res => {
                        this.reload();
                        console.log(res);
                    }).catch(err => console.log(err));
                }
            }else {
                this.isShow = true;
            }
            this.dialogFormVisible = true;
            return this.dialogFormVisible
        }
    }
}
</script>
<style lang="less" scoped>
.add-task{
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