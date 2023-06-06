const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(verifyNumbers);
//

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verifyName = names.find((name) => name.length === 5);
console.log(verifyName);
//

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const searchMusic = musicas.find((music) => music.id === '31031685');
console.log(searchMusic);
//

const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name);
};

console.log(hasName(names1, 'Ana'));
console.log(hasName(names1, 'Pedro'));
//

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  const verifyAges = (array, idade) => {
    return array.every((person) => person.age >= idade);
  }

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));