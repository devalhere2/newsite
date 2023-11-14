<script>
    let username = '';
    let password = '';
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
        <label for="username">Username:</label>
        <input id="username" bind:value={username} type="text" required>
        <br>
        <label for="password">Password:</label>
        <input id="password" bind:value={password} type="password" required>
<br>
        <label for="file">Upload PDF:</label>
        <input id="file" type="file" accept="application/pdf" on:change={handleFileChange} required>
<br>
        <button type="submit">Submit</button>
    </form>
</div>

<style>
    .body{
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