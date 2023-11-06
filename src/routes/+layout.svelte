<script>
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="mainbody">
    <div class="nav"><Navbar /></div>
    <div class="body"><slot /></div>
    <div class="foo"><Footer /></div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .mainbody {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .body{
        flex: 1;
    }
</style>
