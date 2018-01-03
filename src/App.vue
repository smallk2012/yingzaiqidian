<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	
	html,
	body,
	section,
	#app{
		position: relative;
		width: 100%;
		height: 100%;
	}

</style>