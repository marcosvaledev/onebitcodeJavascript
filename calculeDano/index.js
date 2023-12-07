// inserir o nome e o poder de ataque, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem, e se ele possui um escudo? 
//e entao calcule  a quantidade de dano causado baseado nas seguintes regras



let nomePlayer = prompt('qual seu nome?');
let powerAtack = Number(prompt('what its power atack?'));

const defender = prompt('name of defender?');
let lifePoints = Number(prompt('what lifes points?'));
const powerDefender = Number(prompt('what power Denfender?'));
let shield = prompt('he have shield? Yes or No?');
let damageCaused = 0;
//se o poder de ataque for maior que defesa e o defensor nao possui escuto
//entao o dano causado sera igual a diferença entre ataque e defesa

if (powerAtack > powerDefender && shield === "no"){
    damageCaused = powerAtack - powerDefender;
}
//se o poder de ataque for maior que a defesa E o defensor possui escuto
//entao o dano causado sera igual a metade da diferença entre o atauqe e defesa
else if(powerAtack > powerDefender && shield === 'yes'){
    damageCaused = (powerAtack - powerDefender) / 2;
}
//se o poder de ataque for menor ou igual a defesa, o dano causado sera 0
lifePoints -= damageCaused; // é subtraido esse valor pois o danocausado no poder de defesa, faz com que ele perca os pontos de vida (lifePoints).

alert()