let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}
console.log(player.name);
console.log(player.lastName);
console.log(player['age']);
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player['age'] + ' anos de idade');
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; 
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor jogadora do mundo por ' + player['bestInTheWorld'].length + ' vezes')
console.log('A jogadora possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] + ' medalhas de prata');

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
}

for(let value in names) {
  console.log('Olá, ' + names[value]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let value2 in car) {
  console.log(value2, car[value2]);
}
