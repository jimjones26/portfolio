<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft } from 'lucide-svelte';

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
		<h1 class="text-2xl font-medium text-orange-700">Experience</h1>
		<ul class="mt-6 flex-1 overflow-scroll">
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
			<li>Hello</li>
		</ul>
		<!-- <p class="mt-6">
			I would love to talk about helping you with your UX integration needs, or to discuss a full
			stack development role.
		</p> -->
	</div>
</section>
<!-- {JSON.stringify(data.experiences[0])} -->
