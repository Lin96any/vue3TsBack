import {createRouter, createWebHistory} from 'vue-router';
import routes from './routes';
import {computed} from 'vue';
import {getLocalStore} from "@/localStorege";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach( (to, form, next) => {
    const token = computed(() => getLocalStore('token'))
    console.log(token.value)
    if (token.value) {
        if (to.path == "/login") {
            next('/')
        } else {
            next()
        }
    } else {
        if (to.path != "/login") {
            next('/login')
        }else{
            next()
        }
    }
});

export default router;
