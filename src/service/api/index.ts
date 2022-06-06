import Request from "../request";
import md5 from "md5";
const http = new Request({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000,
    interceptors:{
        // ResponseInterceptors(){},
        RequestInterceptors(config){
            const { icode, time } = getTestICode()
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            config.headers.icode = icode
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            config.headers.codeType = time
            // 在这个位置需要统一的去注入token
            console.log(config)

            return config
        },
        RequestInterceptorsError(error){
            console.log(error)
        },
        ResponseInterceptorsError(error){
            console.log(error)
        }
    }
});

function getTestICode() {
    const now = parseInt(String(Date.now() / 1000))
    const code = now + 'LGD_Sunday-1991'
    return {
        icode: md5(code),
        time: now
    }
}


export default http;