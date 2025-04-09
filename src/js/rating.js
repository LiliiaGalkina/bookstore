function rating(numRating, cardItem){
    let countGoldStars = Math.floor(numRating);
    let countGreyStars = 5 - countGoldStars;
    cardItem.innerHTML = "";
    if(countGoldStars != 0){
        for(let i = 0; i < countGoldStars; i++){
            cardItem.innerHTML += `<div class = "rating__star"><img src = "./src/img/stars/star-gold.svg"></div>`
        }
    }
    if(countGreyStars != 0){
        for(let i = 0; i < countGreyStars; i++){
            cardItem.innerHTML += `<div class = "rating__star"><img src = "./src/img/stars/star-grey.svg"></div>`
        }
    }
}

export {rating};