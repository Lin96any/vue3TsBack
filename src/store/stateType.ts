/*
* 父子类型StateType
* */

// 全局StateType
export interface RootState{
    avatar:string,
    userId:string|number,
    token:string
}

// 用户模块StateType
export interface UserState{
    avatar:string,
    userId:string|number,
    token:string,
    userName:string,
    userAddress:string
}
