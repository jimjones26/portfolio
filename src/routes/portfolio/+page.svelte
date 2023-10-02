<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft, Download } from 'lucide-svelte';

	export let data: PageData;

	function handleBack() {
		goto('/');
	}
</script>

<header class="px-4 py-9">
	<nav class="flex items-center">
		<Button variant="ghost" class="mb-[1px]" on:click={handleBack}
			><ChevronLeft /><span class="font-sans text-base ml-4">Return Home</span></Button
		>
	</nav>
</header>
<section class="flex flex-col flex-1 mx-10 mb-10 mt-[-4px] overflow-hidden">
	<div class="flex flex-col flex-1 overflow-hidden">
		<h1 class="text-2xl font-medium text-orange-700">Portfolio</h1>
		<div class="mt-6 flex-1 overflow-auto">
			{#each data.portfolio as item}
				<div class="mb-6 last:mb-0 border rounded-md p-[2px] bg-white shadow">
					<a
						href="/portfolio"
						class="bg-white rounded w-full text-grey-darkest no-underline shadow-md"
						><img
							src={item.images[0].src}
							alt={item.images[0].alt}
							class="w-full block rounded h-48 object-cover object-left-top"
						/></a
					>
				</div>
			{/each}
		</div>
	</div>
</section>
