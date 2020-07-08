<template>
<!-- 任务分解页面下的保存模版弹窗 -->
    <div class="save-template">
        <el-button type="text" @click="dialogFormVisible = true">保存模版</el-button>
        <el-dialog 
          class="custom-dialog"
          :visible.sync="dialogFormVisible"
          center
          top="30vh"
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
<style scoped>
>>> .custom-dialog{
    
}
>>> .custom-dialog .el-dialog{
    width: 2.604167rem;
    border-radius: .078125rem;
}
>>> .custom-dialog .el-dialog .el-dialog__header{
    background:rgba(184,218,252,1);
    border-top-left-radius: .078125rem;
    border-top-right-radius: .078125rem;
}
>>> .el-input__inner{
    height: .15625rem;
    border-radius: .052083rem;
    width: 1.5625rem;
}
>>> .el-textarea__inner{
    width: 1.5625rem;
    height: .416667rem;
    resize: none;
    border-radius: .052083rem;
}
>>> .custom-dialog .el-dialog .dialog-footer .el-button{
    border-radius: .052083rem;
    width: 100px;
    margin-right: .104167rem;
}
>>> .custom-dialog .el-dialog .dialog-footer .el-button--primary{
    background-color: #0066cc;
}
</style>