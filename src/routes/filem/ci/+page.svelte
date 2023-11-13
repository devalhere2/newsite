<script>

    /**
     * @type {any[]}
     */
     let selectedFiles = [];
    let n;

    /**
     * @type {string | ArrayBuffer | null}
     */
    let avatar;
    $: filename = "";

    /**
     * @param {any} event
     */
    async function handleFileChange(event) {
        selectedFiles = [...event.target.files];
        filename = selectedFiles[0].name;
 
    }
    async function processFile() {
        if (filename.length > 0) {
            try {
                const resolvedFiles = await Promise.all(selectedFiles);
                for (let fileIndex in resolvedFiles) {
                    const file = resolvedFiles[fileIndex];

                    const formData = new FormData();
                    formData.append("file", file);
                    const response = await fetch("http://127.0.0.1:8000/meme", {
                        method: "POST",
                        body: formData,
                    }).then(function (response) {
                        return response.json();
                    });
                 
                }
            } catch (error) {}
        }
        selectedFiles = [];
    }
</script>

<div class="body">
    <div class="upload">
        <label for="file-upload" class="select-files">Select Files</label>
        <input
            type="file"
            id="file-upload"
            style="display: none;"
            accept=".jpg, .jpeg, .png"
            on:change={handleFileChange}
        />
    </div>
    {#if filename.length > 0}
        <div class="filename">{filename}</div>
    {:else}
        <div />
    {/if}
</div>

<style>
    .body {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: blue;
        font-family: monospace;
        flex-direction: column;
    }
    .upload {
        height: 10vh;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .select-files {
        color: #00ff3c;
        border: #00ff3c 3px solid;
        border-radius: 50px;
        padding: 1.5vh;
        font-size: 150%;
        font-weight: bolder;
        cursor: pointer;
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
</style>
