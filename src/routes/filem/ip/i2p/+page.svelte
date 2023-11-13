<script>
    // @ts-nocheck

    /**
     * @type {any[]}
     */
    let selectedFiles = [];

    /**
     * @type {string | ArrayBuffer | null}
     */

    /**
     * @type {string | any[]}
     */
    $: filenames_list = [];
    $: isLoading = false;

    $: filesize_str = "";
    /**
     * @param {any} event
     */
    async function handleFileChange(event) {
        selectedFiles = [...event.target.files].filter((file) => {
            const ext = file.name.split(".").pop().toLowerCase();
            return (
                (ext === "jpg" || ext === "jpeg" || ext === "png") &&
                file.size <= 10000000
            );
        });
        filenames_list = selectedFiles.map((file) => file.name);
        event.target.value = null;
    }
    function moveUp(index) {
        if (index > 0) {
            [selectedFiles[index - 1], selectedFiles[index]] = [
                selectedFiles[index],
                selectedFiles[index - 1],
            ];
            [filenames_list[index - 1], filenames_list[index]] = [
                filenames_list[index],
                filenames_list[index - 1],
            ];
        }
    }

    function moveDown(index) {
        if (index < selectedFiles.length - 1) {
            [selectedFiles[index + 1], selectedFiles[index]] = [
                selectedFiles[index],
                selectedFiles[index + 1],
            ];
            [filenames_list[index + 1], filenames_list[index]] = [
                filenames_list[index],
                filenames_list[index + 1],
            ];
        }
    }

    async function processFile() {
        if (filenames_list.length > 0) {
            isLoading = true;
            try {
                const formData = new FormData();
                selectedFiles.forEach((file, index) => {
                    formData.append("files", file);
                });

                const response = await fetch(
                    `http://127.0.0.1:8000/images_to_pdf`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "combined.pdf";
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                } else {
                    console.error("Upload failed");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        selectedFiles = [];
        filenames_list = "";
        filesize_str = "";
        isLoading = false;
    }
</script>

<div class="body">
    <div class="upload">
        <label for="file-upload" class="select-files">Select Files</label>
        <input
            type="file"
            id="file-upload"
            style="display: none;"
            accept=".png, .jpeg, .jpg "
            multiple
            on:change={handleFileChange}
        />
    </div>
    {#if isLoading}
        <div class="filenames">
            <h1 class="processing">Processing Files ...</h1>
        </div>
    {:else}
        <div class="filenames">
            {#each filenames_list as file, index}
                <div class="file">
                    <div class="name">{file}</div>
                    <div class="seq">
                        <button class="seqb" on:click={() => moveUp(index)}
                            >+</button
                        >
                        <div class="seqn">{index + 1}</div>

                        <button class="seqb" on:click={() => moveDown(index)}
                            >-</button
                        >
                    </div>
                </div>
            {/each}
        </div>
        <button class="pbutton" on:click={processFile}> Process </button>
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
    .file {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 96%;
        padding: 1vh;
        margin: 1vh;
        border: #bf00ff 3px solid;
        border-radius: 25px;
    }
    .name {
        width: 84%;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
        display: flex;
        align-items: center;
    }
    .seq {
        width: 16%;
        justify-content: center;
        align-items: center;
        display: flex;
        border-left: #00ff3c 3px solid;
    }
    .seqn {
        margin: 0 10px;
    }
    .seqb {
        background-color: rgba(55, 55, 55, 0.4);
        border: #00ff3c 3px solid;
        border-radius: 25px;
        color: #00ff3c;
        width: 50px;
        height: 30px;
        cursor: pointer;
    }
    .processing {
        color: #ddff00;
        font-size: 24pt;
        font-weight: bolder;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        font-family: monospace;
        margin: 0;
        padding: 0;
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
    .filenames {
        color: #00ff3c;
        font-size: 12pt;
        width: 70%;
        height: 60vh;
        justify-content: flex-start;
        align-items: flex-start;
        display: flex;
        border: #00ff3c 3px solid;
        border-radius: 25px;
        flex-direction: column;
        overflow: auto;
    }
    .filenames::-webkit-scrollbar {
        width: 10px; /* width of the entire scrollbar */
    }

    .filenames::-webkit-scrollbar-track {
        background: #ff000006;
        border-radius: 5px; /* color of the tracking area */
    }

    .filenames::-webkit-scrollbar-thumb {
        background: #aa2ded;
        border-radius: 5px; /* color of the scroll thumb */
    }

    .filenames::-webkit-scrollbar-thumb:hover {
        background: #555; /* color of the scroll thumb when hovering */
    }
</style>
