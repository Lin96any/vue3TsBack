// Axios封装
import axios, {AxiosInstance} from "axios";
import {GlobalData, LinInterceptors, LinRequestConfig} from "@/service/request/types";

export default class LinRequest {
    instance: AxiosInstance;
    interceptors?: LinInterceptors;
    showLoading: boolean;

    constructor(config: LinRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors;
        this.showLoading = config.showLoading ?? true;
        //配置并注册拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.RequestInterceptors ? this.interceptors?.RequestInterceptors : (config) => (config),
            this.interceptors?.RequestInterceptorsError
        );

        this.instance.interceptors.response.use(
            this.interceptors?.ResponseInterceptors ? this.interceptors?.ResponseInterceptors : (res) => (res),
            this.interceptors?.ResponseInterceptorsError
        )
        //独有全局拦截器
        this.instance.interceptors.request.use((config) => {
            return config;
        });

        this.instance.interceptors.response.use((res) => {
            if (res.data) return res.data;
            return res;
        });
    }

    //Request封装请求
    request<T = GlobalData>(config: LinRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.RequestInterceptors) {
                config = config.interceptors.RequestInterceptors(config);
            }

            this.instance.request<any, T>(config).then(res => {
                if (config.interceptors?.ResponseInterceptors) {
                    res = config.interceptors?.ResponseInterceptors(res);
                }

                resolve(res);
            }, err => reject(err))
        });
    }

    async get<T = GlobalData>(config: LinRequestConfig<T>): Promise<T> {
        return await this.request<T>({...config, method: "GET"})
    }

    async post<T = GlobalData>(config: LinRequestConfig<T>): Promise<T> {
        return await this.request<T>({...config, method: "POST"})
    }
}