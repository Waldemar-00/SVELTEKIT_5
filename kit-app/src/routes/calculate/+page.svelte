<script lang="ts">
    let {data} = $props()
    let a: number = $state(0)
    let b: number = $state(0)
    let result = $state(0)
    let fbResult = $state('')
    async function calculate(a: Number, b: number) {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({a, b})
        })
        result = await response.json()
    }
    async function fallBack(method: string) {
        const response = await fetch('/api', {
            method,
            headers: {
                'content-type': 'text/plain'
            },
            body: 'some text plain'
        })
        fbResult = await response.text()
    }
</script>
<h1>{data.calculate.title}</h1>
<h2>Result: {result ? result : 'no result'}</h2>
<h2>Fallback result: {fbResult ? fbResult : ''}</h2>
<div class=calculate>
    <input type=number bind:value={a}>
    <input type=number bind:value={b}>
    <button onclick={() =>calculate(a, b)}>Calculate</button>
    <button onclick={() => fallBack('PUT')}>Get fallback PUT</button>
    <button onclick={() => fallBack('PATCH')}>Get fallback PATCH</button>
    <button onclick={() => fallBack('DELETE')}>Get fallback DELETE</button>
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