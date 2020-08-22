<template>
  <div class="dictonary-table">
    <el-table
      height="250px"
      :data="treeData"
      border
      @row-click="handleRowClick"
      highlight-current-row>
      <el-table-column
        label="选择"
        width="50"
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
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="dictionary_unit"
        label="字典项单位"
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="dictionaryStatus"
        label="启用状态"
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="dictionaryRemark"
        label="备注"
        width="250"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        width="150"
        align="center">
        <template slot-scope="scope">
            <span class="row-delete-btn" @click.stop="handleDelete(scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { post } from '../../utils/http'
import { termDicAPI, dictionaryDeletetAPI } from '../../utils/apiList';
export default {
  name: 'DictionaryTable',
  inject: ['reload'],
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
          data[index].checked = !data[index].checked;
        }else{
          data[index].checked = false;
        }
      }
      this.treeData = data;
      this.currentRow = row
    },
    handleRowClick(row, column, event){
      this.treeData.forEach(item => {
        if(item.dictionaryID == row.dictionaryID){
          item.checked = !item.checked;
        }else{
          item.checked = false;
        }
      });
      if(row.checked){
        // 对上面的输入框数据进行填充
        this.$store.dispatch('setDictionaryItem', row);
      }else{
        // 对上面的输入框数据进行清空
        let data = {};
        for(let key in row){
          data[key] = null;
        }
        this.$store.dispatch('setDictionaryItem', data);
      }
    },
    // 表格中点击删除按钮触发
    handleDelete(row){
      console.log(row);
      post(
        dictionaryDeletetAPI,
        {
          id: row.dictionaryID
        }
      ).then(res => {
        console.log(res);
        this.reload();
      }).catch(err => console.log(err));
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
  /deep/ .el-table{
    .el-table__header-wrapper{
      .el-table__header{
        .has-gutter{
          tr{
            th{
              color: #333;
            }
          }
        }
      }
    }
    .el-table__body-wrapper{
      .el-table__row{
        .row-delete-btn{
          // width: 50px;
          // border: none;
          font-size: 13px;
          // background-color: #fff;
          color: #0066cc;
          // outline: none;
        }
      }
    }
  }
}
</style>