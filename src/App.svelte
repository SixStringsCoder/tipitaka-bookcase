<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";

  import Header from "./Header.svelte";
  import SearchInput from "./SearchInput.svelte";
  import SelectEditionLang from "./SelectEditionLang.svelte";
  import Menu from "./Menu.svelte";
  import BookcasePitaka from "./BookcasePitaka.svelte";

  /* DATA STORE */
  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));
  $: console.log(tipitakaData);

  /* Which Edition and Language is showing */
  let edition: string = "overview";
  let langIsEng: boolean = false;

  /* Selected MENU Item */
  let selectedBooks: string;
  $: console.log(`selectedBooks: ${selectedBooks}`);

  /* Data Object of Selected MENU Item */
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

  let modalInfoObj: Partial<Info> = {};
  $: console.log(modalInfoObj);

  const getSelectionObj = (e: any) => {
    //let sel = document.getElementById("menu");
    selectedBooks = e.target.value;

    if (
      selectedBooks === "vinaya" ||
      selectedBooks === "suttanta" ||
      selectedBooks === "abhidhamma"
    ) {
      // Baskets
      modalInfoObj = tipitakaData.baskets[selectedBooks];
    } else if (selectedBooks.includes("-nikaya")) {
      // Collections only in suttanta
      modalInfoObj = tipitakaData.baskets.suttanta.collections[selectedBooks];
    } else {
      let selectedBasket = e.target.selectedOptions[0].dataset.basket;
      // Books
      modalInfoObj = tipitakaData.baskets[selectedBasket].books.find((book) => {
        return book.id === selectedBooks;
      });
    }
  };
</script>

<style>
  /* Top Menu-Search Bar */
  #info-bar {
    width: 100%;
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10000;
    margin-top: 3.9rem;
    padding: 10px;
  }

  main#library {
    flex: 1;
    margin-top: 5rem;
  }
</style>

<Header />

<!-- Learn More Menu -->
<section id="info-bar">
  <Menu {selectedBooks} on:change={getSelectionObj} />

  <SelectEditionLang
    {edition}
    {langIsEng}
    on:input={() => langIsEng === !langIsEng} />

  <SearchInput />
</section>

<!-- Book Case -->
<main id="library">
  <BookcasePitaka {selectedBooks} {modalInfoObj} {tipitakaData} />
</main>
