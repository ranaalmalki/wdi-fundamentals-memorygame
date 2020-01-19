const cards =[
  {
    rank:"queen",
    suit:"hearts",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank:"queen",
    suit:"diamounds",
    cardImage:"images/queen-of-diamonds.png"
  },
  {
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
  },
  {
    rank:"king",
    suit:"diamonds",
    cardImage:"images/king-of-diamonds.png"
  }
];
const cardsInPlay =[];
function checkForMatch(){
  this.setAttribute('src',cards[cardId].cardImage);

  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
    alert("Sorry, try agine.");
}
}
}
function flipCard(){
const cardId = this.getAttribute('data-id');
this.setAttribute('src',cards[cardId].cardImage);
console.log("User flipped "+cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
if (cardsInPlay === 2){
checkForMatch();
}

}
function createBoard(){
  for (let i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
  cardElement.setAttribute('src',"images/back.png");
  cardElement.setAttribute('date-id',i);
cardElement.addEventListener('click',flipCard);
document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();
