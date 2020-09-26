<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .info-cont {
    position: absolute;
    top: 20%;
    height: 70vh;
    width: 80%;
    z-index: 10000;
    background-color: #fff;
    padding: 15px 25px;
    box-shadow: 0 0 20px black;
    overflow: scroll;
  }

  #closer-info {
    font-size: 2.5rem;
    color: #555;
    height: 1.7rem;
    text-align: right;
    transition: 0.2s;
    margin-bottom: 5px;
    cursor: pointer;
  }

  #closer-info:hover {
    color: #000;
  }

  #closer-info:active {
    font-size: 1.6rem;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .info-cont {
      position: absolute;
      top: 20%;
      left: 8%;
      height: 70%;
      width: 80%;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .info-cont {
      height: 80vh;
    }
  }
</style>

<section class="info-cont" in:fade={{ duration: 250 }}>
  <div id="closer-info" on:click>&#10006;</div>
  <slot>
    <h3>No information available.</h3>
  </slot>
</section>
