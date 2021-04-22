import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import config from './config';

const instance:AxiosInstance = axios.create(config);


// 请求拦截
instance.interceptors.request.use((config:AxiosRequestConfig):AxiosRequestConfig=>{
    return config;
});

// 响应拦截
instance.interceptors.response.use((res:AxiosResponse)=>{
    if(res.data.code === 200){
        return res.data.data;
    }else{
        return {
            msg: res.data.msg,
            data: res.data.data
        }
    } 
},
(error)=>{
    if (error?.response?.status === 401) {
        error.message = '登录已过期';
      } else if (error.code === 'ECONNABORTED') {
        error.message = '当前网络异常';
      }
      return error;
});



export default instance;

