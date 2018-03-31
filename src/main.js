import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

 Vue.use(VueRouter);
 Vue.use(VueResource);
let app = Vue.extend(App);
let router = new VueRouter({
	linkActiveClass: 'active'
});
router.map({
	'/goods': {
		component: goods
	}
});
router.map({
	'/ratings': {
		component: ratings
	}
});
router.map({
	'/seller': {
		component: seller
	}
});

router.start(app, '#app');
router.go('/goods');

// 然后定义路由(routes)，components还可以是Vue.extend()创建的
/* const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
const router = new VueRouter({routes});
 const app = new Vue({
  el: '#app',
  router
}); */
