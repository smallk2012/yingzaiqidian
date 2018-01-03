<template>
	<div id="app">
		<el-container>
			<el-header>
				<span class="title">后台管理系统</span>
			</el-header>
			<el-container>
				<el-aside>
					<el-menu default-active="publish" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-star-off"></i>
								<span slot="title">首页</span>
							</template>
							<el-menu-item index="login">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-document"></i>
								<span slot="title">资源管理</span>
							</template>
							<el-menu-item index="publish">资源发布</el-menu-item>
							<el-menu-item index="12">资源列表</el-menu-item>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">
								<i class="el-icon-document"></i>
								<span slot="title">作品管理</span>
							</template>
							<el-menu-item index="11">作品发布</el-menu-item>
							<el-menu-item index="22">作品列表</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				isCollapse: false
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="scss" >
	.el-menu {
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		.el-menu-item {
			position: relative;
			&:after {
				content: '';
				position: absolute;
				left: 20px;
				right: 0;
				bottom: 0;
				border-bottom: 1px solid #eee;
			}
			&:last-child {
				&:after {
					left: 0;
				}
			}
		}

		.el-submenu__title {
			border-bottom: 1px solid #eee;
		}
		.is-active .el-submenu__title {
			border-bottom-color: #eee;
		}
	}
	
	.el-header {
		background-color: #3388FF;
		color: #fff;
		line-height: 60px;
		.title {
			float: left;
		}
	}
</style>