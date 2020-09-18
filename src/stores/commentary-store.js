// sources ...

import { readable } from 'svelte/store';

const CommentaryData = readable({
  information: {
    name: 'Commentary (Aṭṭhakathā)',
    description: "Aṭṭhakathā (Pali for explanation, commentary) refers to Pali-language Theravadin Buddhist commentaries to the canonical Theravadin Tipitaka. These commentaries give the traditional interpretations of the scriptures. The major commentaries were based on earlier ones, now lost, in Prakrit and Sinhala, which were written down at the same time as the Canon, in the last century BCE. Some material in the commentaries is found in canonical texts of other schools of Buddhism, suggesting an early common source. &emdash;wikipedia",
    links: [
      { id: "info", link: "https://dhammawiki.com/index.php/Theravada_commentaries", label: "" },
      { id: "engbookurl", link: "https://store.pariyatti.org/English_c_214.html", label: "" },
      { id: "palibookurl", link: "https://store.pariyatti.org/Pali_c_215.html", label: "" },
      { id: "vri", link: "", label: "" }
    ],
  },
  books: [
    {
      id: "vimuttimagga",
      name: "Vimuttimagga",
      author: "",
      translation: "The Path of Freedom",
      description: "",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "visuddhimagga",
      name: "Visuddhimagga",
      author: "Buddhaghosa",
      translation: "The Path of Purification",
      description: "",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "samantapasadika",
      name: "Samantapasadika",
      author: "Buddhaghosa",
      translation: "'samanta' indicates 'all' or 'entire', and 'pāsādika' means 'lovely' or 'pleasing'",
      description: "Commentary on the Vinaya-piṭaka by Buddhaghosa to which is prefixed an introduction, the Bāhiranidāna. The Bāhiranidāna  is an introduction to the Vinaya-piṭaka Commentary relating the history of Buddhism up to the establishment of the Vinaya-piṭaka in Sri Lanka.",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "https://en.wikipedia.org/wiki/Samantapasadika", label: "Learn More" },
        { id: "engbookurl", link: "https://store.pariyatti.org/Inception-of-Discipline_p_2151.html", label: "English Books" },
        { id: "palibookurl", link: "https://store.pariyatti.org/Samantapasadika-Vol-1_p_2142.html", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "kankhavitarani",
      name: "Kankhavitarani",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the Vinaya's Patimokkha by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "https://store.pariyatti.org/Overcoming-Doubts-Kankhavitarani-Vol-I_p_5145.html", label: "English Books" },
        { id: "palibookurl", link: "https://store.pariyatti.org/Kankhavitarani-New-Edition_p_2387.html", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "sumangalavilasini",
      name: "Sumangalavilasini",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the Suttanta's Digha Nikaya by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "papancasudani",
      name: "Papañcasudani",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the Suttanta's Majjhima Nikaya by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "saratthappakasini",
      name: "Saratthappakasini",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the Suttanta's Samyutta Nikaya by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "manorathapurani",
      name: "Manorathapurani",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the Suttanta's Anguttara Nikaya by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "paramatthajotika1",
      name: "Paramatthajotika I",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the (Suttanta Khuddaka Nikaya) Khuddakapatha by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "https://store.pariyatti.org/The-Khuddakapatha-with-its-commentary-Paramatthajotika-I_p_2054.html", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "paramatthajotika2",
      name: "Paramatthajotika II",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the (Suttanta Khuddaka Nikaya) Sutta Nipata by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "dhammapada-atthakatha",
      name: "Dhammapada-atthakatha",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the (Suttanta Khuddaka Nikaya) Dhammapada-atthakatha by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "suttanipata-atthakatha",
      name: "Suttanipata-atthakatha",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the (Suttanta Khuddaka Nikaya) Suttanipata-atthakatha by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "jatakatthavannana",
      name: "Jatakatthavannana",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the (Suttanta Khuddaka Nikaya) Jātaka by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "jataka-atthakatha",
      name: "Jātaka-atthakatha",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the (Suttanta Khuddaka Nikaya) Jātaka by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "atthasalini",
      name: "Atthasālinī",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the Abhidhamma's Dhammasangani by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "Sammohavinodani",
      name: "Sammohavinodani",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentary on the Abhidhamma's Vibhanga by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "pancappakaranatthakatha",
      name: "Pañcappakaranatthakatha",
      author: "Buddhaghosa",
      translation: "",
      description: "Commentaries on the Abhidhamma's Dhatukatha, Puggalapaññatti, Kathavatthu, Yamaka, and Patthana by Buddhaghosa",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
    {
      id: "",
      name: "",
      author: "",
      translation: "",
      description: "",
      volume: "",
      subcommentary: [],
      links: [
        { id: "info", link: "", label: "Learn More" },
        { id: "engbookurl", link: "", label: "English Books" },
        { id: "palibookurl", link: "", label: "Pali Books" },
        { id: "vri", link: "", label: "Books at VRI" }
      ]
    },
  ]

});

export default CommentaryData;

/* NOTES
- Commentaries by Dhammapala on seven books of the Khuddaka Nikaya.
- Four commentaries by various authors on four other books of the Khuddaka Nikaya.
*/