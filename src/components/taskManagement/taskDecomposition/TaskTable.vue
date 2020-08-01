<template>
    <div class="source">
        <div>
            <el-table
              :data="tabList"
              style="width: 100%"
              height="350"
              border
              current-row-key
              @row-click="handleRowClick">
              <el-table-column
                label="选择"
                width="50"
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
                width="50"
                align="center">
              </el-table-column>
              <el-table-column
                prop="createTime"
                label="维护时间"
                align="center"
                width="160">
              </el-table-column>
              <el-table-column
                prop="principal"
                label="维护人"
                align="center"
                width="80">
              </el-table-column>
              <el-table-column
                prop="percentage"
                label="任务完成百分比"
                align="center"
                width="150">
              </el-table-column>
              <el-table-column
                label="任务完成内容"
                width="374.5">
                <template slot-scope="scope">
                    <ul v-if="scope.row.content">
                        <li v-for="(item, index) in scope.row.content" :key="index">
                            <span class="operator">{{item.operator}}</span>
                            <span v-if="item.createTime">({{item.createTime}})</span>
                            <span>:&nbsp;{{item.notes}}</span>
                        </li>
                    </ul>
                </template>
              </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { get } from '@/utils/http'
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
    mounted(){

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
            font-size: 12px;
            overflow:hidden;
            .el-table__header-wrapper{
                .el-table__header{
                    font-size: 14px;
                    .has-gutter{
                        color: #000;
                        font-weight: 800;
                        th{
                            text-align: center;
                        }
                    }
                }
            }
            .operator{
                color: #666;
                font-weight: 500;
                font-size: 12px;
            }
        }
    }
}
</style>