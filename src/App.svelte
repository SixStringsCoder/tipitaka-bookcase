<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";
  import Header from "./Header.svelte";

  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));

  $: console.log(tipitakaData);
</script>

<style>

</style>

<Header />
