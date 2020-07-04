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
      {
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
          // {
          //   path: '',
          //   redirect: 'DictionaryDetail/id=0'
          // }
        ]
      },
      {
        path: 'CustomSettings',
        component: () => import('../components/customSet/CustomSettings.vue')
      },
      {
        path: 'MenuMain',
        component: () => import('../components/menuSetting/MenuMain.vue')
      },
      {
        path: 'PersonInfo',
        component: () => import('../components/serviceCounter/PersonInfo.vue')
      },
      {
        path: 'MessageRemind',
        name: 'MessageRemind',
        component: () => import('../components/serviceCounter/MessageRemind.vue')
      },
      {
        path: 'ResetPassword',
        name: 'ResetPassword',
        component: () => import('../components/serviceCounter/ResetPassword.vue')
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
