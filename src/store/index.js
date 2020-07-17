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
  taskRowId: {}
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
