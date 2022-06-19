let elemento;
let primeiraCarta;
let segundaCarta;
let pegacarta1;
let pegacarta2;
let pegacarta3;
let pegacarta4;
let srcPr;
let srcSg ;
let retira; 
let retira2;
let arrImg=[
"./bobrossparrot.gif",
"./explodyparrot.gif",
"./fiestaparrot.gif",
"./metalparrot.gif",
"./revertitparrot.gif",
"./tripletsparrot.gif",
"./unicornparrot.gif"
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

function distribuiCartas(element){
    let cards = document.querySelector(".cards");
    cards.innerHTML='';
let pares = element/2;
arrImg.sort(comparador);
for(j=arrImg.length;j>pares;j--){

    arrImg.pop();

}
for(i=0; i<2;i++){
arrImg.sort(comparador);
for(let cont=0; cont<pares;cont++){
    let adcCards= `<div class="card" onclick="selecionaCarta(this)"> 
    <div class="card-back">
        <img class="img-back" src="./front.png">
    </div>
    <div class="card-front desativa">
    <img class="img-front" src=${arrImg[cont]}>
    </div>`;
    cards.innerHTML+=adcCards;
}
}
}


function selecionaCarta(elemento){
    elemento.classList.add("selecionado");
    if(document.querySelectorAll(".selecionado").length%2==1){
    primeiraCarta=elemento;
    pegacarta1 = elemento.querySelector(".card-back");
    pegacarta1.classList.add("desativa");
    pegacarta2= elemento.querySelector(".card-front");
    pegacarta2.classList.remove("desativa");
    srcPr = primeiraCarta.querySelector(".img-front").getAttribute('src');
}
    else{
    segundaCarta=elemento;
    pegacarta3 = elemento.querySelector(".card-back");
    pegacarta3.classList.add("desativa");
    pegacarta4= elemento.querySelector(".card-front");
    pegacarta4.classList.remove("desativa");
    srcSg = segundaCarta.querySelector(".img-front").getAttribute('src');
    if( srcPr === srcSg) {
        primeiraCarta.classList.add("iguais");
        segundaCarta.classList.add("iguais");
        primeiraCarta.classList.remove("selecionado");
        segundaCarta.classList.remove("selecionado");
        console.log("você acertou");
    } else{
        setTimeout(viraCarta,1000);
    }
    }}

function viraCarta (){
 primeiraCarta.classList.remove("selecionado");
  segundaCarta.classList.remove("selecionado");
  pegacarta1.classList.remove("desativa");
  pegacarta2.classList.add("desativa");
  pegacarta3.classList.remove("desativa");
  pegacarta4.classList.add("desativa");
}


