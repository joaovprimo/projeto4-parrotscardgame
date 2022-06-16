
let arrImg=[
`<img src="./bobrossparrot.gif">`,
`<img src="./explodyparrot.gif">`,
`<img src="./fiestaparrot.gif">`,
`<img src="./metalparrot.gif">`,
`<img src="./revertitparrot.gif">`,
`<img src="./tripletsparrot.gif">`,
`<img src="./unicornparrot.gif">`];


function cardGame(){
    let card = prompt("Insira a quantidade de cartas que irá jogar:");
    let carta= card;
while(carta<4){
    carta = prompt("Numero inválido, insira um número par entre 4 e 14:");
}console.log(carta);
while(carta>14){
    carta = prompt("Numero inválido, insira um número par entre 4 e 14:");
}console.log(carta);
while(carta%2==!0){
    carta = prompt("Numero inválido, insira um número par entre 4 e 14:");
}console.log(carta);
}

