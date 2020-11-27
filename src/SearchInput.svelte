<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let searchQuery: string = "";
  export let searchResults: ResultObj[] = [];
  export let resultsHidden: boolean;

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
    /* position: relative; */
    /* display: flex;
    justify-content: center; */
  }

  form {
    display: flex;
    justify-content: center;
  }

  input#search {
    width: 80%;
    height: 40px;
    border: 1px solid grey;
    font-size: 1.2rem;
    font-family: Muli, sans-serif;
    font-weight: 100;
    padding: 0 10px;
    position: relative;
  }

  /* Style the search field */
/* form input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
} */

/* Style the submit button */
form button {
  width: 20%;
  /* background: hsl(204, 60%, 43%); */
  background: hsl(59, 70%, 25%);
  color: white;
  font-size: 1.3rem;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

  /* .fa-search {
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 15px;
    width: 10px;
    height: 10px;
  } */

  dl#results-list {
    background-color: hsla(41, 30%, 85%, 1);
    box-shadow: 0 0 5px black;
    width: 81%;
    padding: 3%;
    list-style: none;
    position: absolute;
    top: 87%;
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

  /* Style the caret/arrow */
  .caret {
    cursor: pointer;
    user-select: none; /* Prevent text selection */
  }

  /* Create the caret/arrow with a unicode, and style it */
  .caret::before {
    content: "\25B6";
    color: black;
    display: inline-block;
    margin-right: 6px;
    transform: rotate(90deg);
  }

  /* Rotate the caret/arrow icon when clicked on (using JavaScript) */
  .caret-up::before {
    transform: rotate(0deg);
  }

  .hide {
    height: 0px;
    overflow: hidden;
  }

  /* Large devices (laptops/desktops, 768px and up) */
  @media only screen and (min-width: 768px) {
    #results-list dd {
      font-size: 1.3rem;
    }

    dl#results-list {
      width: 83%;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    input#search {
      width: 48%;
      height: 50px;
      font-size: 1.5rem;
    }

    form button {
      width: 15%;
    }

    /* .fa-search {
      top: 15px;
      right: 20%;
      font-size: 1.5rem;
    } */

    dl#results-list {
      width: 52%;
      left: 21%;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    input#search {
      width: 49%;
      height: 50px;
      font-size: 1.5rem;
    }

    form button {
      width: 15%;
    }

    dl#results-list {
      width: 53%;
      left: 20.5%;
      top: 89%;
    }
  }
</style>

<div id="search-cont">
  
  <form on:submit|preventDefault={() => console.log(searchQuery)}>
    <input
      id="search"
      type="text"
      bind:value={searchQuery}
      placeholder="Search..."
      autocomplete="off"
      on:input />
      <button type="submit"><i class="fas fa-search" /></button>
    </form>  

  {#if searchResults.length > 0}
    <dl id="results-list" class:hide={resultsHidden}>

      <dt>
        <span
          class:caret-up={resultsHidden}
          class="caret"
          on:click={() => dispatch('hideResultsList')}>
          RESULTS:
        </span>
      </dt>

      <!-- Search results go here as dd tags-->
      {#each searchResults as searchResult}
        <dd
          data-vol={searchResult.volume}
          data-id={searchResult.id}
          data-basket={searchResult.basket}
          on:click={(e) => dispatch('searchResultClick', e)}>
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
