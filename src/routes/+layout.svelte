<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<div class="flex flex-col h-screen">
	<header>
		<Navbar />
	</header>
	<section class="flex-1">
		<slot />
	</section>
	<footer>footer</footer>
</div>
