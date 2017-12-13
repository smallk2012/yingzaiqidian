var Home = Vue.extend({
	template: '#home',
	data: function() {
		return {
			list: [{
				title: "笔记",
				items: [{
					title: "我是一个笔记标题",
					postid: "86"
				}, {
					title: "我是一个笔记标题",
					postid: "86"
				}, {
					title: "我是一个笔记标题",
					postid: "86"
				}, {
					title: "我是一个笔记标题",
					postid: "86"
				}, {
					title: "我是一个笔记标题",
					postid: "86"
				}, {
					title: "我是一个笔记标题",
					postid: "86"
				}]
			}, {
				title: "收藏",
				items: [{
					title: "我是一个收藏标题",
					postid: "86"
				}, {
					title: "我是一个收藏标题",
					postid: "86"
				}, {
					title: "我是一个收藏标题",
					postid: "86"
				}, {
					title: "我是一个收藏标题",
					postid: "86"
				}, {
					title: "我是一个收藏标题",
					postid: "86"
				}, {
					title: "我是一个收藏标题",
					postid: "86"
				}]
			}, {
				title: "练习",
				items: [{
					title: "我是一个练习标题",
					postid: "86"
				}, {
					title: "我是一个练习标题",
					postid: "86"
				}, {
					title: "我是一个练习标题",
					postid: "86"
				}, {
					title: "我是一个练习标题",
					postid: "86"
				}, {
					title: "我是一个练习标题",
					postid: "86"
				}, {
					title: "我是一个练习标题",
					postid: "86"
				}]
			}],
			online: [{
				icon: "img/yd.jpg",
				title: "中国移动"
			}, {
				icon: "img/yd.jpg",
				title: "中国移动"
			}, {
				icon: "img/yd.jpg",
				title: "中国移动"
			}, {
				icon: "img/yd.jpg",
				title: "中国移动"
			}, {
				icon: "img/yd.jpg",
				title: "中国移动"
			}, {
				icon: "img/yd.jpg",
				title: "中国移动"
			}, {
				icon: "img/yd.jpg",
				title: "中国移动"
			}, {
				icon: "img/yd.jpg",
				title: "中国移动"
			}]
		}
	}
})
var List = Vue.extend({
	template: '#list',
	data: function() {
		return {
			list: [{
				title: "我是长长的西瓜啊",
				author: "smallk2010",
				time: "2017-05-01 15:40:33"
			}]
		}
	}
})
var Detail = Vue.extend({
	template: '#detail',
	data: function() {
		return {
			detail: {
				title: "我是长长的西瓜啊",
				author: "smallk2010",
				time: "2017-05-01 15:40:33",
				desc: "第一件爸爸妈妈的爱<br/>这一件礼物对于很多家长来说是太简单的礼物，因为，没有一个家长是不爱自己的孩子的。可是，孩子们要的爱，不是家长们取代一切的疼爱，不是一切都百依百顺的溺爱，不是一切都以孩子为中心的宠爱，不是拼命搞智力投资的“关爱”。孩子们要家长把对孩子的爱表达出来，还要家长给他们完整的爱。<br/>孩子临睡前的一个吻，孩子遇到困难时轻拍他们肩头的手，孩子受了委屈时一个温暖的怀抱，孩子回家时的一个问候，还有一句“爸爸妈妈爱你”的表达。<br/>这是我们采访的数十名孩子表示出的想要的爱的方式。还有一些孩子提出：“爸爸妈妈为什么不能在一起，一起来爱我?”<br/>专家建议：中国是一个讲究深沉含蓄的国家，长辈都不愿意表白自己对孩子的爱，可是，孩子们需要家长把爱说出来做出来。另一方面：这些年来一直都居高不下的离婚率又让很多孩子失去了完整的爱，作为家长应该创造机会让孩子能尽量享受完整的爱。"
			}
		}
	}
})
var Login = Vue.extend({
	template: '#login',
	data: function() {
		return {
			acc:"",
			psw:""
		}
	}
})
var Main = Vue.extend({
	template: '#main',
	data: function() {
		return {
			logined: false
		}
	}
})

var routes = [{
		path: '/',
		component: Main,
		children: [{
				path: '',
				name: 'Home',
				component: Home
			}, {
				path: 'list',
				name: '列表',
				component: List
			},
			{
				path: 'detail/:id',
				name: '详情',
				component: Detail
			}
		]
	},
	{
		path: '/login',
		name: '登录',
		component: Login
	},
	{
		path: '*',
		redirect: {
			path: ''
		}
	}
]

var router = new VueRouter({
	routes
})
router.beforeEach((to, from, next) => {
	next()
})

var app = new Vue({
	router
}).$mount('#app');