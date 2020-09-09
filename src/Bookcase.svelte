<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";
  import Book from "./Book.svelte";

  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));

  const vinaya = tipitakaData.baskets.vinaya.books;
  const suttanta = tipitakaData.baskets.suttanta.books;
  const abhidhamma = tipitakaData.baskets.abhidhamma.books;
</script>

<style>
  .bookcase {
    width: 90vw;
    display: none;
    grid-template-columns: repeat(auto-fill, minmax(43px, 1fr));
    grid-auto-flow: row;
    grid-gap: 20px 0;
    padding: 10px 0 0;
    margin-top: 12rem;
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

  /* #tipitaka::after {
    content: "The Tipitaka";
    width: 500px;
    font-size: 3rem;
    font-weight: 100;
    margin: 2rem;
    text-align: center;
  }

  #commentaries::after {
    content: "The Commentaries";
    width: 500px;
    font-size: 3rem;
    font-weight: 100;
    margin: 2rem;
    text-align: center;
  }

  #sub-commentaries::after {
    content: "The Sub-commentaries";
    width: 500px;
    font-size: 3rem;
    font-weight: 100;
    margin: 2rem;
    text-align: center;
  } */

  .shelf {
    display: flex;
    width: 687px;
    height: 162px;
    border-bottom: 5px solid black;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: #a1887f;
    box-sizing: content-box;
    border: 3px solid #3e2723;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  }
</style>

<section class="bookcase show-bookcase" id="tipitaka">
  {#each vinaya as { name, content, volume, collection }, i}
    <Book {name} basket="vinaya" {collection} counter={String(i + 1)} />
  {/each}

  {#each suttanta as { name, content, volume, collection }, i}
    <Book {name} basket="suttanta" {collection} counter={String(i + 5)} />
  {/each}

  {#each abhidhamma as { name, content, volume, collection }, i}
    <Book {name} basket="abhidhamma" {collection} counter={String(i + 44)} />
  {/each}
</section>
