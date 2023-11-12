<script>
    /**
     * @type {any[]}
     */
    let selectedFiles = [];
    let n;
    let filename = '';
    /**
     * @param {any} event
     */
    async function handleFileChange(event) {
        selectedFiles = [...event.target.files];
        filename = selectedFiles[0].name;
    }
    async function processFile() {
        // if (selectedFiles) {
        //     try {
        //         const resolvedFiles = await Promise.all(selectedFiles);
        //         for (let fileIndex in resolvedFiles) {
        //             const file = resolvedFiles[fileIndex];

        //             const formData = new FormData();
        //             formData.append("file", file);
        //             const response = await fetch("http://127.0.0.1:8000/file", {
        //                 method: "POST",
        //                 body: formData,
        //             });
        //         }
        //         selectedFiles = [];
        //     } catch (error) {}
        // }
        console.log('clickerd')
    }
</script>

<div class="body">
    <div class="upload">
        <label for="file-upload" class="select-files">Select Files</label>
        <input
            type="file"
            id="file-upload"
            style="display: none;"
            accept=".jpg, .jpeg"
            on:change={handleFileChange}
        />
    </div>
    {#if filename.length > 0}
        <div class="filename">{filename}</div>
    {:else}
        <div class="filename"></div>
    {/if}

    <div class="display">
        <div class="image">
            <img src="/mars.svg" alt="" height="100%" width="100%"/>
        </div>
        <div class="process">
            <button class='pbutton'on:click={processFile}> Press me </button>
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
    .pbutton{
        color: #00ff3c;
        border: #00ff3c 3px solid;
        border-radius: 50px;
        padding: 1.5vh;
        font-size: 150%;
        font-weight: bolder;
        cursor: pointer;
        background-color: rgba(55, 55, 55, 0.4);
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
