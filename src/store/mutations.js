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