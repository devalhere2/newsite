<script>
    let query = "";

    async function searchb() {
        const response = await fetch(
            `http://127.0.0.1:8000/getbooks`
        );
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error("Error:", response.statusText);
        }
    }
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
        <div class="container">
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image"><h1>image</h1></div>
                <div class="title"><p>Title</p></div>
            </div>
            <div class="item">
                <div class="image">
                    <img src="marsf.png" alt="" width="80%" />
                </div>
                <div class="title"><p>Title</p></div>
            </div>
        </div>
    </div>
    <div class="pages">
        <div><button class="bn">← Back</button></div>
        <div><button class="bn">Next →</button></div>
    </div>
</div>

<style>
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
    .container {
        display: grid;
        grid-template-rows: 30vh 30vh;
        grid-template-columns: 14vw 14vw 14vw 14vw 14vw 14vw;
        grid-gap: 24px;
    }

    .item {
        border: 3.5px solid #aa00ff;
        border-radius: 10px;
        height: 100%;
        padding: 0;
        margin: 0;
        color: blue;
        display: flex;
        flex-direction: column;
    }
    h1 {
        color: wheat;
    }
    .pages {
        display: flex;
        margin-top: 2vw;
    }
    .image {
        border: 2px solid red;
        height: 100%;
        margin-top: 1vw;
        margin-left: 1vw;
        margin-right: 1vw;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }
</style>
