<script lang="ts">
  export let btnLabel: string;
  export let booklink: string;
</script>

<style>
  .btn {
    width: 125px;
    border: none;
    background: #ba5626;
    font-weight: 400;
    font-size: 0.8rem;
    color: #f3f1ea;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0.5rem 0.5rem 0;
    padding: 9px 14px;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
  }

  a {
    color: #f3f1ea;
  }
</style>

<button type="button" class="btn link-btn">
  <a href={booklink} target="_blank">{btnLabel}</a>
</button>
