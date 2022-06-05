import {Module} from "vuex";
import {RootState, UserState} from "@/store/stateType";

export const userStore: Module<UserState, RootState> = {
    namespaced: true,
    state:{
        avatar: '',
        userId: '',
        token: '',
        userName: '',
        userAddress: ''
    },
    mutations:{

    },
    actions:{
        //
    },
    getters:{}
}