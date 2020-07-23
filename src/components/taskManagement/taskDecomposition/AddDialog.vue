<template>
    <div class="add-dialog">
        <el-button type="text" @click="dialogFormVisible = true">新增分组</el-button>
        <el-dialog 
          class="custom-dialog"
          :visible.sync="true"
          center
          top="30vh"
          title="新增分组">
          <el-form :model="form">
              <el-form-item 
              label="新增分组"
              :label-width="formLableWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button type="primary">确定</el-button>
              <el-button>取消</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'AddDialog',
    props:{
        labelName: String
    },
    data(){
        return {
            form:{
                name: ''
            },
            formLableWidth: '130px'
        }
    }
}
</script>
<style lang="less" scoped>

</style>