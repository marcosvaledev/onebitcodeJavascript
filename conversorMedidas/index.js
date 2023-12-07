
function converter(){
    let valueMetro = Number(prompt('qual valor voce deseja converter?'));
    let escolherOpcao = Number(prompt(
        'qual opcao voce deseja converter\n' + 
        '1. Converter para Km\n' +
        '2. Converter para cm\n' +
        '3. Converter para mm\n' 
    ))
switch (escolherOpcao){
    case 1 :        
        alert('Resultado: ' + valueMetro / 1000 + ' Km')
        break
    case 2 :
        alert('Resultado: ' + valueMetro * 100 + ' cm')
        break
    case 3 :
        alert('Resultado: ' + valueMetro * 1000 + ' mm')
        break
    default :
        alert("unidade de medida não corresponde!")
}
}
