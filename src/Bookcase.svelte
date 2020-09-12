<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";
  import Book from "./Book.svelte";
  import InfoModal from "./InfoModal.svelte";
  import Button from "./Button.svelte";

  /* DATA */
  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));

  /* BASKETS OBJECTS */
  const vinaya = tipitakaData.baskets.vinaya;
  const suttanta = tipitakaData.baskets.suttanta;
  const abhidhamma = tipitakaData.baskets.abhidhamma;

  /* BASKET NAME */
  let bookcaseCollection: string = tipitakaData.information.name;
  /* SELECTION VALUE FROM MENU */
  export let selectedBooks: string = "";
  $: console.log(selectedBooks);

  /* ENABLES CSS HIGHLIGHTING WHEN BOOKS ARE SELECTED FROM MENU */
  let selected: boolean = true;
  let blinking: boolean = true;

  /* INPUT SEARCH TERM */
  let searchQuery: string = "";
  const findMenuItem = () => console.log(selectedBooks);

  /* MODAL */
  let showingModal: boolean = false;
  const toggleModal: () => boolean = () => (showingModal = !showingModal);

  interface Info {
    name: string;
    description: string;
    books: [Book];
    sections: [string];
    links: Links;
  }

  interface Links {
    info: string;
    engbookurl: string;
    palibookurl: string;
    vriurl: string;
  }

  interface Book {
    id: string;
    name: string;
    translation: string;
    content: string;
  }

  export let modalInfoObj: Info;
  $: console.log(modalInfoObj);
  $: heading = modalInfoObj.name || "";
  $: description = modalInfoObj.description;
  $: links = modalInfoObj.links;
  $: books = modalInfoObj.books;
  $: sections = modalInfoObj.sections;

  const infoForModal = (e: any) => {
    // let basket = e.target.dataset.basketName;
    // let id = e.target.id;
    // console.log(tipitakaData.baskets[basket]);
    // modalInfoObj = tipitakaData.baskets[basket];
    toggleModal();
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1.bookshelf-heading,
  h2 {
    margin-bottom: 0.2rem;
    text-transform: uppercase;
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

  .link-btns-cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    p,
    li {
      font-size: 1.3rem;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
</style>

<header>
  <h1 class="bookshelf-heading" on:click={toggleModal}>{bookcaseCollection}</h1>
  <h2 class="selection-heading" on:click={infoForModal}>{heading}</h2>
</header>

<section class="bookcase show-bookcase" id="tipitaka">
  {#each vinaya.books as { id, name, content, volume, collection }, i}
    <Book
      {id}
      selected={selectedBooks === vinaya.id || selectedBooks === id}
      blinking={selectedBooks === vinaya.id || selectedBooks === id}
      basket={vinaya.id}
      {collection}
      {name}
      counter={String(i + 1)}
      on:click={infoForModal} />
  {/each}

  {#each suttanta.books as { id, name, content, volume, collection }, i}
    <Book
      {id}
      selected={selectedBooks === suttanta.id || selectedBooks === collection || selectedBooks === id}
      blinking={selectedBooks === suttanta.id || selectedBooks === collection || selectedBooks === id}
      basket={suttanta.id}
      {collection}
      {name}
      counter={String(i + 6)}
      on:click={infoForModal} />
  {/each}

  {#each abhidhamma.books as { id, name, content, volume, collection }, i}
    <Book
      {id}
      selected={selectedBooks === abhidhamma.id || selectedBooks === id}
      blinking={selectedBooks === abhidhamma.id || selectedBooks === id}
      basket={abhidhamma.id}
      {collection}
      {name}
      counter={String(i + 46)}
      on:click={infoForModal} />
  {/each}
</section>

<!-- Info Modal -->
{#if showingModal}
  <InfoModal on:click={toggleModal}>
    <h2 id="volume-title">{heading}</h2>
    <p id="vol-summary">{description}</p>
    <!-- Link Buttons -->
    <section class="link-btns-cont">
      <Button btnLabel="Learn More" booklink={links.info} />
      <Button btnLabel="English Books" booklink={links.engbookurl} />
      <Button btnLabel="Pali Books" booklink={links.palibookurl} />
      <Button btnLabel="Books at VRI" booklink={links.vriurl} />
    </section>
    <!-- List of books or Vaggas or Suttas-->
    <p>The {heading} consists of:</p>
    <ol class="list-of-books">
      {#if books}
        {#each books as { name, content }}
          <li title={content}>{name}</li>
        {/each}
      {:else}
        {#each sections as section}
          <li>{section}</li>
        {/each}
      {/if}
    </ol>
  </InfoModal>
{/if}
