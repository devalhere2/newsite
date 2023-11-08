<script>
</script>

<div class="body">
    <div class="search">
        <form id="form"> 
            <input type="search" id="query" name="q" placeholder="Search...">
            <button>Search</button>
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
                    <img src="marsf.png" alt="" width="80%">
                </div>
                <div class="title"><p>Title</p></div>
             </div>
             

        </div>
    </div>
    <div class="pages">
        <div><h1>Back</h1></div>
        <div style="margin-left: 20px;margin-right: 20px;"><h1>Pages</h1></div>
        <div><h1>Next</h1></div>
        
    </div>

</div>


<style>
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
    }
    .container {
        display: grid;
        grid-template-rows: 30vh 30vh ;
        grid-template-columns:  14vw 14vw 14vw 14vw 14vw 14vw ;
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
    }
    .image{
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
