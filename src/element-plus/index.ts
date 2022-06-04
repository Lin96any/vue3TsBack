import {App} from 'vue';

import {
    ElButton,
    ElMain,
    ElContainer,
    ElTabs,
    ElTabPane,
    ElIcon,
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput
} from 'element-plus';

//引用element-plus 样式文件
import 'element-plus/dist/index.css';


//需要按需注册的组件
const registerComponents = [ElButton, ElMain, ElContainer, ElTabs, ElTabPane, ElIcon, ElRow, ElCol, ElForm, ElFormItem, ElInput];

const AutoComponents = (app: App) => {
    for (const el of registerComponents) {
        app.component(el.name, el);
    }
};

export default AutoComponents;
