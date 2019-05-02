console.log("Up and running!");

console.log("User flipped " + cardOne);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];

var cardOne = cards[1];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);


if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("you found a match!");
} else {
	alert("Sorry, try again");
 }




  
