import http from '@src/fetch/inject';

export const login = <T,>(url:string, data:object, options?:object):Promise<T>=>{
    return http.get(url, data, options);
}