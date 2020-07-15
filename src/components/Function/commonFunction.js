// 在一个数组对象里根据id查找到当前对象,根据id获取对象信息
export const deepQuery = function (arr, id){
    let isGet = false;
    let retNode = null;
    function deepSearch(arr, id){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].children && arr[i].children.length > 0){
                deepSearch(arr[i].children, id);
            }
            if(id === arr[i].id || isGet){
                isGet || (retNode = arr[i]);
                isGet = true;
                break;
            }
        }
    }
    deepSearch(arr, id);
    return retNode;
}