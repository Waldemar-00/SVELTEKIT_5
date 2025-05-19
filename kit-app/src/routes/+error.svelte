<script>
	import { page } from '$app/state'
</script>
<h3>+error.svelte</h3>
<h1>Status: {page.status}</h1>
<h2>Error message: {page.error?.message}</h2>

<style>
	h3 {
		color: red;
	}
</style>