<script lang="ts">
	import { page } from '$app/stores'
	import Casing from '$lib/UI/PageContainers/Casing.svelte'
	import FallbackImage from '$lib/UI/Widgets/FallbackImage.svelte'
</script>

<Casing>
	<center>
		{$page.status}: {$page?.error?.message ?? 'No error message'}
	</center>
	<FallbackImage alt={`${$page.status}, ${$page?.error?.message ?? 'No error message'}`} />
</Casing>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
	}
</style>
