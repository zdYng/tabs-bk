export const setIsAuthorization = ({commit}, data) => {
    commit('setIsAuthorization', data);
};

export const setUser = ({commit}, data) => {
    commit('setUser', data);
};

export const setMenuData = ({ commit }, data) => {
    commit('setMenuData', data);
};

// 修改点击菜单树时对应的节点id
export const setNodeId = ({ commit }, data) => {
    commit('setNodeId', data);
}
// 修改数据字典菜单树时对应的节点id
export const setDicNodeId = ({ commit }, data) => {
    commit('setDicNodeId', data);
}
// 数据字典点击菜单获取相应菜单的数据
export const setDicMenuMessage = ({ commit }, data) => {
    commit('setDicMenuMessage', data);
}
// 任务分解页面，当点击某行时获取当前行的id
export const setTaskRowId = ({commit}, data) => {
    commit('setTaskRowId', data);
  }
//项目管理页面，当点击某行时获取当前行的id
export const setProjectMaintainTabid = ({ commit }, data) => {
    commit('setProjectMaintainTabid', data);
  } 