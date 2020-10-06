<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Book from "./Book.svelte";

  const dispatch = createEventDispatcher();

  export let tipitakaData;

  /* BASKETS OBJECTS */
  const vinaya = tipitakaData.baskets.vinaya;
  const suttanta = tipitakaData.baskets.suttanta;
  const abhidhamma = tipitakaData.baskets.abhidhamma;

  /* SELECTION VALUE FROM MENU */
  export let selectedBooks: string = "";
  $: console.log(selectedBooks);

  /* ENABLES CSS HIGHLIGHTING WHEN BOOKS ARE SELECTED FROM MENU */
  let selected: boolean = true;
  let blinking: boolean = true;

  /* INPUT SEARCH TERM */
  let searchQuery: string = "";
  const findMenuItem = () => console.log(selectedBooks);

  interface Info {
    name: string;
    basket: string;
    division: string;
    collection: string;
    description: string;
    books: [Book];
    sections: [string];
    suttas: [string];
    links: [Links];
  }

  interface Links {
    id: string;
    link: string;
    label: string;
  }

  interface Book {
    id: string;
    name: string;
    translation: string;
    content: string;
  }

  export let bookshelfHeading;
  export let selectionHeading;
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
    background-image: repeating-linear-gradient(
      #d8c9b6,
      #a78d72 40%,
      #8c6754 60%
    );
    /* background: #a1887f
      url(https://images.unsplash.com/photo-1585348697655-652a03ee7cc4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)
      center center; */
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1.bookshelf-heading,
  h2 {
    margin: 0 0 0.2rem;
    /* text-transform: uppercase; */
    font-size: 1.5rem;
    font-family: tahoma;
    font-weight: 100;
    padding: 5px 0;
    cursor: pointer;
  }

  .selection-heading {
    font-size: 1.3rem;
    text-decoration: underline;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .bookcase {
      width: 58vw;
    }

    header {
      margin-top: 12.5rem;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
</style>

<!-- BOOKCASE HEADING -->
<header>
  <h1 class="bookshelf-heading" on:click={() => dispatch('showShelfInfo')}>
    {bookshelfHeading}
  </h1>
  <h2 class="selection-heading" on:click={() => dispatch('toggle')}>
    {selectionHeading}
  </h2>
</header>

<!-- BOOKCASE -->
<section class="bookcase show-bookcase" id="tipitaka">
  {#each vinaya.books as { id, name, volume }, i}
    <Book
      {id}
      selected={selectedBooks === vinaya.id || selectedBooks === id}
      blinking={selectedBooks === vinaya.id || selectedBooks === id}
      basket={vinaya.id}
      {name}
      counter={volume}
      on:click={(e) => dispatch('showBookInfo', e)} />
  {/each}

  {#each suttanta.books as { id, name, volume, collection, collid }, i}
    <Book
      {id}
      selected={selectedBooks === suttanta.id || selectedBooks === collid || selectedBooks === id}
      blinking={selectedBooks === suttanta.id || selectedBooks === collid || selectedBooks === id}
      basket={suttanta.id}
      {collection}
      {name}
      counter={volume}
      on:click={(e) => dispatch('showBookInfo', e)} />
  {/each}

  {#each abhidhamma.books as { id, name, volume }, i}
    <Book
      {id}
      selected={selectedBooks === abhidhamma.id || selectedBooks === id}
      blinking={selectedBooks === abhidhamma.id || selectedBooks === id}
      basket={abhidhamma.id}
      {name}
      counter={volume}
      on:click={(e) => dispatch('showBookInfo', e)} />
  {/each}
</section>
