<script lang="ts">
    import type { PageProps } from './$types'
    let {data}: PageProps = $props()
</script>

<h1>{data.home.title.toUpperCase()}</h1>

<h2>Post: {data.post.title}</h2>