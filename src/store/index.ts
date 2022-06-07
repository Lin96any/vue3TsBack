import { createStore } from 'vuex';
import {RootState} from "@/store/stateType";
import {userStore} from "@/store/module/user";

export default createStore<RootState>({
	state: {
		avatar:'',
		userId:'',
		token:''
	},
	modules: {
		userStore
	},
});
