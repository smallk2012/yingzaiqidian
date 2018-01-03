import api from '../../api';

//state定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。
//在组件里取值方法
/*
import { mapState } from 'vuex'

computed: { ...mapState({
		msg: state => state.demo.msg
	})
}
或
computed: {
  msg() {
    return this.$store.state.login.msg;
  }
}
 */
const state = {
	ver:'1.0.0',
	msg: 'YingZaiQiDian'
}
//actions和之前讲的Mutations功能基本一样，
//不同点是，actions是异步的改变state状态，而Mutations是同步改变状态。
//Actions 即是定义提交触发更改信息的描述，常见的例子有从服务端获取数据，
//在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。
//可以在组件中使用dispatch来发出 Actions。
/*
 this.$store.dispatch('fun')
 或
methods: { ...mapActions(['fun'])}
调用的地方使用this.fun();
 */

const actions = {
	fun({commit}) {
		console.log('在修改数据中')
		api.get("", {
			method: 'login'
		}, function(res) {
			console.log(res)
			console.log('修改完成')
			commit({
				type: 'getMsg', //对应mutation中的getMsg方法
				msg: '我是修改后的数据...'
			});
		})

	}
}
//getters从表面是获得的意思，可以把他看作在获取数据之前进行的一种再编辑,
//相当于对数据的一个过滤和加工。你可以把它看作store.js的计算属性。
//Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表：
//getters: {
// completedProjects: state => {
//  return state.projects.filter(project => project.completed).length
// }
//}
/*
computed: mapGetters([
'msg'
])
 */
const getters = {
	msg: function(state) {
		return state.msg;
	}
}
//这里的mutations是固定的写法，意思是改变的，所以你先不用着急，
//只知道我们要改变state的数值的方法，必须写在mutations里就可以了。
//调用 mutations 是唯一允许更新应用状态的地方。
const mutations = {
	getMsg(state, payload) {
		state.msg = payload.msg;
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}