<script>
    // @ts-nocheck
    let selectedFiles = [];
    let n;
    $: finalimage = "";

    let avatar;
    let sliderValue = 75;
    $: filename = "";
    $: filesize = 0;
    $: filesize_str = "";

    async function handleFileChange(event) {
        selectedFiles = [...event.target.files];
        filename = selectedFiles[0].name;
        filesize = selectedFiles[0].size;
        filesize = filesize / 1000;
        filesize_str = filesize.toFixed(1) + " KB";
        event.target.value = null;
    }
    async function processFile() {
        if (filename.length > 0) {
            try {
                const resolvedFiles = await Promise.all(selectedFiles);
                for (let fileIndex in resolvedFiles) {
                    const file = resolvedFiles[fileIndex];

                    const formData = new FormData();
                    formData.append("file", file);

                    const response = await fetch(
                        `http://127.0.0.1:8000/compress_image?quality=${sliderValue}`,
                        {
                            method: "POST",
                            body: formData,
                        }
                    ).then(function (response) {
                        return response.json();
                    });
                    finalimage = response.image;
                    let a = document.createElement("a");
                    a.href = finalimage;
                    a.download = `${filename.split(".")[0]}-compressed.jpg`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            } catch (error) {}
        }
        selectedFiles = [];
        filename = "";
        filesize_str = "";
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
        <div class="filename">
            <div
                style="flex: 1; padding-top: 10vh; font-style: italic; font-size: 16pt;"
            >
                File Name: {filename} , Size: {filesize_str}
            </div>
            <div class="compression">
                <input
                    type="range"
                    min="20"
                    max="100"
                    bind:value={sliderValue}
                />
                <p>Compression Quality: {sliderValue}</p>
            </div>
        </div>
        <button class="pbutton" on:click={processFile}> Process </button>
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
        background-color: rgba(55, 55, 55, 0.4);
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
    .pbutton {
        color: #ffffff;
        border: #ffffff 3px solid;
        border-radius: 50px;
        padding: 1.5vh;
        font-size: 150%;
        font-family: monospace;
        font-weight: bolder;
        cursor: pointer;
        background-color: rgba(55, 55, 55, 0.4);
        margin-top: 2vh;
    }
    .filename {
        color: #00ff3c;
        font-size: 12pt;
        width: 60%;

        height: 30vh;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        display: flex;
        border: #00ff3c 3px solid;
        border-radius: 25px;
        flex-direction: column;
    }
    .compression {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
