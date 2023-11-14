<script>
    let note = "";
    let selectedFile;

    function handleFileChange(event) {
        selectedFile = event.target.files[0];
    }

    function handleSubmit() {
        // Handle form submission here
    }
</script>

<div class="body">
    <form class="body" on:submit|preventDefault={handleSubmit}>
        <label for="note">Note:</label>
        <textarea
            id="note"
            bind:value={note}
            rows="4"
            cols="50"
            placeholder="Add a Note"
        />

        <br />

        <label for="file">Upload PDF:</label>
        <input
            id="file"
            type="file"
            accept="application/pdf"
            on:change={handleFileChange}
            required
        />
        <br />
        <button type="submit">Submit</button>
    </form>
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
</style>
