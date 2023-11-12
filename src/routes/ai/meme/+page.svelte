<script>
    
    function handleClick(e) {
		alert("I've been clicked!!!")
	}
</script>

<div class="body">
    <div class="upload">
        <label for="file-upload" class="select-files">Select Files</label>
        <input
            type="file"
            id="file-upload"
            class="custom-input"
            style="display: none;"
            accept=".jpg, .jpeg, .png"
            on:change={handleFileChange}
        />
    </div>
    <div class="filename">filename</div>
    <div class="display">
        <div class="image">
            <img src="/mars.svg" alt="" style="height: 100%" />
        </div>
        <div class="process">
            <button on:click={handleClick}>
                Press me
              </button>
            
        </div>
        <div class="result">result</div>
    </div>
</div>

<style>
    .select-files {
        color: #00ff3c;
        border: #00ff3c 3px solid;
        border-radius: 50px;
        padding: 1.5vh;
        font-size: 150%;
        font-weight: bolder;
        cursor: pointer;
    }
    .body {
        height: 100%;
        background-color: rgba(55, 55, 55, 0.4);
        display: flex;
        flex-direction: column;
        font-family: monospace;
    }

    .upload {
        height: 10vh;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .filename {
        color: #00ff3c;
        font-size: 12pt;
        width: 100%;
        overflow: hidden;
        height: 6vh;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .display {
        display: flex;
        background-color: aquamarine;
        flex: 1;
    }
    .image {
        background-color: rgb(0, 255, 38);
        width: 40vw;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .process {
        background-color: rgb(255, 136, 0);
        width: 20vw;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .result {
        background-color: rgb(0, 255, 38);
        width: 40vw;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
</style>
