import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        "name": "/",
        "path": "/",
        "redirect": "/login"
    },
	{
		name: 'login',
		path: '/login',
		component: () => import('views/login/index.vue'),
	},
];

export default routes;
