<template>
  <div class="home">
    <el-container class="container">
      <el-header height="15%">
        <div class="left">
          <img src="../assets/img/logo.png" alt />
          <span>极联智能制造SaaS平台管理系统</span>
        </div>
        <div class="right">
          <img class="buju" src="../assets/img/buju.png" />
          <span>欢迎您，星星</span>
          <img class="avatar" src="../assets/img/touxiang.png" />
        </div>
      </el-header>
      <el-container>
        <div class="left-panel">
          <el-menu>
            <MenuTree :data="dataList"/>
          </el-menu>
        </div>
        <!-- 一级菜单面板 -->
        <!-- <div class="home-left-panel">
          <el-tree
              class="menu-tree"
              :data="dataList" 
              :props="defaultProps" 
              @node-click="handleNodeClick"
              :expand-on-click-node="false" 
              >
              <span @click="handleMemoryStrick"  class="menu-icon" slot-scope="{node, data}">
                  <router-link :id="data.id" :to="{path: data.url}">
                      {{node.label}}
                  </router-link>
                  <i class="el-icon-setting"></i>
              </span>
          </el-tree>
        </div> -->
        <!-- <el-aside width="1.5625rem"> -->
          <!-- element-ui里面的折叠面板组件 -->
          <!-- <el-collapse>
            <el-collapse-item class="tab-item" v-for="item in dataList" :key="item.id">
              <template slot="title">
                <i class="icon-header el-icon-setting"></i>
                {{item.name}}
              </template>
              <div
                class="hover"
                v-for="item in item.children"
                :key="item.id"
                @click="handleMemoryStrick"
              >
                <router-link
                  :to="{path: item.url}"
                >
                  {{item.name}}
                </router-link>
              </div>
            </el-collapse-item>
          </el-collapse> -->
        <!-- </el-aside> -->
        <el-main>
          <!-- 记忆条 -->
          <div class="lable-bar">
              <span class="item"
                v-for="(item, index) in memoryList"
                :key="index"
                @click="toPages(item.path)"
                :class="isActive(item.path)?'active' : '' "
              >
                <span class="tags-view" :to="item.path">{{item.title}}</span>
                <i class="el-icon-close" @click.stop="handleMemoryDelete(index, item.path)"></i>
              </span>
          </div>
          <div class="main-area">
            <!-- <keep-alive> -->
              <router-view v-if="isRouterAlive"></router-view>
            <!-- </keep-alive> -->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { get } from "../utils/http";
