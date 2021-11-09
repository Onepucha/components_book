import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/login',
            name: 'login',
            meta: {
                layout: 'empty'
            },
            component: () => import('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: {
                layout: 'empty'
            },
            component: () => import('../views/Register.vue')
        },
        {
            path: '/',
            name: 'home',
            meta: {
                layout: 'main',
                auth: true
            },
            component: () => import('../views/Home.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requireAuth = to.matched.some(record => record.meta.auth);

    if (requireAuth && !currentUser) {
        next('/login?massage=login');
    } else {
        next();
    }
});


export default router
