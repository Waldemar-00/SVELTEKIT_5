<script>
    let {data} = $props()
    // let login = $state(false)
</script>
<h1>{data.form.title}</h1>

<form method="POST" action="?/register">
    <input type="text" name='name' placeholder="name" required>
    <input type="text" name="email" placeholder="email" required>
    <input type="number" name="age" placeholder="age">
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