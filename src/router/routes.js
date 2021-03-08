export const routes = [
    {
        path: '/',
        component: 'babel-login',
        pathComponent: '../views/babelLogin/babel-login.js',
        protected: false
    },
    {
        path: '/home',
        component: 'babel-home',
        pathComponent: '../views/babelHome/babel-home.js',
        protected: true
    }
]