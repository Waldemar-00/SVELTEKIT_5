<script>
    let form = $state()
    let {data} = $props()
    /**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
    let timeout
    /**
	 * @param {any} e
	 */
    function lookUpChar(e) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            form?.requestSubmit()
        }, 500);
    }
</script>

<h1>{data.search.title}</h1>

<form action="/search" bind:this={form} data-sveltekit-keepfocus>
    <input type="text" placeholder="search" name='q' oninput={lookUpChar} >
</form>
{#each data.result as result, index (result + index)}
    <h2><a href={result}>{result}</a></h2>
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