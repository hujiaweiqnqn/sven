import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/home',
      component: require('../components/home/home.vue')
    },
    {
      path: '/form',
      component: require('../components/form/form.vue')
    },
    {
      path: '/dashboard',
      component: require('../components/dashboard/dashboard.vue')
    },
    {
      path: '/dashboard1',
      component: require('../components/dashboard/dashboard1.vue')
    },
    {
      path: '/table',
      component: require('../components/table/table.vue')
    },
    {
      path: '/bootstrap',
       component:require('../components/bootstrap/bootstrap.vue')
    },
    {
      path: '/basicinfo',
      component: require('../page/syxt/companyinfo/basicinfo.vue')
    },
    {
      path: '/productinfo',
      component: require('../page/syxt/companyinfo/productinfo.vue')
    },
    {
      path: '/register',
      component: require('../page/register/register.vue')
    },
		{
			path: '/localUser',
			component: require('../page/user/localUserInfo.vue')
		},
    {
      path: '/landinfo',
      component: require('../page/syxt/companyinfo/landinfo.vue')
    },
		{
      path: '/manufacture',
      component: require('../page/syxt/ppm/manufacture.vue')
    },
		{
      path: '/fertilize',
      component: require('../page/syxt/ppm/fertilize.vue')
    },
		{
      path: '/pesticide',
      component: require('../page/syxt/ppm/pesticide.vue')
    },
		{
      path: '/weed',
      component: require('../page/syxt/ppm/weed.vue')
    },
		{
      path: '/pluck',
      component: require('../page/syxt/ppm/pluck.vue')
    },
		{
      path: '/inputFer',
      component: require('../page/syxt/ppm/inputFer.vue')
    },
		{
      path: '/inputPes',
      component: require('../page/syxt/ppm/inputPes.vue')
    }
  ]
});

export default router;
