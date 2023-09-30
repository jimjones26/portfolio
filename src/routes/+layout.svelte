<script>
	import MainNav from '$lib/components/MainNav.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.postcss';
</script>

<div class="flex flex-col h-screen">
	<Header />
	<section class="flex-1 mx-10">
		<slot />
	</section>
	<MainNav />
</div>
