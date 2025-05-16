<script lang="ts">
    import type { PageProps } from './$types'
    let {data}: PageProps = $props()
</script>

<h1>{data.home.title.toUpperCase()}</h1>
{#if data.post.length}
    {#each data.post as post, index (data.post + index) }
        <div>{post.title}</div>
    {/each}
    {:else}
        <h2>Post: {data.post.title}</h2>
{/if}