<script lang="ts">
    import { page } from "$app/stores";
    $: filename = "";
    $: verifystatus = "";
    $: showupload = "no";
    $: note = "";

    $: if ($page.form && $page.form.user) {
        verifystatus = $page.form.user;
        if (verifystatus.length > 0 && verifystatus == "e") {
            showupload = "yes";
        } else if (verifystatus.length > 0 && verifystatus == "ne") {
            showupload = "no";
        } else {
            showupload = "no";
        }
    }
    $:console.log($page.form)
    $: selectedFiles = [];

    async function handleFileChange(event) {
        selectedFiles = [...event.target.files].filter((file) => {
            const ext = file.name.split(".").pop().toLowerCase();
            return ext === "pdf";
        });
        filename = selectedFiles[0].name;
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
                        `http://127.0.0.1:8000/upload_books/?note=${note}`,
                        {
                            method: "POST",
                            body: formData,
                        }
                    );
                }
            } catch (error) {}
        }
        selectedFiles = [];
        filename = "";
        note = "";
    }
</script>

<div class="body">
    {#if showupload == "no"}
        <form method="POST" class="body" enctype="multipart/form-data">
            <label>
                Username:
                <input name="username" type="text" />
            </label>
            <label>
                Password
                <input name="password" type="password" />
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
    {:else}
        <div class="upload">
            <label for="file-upload" class="select-files">Select Files</label>
            <input
                type="file"
                id="file-upload"
                style="display: none;"
                accept=".pdf,"
                on:change={handleFileChange}
            />
        </div>
        {#if filename.length > 0}
            <div class="filename">
                <div
                    style="flex: 1; padding-top: 10vh; font-style: italic; font-size: 16pt;"
                >
                    File Name: {filename}
                </div>
            </div>
            <textarea bind:value={note} cols="50" rows="5" placeholder="Leave a Note Here."></textarea>
            <button class="pbutton" on:click={processFile}> Process </button>
        {:else}
            <div />
        {/if}
    {/if}
</div>

<style>
    .body {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        font-family: monospace;
        color: wheat;
        justify-content: center;
        align-items: center;
        background-color: rgba(55, 55, 55, 0.4);
        height: 100%;
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
</style>
