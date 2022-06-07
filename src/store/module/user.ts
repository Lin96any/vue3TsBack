import {Module} from "vuex";
import {RootState, UserState} from "@/store/stateType";
import {getUserInfo, userLogin} from "@/service/api/user";
import {getLocalStore, SaveLocalStr} from "@/localStorege";
import router from "@/router";

export const userStore: Module<UserState, RootState> = {
    namespaced: true,
    state: {
        avatar: '',
        userId: '',
        token: '',
        userName: '',
        userAddress: ''
    },
    mutations: {
        setToken(context, token: string) {
            context.token = token;
            SaveLocalStr('token', token);
        }
    },
    getters:{
        getUserToken:state => state.token
    },
    actions: {
        //登陆
        async login({commit}, userInfo) {
            const {account, password} = userInfo;
            try {
                const res = await userLogin(account, password)
                commit('setToken', res.token)
                router.push('/main')
            } catch (e: any) {
                console.log(e)
            }
        },
        //获取用户信息
        async getUserInfo({commit},info){
           const res = await getUserInfo()
            console.log(res)
        },
        //防止刷新状态丢失
        async updateState({commit}){
            //获取本地缓存的token信息
            const token = getLocalStore('token')
            if(token){
                commit('setToken',token)
            }
        }
    },

}