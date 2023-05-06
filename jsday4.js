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


let customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);
customer1.lastName = 'Faria';
console.log(customer1);

//Função para adicionar novas propriedades ao objeto //

let customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(customer, newKey, lastName);
console.log(customer);

let newKey2 = 'nacionalidade';
let nacionalidade = 'Brasileiro';

addProperty(customer, newKey2, nacionalidade);
console.log(customer);

// Exercicio Student //

let estudante = {
  primeiroNome: 'Amanda',
  ultimoNome: 'Trajano',
  idade: 33,
  estado: 'Rio de Janeiro',
  temNamorada: true,
  }
  
  for(let index in estudante) {
    console.log(estudante[index]);
  }

function adicionaPropriedade(objeto, chave, valor) {
  objeto[chave] = valor;
}

let novaChave = 'cidade';
let cidade = 'Niteroi';
adicionaPropriedade(student, novaChave, cidade);
console.log(student);
console.log(student.primeiroNome + ' ' + student.ultimoNome + ' é estudante na Trybe, tem ' + student['idade'] + ' anos. Ela mora no estado do ' + student.estado + ', na cidade de ' + student.cidade + '.' + ' Ela tem namorada? ' + student.temNamorada + '.');

// Object.keys //

let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

function listSkills(student) {
  let arrayOfSkills = Object.keys(student);
  for (let index in arrayOfSkills) {
    console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

// Objects values //
let student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

function listSkillsValuesWithFor(student) {
  let skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

function listSkillsValuesWithValues(student) {
  return Object.values(student);
}

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));

// Object entries //

let costumer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
}

console.log(Object.keys(costumer1));
console.log(Object.values(costumer1));
console.log(Object.entries(costumer1));

let countries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
let pairKeyValue = Object.entries(countries);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};