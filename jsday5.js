function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade() 

// 
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'Luna';
  pessoa.idade = 19; 
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade); 

  //
  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hambúrguer';
  console.log(favoriteFood);

 //
  const name = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá, ${name} ${lastName}!`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} + ${b} é: ${a + b}`);

//
  function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());
// OU //
  const numeroAleatorio = () => Math.random() ;
  console.log(numeroAleatorio());

//
function hello(nome) {
  return `Olá, ${nome}!`
}
let nome = 'Ivan';
// OU //
const hello = (nome) => `Olá, ${nome}!` ;
console.log(hello(nome));

//
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));
// OU //
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`; {
  let nome = 'Ivan';
  let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));
}

//
let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(speed));
// OU //
let speed = 150;
const speedCar = (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida` ;

console.log(speedCar);

// OU //
let speed = 90;

const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);

console.log(speedCar(speed));