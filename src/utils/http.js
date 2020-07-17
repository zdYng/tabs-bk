import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '';
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true; // 让axios跨域携带cookie

console.log(process.env.NODE_ENV);

// hhtp请求拦截器
axios.interceptors.request.use(
    config => {
        // config.headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // }
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        // let token = localStorage.getItem('token');
        // console.log(token);
        // if(token){
        //     config.headers.Authorization = token;
        // }
        return config;
    }, 
    error => {
        return new Promise.reject(error);
    }
);

// http响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log('返回401错误了');
                    break;
                // case 403:
                //     console.log('返回403错误了');
                //     break;
                // case 404:
                //     console.log('返回404错误了');
                //     break;
            }
        }
        return Promise.reject(error)
    }
);

export default axios

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url, data ={}){
     return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
     })
 }

 /**
  * 封装get方法
  * @param url
  * @param data
  * @returns {Promise}
  */

  export function get(url, params = {}) {
      return new Promise((resolve, reject) => {
          axios.get(url, {
              params: params
          })
          .then(response => {
              resolve(response.data);
            //   console.log(response);
          })
          .catch(err => {
              reject(err);
          })
      })
  }