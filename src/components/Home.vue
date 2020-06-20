<template>
    <div class="home">
        <el-container class="container">
            <el-header height=".885rem">
                <div class="left">
                    <img src="../assets/img/logo.png" alt="">
                    <span>极联智能制造SaaS平台管理系统</span>
                </div>
                <div class="right">
                    <img class="buju" src="../assets/img/buju.png">
                    <span>欢迎您，星星</span>
                    <img class="avatar" src="../assets/img/touxiang.png">
                </div>
            </el-header>
            <el-container>
                <!-- 一级菜单面板 -->
                <el-aside width="1.302rem">
                    <!-- element-ui里面的折叠面板组件 -->
                    <el-collapse>
                        <el-collapse-item 
                          class="tab-item" 
                          v-for="item in dataList" 
                          :key="item.id"
                          >
                            <template slot="title">
                                <i class="icon-header el-icon-setting"></i>
                                {{item.name}}
                            </template>
                            <div 
                              class="hover" 
                              v-for="item in item.children" 
                              :key="item.id"
                              >
                              <router-link
                                :to="{path: item.url}" 
                                >{{item.name}}
                                </router-link>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-aside>
                <el-main>
                    <!-- 记忆条 -->
                    <div class="lable-bar">
                        <span class="item"><span>菜单维护</span><i class="el-icon-close"></i></span>
                        <span class="item"><span>数据字典</span><i class="el-icon-close"></i></span>
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
import { get } from '../utils/http'
import { homeAPI } from '../utils/apiList'
export default {
    name: 'Home',
    data(){
        return {
            dataList: [],
        }
    },
    created(){
        get(homeAPI).then(res => {
            this.dataList = res;
        })
    },
}
</script>
<style scoped>
    .home{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow: hidden;
    }
    /* header */
    .el-header{
        background: url('../assets/img/header.png') no-repeat center center;
        background-size: 100% 100%;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
    .left{
       height: .520833rem;
       display: flex;
       vertical-align: -webkit-baseline-middle;
    }
    .left img{
        width: .3125rem;
        height: .3125rem;
        margin: .104167rem 0 0 .15625rem;
    }
     .left span{
         font-size: .1875rem;
         color: #fff;
         align-self: flex-start;
         margin: .182292rem 0 0 0;
     }
     .right{
        height: .520833rem;
        padding: .15625rem .15625rem 0 0;
     }
     .right .buju{
         margin-right: .104167rem;
     }
     .right span{
        font-size:20px;
        font-family:Microsoft YaHei;
        color: #fff;
        margin-right: .104167rem;
     }
     /* aside面板 */
     .el-aside{
         height: 10.416667rem;
         background:rgba(235,245,255,1);
     }
    .el-collapse{
         border: none;
         overflow-y: hidden;
     }
     .el-collapse::-webkit-scrollbar{
        overflow: hidden;
     }
     /* 给最左侧的面板设置hover */
     .tab-item .hover:hover{
        background:rgba(166,210,255,1);
     }
     .tab-item .hover a{
         display: block;
         width: 100%;
         height: 100%;
     }
     >>> .el-collapse-item__header{
        height: .416667rem;
        font-size: .083333rem;
        padding-left: .260417rem;
        border: none;
        background:rgba(235,245,255,1);
     }
     >>> .el-collapse-item__wrap{
        border: none;
        background:rgba(217,236,255,1);
     }
     >>> .el-collapse-item__content div{
        font-size: 14px;
        height: .3125rem;
        padding-left: .442708rem;
        line-height: .3125rem;
     }
     .icon-header{
         margin-right: .078125rem;
         font-size: .104167rem;
     }
     /* main功能区域 */
    >>> .el-main{
        padding: 0;
        height: 10.416667rem;
    }
    .lable-bar{
        height: .3125rem;
        line-height: .3125rem;
        box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
    }
    .lable-bar .item{
        display: flex;
        width: .625rem;
        height: .234375rem;
        justify-content: space-around;
        align-items: center;
        font-size: .072917rem;
    }
    .lable-bar span i{
        align-self: center;
        font-size: .0625rem;
    }
    /* main-area */
    .main-area{
        display: flex;
        justify-content: start;
    }
</style>