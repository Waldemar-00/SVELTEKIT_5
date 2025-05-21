<script>
    let {data} = $props()
    let gritting = $state(data.gritting)
</script>

<h4>Gritting page</h4>
<h1>{gritting} Users</h1>
<h2>YOU are on the start page!</h2>
<button onclick={() => gritting = "HELLO"}>Try change Gritting</button>
<style>
    h4 {
        color: red
    }
    button {
        padding: 1rem;
        background-color: #fff;
        border-color: blue;
        display: block;
        margin: 1rem auto;
        color: green;
        border-radius: 1rem;
        cursor: pointer;
    }

</style>