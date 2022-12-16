<script lang="ts">

</script>

<style>
  header {
    min-width: 100%;
    background-color: #ddd;
    text-align: center;
    position: fixed;
    z-index: 10000;
  }

  header h1 {
    font-size: 1.4rem;
    margin: 0.8rem;
    font-weight: 100;
    /*   letter-spacing: 1px; */
  }

  span {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 3px 10px;
  }

  @media only screen and (min-width: 350px) {
    header h1 {
      font-size: 2rem;
    }
  }

    /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    header h1 {
      font-size: 2.2rem;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    header h1 {
      font-size: 2.5rem;
    }
  }
</style>

<header>
  <h1 id="tipitaka-header">
    <span>The Tipi&#7789;aka Shelves</span>
  </h1>
</header>
