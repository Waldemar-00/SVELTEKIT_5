<script>
	import { invalidate } from '$app/navigation'
    let {data} = $props()
    function getNextPost() {
        invalidate('get:newpost')
    }
</script>

<h1>{data.postXX.id}</h1>
<h2>{data.invalidate.title}</h2>
<button onclick={getNextPost}>
    get next post
</button>