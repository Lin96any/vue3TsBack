import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AutoComponents from '@/element-plus/index';
import SvgIcon from "components/svg/index.vue";
import "./icons/index"

//导入样式表
import "normalize.css"
import "assets/style/global.scss"

//初始化rem
import {Rem} from "@/utils/validate";
Rem(1920);

const {dispatch} = store;

const app = createApp(App);
app.use(store);
dispatch('userStore/updateState')
app.use(router);
AutoComponents(app);
app.component('svg-icon', SvgIcon)
app.mount('#app');


