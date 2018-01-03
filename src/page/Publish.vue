<template>
	<div class="editor-container">
		<UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
		<el-select v-model="value" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<el-button type="primary" @click="getUEContent">提交</el-button>
	</div>
</template>

<script>
	import UE from '../components/Ueditor.vue';
	export default {
		name: 'Publish',
		components: {
			UE
		},
		data() {
			return {
				defaultMsg: '',
				config: {
					initialFrameWidth: null,
					initialFrameHeight: 350
				},
				options: [{
					value: '1',
					label: '笔记'
				}, {
					value: '2',
					label: '收藏'
				}, {
					value: '3',
					label: '练习'
				}],
				value:''
			}
		},
		methods: {
			getUEContent() { // 获取内容方法
				let content = this.$refs.ue.getUEContent();
				this.$notify({
					title: '获取成功，可在控制台查看！',
					message: content,
					type: 'success'
				});
				console.log(content)
				//this.$refs.ue.setUEContent("动态数据");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.el-button {
		margin: 20px 0;
	}
</style>