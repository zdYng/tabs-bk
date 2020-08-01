<template>
    <!-- 项目信息列表 -->
    <div class="pro-table">
        <el-table 
          class="tab-border-radius scroll-bar" 
          :data="list" 
          height="500px" 
          @row-click="handleRowClick"
          border style="width: 100%;">
            <el-table-column
              label="选择"
              width="55"
              align="center">
              <template slot-scope="scope">
                  <el-checkbox 
                    v-model="scope.row.checked"
                    @change.native="changeCurrentRow($event, scope.$index, scope.row)"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column
              type="index"
              width="50"
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
        this.list.forEach(item => {
            if(item.id == row.id){
                item.checked = true;
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
                   data[index].checked = true;
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
    width: 100%;
    /deep/ .el-table.tab-border-radius{
        border-radius: .052083rem;
        .el-table__header-wrapper{
            .el-table__header{
                .has-gutter{
                    font-family:Microsoft YaHei;
                    color: #000;
                    font-weight: 700;
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
                .el-table__row{
                    color:rgba(102,102,102,1);
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