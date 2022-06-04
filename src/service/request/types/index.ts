import {AxiosResponse,AxiosRequestConfig} from "axios";


export interface LinIntercepters{
    RequestIntercepters:(config:AxiosRequestConfig) => AxiosRequestConfig;
}

export interface LinRequestConfig extends AxiosRequestConfig{
    intercepters?:LinIntercepters,
    showLoading:boolean
}