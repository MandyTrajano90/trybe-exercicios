/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe'); 
console.log(tasksList);

tasksList.unshift('Malhar');
console.log(tasksList); */

/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ] */

/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);

// [ 'Reunião' , 'Brincar com o cachorro' ] */

/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1 */

/*
let menu = ['Home', 'Serviços', 'Portfolio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfolio');
menu.push('Contato')

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu); */

// for(inicialização; condição de repetição;) incremento/decremento) {}

/*
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
} */

/*
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}*/

/*
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o" */

/*
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let list of names) {
  console.log(list);
}*/

/*
let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}*/

/*
let resultado = '';
let i = 0;
do {
  i += 1;
  resultado += i + ' ';
} while (i < 5); */

/*
let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

/*
for(let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma); // Somatório do array */

/*
for(let index = 0; index < numbers.length; index += 1) {
  media += numbers[index] / numbers.length;
}
console.log(media); 

if(media > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}

let numeroMaior = numbers[0];
for(let index = 1; index < numbers.length; index += 1 ) {
  if(numbers[index] > numeroMaior) {
    numeroMaior = numbers[index];
  }
}
console.log(numeroMaior);

let numeroMenor = numbers[0];
for(let index = 1; index < numbers.length; index += 1 ) {
  if(numbers[index] < numeroMenor) {
    numeroMenor = numbers[index];
  }
}
console.log(numeroMenor);

for(let index = 0; index < numbers.length; index += 1 ) {
  if(numbers[index] % 2 !== 0) {
    soma += 1;
  }
}
console.log(soma);

if(soma === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(soma);
}*/

let array25 = [];

for(let index1 = 1 ; index1 <= 25; index1 += 1) {
  array25.push(index1);
}
console.log(array25);

for(let index = 0; index < array25.length; index += 1) {
  console.log(array25[index] / 2);
}