import { homeAPI } from "../utils/apiList";
export default {
  name: "Home",
  provide(){
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,
      dataList: [],
      memoryList: [],// 记忆条数组
      urlList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      menuData:[
        {
          "index": '1',
          "name": '用户管理',
          "children": [
            {
              "index": '2',
              "name": '用户列表',
              "children":[
                {
                  "index": '3',
                  "name": '用户列表查询',
                  "children": [
                    {
                      "index": '4',
                      "name": '最后一层数据'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "index": '5',
          "name": '角色管理',
          "children": [
            {
              "index": '6',
              "name": '角色查询'
            }
          ]
        }
      ]
    };
  },
  computed:{
    barArr(){
      return this.$store.state.memoryList
    }
  },
  watch:{
    barArr: function(newVal, oldVal){
      this.memoryList = newVal;
    }
  },
  components: {
    MenuTree: () => import('./common/MenuTree')
  },
  created() {
    get(homeAPI).then(res => {
      this.dataList = res;
      console.log(this.dataList);
    });
  },
  methods: {
    handleMemoryDelete(index, path){
      this.memoryList.splice(index, 1);
      if(this.isActive(path)){
        if(this.memoryList.length > 0){
          const latest = this.memoryList.slice(-1);
          this.$router.push({path: latest[0].path.substr(1)});
        }else {
          this.$router.push({path: '/Home'})
        }
      }else {
        // this.$router.push({path: '/Home'});
      }
    },
    toPages(path){
      let substrPath = path.substr(1);
      console.log(substrPath);
      this.$router.push({"path": substrPath});
    },
    isActive(path){
      let thisRoutePath = this.$route.path;
      let isInclude = path.indexOf(thisRoutePath);
      return isInclude > 0;
    },
    // 左侧菜单面板点击触发
    handleNodeClick(){

    },
    // 局部刷新函数
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function (){
        this.isRouterAlive = true;
      })
    }
  },
}
</script>
<style lang="less" scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow: hidden;
  .container {
    height: 100%;
    .el-header {
      // tips: header的高度是17%,写在el-header的内嵌样式中
      background: url("../assets/img/header.png") no-repeat center center;
      background-size: 100% 100%;
      padding: 0;
      display: flex;
      justify-content: space-between;
      .left {
        height: 0.520833rem;
        display: flex;
        vertical-align: -webkit-baseline-middle;
        img {
          width: 0.3125rem;
          height: 0.3125rem;
          margin: 0.104167rem 0 0 0.15625rem;
        }
        span {
          font-size: 0.1875rem;
          color: #fff;
          align-self: flex-start;
          margin: 0.182292rem 0 0 0;
        }
      }
      .right {
        height: 0.520833rem;
        padding: 0.15625rem 0.15625rem 0 0;
        .buju {
          margin-right: 0.104167rem;
        }
        span {
          font-size: 20px;
          font-family: Microsoft YaHei;
          color: #fff;
          margin-right: 0.104167rem;
        }
      }
    }
    .el-container {
      height: 85%;
      /* aside面板 */
      .el-aside {
        height: 100%;
        background: rgba(235, 245, 255, 1);
        .el-collapse {
          border: none;
          overflow-y: hidden;
          /deep/ .el-collapse-item__header {
            height: 0.416667rem;
            font-size: 0.083333rem;
            padding-left: 0.260417rem;
            border: none;
            background: rgba(235, 245, 255, 1);
            .icon-header {
              margin-right: 0.078125rem;
              font-size: 0.104167rem;
            }
          }
          /deep/ .el-collapse-item__wrap {
            border: none;
            background: rgba(217, 236, 255, 1);
            /deep/ .el-collapse-item__content {
              div {
                font-size: 14px;
                height: 0.3125rem;
                // padding-left: 0.442708rem;
                line-height: 0.3125rem;
                a{
                  padding-left: .416667rem;
                  box-sizing: border-box;
                }
              }
            }
          }
        }
      }
      .left-panel{
        width: 16%;
        height: 100%;
        background:rgba(235,245,255,1);
        overflow: hidden;
        overflow-y: scroll;
        /deep/ .el-menu{
          border: none;
        } 
      }
      .left-panel::-webkit-scrollbar{
        display: none;
      }
      /* main功能区域 */
      /deep/ .el-main {
        padding: 0;
        width: 84%;
        height: 100%;
        .lable-bar {
          width: 100%;
          height: 5%;
          padding: 0 10px;
          box-sizing: border-box;
          line-height: 0.3125rem;
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          .item {
            display: flex;
            height: .15625rem;
            justify-content: space-around;
            align-items: center;
            font-size: 0.072917rem;
            padding: 0 .026042rem;
            span{
              width: .520833rem;
              height: .15625rem;
              line-height: .15625rem;
              text-align: center;
            }
          }
          // .item:hover{
          //   background-color: #0066cc;
          //   color: #fff;
          // }
          .active{
            background-color: #a6d2ff;
            // color: #fff;
          }
        }
        .main-area {
          height: 95%;
          display: flex;
          justify-content: start;
        }
      }
    }
  }
}
</style>
<style scoped>
.el-collapse::-webkit-scrollbar {
  overflow: hidden;
}
/* 给最左侧的面板设置hover */
.tab-item .hover:hover {
  background: rgba(166, 210, 255, 1);
}
.tab-item .hover a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>