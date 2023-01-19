
let playerNumber = 2;
let playerCount = 1;
let playersObject = {};

// let eightImages = [];
// let deckStartingCard = [];
// let playerStartingCard = [];
// let commonImages = [];


let deckStartingCard = getStartingCard('deck');
// let playerStartingCard = getStartingCard('player');

while (playerCount <= playerNumber){

    playersObject[`player${playerCount}`] = getStartingCard('player');
    
    playerCount++;

}

console.log(deckStartingCard);
console.log(playersObject);

// function getStartingDeckCard(){
//     deckStartingCard = [];
//     let randomImageIndex;
//     let imageCount = 0;
//     let imageListCopy = imageList.filter(()=>{
//         return true;
//     });
//     while (imageCount < 8){

//         randomImageIndex = Math.floor( Math.random() * imageListCopy.length );
//         deckStartingCard.push(imageListCopy[randomImageIndex]);
//         imageListCopy.splice(randomImageIndex, 1);

//         imageCount++;
//     }
//     return deckStartingCard;
// }

// function getStartingPlayerCard(commonImages){
//     playerStartingCard = [];
//     let randomImageIndex;
//     let imageCount = 0;
//     let imageListCopy = imageList.filter((el)=>{
//         return commonImages.indexOf(el) < 0;
//     });
//     while (imageCount < 6){

//         randomImageIndex = Math.floor( Math.random() * imageListCopy.length );
//         playerStartingCard.push(imageListCopy[randomImageIndex]);
//         imageListCopy.splice(randomImageIndex, 1);

//         imageCount++;
//     }
//     playerStartingCard = playerStartingCard.concat(commonImages);

//     return playerStartingCard.sort(()=>0.5 - Math.random());
// }

// console.log(getStartingDeckCard());
// console.log(getTwoRandomImages());
// console.log(getStartingPlayerCard(commonImages));
// console.log(commonImages);

// function getEightImages(){
//     eightImages = [];
//     eightImages.concat(getTwoRandomImages());
//     let randomImageIndex;
//     let imageCount = 0;
//     let imageListCopy = imageList.filter(()=>{
//         return true;
//     });

//     while (imageCount < 8){

//         randomImageIndex = Math.floor( Math.random() * imageListCopy.length );
//         eightImages.push(imageListCopy[randomImageIndex]);
//         imageListCopy.splice(randomImageIndex, 1);

//         imageCount++;
//     }
//     return eightImages;
// }

// function getPlayerdeckStartingCards(playerNumber){
//     let playerCount = 1;
//     while (playerCount <= playerNumber){
//         playersObject[`player${playerCount}`] = getStartingPlayerCard();
//         playerCount++;
//     }

//     // return playersObject;
// }



// getPlayerdeckStartingCards(playerNumber);
// getEightImages();

// console.log(getPlayerdeckStartingCards(playerNumber));
// console.log(playersObject);
// console.log(getEightImages());
// console.log(getTwoRandomImages());
