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
</style>

<div id="menu-container">
  <!-- svelte-ignore a11y-no-onchange -->
  <select name="menu" id="menu" bind:value={selectedBooks} on:change>
    <option value="reset" disabled selected>Learn More</option>
    <optgroup label="Tipitaka">
      <option value="tipitaka" data-bookcase="bookcase">
        Go to Tipi&#7789;aka
      </option>
      <option value="vinaya">Vinaya Pi&#7789;aka</option>
      <option value="suttanta">Suttanta Pi&#7789;aka</option>
      <option value="abhidhamma">Abhidhamma Pi&#7789;aka</option>
      <option value="digha-nikaya">Long Discourses (Digha Nikāya)</option>
      <option value="majjhima-nikaya">
        Medium-length Discourses (Majjhima Nikāya)
      </option>
      <option value="samyutta-nikaya">
        Short Discourses (Samyutta Nikāya)
      </option>
      <option value="anguttara-nikaya">
        Numerical Discourses (Aṅguttara Nikāya)
      </option>
      <option value="khuddaka-nikaya">
        Minor Collection (Khuddaka Nikāya)
      </option>
      <option value="dhammapada">Dhammapada</option>
      <option value="jataka">Jataka Tales</option>
      <option value="patthana">Patthana Matrix</option>
      <option value="khuddakapatha">Maṅgala Sutta</option>
      <option value="udana">Udāna</option>
      <option value="itivuttaka">Itivuttaka</option>
      <option value="khuddakapatha">Khuddakapāṭha</option>
      <option value="maha-vagga-digha">Wheel of Dependent Origination</option>
      <option value="maha-vagga-digha">Mahāsatipaṭṭhāna Sutta (Digha)</option>
      <option value="mulapannasa">Mahāsatipaṭṭhāna Sutta (Majjhima)</option>
      <option value="mahavagga">Pāṭimokkha</option>
    </optgroup>
    <optgroup label="Commentaries (Atthakatha)">
      <option value="commentaries" data-bookcase="bookcase">
        Go to Commentaries
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
    <optgroup label="Sub-Commentaries (Tika)">
      <option value="sub-commentaries" data-bookcase="bookcase">
        Go to Sub-commentaries
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
