<script>
    import '../global.css'
    let {data, children} = $props()
    let keys = $derived(Object.keys(data).filter(k => k !== 'post'))
</script>

<header>
    {#each keys as key, index (key + index) }
    {#if key === "parent"}
        <a href="/{key}">{key.toLocaleUpperCase()}</a>
         <a href="/{key}/child">CHILD</a>
          <a href="/{key}/child/baby">BABY</a>
         {:else}
         <a href="/{key}">{key.toLocaleUpperCase()}</a>
    {/if}


    {/each}
</header>
{@render children()}


<style>
    header {
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