<script>
</script>

<div class="body">
    <div class="container">
        <div class="item item1">
            <a href="jp/j2p" class="links">
                <div class="name">
                    
                    <span>
                        <h1>JPG to PNG</h1>
                    </span>
                </div>
            </a>
            
        </div>
        <div class="item item2">
            <a href="jp/p2j" class="links">

                <div class="name">
                    
                    <span>
                        <h1>PNG to JPG</h1>
                    </span>
                </div>
            </a>
            
        </div>
    </div>
</div>

<style>
    .body {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: rgba(55, 55, 55, 0.4);
    }
    .container {
        display: grid;
        grid-template-rows: 80px 80px;
        grid-template-columns: 25vw 25vw;
        grid-gap: 24px;
    }
    h1 {
        color: wheat;
        font-family: monospace;
        padding: 0;
        margin: 0;
    }
    .item {
        border: 3.5px solid #aa00ff;
        border-radius: 10px;
        height: 100%;
        padding: 0;
        margin: 0;
        color: blue;
    }
    .name {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .links{
        text-decoration: none;
    }
</style>
