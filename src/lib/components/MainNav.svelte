<script lang="ts">
	import MainNavItem from './MainNavItem.svelte';

	const mainNavItems = [
		{ href: '/experience', label: 'Experience' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<nav class="flex flex-col p-10">
	{#each mainNavItems as navItem}
		<MainNavItem {...navItem} />
	{/each}
</nav>
