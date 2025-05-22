<script>
    import '../global.css'
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
</style>