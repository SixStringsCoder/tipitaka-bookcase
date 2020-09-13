// source for data https://tipitaka.org/eot#2 from the book "Essence of Tipiṭaka"

import { readable } from 'svelte/store';

const TipitakaData = readable({
  information: {
    name: 'Tipiṭaka',
    introduction: '<p id="intro-info" class="info">All that the Buddha taught forms the subject matter and substance of the Pāḷi Canon, which is divided into these three divisions called <span class="emphasis">Piṭakas</span> — literally baskets. Hence <span class="emphasis">Tipiṭaka</span> means three baskets or three separate divisions of the Buddha\'s Teaching. Here the metaphor \'basket\' signifies not so much the function of \'storing up\' anything put into it as its use as a receptacle in which things are handed on or passed on from one to another like carrying away of earth from an excavation site by a line of workers.</p> <p class="info"><span class="emphasis indent">The Tipiṭaka</span> into which the P&#x101;&#7735;i Canon is systematically divided and handed down from generation to generation together with Commentaries forms the huge collection of literary works which the bhikkhus of the Order have to learn, study and memorize in discharge of their <span class="emphasis">gantha dhura</span>, the duty of studying.</p>',
    links: {
      info: "https://www.pariyatti.org/P%C4%81li#section7",
      engbookurl: "https://store.pariyatti.org/Tipitaka-Sets_c_223.html",
      palibookurl: "https://store.pariyatti.org/Tipitaka-PTS-Pali-Canon-in-Pali-text--55-Books_p_2224.html",
      vriurl: "https://www.vridhamma.org/Tipitaka-Propject"
    }
  },
  baskets: {
    vinaya: {
      id: "vinaya",
      name: "Vinaya Piṭaka",
      description: "The Vinaya Piṭaka is made up of rules of discipline laid down for regulating the conduct of the Buddha’s disciples who have been admitted into the order as bhikkhus (monks) and bhikkhunis (nuns). These rules embody authoritative injunctions of the Buddha on modes of conduct and restraints on both physical and verbal actions. They deal with transgressions of discipline, and with various categories of restraints and admonitions in accordance with the nature of the offence.",
      links: {
        info: "https://tipitaka.org/eot#2",
        engbookurl: "https://store.pariyatti.org/Book-of-Discipline_p_1907.html",
        palibookurl: "https://store.pariyatti.org/Vinaya-Pitaka_p_2199.html",
        vriurl: "https://www.vridhamma.org/research/Pali-Tipitaka-as-the-Source-of-Vipassana"
      },
      books: [
        {
          id: "parajika",
          name: "Pārājika Pāḷi",
          translation: "",
          content: "Pārājika Pāḷi, which is the first book of the Vinaya Piṭaka, gives an elaborate explanation of the important rules of discipline concerning pārājika and saṅghādisesa, as well as aniyata and nissaggiya which are minor offences.",
          volume: "1",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {

          },
        },
        {
          id: "pacittiya",
          name: "Pācittiya Pāḷi",
          translation: "",
          content: "The Pācittiya Pāḷi, which is the second book of the Vinaya Piṭaka, deals with the remaining sets of rules for the bhikkhus, namely, the pācittiya, the pāṭidesanīya, the sekhiya, the adhikaraṇasamatha and the corresponding disciplinary rules for the bhikkhunis. Although it is called in Pāḷi just pācittiya, it has the distinctive name of suddha pācittiya (ordinary pācittiya), to distinguish it from nissaggiya pācittiya, described above.",
          volume: "2",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {},
        },
        {
          id: "mahavagga",
          name: "Mahāvagga Pāḷi",
          translation: "",
          content: 'Mahāvagga Pāḷi, made up of ten sections known as khandhakas, opens with an historical account of how the Buddha attained supreme enlightenment at the foot of the Bodhi tree, how he discovered the famous Law of Dependent Origination and how he gave his first sermon to the group of five bhikkhus on the discovery of the Four Noble Truths (i.e. the great "Discourse on the Turning of the Wheel of Dhamma"-Dhammacakkappavattana Sutta). This was followed by another great discourse, the Anattalakkhaṇa Sutta. These two suttas can be described as a compendium of the teaching of the Buddha. Mahāvagga further deals with procedures for an uposatha meeting, the assembly of the Sangha on every full moon day and on the fourteenth or fifteenth waning day of the lunar month when pāṭimokkha, a summary of the Vinaya rules, is recited. Also there are rules to be observed for rains retreat (vassa) during the rainy season as well as those for the formal ceremony of pavāraṇā concluding the rains retreat, in which a bhikkhu invites criticism from his brethren in respect of what has been seen, heard or suspected about his conduct.',
          volume: "3",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            engbookurl: "https://store.pariyatti.org/Patimokkha_p_2344.html"
          },
        },
        {
          id: "culavagga",
          name: "Cūḷavagga Pāḷi",
          translation: "",
          content: "Cūḷavagga Pāḷi, which is book four of the Vinaya Piṭaka, deals with further rules and procedures for institutional acts or functions known as saṅghakamma. The twelve sections in this book deal with rules for offences such as saṅghādisesa that come before the Sangha; rules for observance of penances such as parivāsa and mānatta and rules for reinstatement of a bhikkhu. There are also miscellaneous rules concerning bathing, dress, dwellings and furniture and those dealing with treatment of visiting bhikkhus, and duties of tutors and novices.",
          volume: "4",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {},
        },
        {
          id: "parivara",
          name: "Parivāra Pāḷi",
          translation: "",
          content: "Parivāra Pāḷi, which is the fifth and last book of the Vinaya Piṭaka, serves as a kind of manual. It is compiled in the form of a catechism, enabling the reader to make an analytical survey of the Vinaya Piṭaka. All the rules, official acts, and other matters of the Vinaya are classified under separate categories according to the subjects dealt with.",
          volume: "5",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          links: {}
        },
      ]
    },
    suttanta: {
      id: "suttanta",
      name: "Suttanta Piṭaka",
      description: "The Suttanta Piṭaka is a collection of all the discourses delivered by the Buddha on various occasions in their entirety. A few discourses delivered by some of the distinguished disciples of the Buddha, such as the Venerable Sāriputta, Mahā Moggallāna, Venerable Ānanda etc., as well as some narratives, are also included in the books of the Suttanta Piṭaka. The discourses of the Buddha collected together in the Suttanta Piṭaka were delivered to suit different occasions and different audiences with different temperaments. Although the discourses were mostly intended for the benefit of bhikkhus and deal with the practice of the pure life and with the explanation of the teaching, there are also several other discourses which deal with the material and moral progress of the lay disciple.",
      links: {
        info: "https://tipitaka.org/eot#9",
        engbookurl: "https://store.pariyatti.org/The-Basket-of-Discourses_c_185.html",
        palibookurl: "https://store.pariyatti.org/Sutta-Pitaka_c_194.html",
        vriurl: "https://www.vridhamma.org/Tipitaka-Propject#tablesaw-8898"
      },
      collections: {
        "digha-nikaya": {
          name: "Dīgha Nikāya",
          translation: "Collection of Long Discourses of the Buddha",
          qty: 34,
          description: "This collection in the Suttanta Pitaka, named Dīgha Nikāya as it is made up of thirty-four long discourses of the Buddha, is divided into three divisions (a) Sīlakkhanda Vagga, Division Concerning Morality (b) Mahā Vagga, the Large Division (c) Pāthika Vagga, the Division beginning with the discourse on Pathika, the naked ascetic.",
          sections: ["Sīlakkhanda Vagga, Division Concerning Morality", "Mahā Vagga, the Large Division", "Pāthika Vagga, the Division beginning with the discourse on Pathika, the naked ascetic."],
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "https://store.pariyatti.org/Long--DN_c_187.html",
            palibookurl: "https://store.pariyatti.org/Digha-Nikaya_c_196.html",
            vriurl: ""
          }
        },
        "majjhima-nikaya": {
          name: "Majjhima Nikāya",
          translation: "Collection of Medium-length Discourses of the Buddha",
          qty: 152,
          description: "This collection of medium length discourses is made up of one hundred and fifty-two suttas in three books known as paṇṇāsa. The first book, Mūlapaṇṇāsa, deals with the first fifty suttas in five vaggas; the second book, Majjhimapaṇṇāsa consists of the second fifty suttas, also in five vaggas; and the last fifty-two suttas are dealt with in five vaggas of the third book, Uparipaṇṇāsa, which means more than fifty. The suttas in this nikāya throw much light on the social ideas and institutions of those days, and also provide general information on the economic and political life.",
          sections: ["Mūlapaṇṇāsa", "Majjhimapaṇṇāsa", "Uparipaṇṇāsa"],
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "https://store.pariyatti.org/Middle-Length--MN_c_188.html",
            palibookurl: "https://store.pariyatti.org/Majjhima-Nikaya_c_198.html",
            vriurl: ""
          }
        },
        "samyutta-nikaya": {
          name: "Saṃyutta Nikāya",
          translation: "Collection of 'Connected Discourses' or 'Kindred Sayings' of the Buddha consisting of 7762 suttas of varied length, generally short, and arranged in a special order.",
          qty: 7762,
          description: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga. Each major vagga is divided into fifty-six groups known as saṃyuttas-related subjects grouped together. The saṃyuttas are named after the subjects they deal with, for example, Bojjhaṅga Saṃyutta on the seven factors of enlightenment, or after some principal personalities such as the Venerable Sāriputta, King Pasenadi of Kosala, or Sakka. Kosala Saṃyutta is a group of discourses concerning King Pasenadi of Kosala, and Devatā Saṃyutta deals with devas like Sakka, Indra, Brahmā, etc. Each saṃyutta is further divided into sections which are made up of individual suttas. Thus the well-known Dhammacakkappavattana Sutta is the first discourse (sutta) in the second section of Sacca Saṃyutta which comes under the Mahāvagga division of Saṃyutta Nikāya. In the following excerpts from Saṃyutta Nikāya, only a few suttas representing each major division are given.",
          sections: ["Sagāthā Vagga Saṃyutta Pāḷi", "Nidāna Vagga Saṃyutta Pāḷi", "Khandha Vagga Saṃyutta Pāḷi", "Saḷāyatana Vagga Saṃyutta Pāḷi", "Mahā Vagga Saṃyutta Pāḷi"],
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "https://store.pariyatti.org/Connected--SN_c_186.html",
            palibookurl: "https://store.pariyatti.org/Samyutta-Nikaya_c_199.html",
            vriurl: ""
          }
        },
        "anguttara-nikaya": {
          name: "Aṅguttara Nikāya",
          translation: "'Gradual Collection' or 'Numerical Discourses' of the Buddha",
          qty: 9557,
          description: '<p>This Collection of Discourses, Aṅguttara Nikāya, containing 9557 short suttas is divided into eleven divisions known as nipātas. Each nipāta is divided again into groups called vaggas which usually contain ten suttas. The discourses are arranged in progressive numerical order, each nipāta containing suttas with items of Dhamma, beginning with one item and moving up by units of one until there are eleven items of Dhamma in each sutta of the last nipāta. Hence the name Aṅguttara meaning "increasing by one item". The first nipāta, Ekaka Nipāta, provides in each sutta single items of Dhamma called the Ones; the second nipāta, Duka Nipāta, contains in each sutta two items of Dhamma called the Twos, the last nipāta, Ekādasaka Nipāta, is made up of suttas with eleven items of Dhamma in each, called the Elevens.</p><p>Aṅguttara Nikāya constitutes an important source book on Buddhist psychology and ethics, which provides an enumerated summary of all the essential features concerning the theory and practice of the Dhamma. A unique chapter entitled Etadagga Vagga of Ekaka Nipāta enumerates the names of the foremost disciples amongst the bhikkhus, bhikkhunis, upāsakas, upāsikās, who had achieved pre-eminence in one sphere of attainment or meritorious activity, e.g., the Venerable Sāriputta in intuitive wisdom and knowledge (paññā); the Venerable Mahā Moggallāna in supernormal powers (iddhi); Bhikkhunī Khemā in paññā; Bhikkhuni Uppalavanna in iddhi; the Upāsaka Anāthapiṇḍika and the Upāsikā Visākhā in alms-giving (dāna) and so on.</p>',
          sections: ["Ekaka Nipāta Pāḷi", "Duka Nipāta Pāḷi", "Tika Nipāta Pāḷi", "Catukka Nipāta Pāḷi", "Pañcaka Nipāta Pāḷi", "Chakka Nipāta Pāḷi", "Sattaka Nipāta Pāḷi", "Aṭṭhaka Nipāta Pāḷi", "Navaka Nipāta Pāḷi", "Dasaka Nipāta Pāḷi", "Ekādasaka Nīpata Pāḷi"],
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "https://store.pariyatti.org/Numerical--AN_c_190.html",
            palibookurl: "https://store.pariyatti.org/Anguttara-Nikaya_c_195.html",
            vriurl: ""
          }
        },
        "khuddaka-nikaya": {
          name: "Khuddaka Nikāya",
          translation: "'Minor Collection' of the Buddha. The word khuddaka means ‘small’ in Pali and Nikāya is ‘collection’.",
          qty: null,
          description: "Of all the five nikāyas Khuddaka Nikāya contains the largest number of treatises (as listed below) and the most numerous categories of Dhamma. Although the word khuddaka literally means minor or small, the actual content of this collection can by no means be regarded as minor, including as it does the two major divisions of the Piṭaka, namely, the Vinaya Piṭaka and the Abhidhamma Piṭaka according to one system of classification. The miscellaneous nature of this collection, containing not only the discourses by the Buddha but compilations of brief doctrinal notes mostly in verse, accounts of personal struggles and achievements by theras and therīs also in verse, the birth stories, the history of the Buddha, etc., may account for its title.",
          sections: [],
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "https://store.pariyatti.org/Minor--KN_c_189.html",
            palibookurl: "https://store.pariyatti.org/Khuddaka-Nikaya_c_197.html",
            vriurl: ""
          }
        },
      },
      books: [
        {
          id: "silakkhanda-vagga",
          name: "Sīlakkhanda Vagga Pāḷi",
          translation: "Division Concerning Morality",
          collection: "digha-nikaya",
          description: "Collection of long discourses of the Buddha",
          content: "<p>This division contains thirteen suttas which deal extensively with various types of morality, namely, Minor Morality, basic morality applicable to all; Middle Morality and Major Morality which are mostly practised by Samaṇas and Brāhmaṇas.</p> <p>It also discusses the wrong views then prevalent as well as brāhmin views of sacrifice and caste, and various religious practices such as extreme self-mortification.</p>",
          suttas: ["Brahmajāla Sutta, Discourse on the Net of Perfect Wisdom", "Sāmaññaphala Sutta, Discourse on the Fruits of the Life of a Samaṇa", "Ambaṭṭha Sutta", "Soṇadaṇḍa Sutta", "Kūṭadanta Sutta", "Mahāli Sutta", "Jāliya Sutta", "Mahāsīhanāda Sutta", "Poṭṭhapāda Sutta", "Subha Sutta", "Kevaṭṭa Sutta", "Lohicca Sutta", "Tevijja Sutta"],
          volume: "6",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "maha-vagga-digha",
          name: "Mahā Vagga Pāḷi",
          translation: "The Large Division",
          collection: "digha-nikaya",
          description: "Collection of long discourses of the Buddha",
          content: "<p>The ten suttas in this division are some of the most important of the Tipiṭaka, dealing with historical and biographical aspects as well as the doctrinal aspects of Buddhism. The most famous sutta is the Mahāparinibbāna Sutta which gives an account of the last days and the passing away of the Buddha and the distribution of his relics. Mahāpadāna Sutta deals with brief accounts of the last seven Buddhas and the life story of the Vipassī Buddha. Doctrinally important are the two suttas: the Mahānidāna Sutta, which explains the Chain of Cause and Effect, and the Mahāsatipaṭṭhāna Sutta, which deals with the four methods of steadfast mindfulness and practical aspects of Buddhist meditation.</p>",
          suttas: ["Mahāpadāna Sutta", "Mahānidāna Sutta", "Mahāparinibbāna Sutta", "Mahāsudassana Sutta", "Janavasabha Sutta", "Mahāgovinda Sutta", "Mahāsamaya Sutta", "Sakkapañha Sutta", "Mahāsatipaṭṭhāna Sutta", "Pāyāsi Sutta"],
          volume: "7",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            engbookurl: "https://store.pariyatti.org/Mahasatipatthana-Sutta-eBook-Vipassana"
          }
        },
        {
          id: "pathika-vagga",
          name: "Pathika Vagga Pāḷi",
          translation: "the Division beginning with the discourse on Pāthika, the Naked Ascetic",
          collection: "digha-nikaya",
          description: "Collection of long discourses of the Buddha",
          content: "This division is made up of eleven shorter discourses of a miscellaneous nature. They deal with the Buddha’s rejection of wrong and severe asceticism practised by followers of many sects. They deal also with the periodical evolution and dissolution of the universe, the accounts of universal monarchs and the thirty-two physiognomic characteristics of a great man. There is one discourse, Siṅgāla Sutta, addressed to a young brahmin showing the duties to be performed by members of the human society. The last two suttas, Saṅgīti and Dasuttara, are discourses given by the Venerable Sāriputta and they contain lists of doctrinal terms classified according to subject matter and numerical units. The style of their composition is different from the other nine suttas of the division.",
          suttas: ["Pāthika Sutta", "Udumbarikā Sutta", "Cakkavatti Sutta", "Aggañña Sutta", "Sampasādanīya Sutta", "Pāsādika Sutta", "Lakkhaṇa Sutta", "Siṅgāla Sutta", "Āṭānāṭiya Sutta", "Saṅgīti Sutta", "Dasuttara Sutta"],
          volume: "8",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "mulapannasa",
          name: "Mūlapaṇṇāsa Pāḷi",
          translation: "",
          collection: "majjhima-nikaya",
          description: "Collection of medium length discourses of the Buddha",
          content: "The first book, Mūlapaṇṇāsa, deals with the first fifty suttas in five vaggas.",
          suttas: ["Mūlapariyāya Sutta", "Sabbāsava Sutta", "Dhammadāyāda Sutta", "Bhayabherava Sutta", "Anaṅgana Sutta", "Ākaṅkheyya Sutta", "Vattha Sutta", "Sallekha Sutta", "Sammādiṭṭhi Sutta", "Mahāsatipaṭṭhāna Sutta", "Cūḷasīhanāda Sutta", "Mahāsīhanāda Sutta", "Mahādukkhakkhandha Sutta", "Cūḷadukkhakkhandha Sutta", "Anumāna Sutta", "Cetokhila Sutta", "Vanapattha Sutta", "Madhupiṇḍika Sutta", "Dvedāvitakka Sutta", "Vitakkasaṇṭhāna Sutta", "Kakacūpama Sutta", "Alagaddūpama Sutta", "Vammika Sutta", "Rathavinīta Sutta", "Nivāpa Sutta", "Pāsarāsi Sutta", "Cūḷahatthipadopama Sutta", "Mahāhatthipadopama Sutta", "Mahāsāropama Sutta", "Cūḷasāropama Sutta", "Cūḷagosiṅga Sutta", "Mahāgosiṅga Sutta", "Mahāgopālaka Sutta", "Cūḷagopālaka Sutta", "Cūḷasaccaka Sutta", "Mahāsaccaka Sutta", "Cūḷataṇhāsaṅkhaya Sutta", "Mahātaṇhāsaṅkhaya Sutta", "Massapura Sutta", "Cassapura Sutta", "Sāleyyaka Sutta", "Verañjaka Sutta", "Mahāvedalla Sutta", "Cūḷavedalla Sutta", "Cūḷadhammasamādāna Sutta", "Mahādhammasamādāna Sutta", "Vīmaṃsaka Sutta", "Kosambiya Sutta", "Brahmanimantanika Sutta", "Māratajjanīya Sutta"],
          vaggas: ["Mūlapariyāya Vagga", "Sīhanāda Vagga", "Opamma Vagga", "Mahāyamaka Vagga", "Cūḷayamaka Vagga"],
          volume: "9",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "majjhima-pannasa",
          name: "Majjhima Paṇṇāsa Pāḷi",
          translation: "",
          collection: "majjhima-nikaya",
          description: "Collection of medium length discourses of the Buddha",
          content: "The second book, Majjhimapaṇṇāsa consists of the second fifty suttas, in five vaggas.",
          suttas: ["Kandaraka Sutta", "Aṭṭhakanāgara Sutta", "Sekha Sutta", "Potaliya Sutta", "Jīvaka Sutta", "Upāli Sutta", "Kukkuravatika Sutta", "Abhayarājakumāra Sutta", "Bahuvedanīya Sutta", "Apaṇṇaka Sutta", "Ambalaṭṭhikarāhulovāda Sutta", "Mahārāhulovāda Sutta", "Cūḷamālukya Sutta", "Mahāmālukya Sutta", "Bhaddāli Sutta", "Laṭukikopama Sutta", "Cātumā Sutta", "Naḷakapāna Sutta", "Goliyāni Sutta", "Kīṭāgiri Sutta", "Tevijjavaccha Sutta", "Aggivaccha Sutta", "Mahāvaccha Sutta", "Dīghanakha Sutta", "Māgandiya Sutta", "Sandaka Sutta", "Mahāsakuludāyī Sutta", "Samaṇamuṇḍika Sutta", "Cūḷasakuludāyī Sutta", "Vekhanasa Sutta", "Ghaṭīkāra Sutta", "Raṭṭhapāla Sutta", "Maghādeva Sutta", "Madhura Sutta", "Bodhirājakumāra Sutta", "Aṅgulimāla Sutta", "Piyajātika Sutta", "Bāhitika Sutta", "Dhammacetiya Sutta", "Kaṇṇakatthala Sutta", "Brahmāyu Sutta", "Sela Sutta", "Assalāyana Sutta", "Ghoṭamukha Sutta", "Caṅkī Sutta", "Esukārī Sutta", "Dhanañjāni Sutta", "Vāseṭṭha Sutta", "Subha Sutta", "Saṅgārava Sutta"],
          vaggas: ["Gahapati Vagga", "Bhikkhu Vagga", "Paribbājaka Vagga", "Rāja Vagga", "Brāhmaṇa Vagga"],
          volume: "10",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "uparipannasa",
          name: "Uparipannasa",
          translation: "",
          collection: "majjhima-nikaya",
          description: "Collection of medium length discourses of the Buddha",
          content: "The last fifty-two suttas are dealt with in five vaggas of the third book, Uparipaṇṇāsa, which means more than fifty.",
          suttas: ["Devadaha Sutta", "Pañcattaya Sutta", "Kinti Sutta", "Sāmagāma Sutta", "Sunakkhatta Sutta", "Āneñja-sappāya Sutta", "Gaṇakamoggallāna Sutta", "Gopakamoggallāna Sutta", "Mahāpuṇṇama Sutta", "Cūḷapuṇṇama Sutta", "Ānupada Sutta", "Chabbisodhana Sutta", "Sappurisa Sutta", "Sevitabbāsevitabba Sutta", "Bahudhātuka Sutta", "Isigili Sutta", "Mahācattārīsaka Sutta", "Ānāpānassati Sutta", "Kāyagatāsati Sutta", "Saṅkhārupapatti Sutta", "Cūḷasuññata Sutta", "Mahāsuññata Sutta", "Acchariya-abbhuta Sutta", "Bākula Sutta", "Dantabhūmi Sutta", "Bhūmija Sutta", "Anuruddha Sutta", "Upakkilesa Sutta", "Bālapaṇḍita Sutta", "Devadūta Sutta", "Bhaddekaratta Sutta", "Ānanda-bhaddekaratta Sutta", "Lomasakaṅgiya-bhaddekaratta Sutta", "Bhaddekaratta Sutta", "Cūḷakamma-vibhaṅga Sutta", "Mahākamma-vibhaṅga Sutta", "Saḷāyatana-vibhaṅga Sutta", "Uddesa-vibhaṅga Sutta", "Araṇa-vibhaṅga Sutta", "Dhātu-vibhaṅga Sutta", "Sacca-vibhaṅga Sutta", "Dakkhiṇā-vibhaṅga Sutta", "Anāthapiṇḍikovāda Sutta", "Channovāda Sutta", "Puṇṇovāda Sutta", "Nandakovāda Sutta", "Cūḷarāhulovāda Sutta", "Chachakka Sutta", "Mahāsaḷāyatanika Sutta", "Nagaravindeyya Sutta", "Piṇḍapātapārisuddha Sutta", "Indriyabhāvanā Sutta"],
          vaggas: ["Devadaha Vagga", "Ānupada Vagga", "Suññata Vagga", "Vibhaṅga Vagga", "Saḷāyatana Vagg"],
          volume: "11",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "sagatha-vagga",
          name: "Sagatha Vagga Saṃyutta",
          translation: "",
          collection: "samyutta-nikaya",
          description: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          content: "This major division of Sagāthā Vagga Saṃyutta Pāḷi contains eleven saṃyuttas with discourses grouped according to characters appearing in them: the king of devas, the devas, the Brahmā, māra, King of Kosala, bhikkhus and bhikkhunis. The name of the vagga, Sagāthā is derived from the fact that various personalities appearing in the discourses conducted their dialogues or interviews with the Buddha mostly in verse.",
          suttas: [],
          samyuttas: ["Devatā-Saṃyutta", "Devaputta-Saṃyutta", "Kosala-Saṃyutta", "Māra-Saṃyutta", "Bhikkhūnī-Saṃyutta	", "Brahma-Saṃyutta", "Brāhmaṇa-Saṃyutta", "Vaṅgīsa-Saṃyutta", "Vana-Saṃyutta", "Yakkha-Saṃyutta", "Sakka-Saṃyutta"],
          volume: "12",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "nidana-vagga",
          name: "Nidana Vagga Saṃyutta",
          translation: "",
          collection: "samyutta-nikaya",
          description: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          content: "This second major division of Nidāna Vagga Saṃyutta Pāḷi contains ten saṃyuttas, all dealing with fundamental aspects of the doctrine. The discourses are chiefly concerned with the principles of conditionality and interdependence, explained in the detailed formula which is called Paṭiccasamuppāda (Conditioned Genesis or Dependent Origination), consisting of twelve factors.Various aspects of Paṭiccasamuppāda, together with expositions on doctrinal matters concerning practice of the holy life form the main theme of the early suttas in these saṃyuttas.",
          suttas: [],
          samyuttas: ["Nidāna-Saṃyutta", "Abhisamaya-Saṃyutta", "Dhātu-Saṃyutta", "Anamatagga-Saṃyutta", "Kassapa-Saṃyutta", "Lābha-Sakkāra-Saṃyutta", "Rāhula-Saṃyutta", "Lakkhaṇa-Saṃyutta", "Opamma-Saṃyutta", "Bhikkhu-Saṃyutta"],
          volume: "13",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "khandha-vagga",
          name: "Khandha Vagga Saṃyutta",
          translation: "",
          collection: "samyutta-nikaya",
          description: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          content: "The main theme of most suttas in this division is, as the name implies, khandhas, the five aggregates that constitute what is regarded as a being. Each of the components of these aggregates, namely, matter, sensation, perception, mental concomitants and consciousness is shown to be a bundle of dukkha (suffering). Made up of thirteen saṃyuttas, Khandha Vagga forms an important collection of doctrinal discussions on such topics such as atta, anattā, eternity and annihilation.",
          suttas: [],
          samyuttas: ["Khandha-Saṃyutta", "Rādha-Saṃyutta", "Diṭṭhi-Saṃyutta", "Okkantika-Saṃyutta", "Uppāda-Saṃyutta", "Kilesa-Saṃyutta", "Sāriputta-Saṃyutta", "Nāga-Saṃyutta", "Supaṇṇa-Saṃyutta", "Gandhabbakāya-Saṃyutta", "Valāhaka-Saṃyutta", "Vacchagotta-Saṃyutta", "Jhāna- (or Samādhi-) -Saṃyutta"],
          volume: "14",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "salayatana-vagga",
          name: "Salayatana Vagga Saṃyutta",
          translation: "",
          collection: "samyutta-nikaya",
          description: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          content: "This division is made up of ten saṃyuttas or groups. It deals mainly with the six sense organs or bases of contact named internal sense bases (eye, ear, nose, tongue, body and mind); six corresponding sense objects, known as external sense bases (visible form, sound, odour, taste, tangible things and mind-objects); and consciousness that arises in relation to each pair of these internal and external sense bases. There are expositions on the impermanent nature of these sense bases and how relinquishing of attachment to them results in liberation. The second saṃyutta, known as the Vedanā Saṃyutta, focuses on the sensation arising from the coming together of the sense bases and conciousness. Sensation is shown to be of three kinds: pleasant, unpleasant and indifferent. None of these is permanent and each one of these is the cause of craving which in turn is the root of all suffering. Concise but illuminating expositions on nibbāna are found in many suttas. So also are there practical guides of Vipassana meditation.",
          suttas: [],
          samyuttas: ["Saḷāyatana-Saṃyutta", "Vedanā-Saṃyutta", "Mātugāma-Saṃyutta", "Jambhukhādaka-Saṃyutta", "Samaṇdaka-Saṃyutta", "Moggallāna-Saṃyutta", "Citta-Saṃyutta", "Gāmani-Saṃyutta", "Asaṇkhata-Saṃyutta", "Avyākata-Saṃyutta"],
          volume: "15",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "maha-vagga-samyutta",
          name: "Maha Vagga Saṃyutta",
          translation: "",
          collection: "samyutta-nikaya",
          description: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga.",
          content: "The last vagga of Saṃyutta Nikāya is made up of twelve saṃyuttas, the list of which gives a clear indication of the subjects dealt with in this division: Magga Saṃyutta, Bojjhaṅga Saṃyutta, Satipaṭṭhāna Saṃyutta, Indriya Saṃyutta, Sammappadhāna Saṃyutta, Bala Saṃyutta, Iddhipāda Saṃyutta, Anuruddha Saṃyutta, Jhāna Saṃyutta, Ānāpāna Saṃyutta, Sotāpatti Saṃyutta and Sacca Saṃyutta. The main doctrines which from the fundamental basis of the Buddha’s teaching are reviewed in these saṃyuttas, covering both the theoretical and practical aspects. In the concluding suttas of the vagga, the ultimate goal of the holy life: arahatta phala, nibbāna, the end of all suffering, is constantly kept in full view together with a detailed description of the way of achieving it, namely, the Four Noble Truths and the Noble Path of Eight Constituents.",
          suttas: [],
          samyuttas: ["Magga-Saṃyutta", "Bojjhaṅga-Saṃyutta", "Satipaṭṭhāna-Saṃyutta", "Indriya-Saṃyutta", "Sammappadhāna-Saṃyutta", "Bala-Saṃyutta", "Iddhipāda-Saṃyutta", "Anuruddha-Saṃyutta", "Jhāna-Saṃyutta", "Ānāpāna-Saṃyutta", "Sotāpatti-Saṃyutta", "Sacca-Saṃyutta"],
          volume: "16",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "ekaka-nipata",
          name: "Ekaka Nipāta Pāḷi",
          translation: "The Book of Ones",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains single items of Dhamma which form the subject matter of discourses given by the Buddha at Sāvatthi to the numerous bhikkhus residing there. But some of the suttas were given by the Venerable Sāriputta or the Venerable Ānanda.",
          vaggas: [],
          suttas: [],
          volume: "17",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "duka-nipata",
          name: "Duka Nipāta Pāḷi",
          translation: "The Book of Twos",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in twos, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "18",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "tika-nipata",
          name: "Tika Nipāta Pāḷi",
          translation: "The Book of Threes",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in threes, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "19",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "catukka",
          name: "Catukka Nipāta Pāḷi",
          translation: "The Book of Fours",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in fours, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "20",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "pancaka",
          name: "Pancaka Nipāta Pāḷi",
          translation: "The Book of Fives",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in fives, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "21",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "chakka",
          name: "Chakka Nipāta Pāḷi",
          translation: "The Book of Sixes",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in sixes, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "22",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "sattaka",
          name: "Sattaka Nipāta Pāḷi",
          translation: "The Book of Sevens",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in sevens, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "23",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "atthaka",
          name: "Atthaka Nipāta Pāḷi",
          translation: "The Book of Eights",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in eights, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "24",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "navaka",
          name: "Navaka Nipāta Pāḷi",
          translation: "The Book of Nines",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in nines, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "25",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "dasaka",
          name: "Dasaka Nipāta Pāḷi",
          translation: "The Book of Tens",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in tens, which form the subject matter of discourses given by the Buddha...",
          vaggas: [],
          suttas: [],
          volume: "26",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "ekadasaka",
          name: "Ekadasaka Nipāta Pāḷi",
          translation: "The Book of Elevens",
          collection: "anguttara-nikaya",
          description: "Collection of 9557 short suttas divided into eleven division known as nipatas",
          content: "This group contains items of Dhamma, grouped in elevens, which form the subject matter of discourses given by the Buddha...",
          suttas: [],
          volume: "27",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "khuddakapatha",
          name: "Khuddakapāṭha Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "First of the treatises in this nikāya, Khuddakapāṭha contains 'readings of minor passages' most of which are also found in other parts of the Tipiṭaka. It is a collection of nine short formulae and the suttas used as a manual for novices under training, namely: (a) The Three Refuges; (b) The ten precepts; (c) The thirty-two parts of the body; (d) simple Dhamma for novices in the form of a catechism; (e) Maṅgala Sutta; (f) Ratana Sutta; (g) Tirokuṭṭa Sutta; (h) Nidhikaṇḍa Sutta; (i) Mettā Sutta.",
          suttas: [],
          volume: "28",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            engbookurl: "https://store.pariyatti.org/Khuddakapathapali",
            mangalabook: "https://store.pariyatti.org/Lifes-Highest-Blessings-Pariyatti-Edition_p_5109.html"
          }
        },
        {
          id: "dhammapada",
          name: "Dhammapada Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "It is a book of the Tipiṭaka which is popular and well-known not only in the Buddhist countries but also elsewhere. The Dhammapada is a collection of the Buddha’s words or basic and essential principles of the Buddha’s teaching. It consists of 423 verses arranged according to the topics in twenty-six vaggas or chapters.",
          suttas: [],
          volume: "29",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            engbookurl: "https://store.pariyatti.org/Dhammapada-Verses-Stories_p_5149.html"
          }
        },
        {
          id: "udana",
          name: "Udāna Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "An udāna is an utterance mostly in verse form inspired by a particularly intense emotion. This treatise is a collection of eighty joyful utterances made by the Buddha on unique occasions of sheer bliss; each udāna in verse is accompanied by an account in prose of the circumstances that led to its being uttered.",
          suttas: [],
          volume: "30",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "itivuttaka",
          name: "Itivuttaka Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: 'The fourth treatise contains 112 suttas divided into four nipātas with verses and prose mixed, one supplementing the other. Although the collections contain the inspired sayings of the Buddha as in udāna, each passage is preceded by the phrase, "iti vuttaṃ bhagavata" ("thus was said by the Buddha"), and reads like a personal notebook in which are recorded short pithy sayings of the Buddha.',
          suttas: [],
          volume: "31",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "suttanipata",
          name: "Suttanipāta Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "As well-known as Dhammapada, Sutta Nipāta is also a work in verse with occasional introduction in prose. It is divided into five vaggas: (i) Uraga Vagga of twelve suttas; (ii) Cūḷa Vagga of fourteen suttas; (iii) Mahā Vagga of twelve suttas; (iv) Aṭṭhaka Vagga of sixteen suttas; (v) Pārāyana Vagga of sixteen questions.",
          suttas: [],
          volume: "32",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "vimana-vatthu",
          name: "Vimāna Vatthu Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "Vimāna means mansion. Here it refers to celestial mansions gained by beings who have done acts of merit. In this text are eighty-five verses grouped in seven vaggas. In the first four vaggas, celestial females give an account of the acts of merit they have performed in previous existences as human beings and of their rebirth in deva realms where magnificent mansions await their appearance. In the last three vaggas the celestial males tell their stories.",
          suttas: [],
          volume: "33",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "peta-vatthu",
          name: "Peta Vatthu Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "The stories of petas are graphic accounts of the miserable beings who have been reborn in unhappy existences as a consequence of their evil deeds. There are fifty-one stories divided into four vaggas, describing the life of misery of the evil doers, in direct contrast to the magnificent life of the devas.",
          suttas: [],
          volume: "34",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "thera-gatha",
          name: "The Thera Gāthā Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "The Thera Gāthā Pāḷi and The Therī Gāthā Pāḷi treatises form a compilation of delightful verses uttered by some two hundred and sixty-four theras and seventy-three therīs through sheer exultation and joy that arose out of their religious devotion and inspiration. These inspiring verses gush forth from the hearts of bhikkhus and bhikkhunis after their attainment of arahatship as an announcement of their achievement and also as statement of the effort which has led to their final enlightenment.",
          suttas: [],
          volume: "35",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "theri-gatha",
          name: "The Therī Gāthā Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "The Thera Gāthā Pāḷi and The Therī Gāthā Pāḷi treatises form a compilation of delightful verses uttered by some two hundred and sixty-four theras and seventy-three therīs through sheer exultation and joy that arose out of their religious devotion and inspiration. These inspiring verses gush forth from the hearts of bhikkhus and bhikkhunis after their attainment of arahatship as an announcement of their achievement and also as statement of the effort which has led to their final enlightenment.",
          suttas: [],
          volume: "36",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "jataka",
          name: "Jātaka Pāḷi",
          translation: "Birth-stories of the Buddha",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "These are the stories of the previous existences of Gotama Buddha, while he was as yet only a bodhisatta. The Jātaka is an extensive work in verses containing five hundred and forty-seven stories or previous existences as recounted by the Buddha (usually referred to in Burma as 550 stories). The treatise is divided into nipātas according to the number of verses concerning each story. The one verse stories are classified as Ekaka Nipāta, the two verse stories come under Duka Nipāta etc. It is the commentary to the verses which gives the complete birth-stories. In these birth-stories are embedded moral principles and practices which the bodhisatta had observed for self-development and perfection to attain Buddhahood.",
          suttas: [],
          volume: "37",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "niddesa",
          name: "Niddesa Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "This division of Khuddaka Nikāya consists of two parts: Mahā Niddesa (the major exposition) which is the commentary on the fourth vagga (Aṭṭhaka) of the Sutta Nipāta, and Cūḷa Niddesa (the minor exposition) which is the commentary on the fifth vagga (Pārāyana) and on the Khaggavisāna Sutta in the first vagga. Attributed to the Venerable Sāriputta, these exegetical works contain much material on the Abhidhamma and constitute the earliest forms of commentaries, providing evidence of commentarial tradition many centuries before the Venerable Buddhaghosa appeared on the scene.",
          suttas: [],
          volume: "38",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "patisambhida",
          name: "Paṭisambhidā Magga Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "This treatise, entitled the Path of Analysis, is attributed to the Venerable Sāriputta. It deals with the most important teachings of the Buddha analytically in the style of the Abhidhamma. It is divided into three main vaggas, namely, Mahā Vagga, Yuganaddha Vagga and Paññā Vagga. Each vagga consists of ten sub-groups, named kathās, such as ñāṇa Kathā, Diṭṭhi Kathā etc. The treatment of each subject is very detailed and provides a theoretical foundation for the practice of the path.",
          suttas: [],
          volume: "39",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "apadana",
          name: "Apadāna Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "This is a biographical work containing the life stories (past and present) of the Buddha and his arahat disciples. It is divided into two divisions: the Therāpadāna, giving the life stories of the Buddha, of forty-one paccekabuddhas and of five hundred and fifty-nine arahats from the Venerable Sāriputta to the Venerable Raṭṭhapāla; and Therīpadāna, with the life stories of forty therī arahats from Sumedhā Therī to Pesalā Therī.",
          suttas: [],
          volume: "40",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "buddhavamsa",
          name: "Buddhavaṃsa Pāḷi",
          translation: "History of the Buddhas",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "Buddhavaṃsa Pāḷi gives a short historical account of Gotama Buddha and of the twenty-four Buddhas who had prophesied his attainment of Buddhahood. It consists of twenty-nine sections in verse.",
          suttas: [],
          volume: "41",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "cariya",
          name: "Cariyā Piṭaka",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "This treatise contains thirty-five stories of the Buddha’s previous lives retold at the request of the Venerable Sāriputta. Whereas the Jātaka is concerned with the Buddha’s previous existences from the time of Sumedha, the hermit, till he became Gotama Buddha, Cariyā Piṭaka deals only with thirty-five of the existences of the bodhisatta in this last world cycle. The Venerable Sāriputta’s object in making the request is to highlight the indomitable will, the supreme effort, the peerless sacrifice with which the bodhisatta conducts himself in fulfillment of the ten pāramīs (virtues towards perfection).",
          suttas: [],
          volume: "42",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "netti",
          name: "Netti",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "The two small works, Netti, made up of seven chapters, and Peṭakopadesa, made up of eight chapters, are different from the other books of the Tipiṭaka because they are exegetical and methodological in nature.",
          suttas: [],
          volume: "43",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "petakopadesa",
          name: "Peṭakopadesa",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "The two small works, Netti, made up of seven chapters, and Peṭakopadesa, made up of eight chapters, are different from the other books of the Tipiṭaka because they are exegetical and methodological in nature.",
          suttas: [],
          volume: "44",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },
        {
          id: "milindapanha",
          name: "Milindapañha Pāḷi",
          translation: "",
          collection: "khuddaka-nikaya",
          description: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "Milindapañha Pāḷi is the last of the books which constitute Khuddaka Nikāya. It records the questions asked by King Milinda and the answers given by the Venerable Nāgasena some five hundred years after the parinibbāna of the Buddha. King Milinda was Yonaka (Graeco-Bactrian) ruler of Sāgala. He was very learned and highly skilled in the art of debating. The Venerable Nāgasena, a fully accomplished arahat, was on a visit to Sāgala, at the request of the Sangha.",
          suttas: [],
          volume: "45",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {
            info: "",
            engbookurl: "",
            palibookurl: "",
            vriurl: ""
          }
        },

      ]
    },
    abhidhamma: {
      id: "abhidhamma",
      name: "Abhidhamma Piṭaka",
      description: "Abhidhamma is the third great division of the Piṭaka. It is a huge collection of systematically arranged, tabulated and classified doctrines of the Buddha, representing the quintessence of this teaching. Abhidhamma means higher teaching or special teaching; it is unique in its analytical approach, immensity of scope and support for one’s liberation.",
      links: {
        info: "https://tipitaka.org/eot#70",
        engbookurl: "https://store.pariyatti.org/Abhidhamma_c_184.html",
        palibookurl: "https://store.pariyatti.org/Abhidhamma-Pitaka_c_193.html",
        vriurl: "https://www.vridhamma.org/Tipitaka-Propject#tablesaw-8898"
      },
      books: [
        {
          id: "dhammasangani",
          name: "The Dhammasaṅgaṇī Pāḷi",
          translation: "",
          collection: "",
          content: "The Dhammasaṅgiṇī, the first book of the Abhidhamma, and the Paṭṭhāna, the last book, are the most important of the seven treatises of Abhidhamma, providing as they do the quintessence of the entire Abhidhamma. The Dhammasaṅgaṇī enumerates all the dhammas (phenomena) i.e., all categories of nāma, namely, consciousness and mental concomitants; and rūpa, (corporeality). Having enumerated the phenomena, they are arranged into various categories to bring out their exact nature, function and mutual relationship both internally (in our own being) and with the outside world.",
          volume: "46",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {}
        },
        {
          id: "vibhanga",
          name: "Vibhaṅga Pāḷi",
          translation: "Book of Analysis",
          collection: "",
          content: "The second book of the Abhidhamma Piṭaka, Vibhaṅga, together with the first book of the Dhammasaṅgaṇī and the third book of the Dhātukathā, forms a closely related foundation for the proper and deep understanding of the Buddha’s Dhamma. Whereas Dhammasaṅgaṇī provides a bird’s eye view of the whole Tika and Duka groups with further systematic arrangements under classified heads, Vibhaṅga and Dhātukathā give a closer view of selected portions of those groups bringing out minute details.",
          volume: "47",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {}
        },
        {
          id: "dhatukatha",
          name: "Dhātukathā Pāḷi",
          translation: "",
          collection: "",
          content: "Although this third book of Abhidhamma Piṭaka is a small treatise, it ranks with the first two books forming an important trilogy, which must be completely digested for the complete understanding of the Abhidhamma. Vibhaṅga, the second book, has one complete chapter devoted to the analysis of dhātus, but the subject matter of dhātu is so important that this treatise is devoted to it for a thorough consideration. The method of analysis here is different from that employed in the Vibhaṅga.",
          volume: "48",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {}
        },
        {
          id: "puggalapannatti",
          name: "Puggalapaññatti Pāḷi",
          translation: "",
          collection: "",
          content: "Abhidhamma is mainly concerned with the study of abstract truths in absolute terms. But in describing the dhammas in their various aspects, it is not possible to keep to absolute terms only. Inevitably, conventional terms of every day language have to be employed in order to keep the lines of communication open at all. Abhidhamma states that there are two main types of conventional usage; the first type is concerned with terms which describe things that actually exist in reality and the second type describes things which have no existence in reality.",
          volume: "49",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {}
        },
        {
          id: "kathavatthu",
          name: "Kathāvatthu Pāḷi",
          translation: "",
          collection: "",
          content: 'Kathāvatthu, like Puggalapaññatti, falls outside the regular system of the Abhidhamma. It does not directly deal with the complex nature of the Dhamma. It is mainly concerned with wrong views such as "person exists; self exists; jīva exists" which were prevalent even in the Buddha’s time; or wrong views such as "arahat falls away from arahatship" which arose after the parinibbāna of the Buddha.',
          volume: "50",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {}
        },
        {
          id: "yamaka",
          name: "Yamaka Pāḷi",
          translation: "",
          collection: "",
          content: "Yamaka sets out to define and analyse the interrelationship of dhammas and puggalas as they exist in these three worlds. This is accomplished in the form of pairs of questions, which gives it the title of Yamaka. The logical processes of conversion (anuloma) and complete inversion (paṭiloma) are applied to determine the full implications and limitations of a term in its relationship with the others. Any equivocal elements of a term (saṃsaya) are avoided by showing, through such arrangement of questions, how other meanings of the term do not fit in a particular context.",
          volume: "51",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {}
        },
        {
          id: "patthana",
          name: "Paṭṭhāna Pāḷi",
          translation: "",
          collection: "",
          content: 'Paṭṭhāna Pāḷi, the seventh and last book of the Abhidhamma, is called the Mahā Pakāraṇa, the "Great Book" announcing the supreme position it occupies and the height of excellence it has reached in its investigations into the ultimate nature of all the dhammas in the universe.',
          volume: "52",
          editions: {
            pts: { bookqty: null },
            vri: { bookqty: null }
          },
          commentary: [],
          subcommentary: [],
          links: {}
        }
      ]
    }
  }
});

export default TipitakaData;