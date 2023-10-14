import axios from "axios"
import { ElMessage } from 'element-plus'

let request = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:5000
})

request.interceptors.request.use(function(config){
    
    return config
},function(error){
    return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let msg =''
    let status = error.response.status
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "无网络";

    }

    ElMessage(msg)

    return Promise.reject(error);
  });


export default request