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

// export const memoryTab = (state, data) => {
//   // let flag = false; 
//   // console.log(state.memoryList);
//   // let result = [];
//   // if(state.memoryList.length){
//   //   state.memoryList.forEach(item => {
//   //     if(item.path === data.path){
//   //       result.push('true');
//   //     }else{
//   //       result.push('false');
//   //     }
//   //   });
//   // }else {
//   //   flag = false;
//   // }
//   // console.log(state.memoryList);
//   // console.log(result);
//   // if (flag === false) {
//     state.memoryList.push(
//       Object.assign(
//         {},
//         {
//           "path": data.path,
//           "title": data.title,
//         }
//       )
//     );
//   // } 
// } 

