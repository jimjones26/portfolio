<script lang="ts">
	import MainNavItem from './MainNavItem.svelte';

	const mainNavItems = [
		{ href: '/experience', label: 'Experience' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<footer>
	<nav class="flex flex-col">
		{#each mainNavItems as navItem}
			<MainNavItem {...navItem} />
		{/each}
	</nav>
</footer>
