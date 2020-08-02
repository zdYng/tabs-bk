export const setIsAuthorization = (state, data) => {
  state.isAuthorization = data;
}

export const setUser = (state, data) => {
  state.user = data;
  console.log(state.user);
}

export const setMenuData = (state, data) => {
  state.menuData = data;
}

// 修改点击菜单树时对应的节点id
export const setNodeId = (state, data) => {
  state.nodeId = data;
}
// 修改数据字典的菜单树时对应的节点id
export const setDicNodeId = (state, data) => {
  state.DicNodeId = data;
}
// 数据字典点击菜单获取相应菜单的数据
export const setDicMenuMessage = (state, data) => {
  state.dicMenuMessage = data;
}
// 任务分解页面，当点击某行时获取当前行的id
export const setTaskRowId = (state, data) => {
  state.taskRowId = data;
}
// //项目管理页面，当点击某行时获取当前行的数据
export const setProjectMaintainRowData = (state, data) => {
  state.projectMaintainRowData = data;
}
// Home页面获取到点击左侧菜单树生成的记忆条数据
export const setMemoryList = (state, data) => {
  state.memoryList = data;
}
//菜单维护页面的菜单详情数据
export const setMenuDetailData = (state, data) => {
  state.MenuDetailData = data;
}
//标准工时页面树形数据，点击后的当前节点的数据
export const setMainHourNodeData = (state, data) => {
  state.mainHourNodeData = data;
}