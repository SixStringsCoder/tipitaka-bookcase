<script lang="ts">
  export let btnLabel: string;
  export let booklink: string;
  export let id: string;
</script>

<style>
  .btn {
    width: 175px;
    border: none;
    box-shadow: 0 0 3px black;
    background: #ba5626;
    font-weight: 400;
    font-size: 0.8rem;
    color: #f3f1ea;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 5%;
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
    width: 175px;
    margin: 0.5rem;
    text-decoration: none;
    text-align: center;
  }
</style>

<a href={booklink} target="_blank">
  <button {id} type="button" class="btn link-btn">{btnLabel}</button>
</a>
