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

export const memoryTab = (state, data) => {
  let flag = state.memoryList.some(
    item => item.path === data.data.path
  );//打开标签后，判断数组中是否已经存在该路由
  if (!flag) {
    state.memoryList.push(
      Object.assign(
        {},
        {
          path: data.data.path,
          title: data.data.title,
        }
      )
    );
  } //数组中路由存在不push ,单击左侧路由变化,点击标签路由变化均触发
} 

