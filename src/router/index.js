import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/page/Login'
import Home from '@/page/Home'
import Publish from '@/page/Publish'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: Home,
			children: [{
				path: '',
				name: '发布',
				component: Publish
			}]
		}, {
			path: '/login',
			name: '登录',
			component: Login
		},
		{
			path: '*',
			redirect: {
				path: '/'
			}
		}
	]
})