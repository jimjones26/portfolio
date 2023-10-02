<script>
	import { fly } from 'svelte/transition';
	import '../app.postcss';

	export let data;
</script>

<main class="flex h-screen w-screen overflow-hidden">
	{#key data.url}
		<div
			class="flex flex-col"
			in:fly={{ x: -200, duration: 300, delay: 300 }}
			out:fly={{ x: 200, duration: 300 }}
		>
			<slot />
		</div>
	{/key}
</main>
