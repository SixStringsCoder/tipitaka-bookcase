<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";
  import Book from "./Book.svelte";

  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));

  const vinaya = tipitakaData.baskets.vinaya.books;
  const suttanta = tipitakaData.baskets.suttanta.books;
  const abhidhamma = tipitakaData.baskets.abhidhamma.books;

  let bookcaseCollection: string = tipitakaData.information.name;
  export let selectedBooks: string = "";
  $: console.log(selectedBooks);

  let selected: boolean = true;
  let blinking: boolean = true;
  let searchQuery: string = "";

  const findMenuItem = () => console.log(selectedBooks);
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
  }
</style>

<header>
  <h1 class="bookshelf-heading">{bookcaseCollection}</h1>
</header>

<section class="bookcase show-bookcase" id="tipitaka">
  {#each vinaya as { name, content, volume, collection }, i}
    <Book
      {name}
      {selected}
      {blinking}
      basket="Vinaya"
      {collection}
      counter={String(i + 1)} />
  {/each}

  {#each suttanta as { name, content, volume, collection }, i}
    <Book {name} basket="Suttanta" {collection} counter={String(i + 6)} />
  {/each}

  {#each abhidhamma as { name, content, volume, collection }, i}
    <Book {name} basket="Abhidhamma" {collection} counter={String(i + 46)} />
  {/each}
</section>
