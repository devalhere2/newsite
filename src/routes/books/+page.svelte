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
            <div class="item item1">
               <h1>Hello</h1>
            </div>
            <div class="item item2">
                <h1>Hello</h1>
            </div>
            <div class="item item1">
                <h1>Hello</h1>
             </div>
             <div class="item item2">
                 <h1>Hello</h1>
             </div>
             <div class="item item1">
                <h1>Hello</h1>
             </div>
             <div class="item item2">
                 <h1>Hello</h1>
             </div>
             <div class="item item1">
                <h1>Hello</h1>
             </div>
             <div class="item item2">
                 <h1>Hello</h1>
             </div>
             
             
        </div>
    </div>

</div>


<style>
    .search {
        margin-top: 10vh;
        margin-bottom: 50px;
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
        grid-template-rows: 200px 200px ;
        grid-template-columns:  16vw 16vw 16vw 16vw 16vw;
        grid-gap: 24px;
    }
    
    .item {
        border: 3.5px solid #aa00ff;
        border-radius: 10px;
        height: 100%;
        padding: 0;
        margin: 0;
        color: blue;
    }
    h1 {
        color: wheat;
    }
    
</style>
