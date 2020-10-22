// source for data https://tipitaka.org/eot#2 from the book "Essence of Tipiṭaka"

import { readable } from 'svelte/store';

const TipitakaData = readable({
  information: {
    name: 'Tipiṭaka',
    description: '<p id="intro-info" class="info">All that the Buddha taught forms the subject matter and substance of the Pāḷi Canon, which is divided into these three divisions called <span class="emphasis">Piṭakas</span> — literally baskets. Hence <span class="emphasis">Tipiṭaka</span> means three baskets or three separate divisions of the Buddha\'s Teaching. Here the metaphor \'basket\' signifies not so much the function of \'storing up\' anything put into it as its use as a receptacle in which things are handed on or passed on from one to another like carrying away of earth from an excavation site by a line of workers.</p> <p class="info"><span class="emphasis indent">The Tipiṭaka</span> into which the P&#x101;&#7735;i Canon is systematically divided and handed down from generation to generation together with Commentaries forms the huge collection of literary works which the bhikkhus of the Order have to learn, study and memorize in discharge of their <span class="emphasis">gantha dhura</span>, the duty of studying.</p>',
    links: [
      { id: "info", link: "https://www.pariyatti.org/P%C4%81li#section7", label: "Learn More" },
      { id: "engbookurl", link: "https://store.pariyatti.org/Tipitaka-Sets_c_223.html", label: "English Set" },
      { id: "palibookurl", link: "https://store.pariyatti.org/Tipitaka-PTS-Pali-Canon-in-Pali-text--55-Books_p_2224.html", label: "Pali Set" },
      { id: "vri", link: "https://www.vridhamma.org/Tipitaka-Propject", label: "VRI" }
    ],
    sections: ["Vinaya Piṭaka", "Suttanta Piṭaka", "Abhidhamma Piṭaka"]
  },
  baskets: {
    vinaya: {
      id: "vinaya",
      name: "Vinaya Piṭaka",
      description: "The Vinaya Piṭaka is made up of rules of discipline laid down for regulating the conduct of the Buddha’s disciples who have been admitted into the order as bhikkhus (monks) and bhikkhunis (nuns). These rules embody authoritative injunctions of the Buddha on modes of conduct and restraints on both physical and verbal actions. They deal with transgressions of discipline, and with various categories of restraints and admonitions in accordance with the nature of the offence.",
      links: [
        { id: "info", link: "https://tipitaka.org/eot#2", label: "Learn More" },
        { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Discipline_p_1907.html", label: "English Books" },
        { id: "engbookurl2", link: "https://store.pariyatti.org/Patimokkha_p_2344.html", label: "Patimokkha" },
        { id: "engbookurl3", link: "https://store.pariyatti.org/Analysis-of-the-Bhikkhu-Patimokkha_p_4834.html", label: "Analysis of Patimokkha" },
        { id: "palibookurl", link: "https://store.pariyatti.org/Vinaya-Pitaka_p_2199.html", label: "Pali Books" },
        { id: "vri", link: "https://www.vridhamma.org/research/Pali-Tipitaka-as-the-Source-of-Vipassana", label: "Books at VRI" }
      ],
      books: [
        {
          id: "parajika",
          basket: "Vinaya Piṭaka",
          division: "Sutta Vibhaṅga",
          name: "Pārājika Pāḷi",
          translation: "",
          description: "Pārājika Pāḷi, which is the first book of the Vinaya Piṭaka and part of the Sutta Vibhaṅga division, gives an elaborate explanation of the important rules of discipline concerning pārājika and saṅghādisesa, as well as aniyata and nissaggiya which are minor offences. (The Sutta Vibhaṅga concludes with bhikkuni vinaya rules.)",
          volume: "1",
          sections: ["Pārājikā (expulsion)", "Saṅghadisesā (meetings of the Sangha)", "Aniyatā (indeterminate)", "Nissagiyā pācittiyā (expiation with forfeiture)"],
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#4", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Discipline_p_1907.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vinaya-Pitaka_p_2199.html", label: "Pali Books" },
            { id: "vri", link: "https://www.vridhamma.org/research/Pali-Tipitaka-as-the-Source-of-Vipassana", label: "Books at VRI" }
          ]
        },
        {
          id: "pacittiya",
          basket: "Vinaya Piṭaka",
          division: "Sutta Vibhaṅga",
          name: "Pācittiya Pāḷi",
          translation: "",
          description: "The Pācittiya Pāḷi, which is the second book of the Vinaya Piṭaka and part of the Sutta Vibhaṅga division, deals with the remaining sets of rules for the bhikkhus, namely, the pācittiya, the pāṭidesanīya, the sekhiya, the adhikaraṇasamatha and the corresponding disciplinary rules for the bhikkhunis. Although it is called in Pāḷi just pācittiya, it has the distinctive name of suddha pācittiya (ordinary pācittiya), to distinguish it from nissaggiya pācittiya, described above. (The Sutta Vibhaṅga concludes with bhikkuni vinaya rules.)",
          volume: "2",
          sections: ["suddha pācittiyā (ordinary expiation)", "pātidesaniyā (confession re: alms food)", "sekhiya (concerning etiquette & decorum) ", "adhikaraṇasamathā (legal process)"],
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#5", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Discipline_p_1907.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vinaya-Pitaka_p_2199.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "mahavagga",
          basket: "Vinaya Piṭaka",
          division: "Khandaka",
          name: "Mahāvagga Pāḷi",
          translation: "",
          description: 'Mahāvagga Pāḷi, made up of ten sections known as khandhakas, opens with an historical account of how the Buddha attained supreme enlightenment at the foot of the Bodhi tree, how he discovered the famous Law of Dependent Origination and how he gave his first sermon to the group of five bhikkhus on the discovery of the Four Noble Truths (i.e. the great "Discourse on the Turning of the Wheel of Dhamma"-Dhammacakkappavattana Sutta). This was followed by another great discourse, the Anattalakkhaṇa Sutta. These two suttas can be described as a compendium of the teaching of the Buddha. Mahāvagga further deals with procedures for an uposatha meeting, the assembly of the Sangha on every full moon day and on the fourteenth or fifteenth waning day of the lunar month when pāṭimokkha, a summary of the Vinaya rules, is recited. Also there are rules to be observed for rains retreat (vassa) during the rainy season as well as those for the formal ceremony of pavāraṇā concluding the rains retreat, in which a bhikkhu invites criticism from his brethren in respect of what has been seen, heard or suspected about his conduct.',
          volume: "3",
          sections: ["mahākhandhako: The Great Khandhaka (Rules for admission to the Order)", "uposathakkhandhako: The Uposatha Khandhaka (The Uposatha meeting and recital of the Pātimokkha or code of rules)", "vassūpanāyikakkhandhako: The Entering-for-the-Rains Khandhaka (Residence during the rainy season or vassa)", "pavāraṇākkhandhako: The Invitation Khandhaka (The ceremony concluding the retreat or pavāraṇa)", "cammakkhandhako: The Leather Khandhaka (Rules for articles of dress and furniture)", "bhesajjakkhandhako: The Medicine Khandhaka (Medicine and food)", "kaṭhinakkhandhako: The Kaṭhina Khandhaka (The annual distribution of robes or kaṭhina)", "cīvarakkhandhako: The Robe-cloth Khandhaka (Rules for sick Bhikkhus, sleeping, and robe-material)", "campeyyakkhandhako: The Campā Khandhaka (The mode of executing proceedings by the Order)", "kosambakakkhandhako: The Kosambī Khandhaka (Proceedings in cases of schism)"],
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#6", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Discipline_p_1907.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vinaya-Pitaka_p_2199.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "culavagga",
          basket: "Vinaya Piṭaka",
          division: "Khandaka",
          name: "Cūḷavagga Pāḷi",
          translation: "",
          description: "Cūḷavagga Pāḷi, which is book four of the Vinaya Piṭaka, deals with further rules and procedures for institutional acts or functions known as saṅghakamma. The twelve sections in this book deal with rules for offences such as saṅghādisesa that come before the Sangha; rules for observance of penances such as parivāsa and mānatta and rules for reinstatement of a bhikkhu. There are also miscellaneous rules concerning bathing, dress, dwellings and furniture and those dealing with treatment of visiting bhikkhus, and duties of tutors and novices.",
          volume: "4",
          sections: ["rules for dealing with offences that come before the Sangha (saṅghādisesa)", "procedures for putting a bhikkhu on probation", "procedures for dealing with accumulation of offences by a bhikkhu", "rules for settling legal procedures in the Sangha", "misrules for bathing, dress, etc.", "dwellings, furniture, lodging, etc.", "schisms", "classes of bhikkhus and duties of teachers & novices", "exclusion from the pātimokkha", "the ordination and instruction of bhikkhunis", "account of the 1st council at Rājagaha", "account of the 2nd council at Vesāli"],
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#7", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Discipline_p_1907.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vinaya-Pitaka_p_2199.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "parivara",
          basket: "Vinaya Piṭaka",
          division: "Parivāra-pāḷi",
          name: "Parivāra Pāḷi",
          translation: "",
          description: "Parivāra Pāḷi, which is the last book of the Vinaya Piṭaka, serves as a kind of manual. It is compiled in the form of a catechism, enabling the reader to make an analytical survey of the Vinaya Piṭaka. All the rules, official acts, and other matters of the Vinaya are classified under separate categories according to the subjects dealt with.",
          volume: "5",
          sections: ["catechisms on the rules of the monks'", "similar on the nuns' rules", "verse summary of origins; an action can be originated by body and/or speech, in each of the three cases with or without intention, making six origins in all; this chapter goes through all the Patimokkha rules for monks and nuns, saying which of these six are possible", "in two parts: a. repetitions on types of legal case involved in offences; b. which rules for settling disputes are to be applied to legal cases", "questions on Khandhaka", "lists arranged numerically (cf. Anguttara Nikaya)", "in two parts: a. beginning the recitation of the Patimokkha; b. exposition of reasons for rules", "collection of stanzas", "on legal cases", "additional collection of stanzas (mainly on reproving)", "on reproving", "lesser collection on disputes", "greater collection on disputes", "kathina: the process of making up robes", "Upali asks the Buddha questions, the answers being lists of five", "another chapter on origins", "second (sic) collection of stanzas", "'sweat-inducing stanzas': a collection of riddles (answers not given here); perhaps intended as exam questions", "in five parts: a. formal acts of the sangha; b. reasons for rules; c. laying down of rules; d. what was laid down; e. nine classifications (⁠—source: https://en.wikipedia.org/wiki/Parivāra)"],
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#8", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Discipline_p_1907.html", label: "English Books" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Patimokkha_p_2344.html", label: "Patimokkha" },
            { id: "engbookurl3", link: "https://store.pariyatti.org/Analysis-of-the-Bhikkhu-Patimokkha_p_4834.html", label: "Analysis of Patimokkha" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vinaya-Pitaka_p_2199.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
      ],
      commentary: ["Samantapasadika", "Kankhavitarani"],
      subcommentary: [],
    },
    suttanta: {
      id: "suttanta",
      name: "Suttanta Piṭaka",
      description: "The Suttanta Piṭaka is a collection of all the discourses delivered by the Buddha on various occasions in their entirety. A few discourses delivered by some of the distinguished disciples of the Buddha, such as the Venerable Sāriputta, Mahā Moggallāna, Venerable Ānanda etc., as well as some narratives, are also included in the books of the Suttanta Piṭaka. The discourses of the Buddha collected together in the Suttanta Piṭaka were delivered to suit different occasions and different audiences with different temperaments. Although the discourses were mostly intended for the benefit of bhikkhus and deal with the practice of the pure life and with the explanation of the teaching, there are also several other discourses which deal with the material and moral progress of the lay disciple.",
      links: [
        { id: "info", link: "https://tipitaka.org/eot#9", label: "Learn More" },
        { id: "engbookurl", link: "https://store.pariyatti.org/The-Basket-of-Discourses_c_185.html", label: "English Books" },
        { id: "palibookurl", link: "https://store.pariyatti.org/Sutta-Pitaka_c_194.html", label: "Pali Books" },
        { id: "vri", link: "https://www.vridhamma.org/Tipitaka-Propject#tablesaw-8898", label: "Books at VRI" }
      ],
      collections: {
        "digha-nikaya": {
          name: "Dīgha Nikāya",
          translation: "Collection of Long Discourses of the Buddha",
          qty: 34,
          description: "This collection in the Suttanta Pitaka, named Dīgha Nikāya as it is made up of thirty-four long discourses of the Buddha, is divided into three divisions (a) Sīlakkhanda Vagga, Division Concerning Morality (b) Mahā Vagga, the Large Division (c) Pāthika Vagga, the Division beginning with the discourse on Pathika, the naked ascetic.",
          sections: ["Sīlakkhanda Vagga, Division Concerning Morality", "Mahā Vagga, the Large Division", "Pāthika Vagga, the Division beginning with the discourse on Pathika, the naked ascetic."],
          commentary: ["Sumangalavilasini"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#10", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Long--DN_c_187.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Digha-Nikaya_c_196.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        "majjhima-nikaya": {
          name: "Majjhima Nikāya",
          translation: "Collection of Medium-length Discourses of the Buddha",
          qty: 152,
          description: "This collection of medium length discourses is made up of one hundred and fifty-two suttas in three books known as paṇṇāsa. The first book, Mūlapaṇṇāsa, deals with the first fifty suttas in five vaggas; the second book, Majjhimapaṇṇāsa consists of the second fifty suttas, also in five vaggas; and the last fifty-two suttas are dealt with in five vaggas of the third book, Uparipaṇṇāsa, which means more than fifty. The suttas in this nikāya throw much light on the social ideas and institutions of those days, and also provide general information on the economic and political life.",
          sections: ["Mūlapaṇṇāsa", "Majjhimapaṇṇāsa", "Uparipaṇṇāsa"],
          commentary: ["Papañcasudani"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#14", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Middle-Length--MN_c_188.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Majjhima-Nikaya_c_198.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        "samyutta-nikaya": {
          name: "Saṃyutta Nikāya",
          translation: "Collection of 'Connected Discourses' or 'Kindred Sayings' of the Buddha consisting of 7762 suttas of varied length, generally short, and arranged in a special order.",
          qty: 7762,
          description: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga. Each major vagga is divided into fifty-six groups known as saṃyuttas-related subjects grouped together. The saṃyuttas are named after the subjects they deal with, for example, Bojjhaṅga Saṃyutta on the seven factors of enlightenment, or after some principal personalities such as the Venerable Sāriputta, King Pasenadi of Kosala, or Sakka. Kosala Saṃyutta is a group of discourses concerning King Pasenadi of Kosala, and Devatā Saṃyutta deals with devas like Sakka, Indra, Brahmā, etc. Each saṃyutta is further divided into sections which are made up of individual suttas. Thus the well-known Dhammacakkappavattana Sutta is the first discourse (sutta) in the second section of Sacca Saṃyutta which comes under the Mahāvagga division of Saṃyutta Nikāya. In the following excerpts from Saṃyutta Nikāya, only a few suttas representing each major division are given.",
          sections: ["Sagāthā Vagga Saṃyutta Pāḷi", "Nidāna Vagga Saṃyutta Pāḷi", "Khandha Vagga Saṃyutta Pāḷi", "Saḷāyatana Vagga Saṃyutta Pāḷi", "Mahā Vagga Saṃyutta Pāḷi"],
          commentary: ["Saratthappakasini"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#33", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Connected--SN_c_186.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Samyutta-Nikaya_c_199.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        "anguttara-nikaya": {
          name: "Aṅguttara Nikāya",
          translation: "'Gradual Collection' or 'Numerical Discourses' of the Buddha",
          qty: 9557,
          description: '<p>This Collection of Discourses, Aṅguttara Nikāya, containing 9557 short suttas is divided into eleven divisions known as nipātas. Each nipāta is divided again into groups called vaggas which usually contain ten suttas. The discourses are arranged in progressive numerical order, each nipāta containing suttas with items of Dhamma, beginning with one item and moving up by units of one until there are eleven items of Dhamma in each sutta of the last nipāta. Hence the name Aṅguttara meaning "increasing by one item". The first nipāta, Ekaka Nipāta, provides in each sutta single items of Dhamma called the Ones; the second nipāta, Duka Nipāta, contains in each sutta two items of Dhamma called the Twos, the last nipāta, Ekādasaka Nipāta, is made up of suttas with eleven items of Dhamma in each, called the Elevens.</p><p>Aṅguttara Nikāya constitutes an important source book on Buddhist psychology and ethics, which provides an enumerated summary of all the essential features concerning the theory and practice of the Dhamma. A unique chapter entitled Etadagga Vagga of Ekaka Nipāta enumerates the names of the foremost disciples amongst the bhikkhus, bhikkhunis, upāsakas, upāsikās, who had achieved pre-eminence in one sphere of attainment or meritorious activity, e.g., the Venerable Sāriputta in intuitive wisdom and knowledge (paññā); the Venerable Mahā Moggallāna in supernormal powers (iddhi); Bhikkhunī Khemā in paññā; Bhikkhuni Uppalavanna in iddhi; the Upāsaka Anāthapiṇḍika and the Upāsikā Visākhā in alms-giving (dāna) and so on.</p>',
          sections: ["Ekaka Nipāta Pāḷi", "Duka Nipāta Pāḷi", "Tika Nipāta Pāḷi", "Catukka Nipāta Pāḷi", "Pañcaka Nipāta Pāḷi", "Chakka Nipāta Pāḷi", "Sattaka Nipāta Pāḷi", "Aṭṭhaka Nipāta Pāḷi", "Navaka Nipāta Pāḷi", "Dasaka Nipāta Pāḷi", "Ekādasaka Nīpata Pāḷi"],
          commentary: ["Manorathapurani"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#39", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Numerical--AN_c_190.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_c_195.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        "khuddaka-nikaya": {
          name: "Khuddaka Nikāya",
          translation: "'Minor Collection' of the Buddha. The word khuddaka means ‘small’ in Pali and Nikāya is ‘collection’.",
          qty: null,
          description: "Of all the five nikāyas Khuddaka Nikāya contains the largest number of treatises (as listed below) and the most numerous categories of Dhamma. Although the word khuddaka literally means minor or small, the actual content of this collection can by no means be regarded as minor, including as it does the two major divisions of the Piṭaka, namely, the Vinaya Piṭaka and the Abhidhamma Piṭaka according to one system of classification. The miscellaneous nature of this collection, containing not only the discourses by the Buddha but compilations of brief doctrinal notes mostly in verse, accounts of personal struggles and achievements by theras and therīs also in verse, the birth stories, the history of the Buddha, etc., may account for its title.",
          sections: ["Khuddakapāṭha Pāḷi", "The Dhammapada Pāḷi", "Udāna Pāḷi", "Itivuttaka Pāḷi", "Suttanipāta Pāḷi", "Vimāna Vatthu Pāḷi", "Peta Vatthu Pāḷi", "The Thera Gāthā Pāḷi", "The Therī Gāthā Pāḷi", "Jātaka Pāḷi", "Niddesa Pāḷi", "Paṭisambhidā Magga Pāḷi", "Apadāna Pāḷi", "Buddhavaṃsa Pāḷi", "Cariyā Piṭaka", "Netti", "Peṭakopadesa", "Milindapañha Pāḷi"],
          commentary: ["Paramatthajotika I", "Paramatthajotika II", "Dhammapada-atthakatha", "Suttanipata-atthakatha", "Jatakatthavannana", "Jātaka-atthakatha"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#51", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Minor--KN_c_189.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Khuddaka-Nikaya_c_197.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
      },
      books: [
        {
          id: "silakkhanda-vagga",
          basket: "Suttanta Piṭaka",
          collection: "Dīgha Nikāya",
          collid: "digha-nikaya",
          colltransl: "Collection of long discourses of the Buddha",
          name: "Sīlakkhanda Vagga Pāḷi",
          translation: "Division Concerning Morality",
          description: "<p>This division contains thirteen suttas which deal extensively with various types of morality, namely, Minor Morality, basic morality applicable to all; Middle Morality and Major Morality which are mostly practised by Samaṇas and Brāhmaṇas.</p> <p>It also discusses the wrong views then prevalent as well as brāhmin views of sacrifice and caste, and various religious practices such as extreme self-mortification.</p>",
          suttas: ["Brahmajāla Sutta, Discourse on the Net of Perfect Wisdom", "Sāmaññaphala Sutta, Discourse on the Fruits of the Life of a Samaṇa", "Ambaṭṭha Sutta", "Soṇadaṇḍa Sutta", "Kūṭadanta Sutta", "Mahāli Sutta", "Jāliya Sutta", "Mahāsīhanāda Sutta", "Poṭṭhapāda Sutta", "Subha Sutta", "Kevaṭṭa Sutta", "Lohicca Sutta", "Tevijja Sutta"],
          volume: "6",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#11", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "maha-vagga-digha",
          basket: "Suttanta Piṭaka",
          collection: "Dīgha Nikāya",
          collid: "digha-nikaya",
          colltransl: "Collection of long discourses of the Buddha",
          name: "Mahā Vagga Pāḷi",
          translation: "The Large Division",
          description: "The ten suttas in this division are some of the most important of the Tipiṭaka, dealing with historical and biographical aspects as well as the doctrinal aspects of Buddhism. The most famous sutta is the Mahāparinibbāna Sutta which gives an account of the last days and the passing away of the Buddha and the distribution of his relics. Mahāpadāna Sutta deals with brief accounts of the last seven Buddhas and the life story of the Vipassī Buddha. Doctrinally important are the two suttas: the Mahānidāna Sutta, which explains the Chain of Cause and Effect, and the Mahāsatipaṭṭhāna Sutta, which deals with the four methods of steadfast mindfulness and practical aspects of Buddhist meditation.",
          suttas: ["Mahāpadāna Sutta", "Mahānidāna Sutta", "Mahāparinibbāna Sutta", "Mahāsudassana Sutta", "Janavasabha Sutta", "Mahāgovinda Sutta", "Mahāsamaya Sutta", "Sakkapañha Sutta", "Mahāsatipaṭṭhāna Sutta", "Pāyāsi Sutta"],
          volume: "7",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#12", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Mahasatipatthana-Sutta-eBook-Vipassana", label: "Mahasatipatthana" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Buddhas-Last-Days-The_p_2377.html", label: "Buddha's Last Days" },
            { id: "engbookurl3", link: "https://store.pariyatti.org/Last-Days-of-the-Buddha_p_1469.html", label: "Last Days of the Buddha" },
            { id: "engbookurl4", link: "https://store.pariyatti.org/Sakkas-Quest_p_1807.html", label: "Sakka's Quest" },
            { id: "palibookurl", link: "", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "pathika-vagga",
          basket: "Suttanta Piṭaka",
          collection: "Dīgha Nikāya",
          collid: "digha-nikaya",
          colltransl: "Collection of long discourses of the Buddha",
          name: "Pathika Vagga Pāḷi",
          translation: "the Division beginning with the discourse on Pāthika, the Naked Ascetic",
          description: "This division is made up of eleven shorter discourses of a miscellaneous nature. They deal with the Buddha’s rejection of wrong and severe asceticism practised by followers of many sects. They deal also with the periodical evolution and dissolution of the universe, the accounts of universal monarchs and the thirty-two physiognomic characteristics of a great man. There is one discourse, Siṅgāla Sutta, addressed to a young brahmin showing the duties to be performed by members of the human society. The last two suttas, Saṅgīti and Dasuttara, are discourses given by the Venerable Sāriputta and they contain lists of doctrinal terms classified according to subject matter and numerical units. The style of their composition is different from the other nine suttas of the division.",
          suttas: ["Pāthika Sutta", "Udumbarikā Sutta", "Cakkavatti Sutta", "Aggañña Sutta", "Sampasādanīya Sutta", "Pāsādika Sutta", "Lakkhaṇa Sutta", "Siṅgāla Sutta", "Āṭānāṭiya Sutta", "Saṅgīti Sutta", "Dasuttara Sutta"],
          volume: "8",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#13", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "mulapannasa",
          basket: "Suttanta Piṭaka",
          collection: "Majjhima Nikāya",
          collid: "majjhima-nikaya",
          colltransl: "Collection of medium length discourses of the Buddha",
          name: "Mūlapaṇṇāsa Pāḷi",
          translation: "",
          description: "The first book, Mūlapaṇṇāsa, deals with the first fifty suttas in five vaggas.",
          vaggas: ["Mūlapariyāya Vagga", "Sīhanāda Vagga", "Opamma Vagga", "Mahāyamaka Vagga", "Cūḷayamaka Vagga"],
          suttas: ["Mūlapariyāya Sutta", "Sabbāsava Sutta", "Dhammadāyāda Sutta", "Bhayabherava Sutta", "Anaṅgana Sutta", "Ākaṅkheyya Sutta", "Vattha Sutta", "Sallekha Sutta", "Sammādiṭṭhi Sutta", "Mahāsatipaṭṭhāna Sutta", "Cūḷasīhanāda Sutta", "Mahāsīhanāda Sutta", "Mahādukkhakkhandha Sutta", "Cūḷadukkhakkhandha Sutta", "Anumāna Sutta", "Cetokhila Sutta", "Vanapattha Sutta", "Madhupiṇḍika Sutta", "Dvedāvitakka Sutta", "Vitakkasaṇṭhāna Sutta", "Kakacūpama Sutta", "Alagaddūpama Sutta", "Vammika Sutta", "Rathavinīta Sutta", "Nivāpa Sutta", "Pāsarāsi Sutta", "Cūḷahatthipadopama Sutta", "Mahāhatthipadopama Sutta", "Mahāsāropama Sutta", "Cūḷasāropama Sutta", "Cūḷagosiṅga Sutta", "Mahāgosiṅga Sutta", "Mahāgopālaka Sutta", "Cūḷagopālaka Sutta", "Cūḷasaccaka Sutta", "Mahāsaccaka Sutta", "Cūḷataṇhāsaṅkhaya Sutta", "Mahātaṇhāsaṅkhaya Sutta", "Massapura Sutta", "Cassapura Sutta", "Sāleyyaka Sutta", "Verañjaka Sutta", "Mahāvedalla Sutta", "Cūḷavedalla Sutta", "Cūḷadhammasamādāna Sutta", "Mahādhammasamādāna Sutta", "Vīmaṃsaka Sutta", "Kosambiya Sutta", "Brahmanimantanika Sutta", "Māratajjanīya Sutta"],
          volume: "9",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#15", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Middle-Length-Discourses-of-the-Buddha_p_1543.html", label: "English Books" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Mahasatipatthana-Sutta-eBook-Vipassana", label: "Mahasatipatthana" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Majjhima-Nikaya-Vol-1--4_p_2068.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "majjhima-pannasa",
          basket: "Suttanta Piṭaka",
          collection: "Majjhima Nikāya",
          collid: "majjhima-nikaya",
          colltransl: "Collection of medium length discourses of the Buddha",
          name: "Majjhima Paṇṇāsa Pāḷi",
          translation: "",
          description: "The second book, Majjhimapaṇṇāsa consists of the second fifty suttas, in five vaggas.",
          vaggas: ["Gahapati Vagga", "Bhikkhu Vagga", "Paribbājaka Vagga", "Rāja Vagga", "Brāhmaṇa Vagga"],
          suttas: ["Kandaraka Sutta", "Aṭṭhakanāgara Sutta", "Sekha Sutta", "Potaliya Sutta", "Jīvaka Sutta", "Upāli Sutta", "Kukkuravatika Sutta", "Abhayarājakumāra Sutta", "Bahuvedanīya Sutta", "Apaṇṇaka Sutta", "Ambalaṭṭhikarāhulovāda Sutta", "Mahārāhulovāda Sutta", "Cūḷamālukya Sutta", "Mahāmālukya Sutta", "Bhaddāli Sutta", "Laṭukikopama Sutta", "Cātumā Sutta", "Naḷakapāna Sutta", "Goliyāni Sutta", "Kīṭāgiri Sutta", "Tevijjavaccha Sutta", "Aggivaccha Sutta", "Mahāvaccha Sutta", "Dīghanakha Sutta", "Māgandiya Sutta", "Sandaka Sutta", "Mahāsakuludāyī Sutta", "Samaṇamuṇḍika Sutta", "Cūḷasakuludāyī Sutta", "Vekhanasa Sutta", "Ghaṭīkāra Sutta", "Raṭṭhapāla Sutta", "Maghādeva Sutta", "Madhura Sutta", "Bodhirājakumāra Sutta", "Aṅgulimāla Sutta", "Piyajātika Sutta", "Bāhitika Sutta", "Dhammacetiya Sutta", "Kaṇṇakatthala Sutta", "Brahmāyu Sutta", "Sela Sutta", "Assalāyana Sutta", "Ghoṭamukha Sutta", "Caṅkī Sutta", "Esukārī Sutta", "Dhanañjāni Sutta", "Vāseṭṭha Sutta", "Subha Sutta", "Saṅgārava Sutta"],
          volume: "10",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#21", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Middle-Length-Discourses-of-the-Buddha_p_1543.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Majjhima-Nikaya-Vol-1--4_p_2068.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "uparipannasa",
          basket: "Suttanta Piṭaka",
          collection: "Majjhima Nikāya",
          collid: "majjhima-nikaya",
          colltransl: "Collection of medium length discourses of the Buddha",
          name: "Uparipannasa",
          translation: "",
          description: "The last fifty-two suttas are dealt with in five vaggas of the third book, Uparipaṇṇāsa, which means more than fifty.",
          vaggas: ["Devadaha Vagga", "Ānupada Vagga", "Suññata Vagga", "Vibhaṅga Vagga", "Saḷāyatana Vagg"],
          suttas: ["Devadaha Sutta", "Pañcattaya Sutta", "Kinti Sutta", "Sāmagāma Sutta", "Sunakkhatta Sutta", "Āneñja-sappāya Sutta", "Gaṇakamoggallāna Sutta", "Gopakamoggallāna Sutta", "Mahāpuṇṇama Sutta", "Cūḷapuṇṇama Sutta", "Ānupada Sutta", "Chabbisodhana Sutta", "Sappurisa Sutta", "Sevitabbāsevitabba Sutta", "Bahudhātuka Sutta", "Isigili Sutta", "Mahācattārīsaka Sutta", "Ānāpānassati Sutta", "Kāyagatāsati Sutta", "Saṅkhārupapatti Sutta", "Cūḷasuññata Sutta", "Mahāsuññata Sutta", "Acchariya-abbhuta Sutta", "Bākula Sutta", "Dantabhūmi Sutta", "Bhūmija Sutta", "Anuruddha Sutta", "Upakkilesa Sutta", "Bālapaṇḍita Sutta", "Devadūta Sutta", "Bhaddekaratta Sutta", "Ānanda-bhaddekaratta Sutta", "Lomasakaṅgiya-bhaddekaratta Sutta", "Bhaddekaratta Sutta", "Cūḷakamma-vibhaṅga Sutta", "Mahākamma-vibhaṅga Sutta", "Saḷāyatana-vibhaṅga Sutta", "Uddesa-vibhaṅga Sutta", "Araṇa-vibhaṅga Sutta", "Dhātu-vibhaṅga Sutta", "Sacca-vibhaṅga Sutta", "Dakkhiṇā-vibhaṅga Sutta", "Anāthapiṇḍikovāda Sutta", "Channovāda Sutta", "Puṇṇovāda Sutta", "Nandakovāda Sutta", "Cūḷarāhulovāda Sutta", "Chachakka Sutta", "Mahāsaḷāyatanika Sutta", "Nagaravindeyya Sutta", "Piṇḍapātapārisuddha Sutta", "Indriyabhāvanā Sutta"],
          volume: "11",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#27", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Middle-Length-Discourses-of-the-Buddha_p_1543.html", label: "English Books" },
            { id: "engbookurl", link: "https://store.pariyatti.org/collected-bodhi-leaves-vol-4?redirect=1", label: "Anapanasati"},
            { id: "palibookurl", link: "https://store.pariyatti.org/Majjhima-Nikaya-Vol-1--4_p_2068.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "sagatha-vagga",
          basket: "Suttanta Piṭaka",
          collection: "Saṃyutta Nikāya",
          collid: "samyutta-nikaya",
          colltransl: "This collection of discourses (Connected Discourses or Kindred Sayings) in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          name: "Sagatha Vagga Saṃyutta",
          translation: "",
          description: "This major division of Sagāthā Vagga Saṃyutta Pāḷi contains eleven saṃyuttas with discourses grouped according to characters appearing in them: the king of devas, the devas, the Brahmā, māra, King of Kosala, bhikkhus and bhikkhunis. The name of the vagga, Sagāthā is derived from the fact that various personalities appearing in the discourses conducted their dialogues or interviews with the Buddha mostly in verse.",
          sections: ["Devatā-Saṃyutta", "Devaputta-Saṃyutta", "Kosala-Saṃyutta", "Māra-Saṃyutta", "Bhikkhūnī-Saṃyutta	", "Brahma-Saṃyutta", "Brāhmaṇa-Saṃyutta", "Vaṅgīsa-Saṃyutta", "Vana-Saṃyutta", "Yakkha-Saṃyutta", "Sakka-Saṃyutta"],
          suttas: [],
          volume: "12",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#34", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Samyutta-Nikaya_p_2153.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "nidana-vagga",
          basket: "Suttanta Piṭaka",
          collection: "Saṃyutta Nikāya",
          collid: "samyutta-nikaya",
          colltransl: "This collection of discourses (Connected Discourses or Kindred Sayings) in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          name: "Nidana Vagga Saṃyutta",
          translation: "",
          description: "This second major division of Nidāna Vagga Saṃyutta Pāḷi contains ten saṃyuttas, all dealing with fundamental aspects of the doctrine. The discourses are chiefly concerned with the principles of conditionality and interdependence, explained in the detailed formula which is called Paṭiccasamuppāda (Conditioned Genesis or Dependent Origination), consisting of twelve factors. Various aspects of Paṭiccasamuppāda, together with expositions on doctrinal matters concerning practice of the holy life form the main theme of the early suttas in these saṃyuttas.",
          sections: ["Nidāna-Saṃyutta", "Abhisamaya-Saṃyutta", "Dhātu-Saṃyutta", "Anamatagga-Saṃyutta", "Kassapa-Saṃyutta", "Lābha-Sakkāra-Saṃyutta", "Rāhula-Saṃyutta", "Lakkhaṇa-Saṃyutta", "Opamma-Saṃyutta", "Bhikkhu-Saṃyutta"],
          suttas: [],
          volume: "13",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#35", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Great-Discourse-On-Causation-The-_p_1480.html", label: "Discourse on Causation" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Dependent-Origination_p_1638.html", label: "Dependent Origination" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Samyutta-Nikaya_p_2153.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "khandha-vagga",
          basket: "Suttanta Piṭaka",
          collection: "Saṃyutta Nikāya",
          collid: "samyutta-nikaya",
          colltransl: "This collection of discourses (Connected Discourses or Kindred Sayings) in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          name: "Khandha Vagga Saṃyutta",
          translation: "",
          description: "The main theme of most suttas in this division is, as the name implies, khandhas, the five aggregates that constitute what is regarded as a being. Each of the components of these aggregates, namely, matter, sensation, perception, mental concomitants and consciousness is shown to be a bundle of dukkha (suffering). Made up of thirteen saṃyuttas, Khandha Vagga forms an important collection of doctrinal discussions on such topics such as atta, anattā, eternity and annihilation.",
          sections: ["Khandha-Saṃyutta", "Rādha-Saṃyutta", "Diṭṭhi-Saṃyutta", "Okkantika-Saṃyutta", "Uppāda-Saṃyutta", "Kilesa-Saṃyutta", "Sāriputta-Saṃyutta", "Nāga-Saṃyutta", "Supaṇṇa-Saṃyutta", "Gandhabbakāya-Saṃyutta", "Valāhaka-Saṃyutta", "Vacchagotta-Saṃyutta", "Jhāna- (or Samādhi-) -Saṃyutta"],
          suttas: [],
          volume: "14",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#36", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Samyutta-Nikaya_p_2153.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "salayatana-vagga",
          basket: "Suttanta Piṭaka",
          collection: "Saṃyutta Nikāya",
          collid: "samyutta-nikaya",
          colltransl: "This collection of discourses (Connected Discourses or Kindred Sayings) in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          name: "Saḷāyatana Vagga Saṃyutta",
          translation: "",
          description: "This division is made up of ten saṃyuttas or groups. It deals mainly with the six sense organs or bases of contact named internal sense bases (eye, ear, nose, tongue, body and mind); six corresponding sense objects, known as external sense bases (visible form, sound, odour, taste, tangible things and mind-objects); and consciousness that arises in relation to each pair of these internal and external sense bases. There are expositions on the impermanent nature of these sense bases and how relinquishing of attachment to them results in liberation. The second saṃyutta, known as the Vedanā Saṃyutta, focuses on the sensation arising from the coming together of the sense bases and conciousness. Sensation is shown to be of three kinds: pleasant, unpleasant and indifferent. None of these is permanent and each one of these is the cause of craving which in turn is the root of all suffering. Concise but illuminating expositions on nibbāna are found in many suttas. So also are there practical guides of Vipassana meditation.",
          sections: ["Saḷāyatana-Saṃyutta", "Vedanā-Saṃyutta", "Mātugāma-Saṃyutta", "Jambhukhādaka-Saṃyutta", "Samaṇdaka-Saṃyutta", "Moggallāna-Saṃyutta", "Citta-Saṃyutta", "Gāmani-Saṃyutta", "Asaṇkhata-Saṃyutta", "Avyākata-Saṃyutta"],
          suttas: [],
          volume: "15",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#37", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Samyutta-Nikaya_p_2153.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "maha-vagga-samyutta",
          basket: "Suttanta Piṭaka",
          collection: "Saṃyutta Nikāya",
          collid: "samyutta-nikaya",
          colltransl: "This collection of discourses (Connected Discourses or Kindred Sayings) in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          name: "Mahā Vagga Saṃyutta",
          translation: "",
          description: "The last vagga of Saṃyutta Nikāya is made up of twelve saṃyuttas, the list of which gives a clear indication of the subjects dealt with in this division: Magga Saṃyutta, Bojjhaṅga Saṃyutta, Satipaṭṭhāna Saṃyutta, Indriya Saṃyutta, Sammappadhāna Saṃyutta, Bala Saṃyutta, Iddhipāda Saṃyutta, Anuruddha Saṃyutta, Jhāna Saṃyutta, Ānāpāna Saṃyutta, Sotāpatti Saṃyutta and Sacca Saṃyutta. The main doctrines which from the fundamental basis of the Buddha’s teaching are reviewed in these saṃyuttas, covering both the theoretical and practical aspects. In the concluding suttas of the vagga, the ultimate goal of the holy life: arahatta phala, nibbāna, the end of all suffering, is constantly kept in full view together with a detailed description of the way of achieving it, namely, the Four Noble Truths and the Noble Path of Eight Constituents.",
          sections: ["Magga-Saṃyutta", "Bojjhaṅga-Saṃyutta", "Satipaṭṭhāna-Saṃyutta", "Indriya-Saṃyutta", "Sammappadhāna-Saṃyutta", "Bala-Saṃyutta", "Iddhipāda-Saṃyutta", "Anuruddha-Saṃyutta", "Jhāna-Saṃyutta", "Ānāpāna-Saṃyutta", "Sotāpatti-Saṃyutta", "Sacca-Saṃyutta"],
          suttas: [],
          volume: "16",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#38", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Samyutta-Nikaya_p_2153.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "ekaka-nipata",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Ekaka Nipāta Pāḷi",
          translation: "The Book of the Ones",
          description: "This group contains single items of Dhamma which form the subject matter of discourses given by the Buddha at Sāvatthi to the numerous bhikkhus residing there. But some of the suttas were given by the Venerable Sāriputta or the Venerable Ānanda.",
          // source: http://www.buddha-vacana.org/sutta/upa/AN/AN1.html#1
          sections: ["Rūpā Vagga ( Form and the Rest)", "Nīvaraṇa Vagga (Abandoning the Hindrances)", "Akammanīya Vagga (The Intractable)", "Adanta Vagga (The Untamed)", "Paṇihitā Vagga (The Mind Directed and Pellucid)", "Accharāsaṅghāta Vagga (The Finger-Snap)", "Vīriyārambhā Vagga (Energetic Effort)", "Kalyāṇamittā Vagga (Friendship with the Lovely)", "Pamādā Vagga (Earnestness, Etc.)", "Adhamma Vagga (In a Fourfold Way and Not Dhamma)", "Anāpatti Vagga (Unpardonable Offences)", "Eka-Puggala Vagga (The One Person)", "Etad-Agga Vagga ( Pre-Eminent Ones)", "Aṭṭhāna (The Impossibe)", "Eka-Dhamma Vagga (The One thing)", "Bīja Vagga (The Seed)", "Makkhali Vagga (Makkhali)", "Appamattaka Vagga (Trifling)", "Jhāna Vagga (Jhana Suttas, On Musing Suttas, Burning Suttas)"],
          suttas: [],
          volume: "17",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#40", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Numerical-Discourses-of-the-Buddha_p_4240.html", label: "Trans. by Bhikkhu Bodhi" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "duka-nipata",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Duka Nipāta Pāḷi",
          translation: "The Book of the Twos",
          description: "This group contains items of Dhamma, grouped in twos, which form the subject matter of discourses given by the Buddha...",
          sections: ["Kammakaraṇa Vagga (Punishments)", "Adhikaraṇa Vagga (Disputes)", "Bāla Vagga (The Fool)", "Samacitta Vagga (Of Tranquil Mind)", "Parisā Vagga (On Companies)", "Puggala Vagga (On Persons)", "Sukha Vagga (On Pleasures)", "Nimitta Vagga (On Characteristics)", "Dhamma Vagga (On Conditions)", "Dutiya Bāla Vagga (On Fools)", "Āsā Vagga (On Longings)", "Āyācana Vagga (On Aspiration)", "Dāna Vagga (On Gifts)", "Santhāra Vagga (On Greetings, Etc.)", "Samapatti Vagga Pannarasamo (On Conditions, Etc.)", "Kodha Vagga (Conditions, etc.)", "Sattarasamo Vagga (On Results)"],
          suttas: [],
          volume: "18",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#41", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "tika-nipata",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Tika Nipāta Pāḷi",
          translation: "The Book of the Threes",
          description: "This group contains items of Dhamma, grouped in threes, which form the subject matter of discourses given by the Buddha...",
          sections: ["Bāla Vagga (The Fool)", "Rathakāra Vagga (The Wheelwright)", "Puggala Vagga (On Persons)", "Devadūta Vagga (Messengers of the Devas)", "Cūḷa Vagga (The Minor Section)", "Brāhmaṇa Vagga (The Brahmins)", "Mahā Vagga (The Great Chapter)", "Ānanda Vagga (About Ananda)", "Samaṇa Vagga (The Recluse)", "Loṇakapalla Vagga (A Grain of Salt)", "Sambodhi Vagga (Enlightenment)", "Āpāyika Vagga (The Downfall)", "Kusināra Vagga (At Kusinara)", "Yodhājīva Vagga (The Fighting-Man)", "Maṅgala Vagga (Good Auspices)", "Acelaka Vagga (The Unclothed)", "Kammapathapeyyālaṃ", "Rāgapeyyālaṃ"],
          suttas: [],
          volume: "19",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#42", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "catukka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Catukka Nipāta Pāḷi",
          translation: "The Book of the Fours",
          description: "This group contains items of Dhamma, grouped in fours, which form the subject matter of discourses given by the Buddha...",
          sections: ["Bhanṭagāma Vagga (At Bhandagama)", "Cara Vagga (Deportment)", "Uruvela Vagga (Uruvelā)", "Cakka Vagga (The Wheel)", "Rohitassa Vagga (Rohitassa)", "Puññābhisanda Vagga (Flood of Merit)", "Pattakamma Vagga (Deeds of Merit)", "Apaṇṇaka Vagga (The Sure)", "Macala Vagga (Unshaken)", "Asura Vagga (Asuras)", "Valāhaka Vagga (Rain-Cloud)", "Kesi Vagga (Kesi)", "Bhaya Vagga (Fears)", "Puggala Vagga (On Persons)", "Ābhā Vagga (Splendour)", "Indriya Vagga (Controlling Powers)", "Paṭipada Vagga (Modes of Progress)", "Sañcetanika Vagga (Intentional)", "Yodhājīva Vagga (Fighting-Man)", "Mahā Vagga (The Great Chapter)", "Sappurīsa Vagga (The Worthy Man)", "Sobhaṇa Vagga (Corrupting)", "Sucarita Vagga (Good Conduct)", "Kamma Vagga (The Deed)", "Āpatti Vagga (Fear of Offence)", "Abhiññā Vagga (Higher Knowledge)", "Kammapatha Vaggo (Path of Action)", "Rāgādi Peyyālaṅ (Passion (and the rest))"],
          suttas: [],
          volume: "20",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#43", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "pancaka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Pancaka Nipāta Pāḷi",
          translation: "The Book of the Fives",
          description: "This group contains items of Dhamma, grouped in fives, which form the subject matter of discourses given by the Buddha...",
          sections: ["Sekhabala Vagga (The Learner's Power)", "Bala Vagga (The Powers)", "Pañc'aṅgika Vagga (The Fivefold)", "Sumanā Vagga (Sumanā)", "Muṇḍarāja Vagga (Rājah Muṇḍa)", "Nīvaraṇa Vagga (The Hindrances)", "Saññā Vagga (Thoughts)", "Yodhājīva Vagga (The Warrior)", "Thera Vagga (The Elder)", "Kakudha Vagga (Kakudha)", "Phāsu-Vihāra Vagga (The Abodes of Comfort)", "Andhakavinda Vagga (Andhakavinda Hare)", "Gilāna Vagga (The Sick)", "Rāja Vagga (The Rajah)", "Tikaṇḍaki Vagga (Three-Thorn Grove)", "Saddhamma Vagga (Saddhamma)", "Āghāta Vagga (Malice)", "Upāsaka Vagga (The Lay-Disciple)", "Arañña Vagga (The Forest)", "Brāhmaṇa Vagga or Soṇa Vagga (The Brahman)", "Kimbila Vagga (Kimbila)", "Akkosaka Vagga (The Abuser)", "Dīgha-Cārika Vagga (Wandering Afield)", "Āvāsika Vagga (In Residence)", "Duc-carita Vagga (Walking in Evil )", "Upasampadā Vagga (Acceptance)", "Sammuti Peyyālaṃ (The Food-Steward)", "Sikkhapada Peyyalaṃ (The Fivefold)", "Rāgā Peyyālaṃ (Passion)"],
          suttas: [],
          volume: "21",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#44", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "chakka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Chakka Nipāta Pāḷi",
          translation: "The Book of the Sixes",
          description: "This group contains items of Dhamma, grouped in sixes, which form the subject matter of discourses given by the Buddha...",
          sections: ["Āhuneyya Vagga (The Worthy)", "Sārāṇīya Vagga (Be Considerate)", "Anuttariya Vagga (Above all)", "Devatā Vagga (The Devas)", "Dhammika Vagga (Dhammika)", "Mahā Vagga (The Great Chapter)", "Devatā Vagga (The Devas)", "Arahatta Vagga (Arahantship)", "Sīti Vagga (The Cool)", "Ānisaṃsa Vagga (Advantages)", "Tika Vagga, (The Threes)", "Sāmañña Vagga —a.k.a. Vaggāsaṅgahitā Suttantā— (The Recital)"],
          suttas: [],
          volume: "22",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#45", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "sattaka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Sattaka Nipāta Pāḷi",
          translation: "The Book of the Sevens",
          description: "This group contains items of Dhamma, grouped in sevens, which form the subject matter of discourses given by the Buddha...",
          sections: ["Dhana-Vagga (Treasures)", "Anusaya-Vagga (Leanings)", "Vajjī-Vagga (The Vajjians)", "Devatā-Vagga (Devas)", "Mahāyañña-Vagga (The Great Sacrifice)", "Avyākata-Vagga (The Unexplained)", "Mahā-Vagga (The Great Chapter)", "Vinaya-Vagga (The Discipline)", "Samaṇa Vaggo (The Recital)", "Āhuneyya Vaggo", "Rāga Peyyālaṃ (The Understanding of Passion)"],
          suttas: [],
          volume: "23",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#46", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "atthaka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Atthaka Nipāta Pāḷi",
          translation: "The Book of the Eights",
          description: "This group contains items of Dhamma, grouped in eights, which form the subject matter of discourses given by the Buddha...",
          sections: ["Mettā Vagga (On Amity)", "Mahā Vagga (The Great Chapter)", "Gahapati-Vagga (On Householders)", "Dāna Vagga (On Giving)", "Uposatha-Vagga (The Observance Day)", "Gotamī Vagga aka Sa-ādhāna-Vagga (The Gotamid)", "Bhūmi-Cāla-Vagga (On Earthquakes)", "Yamaka-Vagga (The Pairs)", "Sati Vagga (Mindfulness)", "Rāgādi Peyyālaṃ (Passion)"],
          suttas: [],
          volume: "24",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#47", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "navaka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Navaka Nipāta Pāḷi",
          translation: "The Book of the Nines",
          description: "This group contains items of Dhamma, grouped in nines, which form the subject matter of discourses given by the Buddha...",
          sections: ["Sambodha-Vagga (The awakening)", "Sīhanāda-Vagga (The Lion Roar)", "Sattāvāsa-Vagga (Spheres of Beings)", "Mahā-Vagga (The Great Chapter)", "Pañcāla-Vagga aka: Sāmañña Vagga (The Pañcāla Chapter)", "Khema-Vagga (The Security)", "Satipaṭṭhāna-Vagga (The Arisings of Mindfulness)", "Sammappadhāna Vagga (Right Effort)", "Iddhipāda Vagga (Psychic Power)", "Rāgādi Peyyālaṃ Vaggo (Passion)"],
          suttas: [],
          volume: "25",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#48", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "dasaka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Dasaka Nipāta Pāḷi",
          translation: "The Book of the Tens",
          description: "This group contains items of Dhamma, grouped in tens, which form the subject matter of discourses given by the Buddha...",
          sections: ["Ānisaṃsa-Vagga (Profit)", "Nātha-Vagga (Things Making for Warding)", "Mahā-Vagga (The Great Chapter)", "Upāli-Vagga (Upali and Ananda)", "Akkosa-Vagga (Reviling)", "Sacitta-Vagga (One's Own Thoughts)", "Yamaka-Vagga (The Pairs)", "Ākaŋkha-Vagga (On Wishes)", "Thera-Vagga (The Elders)", "Upāsaka-Vagga (The Lay-Followers)", "Samaṇasaññā-Vagga (Ideas of a Recluse)", "Paccorohaṇi-Vagga (The Descent)", "Parisuddha-Vagga (Perfect Purity)", "Sādhu-Vagga (The Seemly)", "Ariyamagga-Vagga (The Ariyan Way)", "Puggala-Vagga (Persons)", "Jāṇussoṇi-Vagga (Janussoni)", "Sādhu-Vagga (The Seemly)", "Ariyamagga-Vagga (The Aryan Way)", "Puggala / Aparapuggala - Vagga (Persons)", "Kara-Ja-Kāya-Vagga (The Body Born of Deeds)", "Sāmañña-Vaggo (Characteristics)"],
          suttas: [],
          volume: "26",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#49", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "ekadasaka",
          basket: "Suttanta Piṭaka",
          collection: "Aṅguttara Nikāya",
          collid: "anguttara-nikaya",
          colltransl: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          name: "Ekadasaka Nipāta Pāḷi",
          translation: "The Book of the Elevens",
          description: "This group contains items of Dhamma, grouped in elevens, which form the subject matter of discourses given by the Buddha...",
          sections: ["Nissaya-Vagga (Dependence)", "Anussati-Vagga (Recollection)", "no title (Recapitulation)"],
          suttas: [],
          volume: "27",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#50", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Gradual-Sayings_p_1914.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Anguttara-Nikaya_p_1889.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "khuddakapatha",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Khuddakapāṭha Pāḷi",
          translation: "",
          description: "First of the treatises in this nikāya, Khuddakapāṭha contains 'readings of minor passages' most of which are also found in other parts of the Tipiṭaka. It is a collection of nine short formulae and the suttas used as a manual for novices under training, namely: (a) The Three Refuges; (b) The ten precepts; (c) The thirty-two parts of the body; (d) simple Dhamma for novices in the form of a catechism; (e) Maṅgala Sutta; (f) Ratana Sutta; (g) Tirokuṭṭa Sutta; (h) Nidhikaṇḍa Sutta; (i) Mettā Sutta.",
          sections: ["Saraṇattayaṃ (The Three Refuges)", "Dasasikkhāpadaṃ (The Ten Training Precepts)", "Dvattiṃsākāraṃ (The Thirty-Two-Fold Aspect)", "Kumārapañhaṃ (The Boy's Questions)", "Maŋgalasuttaṃ (The Good Omen Discourse)", "Ratanasuttaṃ (The Jewel Discourse)", "Tirokuḍasuttaṃ (The Without-the-Walls Discourse)", "Nidhikaṇḍasuttam (The Treasure-Store Discourse)", "Mettasuttaṃ (The Lovingkindness Discourse)"],
          suttas: [],
          volume: "28",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#52", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Khuddakapathapali", label: "Khuddakapathapali" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Lifes-Highest-Blessings-Pariyatti-Edition_p_5109.html", label: "Life's Highest Blessings" },
            { id: "palibookurl", link: "", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "dhammapada",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Dhammapada Pāḷi",
          translation: "",
          description: "It is a book of the Tipiṭaka which is popular and well-known not only in the Buddhist countries but also elsewhere. The Dhammapada is a collection of the Buddha’s words or basic and essential principles of the Buddha’s teaching. It consists of 423 verses arranged according to the topics in twenty-six vaggas or chapters.",
          sections: ["Yamaka Vagga (The Pairs)", "Appamāda Vagga (Heedfulness)", "Citta Vagga (The Mind)", "Puppha Vagga (Flowers)", "Bāla Vagga (The Fool)", "Paṇḍita Vagga (The Wise)", "Arahanta Vagga (The Arahant)", "Sahassa Vagga (The Thousands)", "Pāpa Vagga (Evil)", "Daṇḍa Vagga (Violence)", "Jarā Vagga (Old Age)", "Atta Vagga (The Self)", "Loka Vagga (The World)", "Buddha Vagga (The Buddha)", "Sukha Vagga (Happiness)", "Piya Vagga (Affection)", "Kodha Vagga (Anger)", "Mala Vagga (Impurity)", "Dhammaṭṭha Vagga (The Just)", "Magga Vagga (The Path)", "Pakiṇṇaka Vagga (Miscellaneous)", "Niraya Vagga (Hell)", "Nāga Vagga (Elephants)", "Taṇhā Vagga (Craving)", "Bhikkhu Vagga (Monks)", "Brāhmaṇa Vagg (The Brahman)"],
          suttas: [],
          volume: "29",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#53", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Dhammapada-Verses-Stories_p_5149.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Dhammapada-Pali_p_1959.html", label: "Pali Books" },
            { id: "spanish", link: "https://store.pariyatti.org/Dhammapada--Spanish-PDF-eBook_p_4671.html", label: "Spanish" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "udana",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Udāna Pāḷi",
          translation: "",
          description: "An udāna is an utterance mostly in verse form inspired by a particularly intense emotion. This treatise is a collection of eighty joyful utterances made by the Buddha on unique occasions of sheer bliss; each udāna in verse is accompanied by an account in prose of the circumstances that led to its being uttered.",
          sections: ["Buddhi Vagga (Enlightenment)", "Mucalinda Vagga (About Mucalindavaggo)", "Nanda Vagga (About Nanda)", "Meghiya Vagga (About Meghiya)", "Sonatherassa Vagga (About Sona)", "Jaccandha Vagga (Blind from Birth)", "Cūla Vagga (The Minor Chapter)", "Pāṭaligāmiya Vagga (About Patali Village)"],
          suttas: [],
          volume: "30",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#54", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/The-Udana-The-Itivuttaka-Pariyatti-Edition_p_5110.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Udana-Pali_p_2188.html", label: "Pali Books" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Udana-Commentary-Vol-1--2-English_p_2191.html", label: "Commentary" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "itivuttaka",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Itivuttaka Pāḷi",
          translation: "",
          description: 'The fourth treatise contains 112 suttas divided into four nipātas with verses and prose mixed, one supplementing the other. Although the collections contain the inspired sayings of the Buddha as in udāna, each passage is preceded by the phrase, "iti vuttaṃ bhagavata" ("thus was said by the Buddha"), and reads like a personal notebook in which are recorded short pithy sayings of the Buddha.',
          sections: ["Eka Nipāto (The Section Dealing with Single Items)", "Duka Nipāto (The Section Dealing with Double Items)", "Tika Nipāto (The Section Dealing with Triple Items)", "Catukka Nipāto (The Section Dealing with Quadruple Items)"],
          suttas: [],
          volume: "31",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#55", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/The-Udana-The-Itivuttaka-Pariyatti-Edition_p_5110.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Itivuttaka-Pali_p_2002.html", label: "Pali Books" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Itivuttaka-Commentary-Vol-1--3_p_2005.html", label: "Commentary" },
            { id: "ebookurl", link: "https://store.pariyatti.org/Itivuttakapali_p_5137.html", label: "eBooks" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "suttanipata",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Suttanipāta Pāḷi",
          translation: "",
          description: "<p>As well-known as Dhammapada, Sutta Nipāta is also a work in verse with occasional introduction in prose. It is divided into five vaggas: (i) Uraga Vagga of twelve suttas; (ii) Cūḷa Vagga of fourteen suttas; (iii) Mahā Vagga of twelve suttas; (iv) Aṭṭhaka Vagga of sixteen suttas; (v) Pārāyana Vagga of sixteen questions.</p> <p>In the twelve suttas of the Uraga Vagga are found some important teachings of the Buddha which may be practised in the course of one’s daily life: <blockquote>\"True friends are rare to come by these days; a show of friendship very often hides some private ends. Man’s mind is defiled by self-interest, so, becoming disillusioned, he roams alone like a rhinoceros.\"(Khaggavisāna Sutta)</blockquote></p> <p>Pārāyana Vagga deals with sixteen questions asked by sixteen brahmin youths while the Buddha is staying at Pāsānaka shrine in the country of Magadha. The Buddha gives his answers to each of the questions asked by the youths. Knowing the meaning of each question and that of the answer given by the Buddha, if one practises the Dhamma as instructed in this sutta, one can surely reach the other shore, which is free from ageing and death. The Dhamma in this sutta is known as <em>pārāyana</em>.</p>",
          sections: ["Uraga Vagga (The Snake Chapter)", "Cūla Vagga (The Small Chapter", "Mahā Vagga (The Great Chapter", "Aṭṭhaka Vagga (The Chapter of Eights), Pārāyana Vagga (Going to the Far Shore)"],
          suttas: [],
          volume: "32",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#56", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Suttanipata_p_5051.html", label: "English Books" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Suttanipata-Commentary-II-being-Paramatthajotika--3-Volume-Set_p_2174.html", label: "Commentary" },
            { id: "palibookurl", link: "", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "vimana-vatthu",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Vimāna Vatthu Pāḷi",
          translation: "Stories of the Vimana (usually translated as 'heavenly abodes' or 'divine mansions)",
          description: "Vimāna means mansion. Here it refers to celestial mansions gained by beings who have done acts of merit. In this text are eighty-five verses grouped in seven vaggas. In the first four vaggas, celestial females give an account of the acts of merit they have performed in previous existences as human beings and of their rebirth in deva realms where magnificent mansions await their appearance. In the last three vaggas the celestial males tell their stories.",
          sections: ["Pīṭha Vagga", "Cittalatā Vagga", "Pāricchattaka Vagga", "Mañjiṭṭhaka Vagga", "Mahāratha Vagga", "Pāyāsi Vagga", "Sunikkhitta Vagga"],
          suttas: [],
          volume: "33",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#57", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Vimana-Stories_p_6283.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vimanavatthu-and-Petavatthu_p_2197.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "peta-vatthu",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Peta Vatthu Pāḷi",
          translation: "Ghost Stories or Stories of the Hungry Ghosts",
          description: "The stories of petas are graphic accounts of the miserable beings who have been reborn in unhappy existences as a consequence of their evil deeds. There are fifty-one stories divided into four vaggas, describing the life of misery of the evil doers, in direct contrast to the magnificent life of the devas.",
          sections: ["Uraga Vagga", "Ubbari Vagga", "Cūḷa Vagga", "Mahā Vagga"],
          suttas: [],
          volume: "34",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#58", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Pitaka-Disclosure_p_2134.html", label: "English Books" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Peta-Stories_p_2132.html", label: "Peta Stories" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vimanavatthu-and-Petavatthu_p_2197.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "thera-gatha",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "The Thera Gāthā Pāḷi",
          translation: "",
          description: "The Thera Gāthā Pāḷi and The Therī Gāthā Pāḷi treatises form a compilation of delightful verses uttered by some two hundred and sixty-four theras and seventy-three therīs through sheer exultation and joy that arose out of their religious devotion and inspiration. These inspiring verses gush forth from the hearts of bhikkhus and bhikkhunis after their attainment of arahatship as an announcement of their achievement and also as statement of the effort which has led to their final enlightenment.",
          sections: ["Ekaka Nipāta (Canto I. Single Verses)", "Duka Nipāta (Canto II. Psalms of Two Verses)", "Tika Nipāta (Canto III. Psalms of Three Verses)", "Catukka Nipāta (Canto VI. Psalms of Four Verses)", "Pañcaka Nipāta (Canto V. Psalms of Five Verses)", "Chakka Nipāta (Canto VI. Psalms of Six Verses)", "Sattaka Nipāta (Canto VII. Psalms of Seven Verses)", "Aṭṭhaka Nipāta (Canto VIII. Psalms of Eight Verses)", "Navaka Nipāta (Canto IX. Psalms of Nine Verses)", "Dasaka Nipāta (Canto X. Psalms of Ten Verses)", "Ekādasaka Nīpata (Canto XI. Psalms of Eleven Verses)", "Dvādasaka Nipāta (Canto XII. Psalms of Twelve Verses)", "Terasa Nipāta (Canto XIII. Psalms of Thirteen Verses)", "Cuddasaka Nipāta (Canto XIV. Psalm of Fourteen Verses)", "Soḷasaka Nipāta (Canto XV. Psalms of Sixteen Verses)", "Vīsati Nipāta (Canto XVI. Psalms of Twenty Verses)", "Tiṃsa Nipāta (Canto XVII. Psalms of Thirty Verses)", "Cattālīsa Nipāta (Canto XVIII. Psalms of Forty Verses)", "Paññāsa Nipāta (Canto XIX. Psalms of Fifty Verses)", "Saṭṭhi Nipāta (Canto XX. Psalms of Sixty Verses)", "Mahā Nipāta (Canto XXI. Poem of Seventy-One Verses: Called also 'The Great Nipāta')"],
          suttas: [],
          volume: "35",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#59", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Elders-Verses-Vol-1--2_p_1990.html", label: "English Books" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Poems-of-Early-Buddhist-Monks-Nuns_p_2135.html", label: "Poems" },
            { id: "palibookurl", link: "", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "theri-gatha",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "The Therī Gāthā Pāḷi",
          translation: "",
          description: "The Thera Gāthā Pāḷi and The Therī Gāthā Pāḷi treatises form a compilation of delightful verses uttered by some two hundred and sixty-four theras and seventy-three therīs through sheer exultation and joy that arose out of their religious devotion and inspiration. These inspiring verses gush forth from the hearts of bhikkhus and bhikkhunis after their attainment of arahatship as an announcement of their achievement and also as statement of the effort which has led to their final enlightenment.",
          sections: ["Ekaka Nipāta (Canto I. Single Verses)", "Duka Nipāta (Canto II. Psalms of Two Verses)", "Tika Nipāta (Canto III. Psalms of Three Verses)", "Catukka Nipāta (Canto VI. Psalms of Four Verses)", "Pañcaka Nipāta (Canto V. Psalms of Five Verses)", "Chakka Nipāta (Canto VI. Psalms of Six Verses)", "Sattaka Nipāta (Canto VII. Psalms of Seven Verses)", "Aṭṭhaka Nipāta (Canto VIII. Psalms of Eight Verses)", "Navaka Nipāta (Canto IX. Psalms of Nine Verses)", "Ekādasaka Nīpata (Canto X. Psalms of Eleven Verses)", "Dvādasaka Nipāta (Canto XI. Psalms of Twelve Verses)", "Soḷasaka Nipāta (Canto XII. Psalms of Sixteen Verses)", "Vīsati Nipāta (Canto XIII. Psalms of about Twenty Verses)", "Tiṃsa Nipāta (Canto XIV. Psalms of about Thirty Verses)", "Cattālīsa Nipāta (Canto XV. Psalms of over Forty Verses)", "Mahā Nipāta (Canto XVI. 'The Great Canto')"],
          suttas: [],
          volume: "36",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#60", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Poems-of-Early-Buddhist-Nuns_p_6321.html", label: "English Books" },
            { id: "ebookurl", link: "https://store.pariyatti.org/Therigathapali--Book-of-Verses-of-Elder-Bhikkhunis_p_5078.html", label: "Therigathapali" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Poems-of-Early-Buddhist-Monks-Nuns_p_2135.html", label: "Poems" },
            { id: "frenchbookurl", link: "https://store.pariyatti.org/Stances-des-Theri_p_2446.html", label: "French" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Commentary-on-the-Verses-of-the-Theris_p_1948.html", label: "Commentary" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Therigatha-Commentary_p_2184.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "jataka",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Jātaka Pāḷi",
          translation: "Birth-stories of the Buddha",
          description: "These are the stories of the previous existences of Gotama Buddha, while he was as yet only a bodhisatta. The Jātaka is an extensive work in verses containing five hundred and forty-seven stories or previous existences as recounted by the Buddha (usually referred to in Burma as 550 stories). The treatise is divided into nipātas according to the number of verses concerning each story. The one verse stories are classified as Ekaka Nipāta, the two verse stories come under Duka Nipāta etc. It is the commentary to the verses which gives the complete birth-stories. In these birth-stories are embedded moral principles and practices which the bodhisatta had observed for self-development and perfection to attain Buddhahood.",
          sections: ["Ekanipāta (Apaṇṇakavagga, Sīlavagga, Kuruñgavagga, Kulāvakavagga, Atthakā,avagga, Āsiṃsavagga, Itthivagga, Varaṇavagga, Apāyimhavagga, Littavagga, Parosattavagga, Haṃsivagga, Kusanāḷivagga, Asampadānavagga, Kakaṇṭakavagga)", "Dukanipāta (Daḷhavagga, Santhavagga, Kalyāṇadhammavagga, Asadisavagga, Ruhakavagga, Nataṃdaḷhavagga, Bīraṇatthambhakavagga, Kāsāvavagga, Upāhanavagga, Sigālavagga)", "Tikanipāta (Saṃkappavagga, Kosiyavagga, Araññavagga, Abbhantaravagga, Kumbhavagga) ", "Catukknipāta (Vivaravagga, Pucimandavagga, Kuṭidūsakavagga, Kokilavagga, Cullakuṇāvagga) ", "Pañcanipāta (Maṇikuṇḍalavagga, Vaṇṇārohaavagga, Aḍḍhavagga)", "Chanipāta (Avāriyavagga, Senakavagga)", "Sattanipāta (Kukkuvagga, Gamdjāravagga)", "Aṭṭhanipāta (Kaccānivagga)", "Navanipāta", "Dasanipāta", "Ekadasanipāta", "Dvādasanipāta", "Terasanipāta", "Pakiṇṇakanipāta", "Vīsatinipāta", "Tiṃsanipāta", "Cattālīsanipāta", "Paṇṇāsanipāta", "Chaṭṭhinipāta", "Sattatinipāta", "Asītinipāta", "Mahānipāta"],
          suttas: [],
          volume: "37",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#61", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Jataka-English-Vol-1--3_p_2007.html", label: "PTS 3-Vol. English" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Jataka-Tales-of-the-Buddha--An-Anthology-Vol-I--III-Pariyatti-Edition_p_5105.html", label: "Kawasaki 3-Vol. English" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Jataka-with-Commentary-Vol-1--7_p_2012.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "niddesa",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Niddesa Pāḷi",
          translation: "",
          description: "This division of Khuddaka Nikāya consists of two parts: Mahā Niddesa (the major exposition) which is the commentary on the fourth vagga (Aṭṭhaka) of the Sutta Nipāta, and Cūḷa Niddesa (the minor exposition) which is the commentary on the fifth vagga (Pārāyana) and on the Khaggavisāna Sutta in the first vagga. Attributed to the Venerable Sāriputta, these exegetical works contain much material on the Abhidhamma and constitute the earliest forms of commentaries, providing evidence of commentarial tradition many centuries before the Venerable Buddhaghosa appeared on the scene.",
          sections: ["Mahā Niddesa (Kāmasutta Niddesa, Guhaṭṭhakasutta Niddesa, Duṭṭhaṭṭhakasutta Niddesa, Suddhaṭṭhakasutta Niddesa, Paramaṭṭhakasutta Niddesa, Jarāsutta Niddesa, Tissametteyyasutta Niddesa, Pasūrasutta Niddesa, Māgaṇḍiyasutta Niddesa, Purābhedasutta Niddesa, Kalahavivādasutta Niddesa, Cūḷaviyūhasutta Niddesa, Mahāviyūhasutta Niddesa, Tuvaṭṭakasutta Niddesa, Attadaṇḍasutta Niddesa, Sāriputtasutta Niddesa)", "Cūḷa Niddesa (Pārāyana Vagga, Pārāyana Vagga Niddesa, Khaggavisāṇa Sutta)"],
          suttas: [],
          volume: "38",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#62", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/search.asp?keyword=Niddesa", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "patisambhida",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Paṭisambhidā Magga Pāḷi",
          translation: "The Path of Analysis",
          description: "This treatise, entitled the Path of Analysis, is attributed to the Venerable Sāriputta. It deals with the most important teachings of the Buddha analytically in the style of the Abhidhamma. It is divided into three main vaggas, namely, Mahā Vagga, Yuganaddha Vagga and Paññā Vagga. Each vagga consists of ten sub-groups, named kathās, such as ñāṇa Kathā, Diṭṭhi Kathā etc. The treatment of each subject is very detailed and provides a theoretical foundation for the practice of the path.",
          sections: ["Mahā Vagga (Great Division - enumeration, or mātikā, of 73 types of knowledge, or ñāṇa, which are then elaborated upon in detail)", "Yuganaddha Vagga (Coupling Division - poses a series of questions)", "Paññā Vagga (Wisdom Division - answers the prior division's questions)"],
          suttas: [],
          volume: "39",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#63", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Patisambhidamagga-2-Vols-as-1_p_2128.html", label: "Pali Books" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Saddhammappakasini-commentary-on-the-Patisambhidamagga-Vol-1--3_p_2130.html", label: "Commentary" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "apadana",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Apadāna Pāḷi",
          translation: "",
          description: "This is a biographical work containing the life stories (past and present) of the Buddha and his arahat disciples. It is divided into two divisions: the <em>Therāpadāna</em>, giving the life stories of the Buddha, of forty-one paccekabuddhas and of five hundred and fifty-nine arahats from the Venerable Sāriputta to the Venerable Raṭṭhapāla; and <em>Therīpadāna</em>, with the life stories of forty therī arahats from Sumedhā Therī to Pesalā Therī.",
          sections: ["Therāpadāna (life stories—past and present—of the Buddha's monk arahat disciples)", "Therīpadāna (life stories—past and present—of the Buddha's nun arahat disciples)"],
          suttas: [],
          volume: "40",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#64", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Apadana-The-two-volumes-as-one_p_2300.html", label: "Pali Books" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Apadana-Commentary-Visuddhajanavilasani_p_1899.html", label: "Commentary" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "buddhavamsa",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Buddhavaṃsa Pāḷi",
          translation: "History of the Buddhas",
          description: "Buddhavaṃsa Pāḷi gives a short historical account of Gotama Buddha and of the twenty-four Buddhas who had prophesied his attainment of Buddhahood. It consists of twenty-nine sections in verse.",
          sections: ["Ratanacaṅkamanakaṇḍaṃ", "Sumedhapatthanākathā", "Dīpaṅkarabuddhavaṃso (Buddha Dipankara)", "Koṇḍaññabuddhavaṃso (Buddha Kondanna)", "Maṅgalabuddhavaṃso (Buddha Mangala)", "Sumanabuddhavaṃso (Buddha Sumana)", "Revatabuddhavaṃso (Buddha Revata)", "Sobhitabuddhavaṃso (Buddha Sobhita)", "Anomadassībuddhavaṃso (Buddha Anomadassi)", "Padumabuddhavaṃso (Buddha Paduma)", "Nāradabuddhavaṃso (Buddha Narada)", "Padumuttarabuddhavaṃso (Buddha Padumuttara)", "Sumedhabuddhavaṃso (Buddha Sumedha)", "Sujātabuddhavaṃso (Buddha Sujata)", "Piyadassībuddhavaṃso (Buddha Piyadassi)", "Atthadassībuddhavaṃso (Buddha Atthadassi)", "Dhammadassībuddhavaṃso (Buddha Dhammadassi)", "Siddhatthabuddhavaṃso (Buddha Siddhattha)", "Tissabuddhavaṃso (BuddhaTissa)", "Phussabuddhavaṃso (Buddha Phussa)", "Vipassībuddhavaṃso (Buddha Vipassi)", "Sikhībuddhavaṃso (Buddha Sikhi)", "Vessabhūbuddhavaṃso (Buddha Vessabhu)", "Kakusandhabuddhavaṃso (Buddha Kakusandha)", "Koṇāgamanabuddhavaṃso (Buddha Konagamana)", "Kassapabuddhavaṃso (Buddha Kassapa)", "Gotamabuddhavaṃso (Buddha Gotama)", "Buddhapakiṇṇakakaṇḍaṃ", "Dhātubhājanīyakathā"],
          suttas: [],
          volume: "41",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#65", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Minor-Anthologies-Vol-2--4_p_2087.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Buddhavamsa-and-Cariyapitaka_p_1929.html", label: "Pali Books" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Buddhavamsa-Commentary_p_1930.html", label: "Commentary" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "cariya",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Cariyā Piṭaka",
          translation: "basket of proper conduct",
          description: "This treatise contains thirty-five stories of the Buddha’s previous lives retold at the request of the Venerable Sāriputta. Whereas the Jātaka is concerned with the Buddha’s previous existences from the time of Sumedha, the hermit, till he became Gotama Buddha, Cariyā Piṭaka deals only with thirty-five of the existences of the bodhisatta in this last world cycle. The Venerable Sāriputta’s object in making the request is to highlight the indomitable will, the supreme effort, the peerless sacrifice with which the bodhisatta conducts himself in fulfillment of the ten pāramīs (virtues towards perfection).",
          sections: ["Akitti Vagga  (10 stories for the perfection of offering or dāna)", "Hatthināga Vagga (10 stories for the perfection of conduct or sīla)", "Yudhañjaya Vagga (15 stories distributed among five other perfections: renunciation or nekkhamma,resolute determination or adhiṭṭhāna, truth or sacca, loving-kindness or mettā, equanimity or upekkhā)"],
          suttas: [],
          volume: "42",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#66", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Minor-Anthologies-Vol-2--4_p_2087.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Buddhavamsa-and-Cariyapitaka_p_1929.html", label: "Pali Books" },
            { id: "commbookurl", link: "https://store.pariyatti.org/Cariyapitika-Commentary-Indexes_p_1935.html", label: "Commentary" },
            { id: "engcommbookurl", link: "https://store.pariyatti.org/Clarifier-of-the-Sweet-Meaning_p_1941.html", label: "English Comm." },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "netti",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Netti",
          translation: "",
          description: "The two small works, Netti, made up of seven chapters, and Peṭakopadesa, made up of eight chapters, are different from the other books of the Tipiṭaka because they are exegetical and methodological in nature.",
          sections: ["Saṅgahavāro (a short section consisting of only five verses that identifies its author as 'Mahakaccāna')", "Vibhāgavāra (Explanations', which is divided into three sub-sections: Uddesavāro - 'Specification Section', Niddesavāro - 'Demonstrative Section', Paṭiniddesavāro - 'Counter-demonstrative Section')"],
          suttas: [],
          volume: "43",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#67", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Guide-The_p_1996.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Nettipakarana_p_2093.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "petakopadesa",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Peṭakopadesa",
          translation: "",
          description: "The two small works, Netti, made up of seven chapters, and Peṭakopadesa, made up of eight chapters, are different from the other books of the Tipiṭaka because they are exegetical and methodological in nature.",
          sections: ["Ariyasacca Pakāsana (display of the Noble Truths)", "Sāsana Paṭṭhāna (pattern of the dispensation)", "Suttādhiṭṭhāna (terms of expression in the thread)", "Suttavicayaca (investigation of threads)", "Hãravibhanga (modes of conveying in separate treatment)", "Suttatthasamuccaya (compendium of the thread's meaning)", "Hārasampāta (modes of conveying in combined treatment)", "Sutta Vibhaṅgiya (Analyses of Suttas)"],
          suttas: [],
          volume: "44",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#68", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Pitaka-Disclosure_p_2134.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Petakopadesa_p_2133.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "milindapanha",
          basket: "Suttanta Piṭaka",
          collection: "Khuddaka Nikāya",
          collid: "khuddaka-nikaya",
          colltransl: "Contains the largest number of treatises and the most numerous categories of dhamma",
          name: "Milindapañha Pāḷi",
          translation: "",
          description: "Milindapañha Pāḷi is the last of the books which constitute Khuddaka Nikāya. It records the questions asked by King Milinda and the answers given by the Venerable Nāgasena some five hundred years after the parinibbāna of the Buddha. King Milinda was Yonaka (Graeco-Bactrian) ruler of Sāgala. He was very learned and highly skilled in the art of debating. The Venerable Nāgasena, a fully accomplished arahat, was on a visit to Sāgala, at the request of the Sangha.",
          sections: ["Milindapañhapāḷi", "Milindapañho", "Meṇḍakapañho", "Anumānapañho", "Opammakathāpañho"],
          suttas: [],
          volume: "45",
          commentary: [],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#69", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Milindas-Questions-Vol-1--2_p_2084.html", label: "English Books" },
            { id: "engbookurl2", link: "https://store.pariyatti.org/Questions-of-King-Milinda-The_p_1466.html", label: "Questions of King Milinda" },
            { id: "palibookurl", link: "", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        }
      ],
      commentary: ["Vimuttimagga", "Visuddhimagga", "Sumangalavilasini", "Papañcasudani", "Saratthappakasini", "Manorathapurani", "Paramatthajotika I", "Paramatthajotika II", "Dhammapada-atthakatha", "Suttanipata-atthakatha", "Jatakatthavannana", "Jātaka-atthakatha"],
      subcommentary: [],
    },
    abhidhamma: {
      id: "abhidhamma",
      name: "Abhidhamma Piṭaka",
      description: "Abhidhamma is the third great division of the Piṭaka. It is a huge collection of systematically arranged, tabulated and classified doctrines of the Buddha, representing the quintessence of this teaching. Abhidhamma means higher teaching or special teaching; it is unique in its analytical approach, immensity of scope and support for one’s liberation.",
      links: [
        { id: "info", link: "https://tipitaka.org/eot#70", label: "Learn More" },
        { id: "engbookurl", link: "https://store.pariyatti.org/Abhidhamma_c_184.html", label: "English Books" },
        { id: "palibookurl", link: "https://store.pariyatti.org/Abhidhamma-Pitaka_c_193.html", label: "Pali Books" },
        { id: "vri", link: "https://www.vridhamma.org/Tipitaka-Propject#tablesaw-8898", label: "Books at VRI" }
      ],
      books: [
        {
          id: "dhammasangani",
          basket: "Abhidhamma Piṭaka",
          name: "The Dhammasaṅgaṇī Pāḷi",
          translation: "Buddhist Psychological Ethics",
          description: "The Dhammasaṅgiṇī, the first book of the Abhidhamma, and the Paṭṭhāna, the last book, are the most important of the seven treatises of Abhidhamma, providing as they do the quintessence of the entire Abhidhamma. The Dhammasaṅgaṇī enumerates all the dhammas (phenomena) i.e., all categories of nāma, namely, consciousness and mental concomitants; and rūpa, (corporeality). Having enumerated the phenomena, they are arranged into various categories to bring out their exact nature, function and mutual relationship both internally (in our own being) and with the outside world.",
          volume: "46",
          sections: ["The Mātikā (serves as a classified table of mental constituents relevant not only to the Dhammasaṅgaṇī but also to the entire system of the Abhidhamma.)",
            "Cittuppāda Kaṇḍa (division on the arising of consciousness and mental concomitants).",
            "Rūpa Kaṇḍa (division concerning corporeality).",
            "Nikkhepa Kaṇḍa (division that avoids elaboration).",
            "Aṭṭhakathā Kaṇḍa (supplementary digest)."
          ],
          commentary: ["Atthasālinī"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#72", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Buddhist-Manual-of-Psychological-Ethics_p_6266.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Dhammasangani_p_1966.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "vibhanga",
          basket: "Abhidhamma Piṭaka",
          name: "Vibhaṅga Pāḷi",
          translation: "Book of Analysis",
          description: "The second book of the Abhidhamma Piṭaka, Vibhaṅga, together with the first book of the Dhammasaṅgaṇī and the third book of the Dhātukathā, forms a closely related foundation for the proper and deep understanding of the Buddha’s Dhamma. Whereas Dhammasaṅgaṇī provides a bird’s eye view of the whole Tika and Duka groups with further systematic arrangements under classified heads, Vibhaṅga and Dhātukathā give a closer view of selected portions of those groups bringing out minute details.",
          volume: "47",
          sections: ["Khandha", "Āyatana", "Dhātu", "Sacca", "Indriya", "Paṭiccasamuppāda", "Satipaṭṭhāna", "Sammappadhāna", "Iddhipāda", "Bojjhaṅga", "Magga", "Jhāna", "Appammaññā", "Sikkhāpada", "Paṭisambhidā", "ñāṇa", "Khuddhaka vatthu", "Dhammadhaya"],
          commentary: ["Sammohavinodani"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#73", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Book-of-Analysis_p_1905.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Vibhanga_p_2194.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "dhatukatha",
          basket: "Abhidhamma Piṭaka",
          name: "Dhātukathā Pāḷi",
          translation: "Discourse on Elements",
          description: "Although this third book of Abhidhamma Piṭaka is a small treatise, it ranks with the first two books forming an important trilogy, which must be completely digested for the complete understanding of the Abhidhamma. Vibhaṅga, the second book, has one complete chapter devoted to the analysis of dhātus, but the subject matter of dhātu is so important that this treatise is devoted to it for a thorough consideration. The method of analysis here is different from that employed in the Vibhaṅga.",
          volume: "48",
          sections: ["Paṭhamanayo", "Dutiyanayo", "Tatiyanayo", "Catutthanayo", "Pañcamanayo", "Chaṭṭhanayo", "Sattamanayo", "Aṭṭhamanayo", "Navamanayo", "Dasamanayo", "Ekādasamanayo", "Dvādasamanayo", "Terasamanayo", "Cuddasamanayo"],
          commentary: ["Pañcappakaranatthakatha"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#74", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Discourse-on-Elements_p_1984.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Dhatukatha-with-Commentary_p_1968.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "puggalapannatti",
          basket: "Abhidhamma Piṭaka",
          name: "Puggalapaññatti Pāḷi",
          translation: "A Designation of Human Types",
          description: "Abhidhamma is mainly concerned with the study of abstract truths in absolute terms. But in describing the dhammas in their various aspects, it is not possible to keep to absolute terms only. Inevitably, conventional terms of every day language have to be employed in order to keep the lines of communication open at all. Abhidhamma states that there are two main types of conventional usage; the first type is concerned with terms which describe things that actually exist in reality and the second type describes things which have no existence in reality.",
          volume: "49",
          sections: ["List Of All The Human Types In The Book", "Chapter 1 - Division Of Human Types By One", "Chapter 2 - Division Of Human Types By Two", "Chapter 3 - Division Of Human Types By Three", "Chapter 4 - Division Of Human Types By Four", "Chapter 5 - Division Of Human Types By Five", "Chapter 6 - Division Of Human Types By Six", "Chapter 7 - Division Of Human Types By Seven", "Chapter 8 - Division Of Human Types By Eight", "Chapter 9 - Division Of Human Types By Nine", "Chapter 10 - Division Of Human Types By Ten"],
          commentary: ["Pañcappakaranatthakatha"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#75", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Designation-of-Human-Types_p_1958.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Puggalapannatti-With-Commentary_p_2139.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "kathavatthu",
          basket: "Abhidhamma Piṭaka",
          name: "Kathāvatthu Pāḷi",
          translation: "Points of Controversy",
          description: 'Kathāvatthu, like Puggalapaññatti, falls outside the regular system of the Abhidhamma. It does not directly deal with the complex nature of the Dhamma. It is mainly concerned with wrong views such as "person exists; self exists; jīva exists" which were prevalent even in the Buddha’s time; or wrong views such as "arahat falls away from arahatship" which arose after the parinibbāna of the Buddha.',
          volume: "50",
          sections: ["Puggalakathā (Of the Existence of a Personal Entity)", "Parihānikathā (Of Falling Away)", "Brahmacariyakathā (Of the Higher Life)", "Jahatikathā (Of Renouncing Evil)", "Sabbamatthītikathā (Of Everything as persistently existing)", "Atītakkhandhādikathā (Of what does my “Past” Consist?)", "Ekaccaṃatthītikathā (Of Some of the Past and Future as still Existing)", "Satipaṭṭhānakathā (Of Applications in Mindfulness)", "Hevatthikathā (Of Existence in Immutable Modes)", "Dutiyavaggo", "Tatiyavaggo", "Catutthavaggo", "Pañcamavaggo", "Chaṭṭhavaggo", "Sattamavaggo", "Aṭṭhamavaggo", "Navamavaggo", "Dasamavaggo", "Ekādasamavaggo", "Dvādasamavaggo", "Terasamavaggo", "Cuddasamavaggo", "Pannarasamavaggo", "Soḷasamavaggo", "Sattarasamavaggo", "Aṭṭhārasamavaggo", "Ekūnavīsatimavaggo", "Vīsatimavaggo", "Ekavīsatimavaggo", "Bāvīsatimavaggo", "Tevīsatimavaggo"],
          commentary: ["Pañcappakaranatthakatha"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#76", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Points-of-Controversy_p_2137.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Kathavatthu_p_2050.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "yamaka",
          basket: "Abhidhamma Piṭaka",
          name: "Yamaka Pāḷi",
          translation: "",
          description: "Yamaka sets out to define and analyse the interrelationship of dhammas and puggalas as they exist in these three worlds. This is accomplished in the form of pairs of questions, which gives it the title of Yamaka. The logical processes of conversion (anuloma) and complete inversion (paṭiloma) are applied to determine the full implications and limitations of a term in its relationship with the others. Any equivocal elements of a term (saṃsaya) are avoided by showing, through such arrangement of questions, how other meanings of the term do not fit in a particular context.",
          volume: "51",
          sections: ["Mūla Yamaka (Pairs on Roots)", "Khandha Yamaka (Pairs on Aggregates)", "Āyatana Yamaka (Pairs on Bases)", "Dhātu Yamaka (Pairs on Elements)", "Sacca Yamaka (Pairs on Truths)", "Saṅkhāra Yamaka (Pairs on Conditioned Things)", "Anusaya Yamaka (Pairs on Latent Dispositions)", "Citta Yamaka (Pairs on Consciousness)", "Dhamma Yamaka (Pairs on Phenomena)", "Indriya Yamaka (Pairs on Controlling Faculties)"],
          commentary: ["Pañcappakaranatthakatha"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#77", label: "Learn More" },
            { id: "engbookurl", link: "", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Yamaka-2-Volume-Set_p_2208.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        },
        {
          id: "patthana",
          basket: "Abhidhamma Piṭaka",
          name: "Paṭṭhāna Pāḷi",
          translation: "Conditional Relations",
          description: 'Paṭṭhāna Pāḷi, the seventh and last book of the Abhidhamma, is called the Mahā Pakāraṇa, the "Great Book" announcing the supreme position it occupies and the height of excellence it has reached in its investigations into the ultimate nature of all the dhammas in the universe.',
          volume: "52",
          sections: ["Anuloma Paṭṭhāna which studies the instance in which the Paccanīya relations do exist between the dhammas;",
            "Paccanīya Paṭṭhāna which studies the instances in which Paccanīya relations do not exist between the dhammasPaccanīya;",
            "Anuloma Paccanīya Paṭṭhāna which studies the instances in which some of the Paccanīya relations exist between the dhammasPaccanīya while the others do not;",
            "Paccanīya Anuloma Paṭṭhāna which studies the instances in which some of the Paccanīya relations do not exist between the dhammasPaccanīya, while the others do exist."],
          commentary: ["Pañcappakaranatthakatha"],
          subcommentary: [],
          links: [
            { id: "info", link: "https://tipitaka.org/eot#78", label: "Learn More" },
            { id: "engbookurl", link: "https://store.pariyatti.org/Guide-to-Conditional-Relations_p_1997.html", label: "English Books" },
            { id: "palibookurl", link: "https://store.pariyatti.org/Tikapatthana-and-Commentary-3-volumes-as-1_p_2186.html", label: "Pali Books" },
            { id: "vri", link: "", label: "Books at VRI" }
          ]
        }
      ],
      commentary: ["Atthasālinī", "Sammohavinodani"],
      subcommentary: [],
    }
  }
});

export default TipitakaData;