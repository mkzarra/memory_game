console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "/home/mkzarra/Desktop/fundamentals/memory_game/images/images/queen-of-hearts.png"
  },
    {rank: "queen",
    suit: "diamonds",
    cardImage: "/home/mkzarra/Desktop/fundamentals/memory_game/images/images/queen-of-diamonds.png"
  },
    {rank: "king",
    suit: "heart",
    cardImage: "/home/mkzarra/Desktop/fundamentals/memory_game/images/images/king-of-hearts.png"
  },
    {rank: "king",
    suit: "diamonds",
    cardImage: "/home/mkzarra/Desktop/fundamentals/memory_game/images/images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    console.log();
    if(cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match");
    }
    else {
      alert("Sorry, try again.");
    }
  }
};

var flipCard = function() {
  console.log(this)
  var cardId = this.getAttribute('data-id');
  var card = cards[cardId]
  this.setAttribute('src', card.cardImage);
  console.log("User flipped " + card.rank);
  cardsInPlay.push(card.rank);
  checkForMatch();
  console.log(cards.cardImage);
  console.log(cards.suit);
};

var createBoard = function() {
  cards;
    for (var i=0; i < cards.length; i++) {
      console.log(cards[i].rank + cards[i].suit);
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', '/home/mkzarra/Desktop/fundamentals/memory_game/images/images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
    }
}

var recreateBoard = function(){
  document.getElementById('game-board').innerHTML= '';
  cardsInPlay = [];
  createBoard();
}
document.getElementById('reset-button').addEventListener('click', recreateBoard);
createBoard();
