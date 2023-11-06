<script>
    import { page } from "$app/stores";
    import Mars from "../components/Mars.svelte";

    const routeName = JSON.stringify($page.route.id)
  
</script>
<body>
    <Mars />
    <h1>Hi</h1>
    <h1>{routeName}</h1>

</body>

<style>
    
</style>