import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)


const state = {
  isAuthorization: false,
  user: {},
  menuData: [],
  nodeId: '',
  DicNodeId: '',
  dicMenuMessage:'',
  taskRowId: {},
  projectMaintainTabid: null //项目管理页面的点击某一行获取的当前行的id值
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
