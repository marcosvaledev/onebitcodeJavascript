let verificarOperador = prompt('what operation do you want calulate\n'+
                               '+ for multiplication\n'+
                               '- for subtration');

let value1 = Number(prompt('What number?'));
let value2 = Number(prompt('What other number?'));

function soma(value1, value2){
    return value1 + value2;
} let resultSoma = soma(value1, value2);

function subtrai(value1, value2){
    return value1 - value2;
} let resultSubtrai = subtrai(value1, value2);

if (verificarOperador === '+'){
    alert('o resultado da soma é : ' + resultSoma.toFixed(1) );
}
else{if (verificarOperador === '-') {
    alert('o resultado da subtração é : ' + resultSubtrai.toFixed(1) )
}
}










//tem outra forma tambem

/*const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y
*/

//depois exibir um alert com as varias  concatenadas
