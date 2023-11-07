<script>
</script>

<div class="body">
    <div class="container">
        <div class="item item1">
            <div class="name">
                <span>
                    <img src="/meme.png" alt="" style="height: 50px; margin-right: 10px;"/>
                </span>
                <span>
                    <h1>Meme Detector</h1>
                </span>
            </div>
        </div>
        <div class="item item2">
            <div class="name">
                <span>
                    <img src="/yolo.png" alt="" style="height: 40px; margin-right: 10px;"/>
                </span>
                <span>
                    <h1>YOLO Model</h1>
                </span>
            </div>
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
</style>
