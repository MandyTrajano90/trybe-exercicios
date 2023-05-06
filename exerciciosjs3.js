/*
let saldo = 1000;

function somaSaldo(valor) {
  return valor + saldo;
};
function subtraiSaldo(valor) {
  return valor - saldo;
};
function multiplicaSaldo(valor) {
  return valor * saldo;
};
function dividaSaldo(valor) {
  return valor / saldo;
};

console.log(somaSaldo(400));
console.log(subtraiSaldo(20));
console.log(multiplicaSaldo(5));
console.log(dividaSaldo(2));
*/

/*
let status1 = 'deslogado'; // o status padrão é deslogado

function logarDeslogar() { // aqui criamos uma função para verificar o status
  if (status1 === 'deslogado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
    status1 = 'logado';
  } else { // caso esteja logado, alteramos para deslogado
    status1 = 'deslogado';
  }
}
console.log('O usuário está ' + status1 + ' no sistema TrybeBank'); // O usuário está deslogado no sistema TrybeBank */

/*
function sacar(valor, saldo) {
  if (valor >= 1 && saldo >= 0) {
      if (valor <= saldo) {
          return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
      } else {
          return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
      }
  } else {
      return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
  }
}

console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.
console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00
*/

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaClientes(cliente) {
  if(typeof cliente === 'string') {
    clientesTrybeBank.push(cliente);
    return 'Cliente adicionado(a) com sucesso';
  } else {
  return 'O parâmetro passado deve ser do tipo "string"';
  }
}
console.log(adicionaClientes(false));
console.log(adicionaClientes('Evelyn'));
console.log(adicionaClientes(3));
console.log(clientesTrybeBank);
