<script lang="ts">
    import { page } from "$app/stores";
    // $:console.log($page);
    $: verifystatus = "";
    $: showupload = 'no';
    $: if ($page.form) {
        verifystatus = $page.form.user;
        if (verifystatus.length > 0 && verifystatus == "e") {
            showupload = 'yes';
        } 
        else if (verifystatus.length > 0 && verifystatus == "ne"){
            showupload = 'no';
        }
        else {
            showupload = 'no';
        }
    }
</script>

<div class="body">
    {#if showupload == 'no'}
    <form
        method="POST"
        class="body"
        enctype="multipart/form-data"
    
    >
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
    <div></div>
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
</style>
