const cards =["queen","queen","king","king"];
const cardsInPlay =[];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){

console.log("User flipped "+cards[cardId]);
cardsInPlay.push(cards[cardId]);

  if (cardsInPlay === 2){
  alert("You found a match!");

  }else  {
    alert("Sorry, try agine.");

  }
  checkForMatch();

}
flipCard(0);
flipCard(2);
