<template>
  <div class="home">
    <el-container class="container">
      <el-header height="15%">
        <div class="left">
          <img src="../assets/img/logo.png" alt />
          <span>极联智能制造SaaS平台后台管理系统</span>
        </div>
        <div class="right">
          <img class="buju" src="../assets/img/buju.png" />
          <span>欢迎您，{{user.userName}}</span>
          <img class="avatar" src="../assets/img/touxiang.png" />
        </div>
      </el-header>
      <el-container>
        <div class="left-panel">
          <el-menu>
            <MenuTree :data="dataList"/>
          </el-menu>
        </div>
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
      reload: this.reload,
    }
  },
  data() {
    return {
      // 当前用户信息
      user:{
        userName: ''
      },
      isRouterAlive: true,
      dataList: [],
      memoryList: [],// 记忆条数组
      urlList: [],
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
      console.log(newVal);
      this.memoryList = newVal;
    }
  },
  components: {
    MenuTree: () => import('./common/MenuTree')
  },
  created() {
    console.log(this.$route.path);
    this.user.userName = this.$store.state.user.username;
    get(homeAPI).then(res => {
      this.dataList = res;
    });
  },
  methods: {
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
      // let substrPath = path.substr(1);
      this.$router.push({"path": path});
    },
    isActive(path){
      let thisRoutePath = this.$route.path;
      let isInclude = thisRoutePath.indexOf(path);
      return isInclude == 0;
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
          width: 40px;
          height: 40px;
          margin: 35px 10px 0 0.15625rem;
        }
        span {
          font-size: 26px;
          color: #fff;
          align-self: flex-start;
          margin: 42px 0 0 0;
          font-family: sans-serif;
        }
      }
      .right {
        height: 30px;
        padding: 38px 0.15625rem 0 0;
        display: flex;
        align-items: flex-end;
        .buju {
          margin-right: 0.104167rem;
          width: 15px;
          height: 15px;
        }
        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #fff;
        }
        .avatar{
          width: 20px;
          height: 20px;
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
        width: 10%;
        height: 100%;
        background:rgba(235,245,255,1);
        overflow: hidden;
        min-width: 150px;
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
        width: 90%;
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
            height: 24px;
            justify-content: space-around;
            align-items: center;
            font-size: 12px;
            padding: 0 .026042rem 0 0;
            color: #666;
            border: 1px solid #ddd;
            margin-right: 10px;
            border-radius: 2px;
            span{
              // width: 80px;
              height: .15625rem;
              line-height: .15625rem;
              text-align: center;
              padding: 0 20px 0 10px;
            }
          }
          // .item:hover{
          //   background-color: #0066cc;
          //   color: #fff;
          // }
          .active{
            background-color: #a6d2ff;
            color: #000;
            border: none;
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