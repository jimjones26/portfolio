<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.postcss';
</script>

<div class="flex flex-col h-screen">
	<Header />
	<slot />
</div>
