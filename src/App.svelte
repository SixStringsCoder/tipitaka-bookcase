<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";
  import Header from "./Header.svelte";
  import SearchInput from "./SearchInput.svelte";
  import Menu from "./Menu.svelte";
  import Bookcase from "./Bookcase.svelte";

  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));

  $: console.log(tipitakaData);
</script>

<style>
  /* Top Menu Search Bar */
  #info-bar {
    width: 100%;
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 10000;
    margin-top: 3.9rem;
    padding: 10px;
  }

  main#library {
    flex: 1;
    margin-top: 1rem;
  }
</style>

<Header />

<!-- Learn More Menu -->
<section id="info-bar">
  <Menu />
  <SearchInput />

</section>

<!-- Book Case -->
<main id="library">
  <Bookcase />
</main>
