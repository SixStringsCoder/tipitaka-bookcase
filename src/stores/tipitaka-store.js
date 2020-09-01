// source for data https://tipitaka.org/eot#2 from the book "Essence of Tipiṭaka"

import { readable } from 'svelte/store';

const TipitakaData = readable({
  information: {
    name: 'Tipiṭaka',
    introduction: '<p id="intro-info" class="info"> All that the Buddha taught forms the subject matter and substance of the Pāḷi Canon, which is divided into these three divisions called <span class="emphasis">Piṭakas</span> — literally baskets. Hence <span class="emphasis">Tipiṭaka</span> means three baskets or three separate divisions of the Buddha\'s Teaching. Here the metaphor \'basket\' signifies not so much the function of \'storing up\' anything put into it as its use as a receptacle in which things are handed on or passed on from one to another like carrying away of earth from an excavation site by a line of workers.</p> <p class="info"><span class="emphasis indent">The Tipiṭaka</span> into which the P&#x101;&#7735;i Canon is systematically divided and handed down from generation to generation together with Commentaries forms the huge collection of literary works which the bhikkhus of the Order have to learn, study and memorize in discharge of their <span class="emphasis">gantha dhura</span>, the duty of studying.</p>',
    links: {}
  },
  baskets: {
    vinaya: {
      name: "Vinaya Piṭaka",
      description: "The Vinaya Piṭaka is made up of rules of discipline laid down for regulating the conduct of the Buddha’s disciples who have been admitted into the order as bhikkhus (monks) and bhikkhunis (nuns). These rules embody authoritative injunctions of the Buddha on modes of conduct and restraints on both physical and verbal actions. They deal with transgressions of discipline, and with various categories of restraints and admonitions in accordance with the nature of the offence.",
      links: {},
      books: [
        {
          name: "Pārājika Pāḷi",
          content: "Pārājika Pāḷi, which is the first book of the Vinaya Piṭaka, gives an elaborate explanation of the important rules of discipline concerning pārājika and saṅghādisesa, as well as aniyata and nissaggiya which are minor offences.",
          volume: "1",
          links: {}
        },
        {
          name: "Pācittiya Pāḷi",
          content: "The Pācittiya Pāḷi, which is the second book of the Vinaya Piṭaka, deals with the remaining sets of rules for the bhikkhus, namely, the pācittiya, the pāṭidesanīya, the sekhiya, the adhikaraṇasamatha and the corresponding disciplinary rules for the bhikkhunis. Although it is called in Pāḷi just pācittiya, it has the distinctive name of suddha pācittiya (ordinary pācittiya), to distinguish it from nissaggiya pācittiya, described above.",
          volume: "2",
          links: {}
        },
        {
          name: "Mahāvagga Pāḷi",
          content: 'Mahāvagga Pāḷi, made up of ten sections known as khandhakas, opens with an historical account of how the Buddha attained supreme enlightenment at the foot of the Bodhi tree, how he discovered the famous Law of Dependent Origination and how he gave his first sermon to the group of five bhikkhus on the discovery of the Four Noble Truths (i.e. the great "Discourse on the Turning of the Wheel of Dhamma"-Dhammacakkappavattana Sutta). This was followed by another great discourse, the Anattalakkhaṇa Sutta. These two suttas can be described as a compendium of the teaching of the Buddha.',
          volume: "3",
          links: {}
        },
        {
          name: "Cūḷavagga Pāḷi",
          content: "Cūḷavagga Pāḷi, which is book four of the Vinaya Piṭaka, deals with further rules and procedures for institutional acts or functions known as saṅghakamma. The twelve sections in this book deal with rules for offences such as saṅghādisesa that come before the Sangha; rules for observance of penances such as parivāsa and mānatta and rules for reinstatement of a bhikkhu. There are also miscellaneous rules concerning bathing, dress, dwellings and furniture and those dealing with treatment of visiting bhikkhus, and duties of tutors and novices.",
          volume: "4",
          links: {}
        },
        {
          name: "Parivāra Pāḷi",
          content: "Parivāra Pāḷi, which is the fifth and last book of the Vinaya Piṭaka, serves as a kind of manual. It is compiled in the form of a catechism, enabling the reader to make an analytical survey of the Vinaya Piṭaka. All the rules, official acts, and other matters of the Vinaya are classified under separate categories according to the subjects dealt with.",
          volume: "5",
          links: {}
        },
      ]
    },
    suttanta: {
      name: "Suttanta Piṭaka",
      description: "The Suttanta Piṭaka is a collection of all the discourses delivered by the Buddha on various occasions in their entirety. A few discourses delivered by some of the distinguished disciples of the Buddha, such as the Venerable Sāriputta, Mahā Moggallāna, Venerable Ānanda etc., as well as some narratives, are also included in the books of the Suttanta Piṭaka. The discourses of the Buddha collected together in the Suttanta Piṭaka were delivered to suit different occasions and different audiences with different temperaments. Although the discourses were mostly intended for the benefit of bhikkhus and deal with the practice of the pure life and with the explanation of the teaching, there are also several other discourses which deal with the material and moral progress of the lay disciple.",
      links: {},
      collections: {
        "digha-nikaya": {
          name: "Dīgha Nikāya",
          translation: "Collection of Long Discourses of the Buddha",
          qty: 34,
          descr: "This collection in the Suttanta Pitaka, named Dīgha Nikāya as it is made up of thirty-four long discourses of the Buddha, is divided into three divisions (a) Sīlakkhanda Vagga, Division Concerning Morality (b) Mahā Vagga, the Large Division (c) Pāthika Vagga, the Division beginning with the discourse on Pathika, the naked ascetic.",
          links: {}
        },
        "majjhima-nikaya": {
          name: "Majjhima Nikāya",
          translation: "Collection of Medium-length Discourses of the Buddha",
          qty: 152,
          descr: "This collection of medium length discourses is made up of one hundred and fifty-two suttas in three books known as paṇṇāsa. The first book, Mūlapaṇṇāsa, deals with the first fifty suttas in five vaggas; the second book, Majjhimapaṇṇāsa consists of the second fifty suttas, also in five vaggas; and the last fifty-two suttas are dealt with in five vaggas of the third book, Uparipaṇṇāsa, which means more than fifty. The suttas in this nikāya throw much light on the social ideas and institutions of those days, and also provide general information on the economic and political life.",
          links: {}
        },
        "samyutta-nikaya": {
          name: "Saṃyutta Nikāya",
          translation: "Collection of 'Connected Discourses' or 'Kindred Sayings' of the Buddha",
          qty: 7762,
          descr: "This collection of discourses in the Suttanta Piṭaka known as Saṃyutta Nikāya has 7762 suttas of varied length, generally short, arranged in a special order according to subject matter into five major divisions: (1) Sagāthā Vagga (2) Nidāna Vagga (3) Khandha Vagga (4) Saḷāyatana Vagga and (5) Mahā Vagga. Each major vagga is divided into fifty-six groups known as saṃyuttas-related subjects grouped together. The saṃyuttas are named after the subjects they deal with, for example, Bojjhaṅga Saṃyutta on the seven factors of enlightenment, or after some principal personalities such as the Venerable Sāriputta, King Pasenadi of Kosala, or Sakka. Kosala Saṃyutta is a group of discourses concerning King Pasenadi of Kosala, and Devatā Saṃyutta deals with devas like Sakka, Indra, Brahmā, etc. Each saṃyutta is further divided into sections which are made up of individual suttas. Thus the well-known Dhammacakkappavattana Sutta is the first discourse (sutta) in the second section of Sacca Saṃyutta which comes under the Mahāvagga division of Saṃyutta Nikāya. In the following excerpts from Saṃyutta Nikāya, only a few suttas representing each major division are given.",
          links: {}
        },
        "anguttara-nikaya": {
          name: "Aṅguttara Nikāya",
          translation: "'Gradual Collection' or 'Numerical Discourses' of the Buddha",
          qty: 9557,
          descr: '<p>This Collection of Discourses, Aṅguttara Nikāya, containing 9557 short suttas is divided into eleven divisions known as nipātas. Each nipāta is divided again into groups called vaggas which usually contain ten suttas. The discourses are arranged in progressive numerical order, each nipāta containing suttas with items of Dhamma, beginning with one item and moving up by units of one until there are eleven items of Dhamma in each sutta of the last nipāta. Hence the name Aṅguttara meaning "increasing by one item". The first nipāta, Ekaka Nipāta, provides in each sutta single items of Dhamma called the Ones; the second nipāta, Duka Nipāta, contains in each sutta two items of Dhamma called the Twos, the last nipāta, Ekādasaka Nipāta, is made up of suttas with eleven items of Dhamma in each, called the Elevens.</p><p>Aṅguttara Nikāya constitutes an important source book on Buddhist psychology and ethics, which provides an enumerated summary of all the essential features concerning the theory and practice of the Dhamma. A unique chapter entitled Etadagga Vagga of Ekaka Nipāta enumerates the names of the foremost disciples amongst the bhikkhus, bhikkhunis, upāsakas, upāsikās, who had achieved pre-eminence in one sphere of attainment or meritorious activity, e.g., the Venerable Sāriputta in intuitive wisdom and knowledge (paññā); the Venerable Mahā Moggallāna in supernormal powers (iddhi); Bhikkhunī Khemā in paññā; Bhikkhuni Uppalavanna in iddhi; the Upāsaka Anāthapiṇḍika and the Upāsikā Visākhā in alms-giving (dāna) and so on.</p>',
          links: {}
        },
        "khuddaka-nikaya": {
          name: "Khuddaka Nikāya",
          translation: "'Minor Collection' of the Buddha. The word khuddaka means ‘small’ in Pali and Nikāya is ‘collection’.",
          qty: null,
          descr: "Of all the five nikāyas Khuddaka Nikāya contains the largest number of treatises (as listed below) and the most numerous categories of Dhamma. Although the word khuddaka literally means minor or small, the actual content of this collection can by no means be regarded as minor, including as it does the two major divisions of the Piṭaka, namely, the Vinaya Piṭaka and the Abhidhamma Piṭaka according to one system of classification. The miscellaneous nature of this collection, containing not only the discourses by the Buddha but compilations of brief doctrinal notes mostly in verse, accounts of personal struggles and achievements by theras and therīs also in verse, the birth stories, the history of the Buddha, etc., may account for its title.",
          links: {}
        },
      },
      books: [
        {
          name: "Sīlakkhanda Vagga",
          translation: "Division Concerning Morality",
          collection: "digha-nikaya",
          descr: "Collection of long discourses of the Buddha",
          content: "<p>This division contains thirteen suttas which deal extensively with various types of morality, namely, Minor Morality, basic morality applicable to all; Middle Morality and Major Morality which are mostly practised by Samaṇas and Brāhmaṇas.</p> <p>It also discusses the wrong views then prevalent as well as brāhmin views of sacrifice and caste, and various religious practices such as extreme self-mortification.</p>",
          suttas: ["Brahmajāla Sutta, Discourse on the Net of Perfect Wisdom", "Sāmaññaphala Sutta, Discourse on the Fruits of the Life of a Samaṇa", "Ambaṭṭha Sutta", "Soṇadaṇḍa Sutta", "Kūṭadanta Sutta", "Mahāli Sutta", "Jāliya Sutta", "Mahāsīhanāda Sutta", "Poṭṭhapāda Sutta", "Subha Sutta", "Kevaṭṭa Sutta", "Lohicca Sutta", "Tevijja Sutta"],
          volume: "6",
          links: {}
        },
        {
          name: "Maha Vagga",
          translation: "the Large Division",
          collection: "digha-nikaya",
          descr: "Collection of long discourses of the Buddha",
          content: "<p>The ten suttas in this division are some of the most important ones of the Tipitaka, dealing with historical, and biographical aspects as well as the doctrinal aspects of Buddhism.</p><p>The most famous sutta is the Mahāparinibbāna Sutta which gives an account of the last days and the passing away of the Buddha and the distribution of his relics.</p><p>Mahāpadāna Sutta deals with brief accounts of the last seven Buddhas and the life story of the Vipassi Buddha.</p><p>Doctrinally important are the two suttas: the Mahānidāna Sutta which explains the Chain of Cause and Effect (Paticcasamuppada or Wheel of Dependent Origination), and the Mahāsatipaṭṭhāna Sutta dealing with the four Methods of Steadfast Mindfulness and practical aspects of Buddhist meditation.</p>",
          suttas: ["Mahāpadāna Sutta", "Mahānidāna Sutta", "Mahāparinibbāna Sutta", "Mahāsudassana Sutta", "Janavasabha Sutta", "Mahāgovinda Sutta", "Mahāsamaya Sutta", "Sakkapañha Sutta", "Mahāsatipaṭṭhāna Sutta", "Pāyāsi Sutta"],
          volume: "7",
          links: {}
        },
        {
          name: "Pathika Vagga",
          translation: "the Division beginning with the discourse on Pathika, the Naked Ascetic",
          collection: "digha-nikaya",
          descr: "Collection of long discourses of the Buddha",
          content: "This division is made up of eleven shorter discourses of a miscellaneous nature They deal with the Buddha's rejection of wrong and severe asceticism practised by followers of many sects, they deal also with the periodical evolution and dissolution of the universe, the accounts of Universal Monarch and the thirty-two physiognomic characteristics of a great man There is one discourse, Singala Sutta, addressed to a young Brahmin showing the duties to be performed by members of the human society The last two suttas, Sangiti and Dasuttara, are discourses given by the Venerable Sanputta and they contain lists of doctrinal terms classified according to subject matter and numerical units The style of their composition is different from the other nine suttas of the division.",
          suttas: ["Pāthika Sutta", "Udumbarika Sutta", "Cakkavatti Sutta", "Aggañña Sutta", "Sampasādaniya Sutta", "Pāsādika Sutta", "Lakkhaṇa Sutta", "Singala Sutta", "Āṭānāṭiya Sutta", "Saṅgāti Sutta", "Dasuttora Sutta"],
          volume: "8",
          links: {}
        },
        {
          name: "Mulapannasa",
          collection: "majjhima-nikaya",
          descr: "Collection of medium length discourses of the Buddha",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Majjhima Pannasa",
          collection: "majjhima-nikaya",
          descr: "Collection of medium length discourses of the Buddha",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Uparipannasa",
          collection: "majjhima-nikaya",
          descr: "Collection of medium length discourses of the Buddha",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Sagatha Vagga Saṃyutta",
          collection: "Saṃyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Nidana Vagga Saṃyutta",
          collection: "Saṃyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Khandha Vagga Saṃyutta",
          collection: "Saṃyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Salayatana Vagga Saṃyutta",
          collection: "Saṃyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Maha Vagga Saṃyutta",
          collection: "Saṃyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Ekaka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Duka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Tika Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Catukka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Pancaka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Chakka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Sattaka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Atthaka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Navaka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Dasaka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Ekadasaka Nipata",
          collection: "Aṅguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Khuddakapatha",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Dhammapada",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Udana",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Itivuttaka",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Suttanipata",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Vimana Vatthu",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Peta Vatthu",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "The Thera Gatha",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "The Theri Gatha",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: "",
          links: {}
        },
        {
          name: "Jataka",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "Birth-stories of the Buddha",
          volume: "",,
        links: {}
        },
        {
    name: "Niddesa",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "",
    volume: "",
    links: {}
  },
  {
    name: "Patisambhida Magga",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "",
    volume: "",
    links: {}
  },
  {
    name: "Apadana",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "",
    volume: "",
    links: {}
  },
  {
    name: "Buddhavamsa",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "Hidtory of the Buddha",
    volume: "",
    links: {}
  },
  {
    name: "Cariya Pitaka",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "",
    volume: "",
    links: {}
  },
  {
    name: "Netti",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "",
    volume: "",
    links: {}
  },
  {
    name: "Petakopadesa",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "",
    volume: "",
    links: {}
  },
  {
    name: "Milindapanha",
    collection: "khuddaka-nikaya",
    descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
    content: "",
    volume: "",
    links: {}
  },

      ]
    },
abhidhamma: {
  name: "Abhidhamma Piṭaka",
    description: "The philosophical aspect of the Buddha's Teaching, more profound and abstract than the discourses of the Suttanta Piṭaka, is classified under the great division known as the Abhidhamma Piṭaka. Abhidhamma deals with ultimate Truths, expounds ultimate Truths and investigates Mind and Matter and the relationship between them.",
      links: { },
  books: [
    {
      name: "dhammasangani",
      content: "",
      volume: "",
      links: {}
    },
    {
      name: "vibhanga",
      content: "",
      volume: "",
      links: {}
    },
    {
      name: "dhatukatha",
      content: "",
      volume: "",
      links: {}
    },
    {
      name: "puggalapannatti",
      content: "",
      volume: "",
      links: {}
    },
    {
      name: "Kathavatthu",
      content: "",
      volume: "",
      links: {}
    },
    {
      name: "Yamaka",
      content: "",
      volume: "",
      links: {}
    },
    {
      name: "Patthana",
      content: "",
      volume: "",
      links: {}
    }
  ]
}
  }
});

export default TipitakaData;