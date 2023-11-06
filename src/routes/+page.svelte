<script>
    import { page } from "$app/stores";
    import Mars from "../components/Mars.svelte";

    const routeName = JSON.stringify($page.route.id)
  
</script>
<Mars />
<style>
</style>