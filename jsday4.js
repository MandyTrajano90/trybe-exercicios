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