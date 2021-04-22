import {AxiosRequestConfig} from 'axios';
import instance from './index';

interface Options {
    query: boolean;
}

type Optionss = Partial<Options & AxiosRequestConfig>;

const get = <T,>(url="", data={}, options:Optionss={}):Promise<T>=>{
    const defaultOptions:AxiosRequestConfig = {
        method:'get',
        url,
        params:data,
    }    

    const mergeData = Object.assign({}, defaultOptions, options);
    return instance.request(mergeData);
};


const post =  <T,>(url="", data={}, options:Optionss={}):Promise<T>=>{
    const defaultOptions:AxiosRequestConfig = {
        method:'post',
        url,
        params:options.query?data:{},
        data:!options.query?data:{}
    }    

    const mergeData = Object.assign({}, defaultOptions, options);
    return instance.request(mergeData);
}

const http = {
    get,
    post
}


export default http