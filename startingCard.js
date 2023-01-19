function getStartingCard(deckOrPlayer){

    let numberOfImagesNeeded = 8;
    let imageCount = 0;
    let indexOfRandomImage;
    let commonImages = [];
    let startingCard = [];

    if (deckOrPlayer === 'player'){

        commonImages = getTwoRandomImages();

        numberOfImagesNeeded = 6;

        startingCard = startingCard.concat(commonImages);

    }

    let imageListCopy = imageList.filter((el)=>{

        return commonImages.indexOf(el) < 0;
        
    });

    while (imageCount < numberOfImagesNeeded){

        indexOfRandomImage = Math.floor( Math.random() * imageListCopy.length );

        startingCard.push(imageListCopy[indexOfRandomImage]);

        imageListCopy.splice(indexOfRandomImage, 1);

        imageCount++;

    }

    startingCard = shuffleImages(startingCard);

    return startingCard;
}
