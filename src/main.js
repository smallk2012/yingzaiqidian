import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import api from './api'
import Mock from './mock'
import store from './vuex/store'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.prototype.$api = api

Mock.bootstrap();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})