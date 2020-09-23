<script lang="ts">
  export let searchQuery: string = "";

  const findQueryItem = () => console.log(searchQuery);
</script>

<style>
  #search-cont {
    width: 91%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  input#search {
    width: 100%;
    height: 35px;
    font-size: 1.2rem;
    font-family: Muli, sans-serif;
    font-weight: 100;
    padding: 0 10px;
    position: relative;
  }

  .fa-search {
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 15px;
    width: 10px;
    height: 10px;
  }

  #results-list {
    background-color: tan;
    width: 400px;
    padding: 0 10px;
    list-style: none;
    position: absolute;
    top: 20px;
  }

  #results-list li {
    font-size: 1.3rem;
    border-bottom: 1px solid black;
    margin: 10px 0;
    cursor: pointer;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    input#search {
      width: 63%;
      height: 50px;
      font-size: 1.5rem;
    }

    .fa-search {
      top: 15px;
      right: 185px;
      font-size: 1.5rem;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
</style>

<div id="search-cont">
  <i class="fas fa-search" />
  <input
    id="search"
    type="text"
    bind:value={searchQuery}
    placeholder="Search..."
    on:input={findQueryItem} />
  <ul id="results-list">
    <!-- Search results go here as li tags-->
  </ul>
</div>
