<script>
	import { page } from '$app/state'
	console.log(page)
</script>
<h1>Status: {page.status}</h1>
<h2>Error message: {page.error?.message}</h2>
