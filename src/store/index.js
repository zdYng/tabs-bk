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
  taskRowId: {}, //任务分解页面点击列表获取到列表的id和flag
  projectMaintainRowData: {}, //项目管理页面，点击某一行获取的这行的数据 
  memoryList: [], //Home页面点击菜单树生成的记忆条数据
  MenuDetailData: {}, //菜单维护页面的菜单详情数据
  mainHourNodeData: {},//标准工时页面树形数据，点击后的当前节点的数据
  taskBoardTable: {}, // 任务分解页面，任务看板列表点击当前行的数据
  dictionaryTreeData: {}, //数据字典页面，单击节点时获取的数据
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
