import {AxiosResponse,AxiosRequestConfig} from "axios";


export interface LinInterceptors<T = AxiosResponse>{
    RequestInterceptors?:(config:AxiosRequestConfig) => AxiosRequestConfig;
    ResponseInterceptors?: (res:T) => T;
    RequestInterceptorsError: (err: any) => any;
    ResponseInterceptorsError: (err: any) => any;
}

export interface LinRequestConfig<T = AxiosResponse> extends AxiosRequestConfig{
    interceptors?:LinInterceptors<T>,
    showLoading?:boolean
}

export interface GlobalData{
    msg:string,
    code:string|number,
    [key:string]:any
}