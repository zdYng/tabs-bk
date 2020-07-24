<template>
    <div class="fix-table">
        <el-table
          :data="projectData"
          style="width: 150"
          row-key="id"
          lazy
          :load="load"
          highlight-current-row
          @row-click="handleRowClick"
          :default-expand-all="false"
          :tree-props="{children: 'taskInfo', hasChildren: 'parent'}">
          <el-table-column
            label="任务名称"
            width="200"
            align="center"
            prop="name">
          </el-table-column>
          <el-table-column
            label="负责人"
            width="80"
            align="center"
            prop="principal">
          </el-table-column>
          <el-table-column
            label="任务周期"
            align="center"
            width="180"
            prop="planCycle">
          </el-table-column>
          <el-table-column
            label="当前完成百分比"
            width="120"
            align="center"
            prop="percentage">
          </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { deepQuery } from '../../Function/commonFunction'
import {get} from '../../../utils/http'
import {queryTaskTreeAPI, quertTaskInfoAPI} from '../../../utils/apiList'
export default {
    name: 'FixTableTree',
    data(){
        return {
            projectData:[],
            taskInfoData:[],
            lazyData: []

        }
    },
    mounted(){
        get(queryTaskTreeAPI).then(res => {
            this.projectData = res.project;
            this.taskInfoData = res.project;
            this.projectData.forEach(item => {
                item.id = '0_' + item.id;
            })
        })
    },
    methods:{
        // 拿到点击列表每一项的数据，然后然后后面的数据
        getItemId(e){
            let id = e.target.getAttribute('data-id');
            let findObj = deepQuery(this.tableData, Number(id));
            get(quertTaskInfoAPI, {"id": id}).then(res => {
                // console.log(res);
            })
        },
        // 树形数据懒加载
        load(tree, treeNode, resolve){
            console.log(tree.id);
            get(queryTaskTreeAPI, { "id": tree.id, "flag": tree.level})
              .then(res => {
                  console.log(res);
                  let taskInfo = res.taskInfo;
                  if(res.code == '000'){
                      res.task.forEach((item, index) => {
                        item.id = item.level + '_' + item.id;
                        if(taskInfo.length > 0){
                            item.percentage = taskInfo[index].percentage;
                            item.planCycle = taskInfo[index].planCycle;
                            item.principal = taskInfo[index].principal;
                        }else {
                            item.percentage = '';
                            item.planCycle = '';
                            item.principal = '';
                        }
                    })
                    resolve(res.task);
                  }
              })    
        },
        // 表格当某一行被点击时会触发该事件
        handleRowClick(row, column, event){
            let str = row.id;
            this.$store.dispatch('setTaskRowId', {
                "id": str.substring(str.indexOf('_') + 1),
                "flag": row.level
                }
            )
        }
    }
}
</script>
<style lang="less" scoped>
.fix-table{
    // margin-left: .15625rem;
    width: 100%;
    height: 93%;
    overflow: hidden;
    overflow-y: scroll;
    .el-table{
        /deep/ .el-table__header{
            .has-gutter{
                font-family:Microsoft YaHei;
                color: #000;
                .is-leaf{
                    background:rgba(249,252,255,1);
                }
            }
        }
        /deep/ .el-table__row{
            color:rgba(102,102,102,1); 
            td{
                border-bottom: none;
            }
        }
    }
    /deep/ .el-table::before{
        height: 0;
    }
}
.fix-table::-webkit-scrollbar{
    display: none;
}
</style>