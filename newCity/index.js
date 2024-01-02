let nomeTurista = prompt('qual seu nome');
let visitouCidade = prompt(nomeTurista + ' visitou alguma cidade?');
let cidades = '';

if (visitouCidade.toLowerCase() == "sim"){
    let cidadeVisitada = prompt('qual cidade visitou?');
    cidadeVisitada += " - " + cidades
}
while (visitouCidade == 'sim'){
    cidadeVisitada = prompt('qual a outra cidade?')
}

console.log(cidades)
