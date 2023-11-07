<script>

</script>

<div class="body">
    <div class="container">
        <div class="item item1">
            <div class="name">
                <h1>Meme Detector</h1>
            </div>
        </div>
        <div class="item item2">
            <div class="name">
                <h1>YOLO Model</h1>
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

    }
    h1{
        color: rgb(255, 255, 101);
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
        margin: 10px;
    }
    .name{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;    
    }
</style>