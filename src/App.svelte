<script lang="ts">
  import { onDestroy } from "svelte";
  import TipitakaData from "./stores/tipitaka-store.js";

  import Header from "./Header.svelte";
  import SearchInput from "./SearchInput.svelte";
  import SelectEditionLang from "./SelectEditionLang.svelte";
  import Menu from "./Menu.svelte";
  import BookcasePitaka from "./BookcasePitaka.svelte";
  import InfoModal from "./InfoModal.svelte";
  import Button from "./Button.svelte";

  /* DATA STORE */
  let tipitakaData;
  const unsubscribe = TipitakaData.subscribe((items) => (tipitakaData = items));
  $: console.log(tipitakaData);

  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });

  let bookshelfHeading = tipitakaData.information.name;
  // let selectHeading;

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

  /* MODAL */
  let showingModal: boolean = false;
  const toggleModal: () => boolean = () => (showingModal = !showingModal);
  $: console.log(showingModal);

  $: console.log(modalInfoObj);
  $: selectionHeading = modalInfoObj.name || "";
  $: description = modalInfoObj.description;
  $: links = modalInfoObj.links;
  $: books = modalInfoObj.books;
  $: sections = modalInfoObj.sections;
  $: suttas = modalInfoObj.suttas;

  const bookInfoModal = (e: any) => {
    console.dir(e);
    let basket = e.detail.target.dataset.basketName;
    let id = e.detail.target.id;
    let book = tipitakaData.baskets[basket].books.find(
      (book) => book.id === id
    );
    modalInfoObj = book;

    toggleModal();
  };

  const tipitakaInfoModal = () => {
    modalInfoObj = tipitakaData.information;
    toggleModal();
  };

  // SEARCH INPUT
  let searchQuery: string;
  let searchResults: object[] = [];
  $: console.log(searchResults);

  const findQueryItem = () => {
    console.log(searchQuery);
    if (searchQuery.length >= 3) {
      searchObject(searchQuery, tipitakaData.baskets);
      searchObject(searchQuery, tipitakaData.baskets.suttanta.collections);
      searchArr(searchQuery, tipitakaData.baskets.vinaya.books);
      searchArr(searchQuery, tipitakaData.baskets.suttanta.books);
      searchArr(searchQuery, tipitakaData.baskets.abhidhamma.books);
    }
  };

  // Search 'baskets' Object keys
  // Search 'baskets.suttanta.collections' Object keys
  const searchObject = (query: string, obj: object) => {
    let queryLower = query.toLowerCase();
    for (let key in obj) {
      if (key.includes(queryLower)) {
        let result = obj[key];
        if (searchResults.includes(result) === false) {
          searchResults = [result, ...searchResults];
        } else {
          continue;
        }
      }
    }
  };

  interface Title {
    id: string;
    name: string;
  }

  // Search 'baskets.vinaya.books' array - id property
  // Search 'baskets.suttanta.books' array - id property
  // Search 'baskets.abhidhamma.books' array - id property
  const searchArr = (query: string, arr: Title[]) => {
    let queryLower = query.toLowerCase();
    arr.forEach((book) => {
      if (book.id.includes(queryLower)) {
        if (searchResults.includes(book) === false) {
          searchResults = [book, ...searchResults];
        } else {
          return;
        }
      }
    });
  };

  const clearSearch = () => {
    searchQuery = "";
    searchResults = [];
  };
  $: if (searchQuery === "") clearSearch();
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

  /* Info Modal */
  .link-btns-cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2rem 0;
  }

  .breadcrumbs {
    font-size: 0.9rem;
  }

  p,
  li {
    font-size: 1.3rem;
  }

  li {
    line-height: 150%;
  }

  .books-summary {
    font-weight: bold;
    margin-bottom: 0;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    p,
    li {
      font-size: 1.5rem;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    #info-bar {
      height: 190px;
    }
  }
</style>

<!-- The Tipitaka Shelves -->
<Header />

<!-- Learn More Select Menu -->
<section id="info-bar">
  <Menu {selectedBooks} on:change={getSelectionObj} />

  <SelectEditionLang
    {edition}
    {langIsEng}
    on:input={() => langIsEng === !langIsEng} />

  <SearchInput bind:searchQuery {searchResults} on:input={findQueryItem} />

  <!-- INFO MODAL when heading or book is clicked-->
  {#if showingModal}
    <InfoModal on:click={toggleModal}>
      <h2 id="volume-title">{selectionHeading}</h2>

      {#if modalInfoObj.basket}
        <h5 class="breadcrumbs">
          {modalInfoObj.basket}&nbsp;&gt;&gt;&nbsp;
          {#if modalInfoObj.division || modalInfoObj.collection}
            {modalInfoObj.division || modalInfoObj.collection}&nbsp;&gt;&gt;&nbsp;
          {/if}
          {modalInfoObj.name}
        </h5>
      {/if}

      <p id="vol-summary">
        {@html description}
      </p>

      <!-- Link Buttons -->
      <section class="link-btns-cont">
        {#each links as { id, link, label }}
          {#if link}
            <Button {id} btnLabel={label} booklink={link} />
          {/if}
        {/each}
      </section>

      <!-- List of books or Vaggas or Suttas-->
      <p class="books-summary">The {selectionHeading} consists of:</p>
      <ol class="list-of-books">
        {#if books}
          {#each books as { name, content }}
            <li title={content}>{name}</li>
          {/each}
        {:else if sections}
          {#each sections as section}
            <li>{section}</li>
          {/each}
        {:else}
          {#each suttas as sutta}
            <li title={sutta}>{sutta}</li>
          {/each}
        {/if}
      </ol>
    </InfoModal>
  {/if}
</section>

<!-- Book Case -->
<main id="library">
  <BookcasePitaka
    {selectedBooks}
    {tipitakaData}
    {bookshelfHeading}
    {selectionHeading}
    on:showShelfInfo={tipitakaInfoModal}
    on:showBookInfo={(e) => bookInfoModal(e)}
    on:toggle={toggleModal} />
</main>
