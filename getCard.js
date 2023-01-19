function getCard(deckOrPlayer){

    let numberOfImagesNeeded = 8;
    let imageCount = 0;
    let indexOfRandomImage;
    let commonImages = [];
    let card = [];

    if (deckOrPlayer === 'player'){

        commonImages = getTwoRandomImages(true);
        numberOfImagesNeeded = 6;

    }

    else if (deckOrPlayer === 'next'){
        numberOfImagesNeeded = 4;
        commonImages = getTwoRandomImages(false);
        
    }

    card = card.concat(commonImages);

    let imageListCopy = imageList.filter((el)=>{
        return card.indexOf(el) < 0;
    });

    while (imageCount < numberOfImagesNeeded){

        indexOfRandomImage = Math.floor( Math.random() * imageListCopy.length );
        card.push(imageListCopy[indexOfRandomImage]);
        imageListCopy.splice(indexOfRandomImage, 1);
        imageCount++;

    }

    card = shuffleImages(card);

    return card;
}
