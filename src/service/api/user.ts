// 用户登陆注册相关接口

import http from "@/service/api/index";
import MD5 from 'md5';

// 用户登陆
export const userLogin = async (username: string, password: string) => {
    return http.post({
        url: "/sys/login",
        data: {
            username,
            password: MD5(password)
        }
    })
}

export const getUserInfo = async () => {
        return http.get({
            url:'/sys/profile'
        })
}