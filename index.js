let dcContainer = document.getElementById('deckCardContainer');

let p1cContainer = document.getElementById('player1CardContainer');

let p2cContainer = document.getElementById('player2CardContainer');

let p1Button = document.getElementById('addToPlayer1');

let p2Button = document.getElementById('addToPlayer2');

let playerNumber = 2;
let playerCount = 1;
let playersObject = {};

let deckStartingCard = getCard('deck');
let currentDeckCard = deckStartingCard;

p1Button.addEventListener('click', () => {
        addToPlayer(currentDeckCard);
        currentDeckCard = getCard('next');
        dcContainer.innerText = currentDeckCard;
    });

while (playerCount <= playerNumber){
    playersObject[`player${playerCount}`] = getCard('player');
    playerCount++;
}

dcContainer.innerText = deckStartingCard;
p1cContainer.innerText = playersObject.player1;
p2cContainer.innerText = playersObject.player2;

console.log(deckStartingCard);
console.log(playersObject);