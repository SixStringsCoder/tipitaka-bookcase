<script lang="ts">
  export let btnLabel: string;
  export let booklink: string;
</script>

<style>
  .btn {
    width: 130px;
    border: none;
    box-shadow: 0 0 3px black;
    background: #ba5626;
    font-weight: 400;
    font-size: 0.8rem;
    color: #f3f1ea;
    text-transform: uppercase;
    cursor: pointer;

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

  .btn:active {
    box-shadow: inset 0 0 3px black;
  }

  a {
    width: 130px;
    margin: 0.5rem 0.5rem 0;
    text-decoration: none;
  }
</style>

<a href={booklink} target="_blank">
  <button type="button" class="btn link-btn">{btnLabel}</button>
</a>
