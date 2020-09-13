import { readable } from 'svelte/store';

const SubCommData = readable({
  information: {
    name: 'Commentary (ṭīkā)',
    introduction: "The sub-commentaries (Pali: ṭīkā) are primarily commentaries on the commentaries (Pali: aṭṭhakathā) on the Pali Canon of Theravada Buddhism, written in Sri Lanka. This literature continues the commentaries' development of the traditional interpretation of the scriptures. (Note that some commentaries are apparently also named with the term ṭīkā.[citation needed]) These sub-commentaries were begun during the reign of Parākramabāhu I (1123–1186) under prominent Sri Lankan scholars such as Sāriputta Thera, Mahākassapa Thera of Dimbulagala Vihāra and Moggallāna Thera. &emdash;wikipedia",

    links: {
      info: "",
      engbookurl: "https://store.pariyatti.org/Tipitaka-Sets_c_223.html",
      palibookurl: "https://store.pariyatti.org/Tipitaka-PTS-Pali-Canon-in-Pali-text--55-Books_p_2224.html",
      vriurl: "https://www.vridhamma.org/Tipitaka-Propject"
    }
  },
  tika: {},
  "anu-tika": {},
  "madhu-tika": {}
});

