<script lang="ts">

</script>

<style>
  #menu-container {
    width: 90%;
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
  <select name="menu" id="menu">
    <option value="reset" disabled selected>Learn More</option>
    <optgroup label="Tipitaka">
      <option value="tipitaka">Tipi&#7789;aka</option>
      <option value="vinaya">Vinaya Pi&#7789;aka</option>
      <option value="suttanta">Suttanta Pi&#7789;aka</option>
      <option value="abhidhamma">Abhidhamma Pi&#7789;aka</option>
      <option value="digha-nikaya">Long Discourses (Digha Nikāya)</option>
      <option value="majjhima-nikaya">
        Medium-length Discourses (Majjhima Nikāya)
      </option>
      <option value="Saṃyutta-nikaya">
        Short Discourses (Samyutta Nikāya)
      </option>
      <option value="Aṅguttara-nikaya">
        Numerical Discourses (Aṅguttara Nikāya)
      </option>
      <option value="khuddaka-nikaya">
        Minor Collection (Khuddaka Nikāya)
      </option>
      <option value="Dhammapada">Dhammapada</option>
      <option value="Jataka">Jataka Tales</option>
      <option value="Patthana">Patthana Matrix</option>
      <option value="Mahānidāna Sutta">Wheel of Dependent Origination</option>
      <option value="Mahāsatipaṭṭhāna Sutta">Mahāsatipaṭṭhāna Sutta</option>
    </optgroup>
    <optgroup label="Commentaries (Atthakatha)">
      <option value="commentaries">Go to Commentaries</option>
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
      <option value="sub-commentaries">Go to Sub-Commentaries</option>
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
