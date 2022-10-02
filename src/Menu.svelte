<script lang="ts">
  import { tipitakaData } from './stores/menu-items.js';
  export let selectedBooks: string;

  const categories = Object.keys(tipitakaData)
  let topic = "Tipitaka"
  $: topics = tipitakaData[topic]
  $: console.log(topic, topics)
</script>

<!-- CATEGORIES MENU -->
<div class="menu-container">
  <!-- svelte-ignore a11y-no-onchange -->
  <select name="menu-1" class="menu" bind:value={topic}>
    <option value="reset-1" disabled selected>Select Category</option>
    {#each categories as catgegory}
      <option value={catgegory}>{catgegory}</option> 
    {/each}  
  </select>
</div>

<!-- TOPICS MENU -->
{#key topic}
  <div class="menu-container">
    <!-- svelte-ignore a11y-no-onchange -->
    <select name="menu-2" class="menu" bind:value={selectedBooks} on:change>
      <option value="reset-2" selected>Learn More</option>
          {#each topics as topic}
            <option value={topic.id}                 
                    data-basket={topic.basket}>
                {topic.name}
            </option>
          {/each}
    </select>
  </div>
{/key}

<style>
  .menu-container {
    width: 91%;
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
  }

  select.menu {
    width: 100%;
    height: 45px;
    padding: 5px;
    font-size: 1.3rem;
    font-family: Muli, sans-serif;
    font-weight: 100;
    cursor: pointer;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    select#menu {
      width: 65%;
      height: 55px;
    }
  }
</style>