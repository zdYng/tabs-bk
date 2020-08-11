export const setCookie = {
  set: function(key, val, time){
      let date = new Date(); //获取当前时间
      let expriesDays = time; //将date设置为n天以后的时间
      date.setTime(date.getTime() + expriesDays*24*3600*1000); //格式化时间，变成毫秒
      document.cookie = key + "=" + val + ";expries=" + date.toGMTString(); //设置cookie
  },
  get: function(key){
      let getCookie = document.cookie.replace(/[ ]/g, "");
      let arrCookie = getCookie.split(";");
      let tips;
      for(let i = 0; i < arrCookie.length; i++){
          let arr = arrCookie[i].split("=");
          if(key == arr[0]){
              tips = arr[1];
              break;
          }
      }
      return tips
  }
}