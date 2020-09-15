<script lang="ts">
  export let edition: string;
  export let langIsEng: boolean;
  $: console.log(langIsEng, edition);
</script>

<style>
  section {
    width: 100%;
    margin: 0 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  #edition-sel-cont label {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }

  #edition-sel-cont label span {
    margin-bottom: 5px;
  }

  #edition-sel-cont input {
    -webkit-appearance: none;
    background-color: hsla(53, 53%, 37%, 1);
    box-shadow: inset 0 0 2px black;
    width: 200px;
    height: 27px;
    padding: 0 3px 2px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    background: #fff;
    box-shadow: 0 0 3px -1px black;
  }

  #lang-toggle-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #lang-toggle-cont label {
    font-size: 0.8rem;
    margin: 0 0 1px;
  }

  #lang-toggle-cont span {
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  /* The switch - the box around the slider */
  /* code source: https://www.w3schools.com/howto/howto_css_switch.asp */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 33px;
    /* margin-top: 6px; */
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    /* background-color: hsla(53, 53%, 33%, 1); */
    background-color: hsla(53, 53%, 0%, 1);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px hsla(53, 53%, 0%, 1);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<section id="range-toggle-cont">
  <div id="edition-sel-cont">
    <label for="edition-selector">
      <span>PTS</span>
      <span>Overview</span>
      <span>VRI</span>
    </label>

    <input
      type="range"
      name="edition-selector"
      id="edition-selector"
      min="0"
      max="2"
      bind:value={edition} />
  </div>

  <div id="lang-toggle-cont">
    <span>Pāli&nbsp; &#8596; &nbsp;Eng</span>
    <label class="switch">
      <input
        type="checkbox"
        name="lang-toggle"
        id="lang-toggle"
        bind:checked={langIsEng}
        on:input />
      <span class="slider round" />
    </label>
  </div>
</section>
