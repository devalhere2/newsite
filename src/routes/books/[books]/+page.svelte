<script>
// @ts-nocheck
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    $: console.log($page.params.books);
    /**
     * @type {{ "": any; }[]}
     */
    let book = { data: [] };
    onMount(async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/getmethisbook?book=${$page.params.books}`
        );
        if (response.ok) {
            book = await response.json();
            console.log(book);
        } else {
            console.error("Error:", response.statusText);
        }
    });
    let pdfBase64 = "";
    function downloadpdf() {
        // Convert the base64 string to a Blob
        pdfBase64 = book.data.pdf_file;
        const pdfBlob = base64ToBlob(pdfBase64, "application/pdf");

        // Create a URL from the Blob
        const url = URL.createObjectURL(pdfBlob);

        // Create an a tag, set the href to the URL, and click it to download the file
        const link = document.createElement("a");
        link.href = url;
        link.download = book.data.pdf_file_name; // Set the file name here
        link.click();

        // Revoke the URL to free up memory
        URL.revokeObjectURL(url);
    }

    function base64ToBlob(base64, type = "") {
        const binStr = atob(base64);
        const len = binStr.length;
        const arr = new Uint8Array(len);

        for (let i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
        }

        return new Blob([arr], { type });
    }
        
</script>

<div class="body">
    <div class="mainbody">
        <div class="image">
            <img src={`data:image/png;base64,${book.data.image}`} alt={book.data.pdf_file_name} />
        </div>
        <div class="desc">
            <div class="name">
                <h1>
                    {book.data.pdf_file_name}
                </h1>
            </div>
            <div class="note">
                <h2>
                    Note:
                    <br />
                    {book.data.note}
                </h2>
            </div>
            <div class="download">
                <button on:click={downloadpdf} class="dbut">
                    Download Me !
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .body {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: monospace;
        background-color: rgba(55, 55, 55, 0.4);

    }
    .dbut{
        height: 50%;
        width: 50%;
        background-color: teal;
        border-radius: 10px;
        border: none;
        color: wheat;
        font-size: 20pt;
        font-weight: bold;
        font-family: monospace;
    }
    .mainbody {
        height: 80%;
        width: 80%;
        display: flex;
    }
    h1 {
        padding: 0;
        margin: 0;
        color: wheat;
    }
    h2 {
        padding: 0;
        margin: 0;
        color: wheat;
    }
    .desc {
        height: 100%;
        width: 70%;
        border: 3px solid wheat;
        border-radius: 25px;
        margin-left: 25px;
    }
    .image {
        height: 100%;
        width: 30%;
    }
    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .name {
        height: 20%;
        width: 100%;
        padding-left: 10px;
    }
    .note {
        height: 60%;
        width: 100%;
        padding-left: 10px;
    }
    .download {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
