<script>
    /**
     * @type {any[]}
     */
    let selectedFiles = [];
    let n;
    /**
     * @param {any} event
     */
    function handlefile(event) {
        console.log(event);
    }
    /**
     * @param {any} event
     */
    async function handleFileChange(event) {
        selectedFiles = [...event.target.files];
        try {
            const resolvedFiles = await Promise.all(selectedFiles);
            for (let fileIndex in resolvedFiles) {
                const file = resolvedFiles[fileIndex];

                const formData = new FormData();
                formData.append("file", file);
                const response = await fetch("http://127.0.0.1:8000/file", {
                    method: "POST",
                    body: formData,
                });
            }
            selectedFiles = [];
        } catch (error) {}
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
            <button
                on:click={() => {
                    console.log("Hello");
                }}
            >
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
