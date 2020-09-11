<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";
  import Book from "./Book.svelte";

  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));

  const vinaya = tipitakaData.baskets.vinaya;
  const suttanta = tipitakaData.baskets.suttanta;
  const abhidhamma = tipitakaData.baskets.abhidhamma;

  let bookcaseCollection: string = tipitakaData.information.name;
  export let selectedBooks: string = "";
  $: console.log(selectedBooks);

  let selected: boolean = true;
  let blinking: boolean = true;
  let searchQuery: string = "";

  const findMenuItem = () => console.log(selectedBooks);

  let modalOpen: boolean = false;

  const infoModal = () => {
    console.log(bookcaseCollection);
  };
</script>

<style>
  .bookcase {
    width: 90vw;
    display: none;
    grid-template-columns: repeat(auto-fill, minmax(43px, 1fr));
    grid-auto-flow: row;
    grid-gap: 20px 0;
    padding: 10px 0 0;
    /* margin-top: 12rem; */
    margin-bottom: 1rem;
    padding-bottom: 2px;
    background: #a1887f
      url(https://images.unsplash.com/photo-1585348697655-652a03ee7cc4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)
      center center;
    background-size: contain;
    border: 5px solid #3e2723;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  }

  .show-bookcase {
    display: grid;
  }

  header {
    margin-top: 10.5rem;
    padding: 0 0 0 3px;
  }

  h1.bookshelf-heading {
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: tahoma;
    font-weight: 100;
    padding: 5px 0;
    cursor: pointer;
  }
</style>

<header>
  <h1 class="bookshelf-heading" on:click={infoModal}>{bookcaseCollection}</h1>
</header>

<section class="bookcase show-bookcase" id="tipitaka">
  {#each vinaya.books as { id, content, volume, collection }, i}
    <Book
      {id}
      selected={selectedBooks === vinaya.id || selectedBooks === id}
      blinking={selectedBooks === vinaya.id || selectedBooks === id}
      basket={vinaya.id}
      {collection}
      counter={String(i + 1)} />
  {/each}

  {#each suttanta.books as { id, content, volume, collection }, i}
    <Book
      {id}
      selected={selectedBooks === suttanta.id || selectedBooks === collection || selectedBooks === id}
      blinking={selectedBooks === suttanta.id || selectedBooks === collection || selectedBooks === id}
      basket={suttanta.id}
      {collection}
      counter={String(i + 6)} />
  {/each}

  {#each abhidhamma.books as { id, content, volume, collection }, i}
    <Book
      {id}
      selected={selectedBooks === abhidhamma.id || selectedBooks === id}
      blinking={selectedBooks === abhidhamma.id || selectedBooks === id}
      basket={abhidhamma.id}
      {collection}
      counter={String(i + 46)} />
  {/each}
</section>
