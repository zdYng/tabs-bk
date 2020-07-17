import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
// import MainArea from '../components/MainArea.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
Vue.use(VueRouter)

  const routes = [
  {
    // 登录页面
    path: '/',
    name: 'Login',
    component: Login
  },
  { 
    // Home页面
    path: '/Home',
    // name: 'Home',
    component: () => import('../components/Home.vue'),
    children: [
      {
        // 菜单维护页面
        path: 'MainArea',
        component: () => import('../components/menuMaintain/MainArea.vue'),
        children: [
          {
            name: 'MenuDetail',
            path: 'MenuDetail',
            component: () => import('../components/menuMaintain/MenuDetail.vue')
          },
          // {
          //   path: '',
          //   redirect: 'MenuDetail'
          // }
        ]
      },
      {
        // 数据字典页面
        path: 'DictionaryClass',
        component: () => import('../components/dataDictionary/DictionaryClass.vue'),
        children:[
          {
            name: 'DictionaryDetail',
            path: 'DictionaryDetail',
            component: () => import('../components/dataDictionary/DictionaryDetail.vue')
          },
          {
            name: 'DataDictionary',
            path: 'DataDictionary/',
            component: () => import('../components/dataDictionary/DataDictionary.vue')
          },
        ]
      },
      {
        // 个性化设置页面
        path: 'CustomSettings',
        component: () => import('../components/customSet/CustomSettings.vue')
      },
      {
        // 个人信息页面
        path: 'PersonInfo',
        component: () => import('../components/serviceCounter/PersonInfo.vue')
      },
      {
        // 菜单设置页面
        path: 'MenuMain',
        component: () => import('../components/menuSetting/MenuMain.vue')
      },
      {
        // 消息提醒设置页面
        path: 'MessageRemind',
        name: 'MessageRemind',
        component: () => import('../components/serviceCounter/MessageRemind.vue')
      },
      {
        // 修改密码页面
        path: 'ResetPassword',
        name: 'ResetPassword',
        component: () => import('../components/serviceCounter/ResetPassword.vue')
      },
      {
        // 项目管理页面
        path: 'ProjectManagement',
        name: 'ProjectManagement',
        component: () => import('../components/taskManagement/projectManagement/ProjectManagement.vue'),
      },
      {
        // 项目信息维护页面
        path: 'ProInfoMaintain',
        name: 'ProInfoMaintain',
        component: () => import('../components/taskManagement/projectManagement/ProInfoMaintain')
      },
      {
        //项目进度维护页面
        path: 'ProScheduleMantain',
        name: 'ProScheduleMantain',
        component: () => import('../components/taskManagement/projectManagement/ProScheduleMantain.vue')
      },
      { 
        // 任务分解页面
        path:'TaskDecomposition',
        component: () => import('../components/taskManagement/taskDecomposition/TaskDecomposition.vue'),
        children:[
          {
            path: 'TaskMsgPanel',
            name: 'TaskMsgPanel',
            component: () => import('../components/taskManagement/taskDecomposition/TaskMsgPanel.vue')
          },
          {
            path: 'TaskBoard',
            name: 'TaskBoard',
            component: () => import('../components/taskManagement/taskDecomposition/TaskBoard.vue')
          },
          {
            path: '',
            redirect: 'TaskBoard'
          }
        ]
      },
      {
        // 标准工时设置页面
        path: 'StandardManHourSet',
        name: 'StandardManHourSet',
        component: () =>import('../components/taskManagement/taskDecomposition/StandardManHourSet.vue')
      },
      {
        // 日志管理页面
        path: 'LogoMaintain',
        name: 'LogoMaintain',
        component: () => import('../components/taskManagement/taskDecomposition/LogoMaintain.vue')
      },
      {
        // 测试页面
        path: 'Test',
        name: 'Test',
        component: () => import('../components/common/Test')
      },
      {
        // 空白页面
        path: 'EmptyPage',
        name: 'EmptyPage',
        component: () => import('../components/common/EmptyPage')
      },
      {
        path: 'FixTableTree',
        name: 'FixTableTree',
        component: () => import('../components/taskManagement/taskDecomposition/FixTableTree'),
      },
      {
        //授权管理-转授权
        path:'Turn',
        name:'Turn',
        component: () =>import('../components/authorizationManagement/turnAuthorization/TurnAuthorization.vue')
      },
      {
        //授权管理-模块授权
        path:'Module',
        name:'Module',
        component: () =>import('../components/authorizationManagement/moduleAuthorization/ModuleAuthorization.vue')
      },
      {
        //授权管理-范围授权
        path:'Range',
        name:'Range',
        component: () =>import('../components/authorizationManagement/rangeAuthorization/RangeAuthorization.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
