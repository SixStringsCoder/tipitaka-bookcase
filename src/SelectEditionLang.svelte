<script lang="ts">
  export let edition: string;
  export let langIsEng: boolean;
  $: console.log(langIsEng, edition);
</script>

<style>
  section {
    width: 90%;
    margin: 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid rgba(0, 0, 0, 0.6);
    padding: 0 3px 0 0;
    /* background-color: #aaa; */
  }

  #edition-sel-cont {
    width: 60%;
    display: flex;
    justify-content: space-around;
    border-right: 1px solid black;
    /* background-color: hsla(53, 3%, 67%, 0.9); */
    padding: 10px;
    border-radius: 2px;
  }

  /* The container */
  .radio-container {
    display: block;
    position: relative;
    padding-top: 2px;
    padding-left: 25px;
    /* margin-bottom: 12px; */
    cursor: pointer;
    font-size: 0.9rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Radio Buttons - source: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */
  /* Hide the browser's default radio button */
  .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .radioBtn {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 0%;
  }

  /* On mouse-over, add a grey background color */
  .radio-container:hover input ~ .radioBtn {
    background-color: #666;
  }

  /* When the radio button is checked, add a blue background */
  .radio-container input:checked ~ .radioBtn {
    background-color: #000;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .radioBtn:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .radio-container input:checked ~ .radioBtn:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .radio-container .radioBtn:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* The switch - the box around the slider */
  /* code source: https://www.w3schools.com/howto/howto_css_switch.asp */
  #lang-toggle-cont {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 3px 0 2px;
  }

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
    background-color: hsla(53, 25%, 50%, 1);
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
    background-color: black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    /* background-color: hsla(53, 53%, 0%, 1); */
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
    box-shadow: inset 0 0 2px black;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    #lang-toggle-cont {
      justify-content: center;
      padding: 6px 0 2px;
    }

    .radio-container,
    #lang-toggle-cont span {
      font-size: 1.3rem;
      padding-top: 0px;
    }

    #edition-sel-cont {
      padding: 12px 0 10px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    section {
      width: 59%;
    }

    .radio-container,
    #lang-toggle-cont span {
      font-size: 1.4rem;
    }

    #lang-toggle-cont {
      padding: 8px 0 2px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
</style>

<section id="radio-toggle-cont">
  <div id="edition-sel-cont">
    <label class="radio-container">
      Overview
      <input type="radio" bind:group={edition} value="overview" />
      <span class="radioBtn" />
    </label>
    <label class="radio-container">
      PTS
      <input type="radio" bind:group={edition} value="pts" />
      <span class="radioBtn" />
    </label>
    <label class="radio-container">
      VRI
      <input type="radio" bind:group={edition} value="vri" />
      <span class="radioBtn" />
    </label>
  </div>

  <div id="lang-toggle-cont">
    <span>Pāli&nbsp;</span>
    <label class="switch">
      <input
        type="checkbox"
        name="lang-toggle"
        id="lang-toggle"
        bind:checked={langIsEng}
        on:input />
      <span class="slider round" />
    </label>
    <span>&nbsp;Eng.</span>
  </div>

</section>
