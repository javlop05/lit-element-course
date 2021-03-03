export const routes = [
    {
        path: '/',
        component: 'babel-login',
        action: () => import('../views/babelLogin/babel-login')
    },
    {
        path: '/home',
        component: 'babel-home',
        action: () => import('../views/babelHome/babel-home')
    },
]