let shuffled = [];
let commonImages = [];

function getTwoRandomImages(isFirstCard){
    shuffled = [];
    commonImages = [];
    if (!isFirstCard){
        for (let player in playersObject){
            shuffled = shuffleImages(playersObject[player]);
            commonImages = commonImages.concat(shuffled.slice(0, 2));
        }
        return commonImages;
    }
    shuffled = shuffleImages(deckStartingCard);
    commonImages = commonImages.concat(shuffled.slice(0, 2));
    return commonImages;
}
