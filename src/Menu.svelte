<script lang="ts">
  export let selectedBooks: string;
</script>

<style>
  #menu-container {
    width: 91%;
    margin: 0 auto 15px;
    display: flex;
    justify-content: center;
  }

  select#menu {
    width: 100%;
    height: 45px;
    padding: 5px;
    font-size: 1.3rem;
    font-family: Muli, sans-serif;
    font-weight: 100;
    cursor: pointer;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    select#menu {
      width: 65%;
      height: 55px;
    }
  }
</style>

<div id="menu-container">
  <!-- svelte-ignore a11y-no-onchange -->
  <select name="menu" id="menu" bind:value={selectedBooks} on:change>
    <option value="reset" disabled>Learn More</option>
    <optgroup label="Tipitaka">
      <option value="tipitaka" data-bookcase="bookcase" selected>
        Tipi&#7789;aka bookcase
      </option>
      <option value="vinaya">Vinaya Pi&#7789;aka</option>
      <option value="suttanta">Suttanta Pi&#7789;aka</option>
      <option value="abhidhamma">Abhidhamma Pi&#7789;aka</option>
      <option value="digha-nikaya" data-basket="suttanta">
        Long Discourses (Digha Nikāya)
      </option>
      <option value="majjhima-nikaya" data-basket="suttanta">
        Medium-length Discourses (Majjhima Nikāya)
      </option>
      <option value="samyutta-nikaya" data-basket="suttanta">
        Short Discourses (Samyutta Nikāya)
      </option>
      <option value="anguttara-nikaya" data-basket="suttanta">
        Numerical Discourses or Gradual Sayings (Aṅguttara Nikāya)
      </option>
      <option value="khuddaka-nikaya" data-basket="suttanta">
        Minor Collection (Khuddaka Nikāya)
      </option>
      <option value="dhammapada" data-basket="suttanta">Dhammapada</option>
      <option value="jataka" data-basket="suttanta">Jataka Tales</option>
      <option value="patthana" data-basket="abhidhamma">Patthana Matrix</option>
      <option value="udana" data-basket="suttanta">Udāna</option>
      <option value="itivuttaka" data-basket="suttanta">Itivuttaka</option>
      <option value="khuddakapatha" data-basket="suttanta">
        Khuddakapāṭha
      </option>
      <option value="maha-vagga-digha" data-basket="suttanta">
        Wheel of Dependent Origination
      </option>
      <option value="maha-vagga-digha" data-basket="suttanta">
        Mahāsatipaṭṭhāna Sutta (Digha)
      </option>
      <option value="mulapannasa" data-basket="suttanta">
        Mahāsatipaṭṭhāna Sutta (Majjhima)
      </option>
      <option value="mahavagga" data-basket="vinaya">Pāṭimokkha</option>
    </optgroup>
    <optgroup label="Commentaries">
      <option value="commentaries" data-bookcase="bookcase">
        Aṭṭhakathā (Commentaries) bookcase
      </option>
      <option value="path-of-purification">Visuddhi Magga</option>
      <option value="Samantapasadika">Samantapasadika</option>
      <option value="Kankhavitarani">Kankhavitarani</option>
      <option value="Sumangalavilasini">Sumangalavilasini</option>
      <option value="Papañcasudani">Papañcasudani</option>
      <option value="Saratthappakasini">Saratthappakasini</option>
      <option value="Manorathapurani">Manorathapurani</option>
      <option value="Paramatthajotika">Paramatthajotika</option>
    </optgroup>
    <optgroup label="Sub-Commentaries">
      <option value="sub-commentaries" data-bookcase="bookcase">
        Tika (Sub-commentaries) bookcase
      </option>
      <option value="Paramatthamañjusa">Paramatthamañjusa</option>
      <option value="Vajirabuddhi-tika">Vajirabuddhi-tika</option>
      <option value="Saratthadipani">Saratthadipani</option>
      <option value="Vimativinodani">Vimativinodani</option>
      <option value="Vinayatthamañjusa">Vinayatthamañjusa</option>
      <option value="Dighanikaya-tika">Dighanikaya-tika</option>
      <option value="Majjhimanikaya-tika">Majjhimanikaya-tika</option>
    </optgroup>
  </select>
</div>
