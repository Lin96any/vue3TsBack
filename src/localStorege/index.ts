/*
*  对LocalStore的封装
* */

//初始化保存
const SaveLocalStore = (key: string, value: any) => {
    localStorage.setItem(key,value)
}

//初始化获取
export function getLocalStore(key:string) {
    const res = localStorage.getItem(key);
    if(res){
        try {
            return JSON.parse(res);
        }catch (e) {
            return res
        }
    }
    return undefined;
}

//对象保存
export const SaveObjectLocalStore = (key:string,value:object) => {
    SaveLocalStore(key,JSON.stringify(value))
}

//字符串保存
export const SaveLocalStr = (key:string,value:string) => {
    SaveLocalStore(key,value)
}

// 数字类型保存
export  const SaveNumberLocalStore = (key:string,value:number) => {
    SaveLocalStore(key,value)
}
