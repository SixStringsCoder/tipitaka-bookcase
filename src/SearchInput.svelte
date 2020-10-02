<script lang="ts">
  export let searchQuery: string = "";
  export let searchResults: ResultObj[] = [];

  interface ResultObj {
    id: string;
    name: string;
    basket: string;
    volume: string;
    sections: string[];
  }
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

  dl#results-list {
    background-color: hsla(41, 30%, 85%, 1);
    box-shadow: 0 0 5px black;
    width: 90%;
    padding: 3%;
    list-style: none;
    position: absolute;
    top: 65%;
  }

  dt {
    font-size: 1.3rem;
    font-weight: bold;
  }

  #results-list dd {
    font-size: 1.08rem;
    border-bottom: 1px solid black;
    margin: 10px 0;
    cursor: pointer;
  }

  /* Large devices (laptops/desktops, 768px and up) */
  @media only screen and (min-width: 768px) {
    #results-list dd {
      font-size: 1.3rem;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    input#search {
      width: 64%;
      height: 50px;
      font-size: 1.5rem;
    }

    .fa-search {
      top: 15px;
      right: 20%;
      font-size: 1.5rem;
    }

    dl#results-list {
      width: 50%;
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
    on:input />
  {#if searchResults.length > 0}
    <dl id="results-list">

      <dt>RESULTS:</dt>

      <!-- Search results go here as li tags-->
      {#each searchResults as searchResult}
        <dd>
          {#if !searchResult.id}
            {searchResult.name} (Suttanta Piṭaka)
          {:else}
            {searchResult.name} ({searchResult.basket} - Vol. {searchResult.volume})
          {/if}
        </dd>
      {/each}
    </dl>
  {/if}
</div>
