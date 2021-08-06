<script>
	import '../app.postcss';
	import TheNavbar from '$lib/TheNavbar.svelte';
</script>

<TheNavbar />
<div id="main">
	<div class="container mx-auto">
		<slot />
	</div>
</div>

<style>
	* {
		@apply text-base text-gray-900;
	}
	#main {
		background-color: #f4fbfa;
	}
</style>
