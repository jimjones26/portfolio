<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft } from 'lucide-svelte';

	function handleBack() {
		goto('/');
	}
</script>

<header class="px-4 py-9">
	<nav class="flex items-center">
		<Button variant="ghost" on:click={handleBack}
			><ChevronLeft /><span class="font-sans text-base ml-4">Return Home</span></Button
		>
	</nav>
</header>
