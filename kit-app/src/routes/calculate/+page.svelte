<script lang="ts">
    let {data} = $props()
    let a: number = $state(0)
    let b: number = $state(0)
    let result = $state(0)
    async function calculate(a: Number, b: number) {
        const response = await fetch('/calculate/api', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({a, b})
        })
        result = await response.json()
    }
</script>
<h1>{data.calculate.title}</h1>
<h2>Result: {result ? result : 'no result'}</h2>
<div class=calculate>
    <input type=number bind:value={a}>
    <input type=number bind:value={b}>
    <button onclick={() =>calculate(a, b)}>Calculate</button>
</div>
<style>
    .calculate {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
    .calculate input, button {
        padding: 0.5rem;
    }
</style>