import axios from 'axios'
import config from './config'

// 自定义判断元素类型JS
function toType(obj) {
	return({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
//参数过滤函数,清除值左右空格
function filterNull(o) {
	for(var key in o) {
		if(o[key] === null) {
			delete o[key]
		}
		if(toType(o[key]) === 'string') {
			o[key] = o[key].trim()
		} else if(toType(o[key]) === 'object') {
			o[key] = filterNull(o[key])
		} else if(toType(o[key]) === 'array') {
			o[key] = filterNull(o[key])
		}
	}
	return o
}
//封装方法
function apiAxios(method, url, params, callback) {
	params = params ? filterNull(params) : params;
	url = url || '';
	axios({
			method: method,
			url: url,
			data: method === 'POST' || method === 'PUT' ? params : null,
			params: method === 'GET' || method === 'DELETE' ? params : null,
			baseURL: config.baseURL,
			withCredentials: false
		})
		.then(function(res) {
			callback && callback(res.data);
		})
		.catch(function(err) {
			callback && callback(config.errback(err));
		})
}

export default {
	get: function(url, params, callback) {
		return apiAxios('GET', url, params, callback)
	},
	post: function(url, params, callback) {
		return apiAxios('POST', url, params, callback)
	},
	put: function(url, params, success, failure) {
		return apiAxios('PUT', url, params, success, failure)
	},
	delete: function(url, params, success, failure) {
		return apiAxios('DELETE', url, params, success, failure)
	}
}