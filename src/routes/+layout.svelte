<script>
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
</script>
<svelte:head>
<title>deval.me</title>
</svelte:head>
<div class="mainbody">
    <div class="nav"><Navbar /></div>
    <div class="body" ><slot /></div>
    <div class="foo"><Footer /></div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    .mainbody {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .body{
        flex: 1;
        background-color: black;
        position: relative;
    }
    
      
</style>
