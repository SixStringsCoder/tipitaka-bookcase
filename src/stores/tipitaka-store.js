// source for data https://tipitaka.org/eot#2 from the book "Essence of Tipiṭaka"

import { readable } from 'svelte/store';

const TipitakaData = readable({
  information: {
    name: 'Tipiṭaka',
    introduction: '<p id="intro-info" class="info"> All that the Buddha taught forms the subject matter and substance of the Pāḷi Canon, which is divided into these three divisions called <span class="emphasis">Piṭakas</span> — literally baskets. Hence <span class="emphasis">Tipiṭaka</span> means three baskets or three separate divisions of the Buddha\'s Teaching. Here the metaphor \'basket\' signifies not so much the function of \'storing up\' anything put into it as its use as a receptacle in which things are handed on or passed on from one to another like carrying away of earth from an excavation site by a line of workers.</p> <p class="info"><span class="emphasis indent">The Tipiṭaka</span> into which the P&#x101;&#7735;i Canon is systematically divided and handed down from generation to generation together with Commentaries forms the huge collection of literary works which the bhikkhus of the Order have to learn, study and memorize in discharge of their <span class="emphasis">gantha dhura</span>, the duty of studying.</p>'
  },
  baskets: {
    vinaya: {
      name: "Vinaya Piṭaka",
      description: "The Vinaya Piṭaka is made up of rules of discipline laid down for regulating the conduct of the Buddha’s disciples who have been admitted into the order as bhikkhus (monks) and bhikkhunis (nuns). These rules embody authoritative injunctions of the Buddha on modes of conduct and restraints on both physical and verbal actions. They deal with transgressions of discipline, and with various categories of restraints and admonitions in accordance with the nature of the offence.",
      books: [
        {
          name: "Pārājika Pāḷi",
          content: "Pārājika Pāḷi, which is the first book of the Vinaya Piṭaka, gives an elaborate explanation of the important rules of discipline concerning pārājika and saṅghādisesa, as well as aniyata and nissaggiya which are minor offences.",
          volume: "1",
        },
        {
          name: "Pācittiya Pāḷi",
          content: "The Pācittiya Pāḷi, which is the second book of the Vinaya Piṭaka, deals with the remaining sets of rules for the bhikkhus, namely, the pācittiya, the pāṭidesanīya, the sekhiya, the adhikaraṇasamatha and the corresponding disciplinary rules for the bhikkhunis. Although it is called in Pāḷi just pācittiya, it has the distinctive name of suddha pācittiya (ordinary pācittiya), to distinguish it from nissaggiya pācittiya, described above.",
          volume: "2",
        },
        {
          name: "Mahāvagga Pāḷi",
          content: 'Mahāvagga Pāḷi, made up of ten sections known as khandhakas, opens with an historical account of how the Buddha attained supreme enlightenment at the foot of the Bodhi tree, how he discovered the famous Law of Dependent Origination and how he gave his first sermon to the group of five bhikkhus on the discovery of the Four Noble Truths (i.e. the great "Discourse on the Turning of the Wheel of Dhamma"-Dhammacakkappavattana Sutta). This was followed by another great discourse, the Anattalakkhaṇa Sutta. These two suttas can be described as a compendium of the teaching of the Buddha.',
          volume: "3",
        },
        {
          name: "Cūḷavagga Pāḷi",
          content: "Cūḷavagga Pāḷi, which is book four of the Vinaya Piṭaka, deals with further rules and procedures for institutional acts or functions known as saṅghakamma. The twelve sections in this book deal with rules for offences such as saṅghādisesa that come before the Sangha; rules for observance of penances such as parivāsa and mānatta and rules for reinstatement of a bhikkhu. There are also miscellaneous rules concerning bathing, dress, dwellings and furniture and those dealing with treatment of visiting bhikkhus, and duties of tutors and novices.",
          volume: "4",
        },
        {
          name: "Parivāra Pāḷi",
          content: "Parivāra Pāḷi, which is the fifth and last book of the Vinaya Piṭaka, serves as a kind of manual. It is compiled in the form of a catechism, enabling the reader to make an analytical survey of the Vinaya Piṭaka. All the rules, official acts, and other matters of the Vinaya are classified under separate categories according to the subjects dealt with.",
          volume: "5",
        },
      ]
    },
    suttanta: {
      name: "Suttanta Piṭaka",
      description: "The general discourses and sermons intended for both the bhikkhus and lay disciples, delivered by the Buddha on various occasions (together with a few discourses delivered by some of his distinguished disciples), are collected and classified in a great division known as the Suttanta Piṭaka.",
      sections: {
        "Digha Nikaya": {
          name: "",
          translation: "Collection of Long Discourses of the Buddha",
          qty: 34,
          descr: "This collection in the Suttanta Pitaka, named Digha Nikaya as it is made up of thirty-four long discourses of the Buddha, is divided into three divisions (a) Silakkhanda Vagga, Division Concerning Morality (b) Maha Vagga, the Large Division (c) Pathika Vagga, the Division beginning with the discourse on Pathika, the Naked Ascetic "
        },
      },
      books: [
        {
          name: "Silakkhanda Vagga",
          translation: "Division Concerning Morality",
          collection: "digha-nikaya",
          descr: "Collection of long discourses of the Buddha",
          content: "<p>This division contains thirteen suttas which deal extensively with various types of morality, namely, Minor Morality, basic morality applicable to all; Middle Morality and Major Morality which are mostly practised by Samaṇas and Brāhmaṇas.</p> <p>It also discusses the wrong views then prevalent as well as brāhmin views of sacrifice and caste, and various religious practices such as extreme self-mortification.</p>",
          suttas: ["Brahmajāla Sutta, Discourse on the Net of Perfect Wisdom", "Sāmaññaphala Sutta, Discourse on the Fruits of the Life of a Samaṇa", "Ambaṭṭha Sutta", "Soṇadaṇḍa Sutta", "Kūṭadanta Sutta", "Mahāli Sutta", "Jāliya Sutta", "Mahāsīhanāda Sutta", "Poṭṭhapāda Sutta", "Subha Sutta", "Kevaṭṭa Sutta", "Lohicca Sutta", "Tevijja Sutta"],
          volume: "6"
        },
        {
          name: "Maha Vagga",
          translation: "the Large Division",
          collection: "digha-nikaya",
          descr: "Collection of long discourses of the Buddha",
          content: "<p>The ten suttas in this division are some of the most important ones of the Tipitaka, dealing with historical, and biographical aspects as well as the doctrinal aspects of Buddhism.</p><p>The most famous sutta is the Mahāparinibbāna Sutta which gives an account of the last days and the passing away of the Buddha and the distribution of his relics.</p><p>Mahāpadāna Sutta deals with brief accounts of the last seven Buddhas and the life story of the Vipassi Buddha.</p><p>Doctrinally important are the two suttas: the Mahānidāna Sutta which explains the Chain of Cause and Effect (Paticcasamuppada or Wheel of Dependent Origination), and the Mahāsatipaṭṭhāna Sutta dealing with the four Methods of Steadfast Mindfulness and practical aspects of Buddhist meditation.</p>",
          suttas: ["Mahāpadāna Sutta", "Mahānidāna Sutta", "Mahāparinibbāna Sutta", "Mahāsudassana Sutta", "Janavasabha Sutta", "Mahāgovinda Sutta", "Mahāsamaya Sutta", "Sakkapañha Sutta", "Mahāsatipaṭṭhāna Sutta", "Pāyāsi Sutta"],
          volume: "7"
        },
        {
          name: "Pathika Vagga",
          translation: "the Division beginning with the discourse on Pathika, the Naked Ascetic",
          collection: "digha-nikaya",
          descr: "Collection of long discourses of the Buddha",
          content: "This division is made up of eleven shorter discourses of a miscellaneous nature They deal with the Buddha's rejection of wrong and severe asceticism practised by followers of many sects, they deal also with the periodical evolution and dissolution of the universe, the accounts of Universal Monarch and the thirty-two physiognomic characteristics of a great man There is one discourse, Singala Sutta, addressed to a young Brahmin showing the duties to be performed by members of the human society The last two suttas, Sangiti and Dasuttara, are discourses given by the Venerable Sanputta and they contain lists of doctrinal terms classified according to subject matter and numerical units The style of their composition is different from the other nine suttas of the division.",
          suttas: ["Pāthika Sutta", "Udumbarika Sutta", "Cakkavatti Sutta", "Aggañña Sutta", "Sampasādaniya Sutta", "Pāsādika Sutta", "Lakkhaṇa Sutta", "Singala Sutta", "Āṭānāṭiya Sutta", "Saṅgāti Sutta", "Dasuttora Sutta"],
          volume: "8"
        },
        {
          name: "Mulapannasa",
          collection: "majjhima-nikaya",
          descr: "Collection of medium length discourses of the Buddha",
          content: "",
          volume: ""
        },
        {
          name: "Majjhima Pannasa",
          collection: "majjhima-nikaya",
          descr: "Collection of medium length discourses of the Buddha",
          content: "",
          volume: ""
        },
        {
          name: "Uparipannasa",
          collection: "majjhima-nikaya",
          descr: "Collection of medium length discourses of the Buddha",
          content: "",
          volume: ""
        },
        {
          name: "Sagatha Vagga Samyutta",
          collection: "samyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: ""
        },
        {
          name: "Nidana Vagga Samyutta",
          collection: "samyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: ""
        },
        {
          name: "Khandha Vagga Samyutta",
          collection: "samyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: ""
        },
        {
          name: "Salayatana Vagga Samyutta",
          collection: "samyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: ""
        },
        {
          name: "Maha Vagga Samyutta",
          collection: "samyutta-nikaya",
          descr: "Collection of 7762 suttas of varied length, generally short, arranged in a special order",
          content: "",
          volume: ""
        },
        {
          name: "Ekaka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Duka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Tika Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Catukka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Pancaka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Chakka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Sattaka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Atthaka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Navaka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Dasaka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Ekadasaka Nipata",
          collection: "anguttara-nikaya",
          descr: "Collection of 9557  short suttas divided into eleven division known as nipatas",
          content: "",
          volume: ""
        },
        {
          name: "Khuddakapatha",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Dhammapada",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Udana",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Itivuttaka",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Suttanipata",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Vimana Vatthu",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Peta Vatthu",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "The Thera Gatha",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "The Theri Gatha",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Jataka",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "Birth-stories of the Buddha",
          volume: "",
        },
        {
          name: "Niddesa",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Patisambhida Magga",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Apadana",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Buddhavamsa",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "Hidtory of the Buddha",
          volume: ""
        },
        {
          name: "Cariya Pitaka",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Netti",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Petakopadesa",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },
        {
          name: "Milindapanha",
          collection: "khuddaka-nikaya",
          descr: "Contains the largest number of treatises and the most numerous categories of dhamma",
          content: "",
          volume: ""
        },

      ]
    },
    abhidhamma: {
      name: "Abhidhamma Piṭaka",
      description: "The philosophical aspect of the Buddha's Teaching, more profound and abstract than the discourses of the Suttanta Piṭaka, is classified under the great division known as the Abhidhamma Piṭaka. Abhidhamma deals with ultimate Truths, expounds ultimate Truths and investigates Mind and Matter and the relationship between them.",
      books: [
        {
          name: "dhammasangani",
          content: "",
          volume: ""
        },
        {
          name: "vibhanga",
          content: "",
          volume: ""
        },
        {
          name: "dhatukatha",
          content: "",
          volume: ""
        },
        {
          name: "puggalapannatti",
          content: "",
          volume: ""
        },
        {
          name: "Kathavatthu",
          content: "",
          volume: ""
        },
        {
          name: "Yamaka",
          content: "",
          volume: ""
        },
        {
          name: "Patthana",
          content: "",
          volume: ""
        }
      ]
    }
  }
});

export default TipitakaData;