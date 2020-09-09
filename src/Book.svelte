<script lang="ts">
  export let name: string;
  export let basket: string;
  export let collection: string;
  export let suttas: string;
  export let counter: string;
</script>

<style>
  .book {
    width: 45px;
    height: 150px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
  }

  /* Transparent bookcover to help expand click area on each book*/
  .bookcover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 47px;
    height: 102%;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 5px solid #3e2723;
  }

  .book:active {
  }

  .book .title {
    background-color: rgba(112, 37, 6, 1);
    color: white;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .title:active {
    background-color: rgba(65, 60, 0, 1);
  }

  @keyframes blink {
    to {
      background-color: rgba(112, 37, 6, 1);
    }
  }

  .blink-hi-liter {
    animation: blink 0.7s 2 ease-in-out;
  }

  .book .highlighted {
    background-color: rgba(65, 60, 20, 1);
  }

  .title-label {
    display: flex;
    transform: rotate(-90deg) translateX(-55px);
    font-size: 0.85rem;
    padding-left: 25px;
    letter-spacing: 1px;
    /*   justify-content: flex-end; */
  }

  .book .volume {
    height: 50px;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*padding: 5px;*/
    text-align: center;
    background-color: #fff;
  }

  .volume .vol-number {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .volume span {
    width: 100%;
    height: 50px;
    padding: 1px 0;
  }
</style>

<!-- single book -->
<div
  class="book"
  id={name}
  data-basket-name={basket}
  data-collection={collection}
  data-suttas={suttas}>

  <div class="title" title={name}>
    <span class="title-label">{basket}</span>
  </div>

  <div class="volume">
    <span class="vol-number">
      Vol.
      <br />
      {counter}
    </span>
  </div>

  <div
    class="bookcover"
    data-basket-name={basket}
    title={name}
    id="volume-{counter}"
    data-vol-no={counter} />

</div>
