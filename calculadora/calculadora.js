let check = true;

do {
let verificarOperador = prompt('what operation do you want calulate\n'+
                                   '+ for adition\n'+
                                   '- for subtration\n' +
                                   '* for multiplication\n' +
                                   'sair for exit');

if (verificarOperador.toLowerCase() === 'sair') {
    check = false;
    break;
}
let value1 = Number(prompt('What number?'));
let value2 = Number(prompt('What other number?'));

function soma(value1, value2){         
    return value1 + value2;
} let resultSoma = soma(value1, value2);

function subtrai(value1, value2){
    return value1 - value2;
} let resultSubtrai = subtrai(value1, value2);

function multipli(value1, value2){
    return value1 * value2;
} let resultMultipli = multipli(value1, value2);

// the conditionals
if (verificarOperador === '+'){
    alert('o resultado da soma é : ' + resultSoma.toFixed(1) );
}
else if (verificarOperador === '-'){ {
    alert('o resultado da subtração é : ' + resultSubtrai.toFixed(1) )
}
}else if(verificarOperador === '*') {
    alert('o resultado da multiplication é : ' + resultMultipli.toFixed(1) )
}else if (verificarOperador != '+' && '-' && '*' && 'sair' ){
    alert('operation invalid')
}

} while(check);


