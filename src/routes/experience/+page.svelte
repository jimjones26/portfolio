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
		<!-- <Button class="ml-auto mr-6"><Download class="h-4 ml-[-4px] mr-1" />CV</Button> -->
	</nav>
</header>
<section class="flex flex-col flex-1 mx-10 mb-10 mt-[-4px] overflow-hidden">
	<div class="flex flex-col flex-1 overflow-hidden">
		<h1 class="text-2xl font-medium text-orange-700">Experience</h1>
		<ul class="mt-6 flex-1 overflow-scroll">
			{#each data.experiences as item}
				<li class="mb-6 last:mb-0">
					<div class="flex flex-col">
						<h4 class="text-lg font-bold leading-5">{item.title}</h4>
						<h5>{item.companyName}</h5>
						<p class="text-sm font-light">{item.date}</p>
						<!-- <p class="mt-4">{item.shortDesc}</p> -->
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
