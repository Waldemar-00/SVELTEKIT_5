<script>
    let {data, form} = $props()
    $inspect(form)
    // let login = $state(false)
</script>
<h1>{data.form.title}</h1>
{#if form?.success}
    <h2>Success {form?.event} </h2>
    {:else if form?.age}
    <h2 color='red'>Is age{form?.age}? {form?.message}</h2>
    {:else}
    <h2 color='red'>Write YOUR data</h2>
{/if}
<form method="POST" action="?/register">
    <input type="text" name='name' placeholder="name" required value={form?.name}>
    <input type="text" name="email" placeholder="email" required value={form?.email}>
    <input type="number" name="age" placeholder="age" value={form?.age}>
    <!-- <button formaction={login ? '?/login' : "?/register"}>Login</button> -->
    <button formaction="?/register">Register</button>
    <button formaction='?/login'>Login</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.3rem;
    }
    form input {
        padding: 0.7rem 1.5rem 0.7rem 0.7rem;
    }
    button {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border-color: red;
        background-color: #fff;
        color: red;
        cursor: pointer;
        font-weight: bold;
    }
</style>