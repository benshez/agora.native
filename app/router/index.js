const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

const HomeView = require('../views/HomeView');
const LoginView = require('../views/LoginView');
const RegisterView = require('../views/RegisterView');
const NotFoundView = require('../views/NotFoundView');

const routes = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        description: 'Home'
      }
    },
    {
      path: '/login',
      component: LoginView,
      meta: {
        description: 'Login'
      }
    },
    {
      path: '/register',
      component: RegisterView,
      meta: {
        description: 'Register'
      }
    },
    {
      path: '*',
      component: NotFoundView,
      meta: {
        description: 'NotFound'
      }
    }
  ]
});

routes.replace('/');

module.exports = routes;
