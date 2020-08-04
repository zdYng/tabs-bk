<template>
    <div class="add-task">
        <el-button type="text" @click="addTaskClick">{{btnText}}</el-button>
        <el-dialog
          v-if="isShow"
          class="tips"
          :visible.sync="dialogFormVisible"
          center
          top="30vh">
          <span>请选中需要添加的子任务</span>
          <div slot="footer" class="dialog-footer">
              <button class="confirm-btn" type="primary" @click="dialogFormVisible = false">确&nbsp;定</button>
              <button class="cancel-btn" @click="dialogFormVisible = false">取&nbsp;消</button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import { post, get } from '@/utils/http'
import { addTimeSheet, listTree } from '@/utils/apiList'
export default {
    name: 'TaskBtn',
    props:{
        btnText: String
    },
    computed:{
        mainHourData(){
            if(Object.keys(this.$store.state.mainHourNodeData).length > 0){
                return this.$store.state.mainHourNodeData
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
            if(this.mainHourData){
                console.log(this.mainHourData);
                this.isShow = false;
                post(addTimeSheet, {
                    "parentId": this.mainHourData.id,
                    "level": this.mainHourData.level + 1,
                    "laborName": '新增子任务',
                    "flag": 1
                }).then(res => {
                    console.log(res);
                    this.reload();
                }).catch(err => console.log(err));    
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