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
        <!-- 一级菜单面板 -->
        <div class="home-left-panel">
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
        </div>
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
              <router-view></router-view>
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
  data() {
    return {
      dataList: [],
      memoryList: [],
      urlList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    };
  },
  components: {
    
  },
  created() {
    get(homeAPI).then(res => {
      this.dataList = res;
    });
  },
  methods: {
    handleMemoryStrick(e) {
      if(this.memoryList.length > 0){
        let flag = this.memoryList.some(item => {
          console.log(item.path);
          return item.path === e.target.getAttribute('href');
        })
        if(!flag){
          this.memoryList.push(
            Object.assign(
              {},
              {
                "path": e.target.getAttribute('href'),
                "title": e.target.innerHTML
              }
            )
          )
        }
      }else {
        this.memoryList.push(
          Object.assign(
            {},
            {
              "path": e.target.getAttribute('href'),
              "title": e.target.innerHTML
            }
          )
        )
      }
    },
    handleMemoryDelete(index, path){
      this.memoryList.splice(index, 1);
      if(this.isActive(path)){
        if(this.memoryList.length > 0){
          const latest = this.memoryList.slice(-1);
          this.$router.push({path: latest[0].path});
        }else {
          this.$router.push({path: '/Home'})
        }
      }else {
        // this.$router.push({path: '/Home'});
      }
    },
    toPages(path){
      this.$router.push({"path": path});
    },
    isActive(path){
      return path === this.$route.path;
    },
    // 左侧菜单面板点击触发
    handleNodeClick(){

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
      .home-left-panel{
        width: 300px;
        min-width: 250px;
        height: 100%;
        background:rgba(235,245,255,1);
        overflow: hidden;
        overflow-y: scroll;
        /deep/ .el-tree{
          background:rgba(235,245,255,1);
          .el-tree-node:focus{
              .el-tree-node__content{
                background:rgba(235,245,255,1);
            }
          }
          .el-tree-node__content{
            height: .3125rem;
            font-size: 16px;
            color: #303133;
            box-sizing: border-box;
            padding-right: .104167rem;
            .menu-icon{
                width: 200px;
                a{
                   width: 80%;
                   height: .3125rem;
                   line-height: .3125rem;
                   font-size: .083333rem;
                }
                i{
                    width: 20%;
                    height: .3125rem;
                    line-height: .3125rem;
                    text-align: end;
                    font-size: .104167rem;
                }
            }
            .el-tree-node__expand-icon{
                font-size: .104167rem;
                color: #000;
                margin-left: .104167rem;
            }
            .el-tree-node__expand-icon.expanded{
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
                font-size: .104167rem;
                color: #000;
            }
            .el-icon-caret-right:before{
                content: "\e6e0";
            }
            .el-tree-node__expand-icon.expanded.el-icon-caret-right:before{
                content: '\e6df';
            }
            .el-tree-node__expand-icon.is-leaf{
                color: transparent;
                cursor: default;
            }
            .menu-icon{
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
          }
          .el-tree-node__content:hover{
            cursor: pointer;
            background:rgba(166,210,255,1);
          }

        }
      }
      .home-left-panel::-webkit-scrollbar{
        display: none;
      }
      /* main功能区域 */
      /deep/ .el-main {
        padding: 0;
        height: 100%;
        .lable-bar {
          height: 7%;
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
          height: 93%;
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