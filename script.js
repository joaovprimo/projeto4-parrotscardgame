

let arrImg=[
`<img class="img-front" src="./bobrossparrot.gif">`,
`<img class="img-front" src="./explodyparrot.gif">`,
`<img class="img-front" src="./fiestaparrot.gif">`,
`<img class="img-front" src="./metalparrot.gif">`,
`<img class="img-front" src="./revertitparrot.gif">`,
`<img class="img-front" src="./tripletsparrot.gif">`,
`<img class="img-front" src="./unicornparrot.gif">`
];
let contador = arrImg.length;
let card;
cardGame()
function cardGame(){
    card = Number(prompt("Insira a quantidade de cartas que irá jogar:"));
    let carta= card;
while(isNaN(carta)){
        carta = prompt("Numero inválido, insira um número par entre 4 e 14:");
    }
while(carta<4){
    carta = prompt("Numero inválido, insira um número par entre 4 e 14:");
}console.log(carta);
while(carta>14){
    carta = prompt("Numero inválido, insira um número par entre 4 e 14:");
}console.log(carta);
while(carta%2==!0){
    carta = prompt("Numero inválido, insira um número par entre 4 e 14:");
}console.log(carta);
distribuiCartas(carta);

}
function comparador(){
    return Math.random() - 0.5; 
}

function distribuiCartas(elemento){
    let cards = document.querySelector(".cards");
    cards.innerHTML='';
let pares = elemento/2;
arrImg.sort(comparador);
for(j=arrImg.length;j>pares;j--){

    arrImg.pop();

}
for(i=0; i<2;i++){
arrImg.sort(comparador);
for(let cont=0; cont<pares;cont++){
    let adcCards= `<div class="card inicial" onclick="selecionaCarta(this)"> 
    <div class="card-back">
        <img class="img-back" src="./front.png">
    </div>
    <div class="card-front desativa">
        ${arrImg[cont]}
    </div>`;
    cards.innerHTML+=adcCards;
}
}
}
function selecionaCarta(elemento){
    let selecionado = elemento;
    let inicial;
    inicial = selecionado.classList.contains("inicial");
if(inicial){
    selecionado.classList.remove("inicial");
    let pegacarta = elemento.querySelector(".card-back");
    pegacarta.classList.remove("desativa");
    let pegacarta2= elemento.querySelector(".card-front");
    pegacarta2.classList.add("desativa");
} else{
    selecionado.classList.add("inicial");
    let pegacarta = elemento.querySelector(".card-back");
    pegacarta.classList.add("desativa");
    let pegacarta2= elemento.querySelector(".card-front");
    pegacarta2.classList.remove("desativa");
    }
    }
