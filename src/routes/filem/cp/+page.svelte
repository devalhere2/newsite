<script>

    /**
     * @type {any[]}
     */
     let selectedFiles = [];
    let n;
    $: finalimage = '';
    /**
     * @type {string | ArrayBuffer | null}
     */
    let avatar;
    let sliderValue = 75; 
   /**
     * @type {string | any[]}
     */
    $: filename = [];
    $: filesize = 0;
    $: filesize_str = '';
    /**
     * @param {any} event
     */
    async function handleFileChange(event) {
        selectedFiles = [...event.target.files];
        filename = selectedFiles.map(file => file.name)
    }
    async function processFile() {
        if (filename.length > 0) {
            try {
                const resolvedFiles = await Promise.all(selectedFiles);
                for (let fileIndex in resolvedFiles) {
                    const file = resolvedFiles[fileIndex];

                    const formData = new FormData();
                    formData.append("file", file);
                    
                    const response = await fetch(`http://127.0.0.1:8000/combine_pdf`, {
                        method: "POST",
                        body: formData,

                    }).then(function (response) {
                        return response.json();
                    });
                    finalimage = response.image;
                    // let a = document.createElement('a');
                    // a.href = finalimage;
                    // a.download = `${filename.split('.')[0]}-compressed.jpg`; 
                    // document.body.appendChild(a);
                    // a.click();
                    // document.body.removeChild(a);
                }
            } catch (error) {}
        }
        selectedFiles = [];
        filename = '';
        filesize_str = '';
    }
</script>

<div class="body">
    <div class="upload">
        <label for="file-upload" class="select-files">Select Files</label>
        <input
            type="file"
            id="file-upload"
            style="display: none;"
            accept=".pdf"
            multiple
            on:change={handleFileChange}
        />
    </div>
    {#if filename.length > 0}
        <div class="filename">
            <div style="flex: 1; padding-top: 4vh; font-style: italic; font-size: 16pt;">File Name: {filename} , Size: {filesize_str}</div>
            <div class="list">
               
            </div>
            
            
            
        </div>
        <button class="pbutton" on:click={processFile}>
            Process
        </button>
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
        background-color: rgba(55, 55, 55, 0.4);;
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
        width: 70%;
        height: 60vh;
        justify-content: center;
        align-items: center;
        display: flex;
        border: #00ff3c 3px solid; 
        border-radius: 25px; 
        flex-direction: column;
    }
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
