<script>
    import { page } from "$app/stores";
    $:routeName = $page.url.pathname;
   
</script>

<div class="Navbar">
    <div class="Navbar_logo">
        <img src="./marsf.png" alt="" style="height: 50px;" />
        <h2
            style="margin: 0; padding: 0; color: #27077D ; font-family: monospace;"
        >
            <a href="./" style="text-decoration: none; color: #aa00ff;">deval.me</a>
        </h2>
    </div>
    <div class="Navbar_links">
        {#if routeName == "/ai"}
            <a class="links" id="vcolour" href="./ai">AI Models</a>
            <a class="links" href="./filem">File Manipulations</a>
            <a class="links" href="./resume">Resume</a>
        {:else if routeName == "/filem"}
            <a class="links" href="./ai">AI Models</a>
            <a class="links" id= "vcolour" href="./filem">File Manipulations</a>
            <a class="links" href="./resume">Resume</a>
        {:else if routeName == "/resume"}
            <a class="links" href="./ai">AI Models</a>
            <a class="links" href="./filem">File Manipulations</a>
            <a class="links"  id="vcolour"  href="./resume">Resume</a>
        {:else}
            <a class="links" href="./ai">AI Models</a>
            <a class="links" href="./filem">File Manipulations</a>
            <a class="links" href="./resume">Resume</a>
        {/if}
    </div>
</div>

<style>
    .Navbar {
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 5px;
        border-bottom: 3.5px solid #aa00ff;
        
        background-color: rgba(0, 0, 0, 0.90)    }
    .Navbar_links {
        display: flex;
        margin-right: 10vw;
    }
    .Navbar_logo {
        display: flex;
        align-items: end;
        margin-left: 8vw;
        flex-grow: 1;
    }
    .links {
        font-family: monospace;
        font-size: large;
        margin-left: 20px;
        margin-right: 20px;
        font-weight: bold;
        color: rgb(0, 210, 105);
        text-decoration: none;
    }
    #vcolour {
        color: #aa00ff;
        text-decoration: underline;
    }
</style>
