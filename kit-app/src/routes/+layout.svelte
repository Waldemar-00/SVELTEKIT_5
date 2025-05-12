<script>
    let {data, children} = $props()
    let keys = $derived(Object.keys(data).filter(k => k !== 'post'))
</script>

<header>
    {#each keys as key, index (key + index) }
        <a href="/{keys[index]}">{keys[index].toLocaleUpperCase()}</a>
    {/each}
</header>
{@render children()}
<h2>{data.post.title}</h2>

<style>
    header{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    a {
        text-decoration: none;
    }
</style>