import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        "name": "/",
        "path": "/",
        "redirect": "/main"
    },
	{
		name: 'login',
		path: '/login',
		component: () => import('views/login/index.vue'),
	},
    {
        name: 'main',
        path: '/main',
        component: () => import('@/layout/index.vue'),
    },
];

export default routes;
