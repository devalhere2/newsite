<script>
// @ts-nocheck

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
    $: arrow = false;
    $: meme = 0;
    $: notmeme = 0;
    /**
     * @param {any} event
     */
    async function handleFileChange(event) {
        selectedFiles = [...event.target.files];
        filename = selectedFiles[0].name;
        arrow = false;
        displayimage();
    }
    function displayimage() {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFiles[0]);
        reader.onload = (e) => {
            // @ts-ignore
            avatar = e.target.result;
        };
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
                    meme = response.res[0][0];
                    notmeme = response.res[0][1];
                }
            } catch (error) {}
        }
        selectedFiles = [];

        arrow = true;
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

    <div class="display">
        <div class="image">
            <img src={avatar} alt="" height="80%" style="overflow: hidden;" />
        </div>
        <div class="process">
            {#if filename.length > 0 && arrow == false}
                <button class="pbutton" on:click={processFile}>
                    Process
                </button>
            {:else if arrow == true}
                <img src="/arrow.png" alt="" width="100%" />
            {:else}
                <div />
            {/if}
        </div>
        {#if arrow == true}
            <div class="result">
                {#if meme > notmeme}
                    <h1>This Image is a Meme with a Confidence of {meme.toFixed(3)}</h1>
                {:else}
                    <h1>
                        This Image is a Not a Meme with a Confidence of {notmeme.toFixed(3)}
                    </h1>
                {/if}
            </div>
        {:else}
            <div class="result" />
        {/if}
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
        width: 40vw;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    h1{
        color: rgb(156, 50, 255);
        font-style: italic;
    }
</style>
