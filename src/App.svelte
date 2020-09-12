<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";

  import Header from "./Header.svelte";
  import SearchInput from "./SearchInput.svelte";
  import Menu from "./Menu.svelte";
  import Bookcase from "./Bookcase.svelte";

  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));
  $: console.log(tipitakaData);

  let selectedBooks: string = "";
  $: console.log(`selectedBooks: ${selectedBooks}`);

  let modalInfoObj: object = {};

  const getSelectionObj = (e: any) => {
    selectedBooks = e.target.value;
    // let basket:string = e.target.dataset.basketName;
    // let id: string = e.target.id;
    modalInfoObj = tipitakaData.baskets[selectedBooks];
  };
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
  <Menu {selectedBooks} on:change={getSelectionObj} />
  <SearchInput />

</section>

<!-- Book Case -->
<main id="library">
  <Bookcase {selectedBooks} {modalInfoObj} />
</main>
