<template>
    <div class="source">
        <div>
            <el-table
              :data="tabList"
              style="width: 100%"
              height="250"
              border
              current-row-key
              @row-click="handleRowClick">
              <el-table-column
                label="选择"
                width="100"
                align="center">
                <template slot-scope="scope">
                    <el-checkbox
                      v-model="scope.row.checked"
                      @change.native="changeCurrentRow(event, scope.$index, scope.row)"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column 
                type="index"
                label="序号"
                width="150"
                align="center">
              </el-table-column>
              <el-table-column
                prop="createTime"
                label="维护时间"
                align="center"
                width="250">
              </el-table-column>
              <el-table-column
                prop="principal"
                label="维护人"
                align="center"
                width="170">
              </el-table-column>
              <el-table-column
                prop="percentage"
                label="任务完成百分比"
                align="center"
                width="195">
              </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TaskTable',
    props:{
        tabList:Array,
    },
    data(){
        return {
            multipleSelection: {},
            currentRow:{}
        }
    },
    methods:{
        handleRowClick(row, column, event){
            if(row.checked){
                // 判断是否选中，然后接下来写功能
            }
        },
        changeCurrentRow(val, rowIndex, row){
            const data = this.tabList;
            for(let index in this.tabList){
               if(index == rowIndex){
                   data[index].checked = true;
               }else{
                   data[index].checked = false;
               }
            }
            this.tabList = data;
            this.currentRow = row;
        }
    }
}
</script>
<style lang="less" scoped>
.source{
    div{
        /deep/ .el-table{
            overflow:hidden;
            .el-table__header-wrapper{
                .el-table__header{
                    .has-gutter{
                        color: #000;
                        font-weight: 800;
                    }
                }
            }
        }
    }
}
</style>