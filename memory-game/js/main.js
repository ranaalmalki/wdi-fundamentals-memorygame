const cards =["queen","queen","king","king"];
const cardsInPlay =[];
const cardOne =cards[0];
const cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped "+""+cardOne);
console.log("User flipped "+""+cardTwo);
if (cardsInPlay === 2){
alert("You found a match!");
}else  {
  alert("Sorry, try agine.");
}
