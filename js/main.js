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

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
  console.log(cards.cardImage);
  console.log(cards.suit);
};

flipCard(0);
flipCard(2);
