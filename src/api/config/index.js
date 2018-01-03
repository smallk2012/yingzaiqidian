// 跨域配置
// config目录index.js
/*
 proxyTable: {
	'/api': {
		target: 'http://10.40.254.75', // 你接口的域名
		changeOrigin: true,
		pathRewrite: {                
            '^/api': ''
        }
	}
}*/
//build目录utils.js配置
/*
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    publicPath: '../../', //css背景路径
    fallback: 'vue-style-loader'
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}*/
//webpack.base.conf.js
/*
entry: {
    app: ["babel-polyfill", "./src/main.js"]//'./src/main.js'//解决IE es6兼容问题
}*/
//请求的配置文件
export default {
	baseURL : "/demo/ajax/jsonx.php",
	errback: function(err){
		let res = err.response;
		let obj = {};
		obj.code = -1000;
		obj.msg =  res.data;
		return obj;
	}
}
