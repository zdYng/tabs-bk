<template>
<!-- 日志管理页面 -->
    <div class="logo-maintain">
        <div class="logo-top">
          <div class="search-group">
            <InputBox @inputChange="getPrincipalChange" placeholder="人员" />
            <DatePicker 
              @datePickerChange='getDateTimeChange' 
              placeholder="时间" />
            <button @click="searchClick" class="search-btn">查询</button>
          </div>
          <!-- <button class="add-remark">新增备注</button> -->
          <div class="dialog">
            <el-button class="add-remark" type="text" @click="dialogFormVisible = true">新增备注</el-button>
            <el-dialog
              class="custom-dialog"
              :visible.sync="dialogFormVisible"
              center
              top="20vh"
              title="新增备注">
              <el-row>
                <div class="select-box">
                  <span class="title">状态:</span>
                  <el-select @change="handleSelectChange" v-model="status" placeholder="请选择">
                    <el-option label="已处理" value="1"></el-option>
                    <el-option label="未处理" value="0"></el-option>
                  </el-select>
                </div>
              </el-row>
              <el-row>
                <div class="textareat-box">
                  <span class="title">备注:</span>
                  <el-input @change="handleRemarkChange" v-model="remark" type="textarea"></el-input>
                </div>
              </el-row>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirmBtn">确定</el-button>
                <el-button @click="dialogFormVisible = false">取消</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
        <!-- 日志管理的表格 -->
        <div class="log-table">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              height="600"
              @row-click="handleRowClick">
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
                prop="principal"
                label="人员"
                align="center"
                width="150">   
              </el-table-column>
              <el-table-column
                prop="createTime"
                label="时间"
                align="center"
                width="250">   
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态"
                align="center"
                width="150">   
              </el-table-column>
              <el-table-column
                prop="operator"
                label="处理人"
                align="center"
                width="150">   
              </el-table-column>
              <el-table-column
                prop="updateTime"
                label="处理时间"
                align="center"
                width="250">   
              </el-table-column>
              <el-table-column
                prop="notes"
                label="备注"
                align="center"
                width="528">   
              </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { get, post } from '@/utils/http'
import { queryLogAPI, addNotesAPI } from '@/utils/apiList'
export default {
    name: 'LogoMaintain',
    data(){
        return {
            tableData:[],
            currentRow:{},
            person: '', //人员
            time: '',//时间
            dialogFormVisible: false,
            status: '',// 新增备注弹窗的下拉状态值
            remark: '', //新增备注弹窗的备注框的值
        }
    },
    components:{
        InputBox: () => import('../../common/InputBox'),
        DatePicker: () => import('../../common/DatePicker')
    },
    created(){
      get(queryLogAPI).then(res => {
        this.tableData = res.data.map((item) => {
          // console.log(item);
          if(item.status){
            item.status = '已处理';
          }else{
            item.status = '未处理';
          }
          item.checked = false;
          return item
        });
      }).catch(err => console.log(err));
    },
    methods:{
      // 点击列表行获取的行数据
      handleRowClick(row, col, event){
        this.tableData.forEach(item => {
          if(row.id == item.id){
            item.checked = true;
          }else{
            item.checked = false;
          }
        })
        this.currentRow = row;
      },
      // 点击选择框触发的事件
      changeCurrentRow(val, rowIndex, row){
        const data = this.tableData;
        for(let index in data){
          if(index == rowIndex){
            data[index].checked = true;
          }else{
            data[index].checked = false;
          }
        }
        // console.log(data);
        this.tableData = data;
        this.currentRow = row;
      },
      // 人员搜索框变化触发的事件
      getPrincipalChange(val){
        this.person = val;
      },
      // 时间选择器变化触发的事件
      getDateTimeChange(date){
        this.time = date;
      },
      //点击查询按钮触发事件
      searchClick(){
        get(queryLogAPI, {
          principal: this.person,
          updateTime: this.time
        }).then(res => {
          console.log(res);
          this.tableData = res.data.map(item => {
            if(item.status){
              item.status = '已处理';
            }else{
              item.status = '未处理';
            }
              item.checked = false;
            return item
            });
        }).catch(err => {console.log(err)});
      },
      // 新增备注弹窗点击下拉框后change触发的事件
      handleSelectChange(){
        console.log(this.status);
      },
      // 新增备注弹窗备注输入框change的值
      handleRemarkChange(){
        console.log(this.remark);
      },
      // 新增备注弹窗点击确定按钮
      confirmBtn(){
        post(addNotesAPI, {
           "taskId": this.currentRow.taskId,
           "operator": '当前登录用户',
           "status":  Number(this.status),
           "notes": this.remark
        }).then(res => {
          console.log(res);
        }).catch(err => console.log(err));
        this.dialogFormVisible = false;
        return this.dialogFormVisible
      }
    }
}
</script>
<style lang="less" scoped>
.logo-maintain{
    width: 100%;
    height: 100%;
    .logo-top{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .search-group{
          display: flex;
          /deep/ .input-box{
              margin-left: 20px;
              .el-input__inner{
                width: 180px;
              }
          }
          /deep/ .date-picker{
            margin-left: 20px;
            width: 200px;
            .el-input{
              width: 180px;
              .el-input__inner{
                width: 180px;
              }
            }
            
          }
          .search-btn{
              width: .416667rem;
              height: 35px;
              background-color: #fff;
              border-radius: .052083rem;
              border: solid 1px #0066cc;
              font-size: 14px;
              color: #0066cc;
              outline: none;
              text-align: center;
              align-self: flex-end;
              box-sizing: border-box;
              margin-bottom: 2px;
          }
        }
        .dialog{
          .add-remark{
            width: 100px;
            height: 35px;
            background:rgba(0,102,204,1);
            border-radius:15px;
            font-size: 14px;
            font-family:Microsoft YaHei;
            color:rgba(255,255,255,1);
            border: none;
            outline: none;
            margin-right: 30px;
            box-sizing: border-box;
          }
          /deep/ .custom-dialog{
            .el-dialog{
                width: 400px;
                border-radius: 15px;
                .el-dialog__header{
                    padding: 0;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background:rgba(184,218,252,1);
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                }
                /deep/ .el-dialog__body{
                    padding: 0;
                    align-items: center;
                    box-sizing: border-box;
                    .el-row{
                      width: 100%;
                      display: flex;
                      height: 100px;
                      justify-content: center;
                      align-items: center;
                      .select-box{
                        .title{
                          padding-right: 5px;
                          font-size: 14px;
                          color: #333;
                        }
                        .el-select{
                          .el-input__inner{
                            width: 250px;
                            border-radius: 10px;
                          }
                        }
                      }
                      .textareat-box{
                        display: flex;
                        .title{
                          display: block;
                          width: 40px;
                          height: 20px;
                          font-size: 14px;
                          color: #333;
                          padding-right: 5px;
                        }
                        .el-textarea__inner{
                          width: 250px;
                          height: 80px;
                          border-radius: 10px;
                          resize: none;
                        }
                      }
                    }
                }
                .el-dialog__footer{
                    padding: 0;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .el-button{
                        border-radius: 10px;
                        width: 80px;
                        height: 40px;
                        margin-right: 20px;
                    }
                    .el-button--primary{
                        background-color: #0066cc;
                    }
                }
            }
          }
        }
    }
    /deep/ .log-table{
        width: 1700px;
        padding: .104167rem 0 0 .104167rem;
        box-sizing: border-box;
        .el-table{
          .el-table__header-wrapper{
            .el-table__header{
              th{
                color: #333;
                font-weight: 400;
              }
            }
          }
        }
    }
}
</style>