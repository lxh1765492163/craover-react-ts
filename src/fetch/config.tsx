import {AxiosRequestConfig} from 'axios';
import {api} from '@src/config';

const axiosConfig: AxiosRequestConfig = {
    baseURL: api,
    timeout: 60
}

export default axiosConfig;