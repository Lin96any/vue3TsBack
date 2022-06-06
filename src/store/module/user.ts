import {Module} from "vuex";
import {RootState, UserState} from "@/store/stateType";
import {userLogin} from "@/service/api/user";
import {SaveLocalStr} from "@/localStorege";
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
    actions: {
        async login({commit}, userInfo) {
            const {account, password} = userInfo;
            try {
                const res = await userLogin(account, password)
                commit('setToken', res.token)
                router.push('/main')
            } catch (e: any) {
                console.log(e)
            }
        }
    },
    getters: {}
}