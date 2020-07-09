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
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    // name: 'Home',
    component: () => import('../components/Home.vue'),
    children: [
      // {
      //   path: 'MainArea',
      //   component: () => import('../components/menuMaintain/MainArea.vue'),
      //   children: [
      //     {
      //       name: 'MenuDetail',
      //       path: 'MenuDetail',
      //       component: () => import('../components/menuMaintain/MenuDetail.vue')
      //     },
      //     // {
      //     //   path: '',
      //     //   redirect: 'MenuDetail'
      //     // }
      //   ]
      // },
      // {
      //   path: 'DictionaryClass',
      //   component: () => import('../components/dataDictionary/DictionaryClass.vue'),
      //   children:[
      //     {
      //       name: 'DictionaryDetail',
      //       path: 'DictionaryDetail',
      //       component: () => import('../components/dataDictionary/DictionaryDetail.vue')
      //     },
      //     {
      //       name: 'DataDictionary',
      //       path: 'DataDictionary/',
      //       component: () => import('../components/dataDictionary/DataDictionary.vue')
      //     },
      //     // {
      //     //   path: '',
      //     //   redirect: 'DictionaryDetail/id=0'
      //     // }
      //   ]
      // },
      {
        path: 'manage',
        component: () => import('../components/authorizationManagement/turnAuthorization/TurnAuthorization.vue')
      },
      {
        path: '',
        redirect: 'manage'
      },
      // {
      //   path: 'MainArea',
      //   component: () => import('../components/MainArea.vue'),
      //   children: [
      //     {
      //       name: 'MenuDetail',
      //       path: 'MenuDetail/:id',
      //       component: () => import('../components/common/MenuDetail.vue')
      //     },
      //     {
      //       path: '',
      //       redirect: 'MenuDetail/0'
      //     }
      //   ]
      // },
      {
        path: 'DictionaryClass',
        component: () => import('../components/dataDictionary/DictionaryClass.vue'),
      },
      {
        path: 'ProjectManagement',
        component: () => import('../components/taskManagement/projectManagement/ProjectManagement.vue')
      },
      { // 任务分解页面
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
            redirect: 'TaskMsgPanel'
          }
        ]
      },
      {
        // 个性化设置页面
        path: 'CustomSettings',
        component: () => import('../components/customSet/CustomSettings.vue')
      },
      {
        // 菜单设置页面
        path: 'MenuMain',
        component: () => import('../components/menuSetting/MenuMain.vue')
      },
      {
        // 个人信息页面
        path: 'PersonInfo',
        component: () => import('../components/serviceCounter/PersonInfo.vue')
      },
      {
        // 消息提醒页面
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
        path: 'LogoMaintain',
        component: () => import('../components/taskManagement/taskDecomposition/LogoMaintain.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
