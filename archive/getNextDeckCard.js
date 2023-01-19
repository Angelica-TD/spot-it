// function getNextDeckCard(){
//     let nextCard = [];
//     let numberOfImagesNeeded = 4;
//     //get random 2 images from each player images
//     console.log(getTwoRandomImages(false));
//     // getTwoRandomImages(false)

//     nextCard = nextCard.concat(commonImages);

//     let imageListCopy = imageList.filter((el)=>{

//         return commonImages.indexOf(el) < 0;
        
//     });

//     while (imageCount < numberOfImagesNeeded){

//         indexOfRandomImage = Math.floor( Math.random() * imageListCopy.length );

//         startingCard.push(imageListCopy[indexOfRandomImage]);

//         imageListCopy.splice(indexOfRandomImage, 1);

//         imageCount++;

//     }

//     startingCard = shuffleImages(startingCard);

//     return startingCard;


// }
