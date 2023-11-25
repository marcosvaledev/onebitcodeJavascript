
const value1 = Number(prompt('write a number for be calculated'))
const value2 = 1 //valor que vai de 1 á 100


function mostraResult(){

    for (const value2 = 1; value2 <= 1000; ++value2){
  mostrar += value1 + 'x' + value2 + '=' + (value1 * value2  + '<br>');
  outputResul.innerHTML = mostrar
}

}
var mostrar = ''
var outputResul = document.querySelector('div')

