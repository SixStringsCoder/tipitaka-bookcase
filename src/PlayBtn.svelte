<script lang="ts">

</script>

<style>
  /* Play Button for animation */
  #anim-intro-cont {
    position: absolute;
    top: 30px;
    right: 20px;
  }

  .fa-play-circle {
    font-size: 2.3rem;
    margin: 0 20px 0 0;
    cursor: pointer;
  }

  .fa-play-circle:active {
    color: hsla(53, 91%, 20%, 1);
    border-radius: 50%;
    background-color: #fff;
  }
</style>

<!-- Play button for playing animated intro about Tipitaka -->
<div id="anim-intro-cont">
  <i class="far fa-play-circle" id="anim-intro" />
</div>
