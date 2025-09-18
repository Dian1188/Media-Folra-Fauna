export interface FloraFauna {
  name: string;
  icon: string;
}

export interface ContinentData {
  name: string;
  coords: [number, number];
  zoom: number;
  flora: FloraFauna[];
  fauna: FloraFauna[];
}

export const continentData: ContinentData[] = [
  {
    name: 'Asia',
    coords: [34.0, 103.0],
    zoom: 3,
    flora: [
      { name: 'Bunga Sakura', icon: '🌸' },
      { name: 'Pohon Bambu', icon: '🎋' },
      { name: 'Bunga Rafflesia', icon: '🌺' },
    ],
    fauna: [
      { name: 'Panda', icon: '🐼' },
      { name: 'Harimau', icon: '🐅' },
      { name: 'Orangutan', icon: '🦧' },
    ],
  },
  {
    name: 'Afrika',
    coords: [ -0.0, 25.0],
    zoom: 3,
    flora: [
        { name: 'Pohon Baobab', icon: '🌳' },
        { name: 'Aloe Vera', icon: '🌵' },
        { name: 'Pohon Akasia', icon: '🌳' },
    ],
    fauna: [
        { name: 'Singa', icon: '🦁' },
        { name: 'Gajah', icon: '🐘' },
        { name: 'Jerapah', icon: '🦒' },
    ],
  },
  {
    name: 'Eropa',
    coords: [54.0, 15.0],
    zoom: 4,
    flora: [
        { name: 'Pohon Ek', icon: '🌳' },
        { name: 'Bunga Tulip', icon: '🌷' },
        { name: 'Lavender', icon: '🪻' },
    ],
    fauna: [
        { name: 'Beruang Coklat', icon: '🐻' },
        { name: 'Serigala Abu-abu', icon: '🐺' },
        { name: 'Rusa Merah', icon: '🦌' },
    ],
  },
  {
    name: 'Amerika Utara',
    coords: [54.5, -105.3],
    zoom: 3,
    flora: [
        { name: 'Pohon Sequoia', icon: '🌲' },
        { name: 'Bunga Matahari', icon: '🌻' },
        { name: 'Kaktus Saguaro', icon: '🌵' },
    ],
    fauna: [
        { name: 'Bison Amerika', icon: '🦬' },
        { name: 'Elang Botak', icon: '🦅' },
        { name: 'Beruang Grizzly', icon: '🐻' },
    ],
  },
  {
    name: 'Amerika Selatan',
    coords: [-20.0, -55.0],
    zoom: 3,
    flora: [
        { name: 'Anggrek', icon: '🌸' },
        { name: 'Pohon Karet', icon: '🌳' },
        { name: 'Bunga Victoria Amazonica', icon: '🪷' },
    ],
    fauna: [
        { name: 'Llama', icon: '🦙' },
        { name: 'Jaguar', icon: '🐆' },
        { name: 'Burung Toucan', icon: '🦜' },
    ],
  },
  {
    name: 'Australia',
    coords: [-25.0, 135.0],
    zoom: 4,
    flora: [
        { name: 'Pohon Eucalyptus', icon: '🌳' },
        { name: 'Bunga Waratah', icon: '🌺' },
        { name: 'Akasia Emas', icon: '🌿' },
    ],
    fauna: [
        { name: 'Kanguru', icon: '🦘' },
        { name: 'Koala', icon: '🐨' },
        { name: 'Platipus', icon: '🦆' },
    ],
  },
  {
    name: 'Indonesia',
    coords: [-2.5, 118.0],
    zoom: 5,
    flora: [
        { name: 'Rafflesia Arnoldii', icon: '🌺' },
        { name: 'Anggrek Bulan', icon: '🌸' },
        { name: 'Pohon Jati', icon: '🌳' },
    ],
    fauna: [
        { name: 'Komodo', icon: '🦎' },
        { name: 'Orangutan', icon: '🦧' },
        { name: 'Harimau Sumatra', icon: '🐅' },
    ],
  },
];

export const quizQuestions = [
  {
    question: 'Hewan kanguru berasal dari benua apa?',
    options: ['Asia', 'Australia', 'Afrika', 'Amerika Selatan'],
    answer: 'Australia',
  },
  {
    question: 'Panda raksasa adalah hewan endemik dari negara mana di benua Asia?',
    options: ['India', 'Jepang', 'Cina', 'Indonesia'],
    answer: 'Cina',
  },
  {
    question: 'Pohon Baobab yang ikonik banyak ditemukan di benua...',
    options: ['Eropa', 'Asia', 'Amerika Utara', 'Afrika'],
    answer: 'Afrika',
  },
  {
    question: 'Burung Toucan dengan paruh besarnya adalah fauna khas dari...',
    options: ['Amerika Selatan', 'Australia', 'Eropa', 'Afrika'],
    answer: 'Amerika Selatan',
  },
  {
    question: 'Singa, Gajah, dan Jerapah adalah hewan-hewan besar yang menjadi ciri khas benua...',
    options: ['Asia', 'Afrika', 'Eropa', 'Australia'],
    answer: 'Afrika',
  },
  {
    question: 'Komodo, kadal terbesar di dunia, adalah hewan endemik dari negara...?',
    options: ['Malaysia', 'Filipina', 'Indonesia', 'Thailand'],
    answer: 'Indonesia',
  },
];