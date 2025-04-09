function rating(numRating, cardItem) {
    let countGoldStars = Math.floor(numRating);
    let countGreyStars = 5 - countGoldStars;
    cardItem.innerHTML = "";
    if(countGoldStars != 0){
        for(let i = 0; i < countGoldStars; i++){
            cardItem.innerHTML += `<div class = "rating__star"><img src = "./src/img/stars/star-gold.svg"></div>`
        }
	}
	if (numRating % 1 != 0) {
		countGreyStars -= 1;
		let percent = (numRating % 1) * 100;
		 cardItem.innerHTML += `<div class = "rating__star"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" id = "twoColorsStar" >
		<linearGradient id="linear-gradient">
		<stop offset="${percent}%" stop-color="#F2C94C"/>
		<stop offset="${percent}%" stop-color="#EEEDF5" id = "secondColor"/>
		</linearGradient>
		<path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="url(#linear-gradient)"/>
		</svg></div>`;
		
	}
   if(countGreyStars != 0){
      for(let i = 0; i < countGreyStars; i++){
         cardItem.innerHTML += `<div class = "rating__star"><img src = "./src/img/stars/star-grey.svg"></div>`;
			}
		}
}

export {rating};