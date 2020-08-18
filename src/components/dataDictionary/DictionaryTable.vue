<template>
  <div class="dictonary-table">
    <el-table
      :data="treeData"
      border>
      <el-table-column
        label="选择"
        width="100"
        align="center">
        <template slot-scope="scope">
          <el-checkbox
           v-model="scope.row.checked"
           @change.native="changeCurrentRow($event, scope.$index, scope.row)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        prop="dictionary_name"
        label="字典项名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="dictionary_unit"
        label="字典项单位"
        width="200">
      </el-table-column>
      <el-table-column
        prop="dictionaryStatus"
        label="启用状态"
        width="200">
      </el-table-column>
      <el-table-column
        prop="dictionaryRemark"
        label="备注"
        width="200">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { post } from '../../utils/http'
import { termDicAPI } from '../../utils/apiList';
export default {
  name: 'DictionaryTable',
  props:{
    // treeData: Array
  },
  computed:{
    dictionaryTreeData(){
        return this.$store.state.dictionaryTreeData
    }
  },
  watch:{
    dictionaryTreeData: function(newVal, oldVal){
      post(termDicAPI, Number(newVal.id)).then(res => {
        res.data.forEach(item => {
          item.checked = false;
        });
        console.log(res.data);
        this.treeData = res.data;
      }).catch(err => console.log(err));
    }
  },
  data(){
    return {
        treeData:[],
        currentRow: {}
    }
  },
  methods:{
    changeCurrentRow(val, rowIndex, row){
      const data = this.treeData;
      for(let index in this.treeData){
        if(index == rowIndex){
          data[index].checked = true;
        }else{
          data[index].checked = false;
        }
      }
      this.treeData = data;
      this.currentRow = row
    }
  }
}
</script>
<style lang="less" scoped>
.dictonary-table{
  width: 1001px;
  margin-left: 130px;
  margin-top: 20px;
  box-sizing: border-box;
}
</style>