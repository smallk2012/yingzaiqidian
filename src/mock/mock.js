import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './data';

export default {
	/**
	 * mock bootstrap
	 */
	bootstrap() {
		let mock = new MockAdapter(axios);
		//所有拦截请求都走该接口
		mock.onAny().reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let method = config.method.toUpperCase();
					let params = {};

					if(method === 'POST' || method === 'PUT') {
						params = config.data;
					} else {
						params = config.params;
					}
					//这里是本人接口结构,由方法作为字段，查询在data目录下对应数据
					//这里可以通过config.url调用接口地址来判断返回对应值
					if(params.method && data[params.method]) {
						resolve([200, data[params.method]]);
					}
					else{
						//调不到本地数据将返回500异常
						resolve([200, config.url || config.baseURL]);
					}			
				}, 1000);
			});
		});
	}
}