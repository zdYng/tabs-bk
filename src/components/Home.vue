<template>
  <div class="home">
    <el-container class="container">
      <el-header height="17%">
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
        <el-aside width="1.302rem">
          <!-- element-ui里面的折叠面板组件 -->
          <el-collapse>
            <el-collapse-item class="tab-item" v-for="item in dataList" :key="item.id">
              <template slot="title">
                <i class="icon-header el-icon-setting"></i>
                {{item.name}}
              </template>
              <div
                class="hover"
                v-for="item in item.children"
                :key="item.id"
                @click="handleMemoryStrick(item.name)"
              >
                <router-link :to="{path: item.url}">{{item.name}}</router-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-aside>
        <el-main>
          <!-- 记忆条 -->
          <div class="lable-bar">
            <MemoryTab />
          </div>
          <div class="main-area">
            <!-- <MainArea /> -->
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
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
      urlList: []
    };
  },
  components: {
    MemoryTab: () => import("./common/MemoryTab.vue")
  },
  created() {
    get(homeAPI).then(res => {
      this.dataList = res;
      // console.log('res->',res);
    });
  },
  mounted() {
    // console.log(this.$route);
  },
  methods: {
    handleMemoryStrick(title) {
      const route = this.$route;
      let data = Object.assign({}, route);
      
      data["title"] = title;
      this.$store.dispatch({
        type: "memoryTab",
        data
      });
    },
    handleMemoryDelete(index) {
      this.memoryList.splice(index, 1);
    }
  },

};
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
      height: 83%;
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
                padding-left: 0.442708rem;
                line-height: 0.3125rem;
              }
            }
          }
        }
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
            width: 0.625rem;
            height: 0.234375rem;
            justify-content: space-around;
            align-items: center;
            font-size: 0.072917rem;
          }
          span {
            i {
              align-self: center;
              font-size: 0.0625rem;
            }
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