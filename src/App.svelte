<script lang="ts">
  import TipitakaData from "./stores/tipitaka-store.js";

  let tipitakaData;
  TipitakaData.subscribe((items) => (tipitakaData = items));

  console.log(tipitakaData);
</script>

<style>

</style>
