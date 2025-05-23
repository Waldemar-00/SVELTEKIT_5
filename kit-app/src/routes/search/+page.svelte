<script>
    // import {page} from '$app/state'
    let {data} = $props()
    // let q = $state(page.url.searchParams.get('q'))
</script>

<h1>{data.search.title}</h1>

<form action="?/search">
    <input type="text" placeholder="search" name='q' >
</form>
{#each data.result as result, index (result + index)}
    <h2>{result}</h2>
{/each}
<style>
    form{
        display: flex;
        justify-content: center;
    }
    input {
        padding: 0.7rem 1.5rem 0.7rem 0.7rem;

    }
</style>