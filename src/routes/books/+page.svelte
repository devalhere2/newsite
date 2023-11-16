<script>
// @ts-nocheck
    import { onMount } from "svelte";

    /**
     * @type {{ "": any; }[]}
     */
    let books = { data: [] };
    $: start = 0;
    function handleNextClick() {
        if (books.data.length < 4) {
            return;
        }
        start += 4;
        searchb();
    }
    function handleBackClick() {
        if (start > 0) {
            start -= 4;

            searchb();
        }
    }
    async function searchb() {
        const response = await fetch(
            `http://127.0.0.1:8000/get_books?start=${start}`
        );
        if (response.ok) {
            books = await response.json();
         
        } else {
            console.error("Error:", response.statusText);
        }
    }
    onMount(searchb);
</script>

<div class="body">
    <div class="search">
        <form id="form">
            <input
                type="search"
                id="query"
                name="q"
                placeholder="Search..."
                class="searchbar"
            />
            <button on:click|preventDefault={searchb} class="searchbutton"
                >Search</button
            >
            <a href="/upload"><button class="uploadbutton">Upload</button></a>
        </form>
    </div>
    <div class="bookbody">
        {#each books.data as book (book.pdf_file_name)}
            <div class="box">
                <a href={`books/${book.pdf_file_name}`} class="booklinks">
                    <div class="image">
                        <img
                            src={`data:image/png;base64,${book.image}`}
                            alt={book.pdf_file_name}
                        />
                    </div>

                    <div class="title">
                        <h2>{book.pdf_file_name}</h2>
                    </div>
                </a>
            </div>
        {/each}
    </div>
    <div class="pages">
        <div><button class="bn" on:click={handleBackClick}>← Back</button></div>
        <div><button class="bn" on:click={handleNextClick}>Next →</button></div>
    </div>
</div>

<style>
    .bookbody {
        flex: 1;
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .booklinks {
        
        text-decoration: none; 
        display: flex; 
        flex-direction: column;
        width: 100%;
        flex: 1;
    }
    .box {
        width: 22%;
        display: flex;
        flex-direction: column;
        margin: 0 10px; /* Add some margin between the boxes */
        border: 3px solid rgb(147, 71, 235);
        border-radius: 10px;
    }

    .image {
        flex-grow: 1;
        display: flex;

        align-items: center;
        justify-content: center;
        padding: 10px 10px;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .title {
        margin-top: auto;
        padding: 0.6em 0; /* Adjust based on your needs */
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: black; /* Set a contrasting color for your text */
        font-size: 16px; /* Increase the font size */
        display: block;
        /* background-color: red; */
    }

    h2 {
        padding: 0 10px;
        margin: 0;
        color: wheat;
    }
    .searchbar {
        width: 30vw;
        background-color: black;
        border: none;
        height: 30px;
        border-radius: 20px;
        color: aqua;
        padding: 12px 20px;
    }
    .bn {
        margin-left: 2vw;
        margin-right: 2vw;
        height: 30px;
        background-color: black;
        border: 3px solid rgb(255, 255, 0);
        border-radius: 25px;
        width: 100px;
        color: rgb(255, 255, 0);
        font-weight: bold;
        font-size: 10pt;
        cursor: pointer;
    }
    .searchbutton {
        height: 30px;
        background-color: black;
        border: 3px solid aqua;
        border-radius: 25px;
        width: 100px;
        color: aqua;
        font-weight: bold;
        font-size: 10pt;
        cursor: pointer;
    }
    .uploadbutton {
        height: 30px;
        background-color: black;
        border: 3px solid rgb(47, 255, 0);
        border-radius: 25px;
        width: 100px;
        color: rgb(47, 255, 0);
        font-weight: bold;
        font-size: 10pt;
        cursor: pointer;
    }
    ::placeholder {
        color: white;
        opacity: 1; /* Firefox */
        font-weight: bold;
    }

    ::-ms-input-placeholder {
        /* Edge 12 -18 */
        color: white;
        font-weight: bold;
        padding-left: 10px;
    }
    .search {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .body {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: top;
        align-items: center;
        background-color: rgba(55, 55, 55, 0.4);
    }

    .pages {
        display: flex;
        margin-top: 2vw;
        margin-bottom: 2vw;
    }
</style>
