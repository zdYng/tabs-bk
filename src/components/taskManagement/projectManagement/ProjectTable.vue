<template>
    <!-- 项目信息列表 -->
    <div class="pro-table">
        <el-table 
          class="tab-border-radius scroll-bar" 
          :data="list" 
          height="500px"
          highlight-current-row
          @row-click="handleRowClick"
          border style="width: 100%;">
            <el-table-column
              label="选择"
              width="70"
              align="center">
              <template slot-scope="scope">
                  <el-checkbox 
                    v-model="scope.row.checked"
                    @change.native="changeCurrentRow($event, scope.$index, scope.row)"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column
              type="index"
              width="70"
              align="center"
              label="序号">
            </el-table-column>
            <el-table-column
              v-for="item in itemOptions"
              :key="item.id"
              :label="item.title"
              :prop="item.key"
              align="center"
              :width="item.width">
              </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'ProjectTable',
    props:{
        list: Array,
        itemOptions: Array,
        chooseData: Object
    },
    data(){
        return{
            multipleSelection: null,
            currentRow: {}
        }
    },
    methods:{
        // 当点击列表的某行执行的函数
       handleRowClick(row, column, event){
        console.log(row);
        this.list.forEach(item => {
            if(item.id == row.id){
                item.checked = !item.checked;
            }else{
                item.checked = false;
            }
            this.currentRow = row;
        });
        this.$store.dispatch('setProjectMaintainRowData', row);
       },
       changeCurrentRow(val, rowIndex, row){
           const data = this.list;
           for(let index in data){
               if(index == rowIndex){
                   data[index].checked = !data[index].checked;
               }else{
                   data[index].checked = false;
               }
           }
           this.list = data;
           this.currentRow = row;
       }
    }
}
</script>
<style lang="less" scoped>
.pro-table{
    width: 1687px;
    /deep/ .el-table.tab-border-radius{
        border-radius: .052083rem;
        .el-table__header-wrapper{
            .el-table__header{ 
                .has-gutter{
                    font-family:Microsoft YaHei;
                    color: #000;
                    font-weight: 700;
                    tr{
                        th{
                            background-color: #fafafa;
                        }
                    }
                }
                thead{
                    .el-table-column--selection{
                        .cell{
                            display: none;
                        }
                    }
                }
            }
        }
        .el-table__body-wrapper{
            .el-table__body{
                .el-table__row, .current-row{
                    height: 40px;
                    color:rgba(102,102,102,1);
                    td{
                        height: 40px;
                        padding: 0;
                        div{
                            height: 20px;
                            font-size: 13px;
                            font-weight: 200;
                            color: #666;
                            font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif; 
                        }
                    }
                }
            }
        }
        .el-table__body-wrapper::-webkit-scrollbar{
            display: none;
        }
        .el-radio__label{
           margin-left: 30px;
        }
    }
}
</style>
<style scoped>
.pro-table{
    width: 100%;
}
.tab-border-radius{
    
}
>>> .el-table__header .has-gutter{
    /* color:rgba(51,51,51,1); */
    
}
>>> .el-table__row{
    

}
</style>