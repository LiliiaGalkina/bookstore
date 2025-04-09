import { countMin } from "./category";

function makeBookCard(arr) {
	const bookCards = document.querySelector(".books__items");
    console.log(countMin);
    if(countMin == 0){
        bookCards.innerHTML = "";
    }
	
  for (let elem of arr) {
    let card = document.createElement("div");
    card.classList.add("books__card", "card-book");

    let cardImage = document.createElement("div");
    cardImage.classList.add("card-book__img");
    if(elem.volumeInfo.imageLinks.thumbnail){
        cardImage.innerHTML = `<img src="${elem.volumeInfo.imageLinks.thumbnail} alt="обложка книги">`;
    } else {
        cardImage.innerHTML = `<img src="${"../src/img/bookCards.jpg"} alt="обложка книги">`;
    }
    card.appendChild(cardImage);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-book__content");
    card.appendChild(cardContent);

    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-book__info");
    cardContent.appendChild(cardInfo);

	  if (elem.volumeInfo.authors) {
		  let cardBookAutor = document.createElement("div");
		 cardBookAutor.classList.add("card-book__autor");
		 cardBookAutor.innerHTML = elem.volumeInfo.authors;
		 cardInfo.appendChild(cardBookAutor);
	 }

    let cardBookTitle = document.createElement("h3");
    cardBookTitle.classList.add("card-book__title", "title-font");
    cardBookTitle.innerHTML = elem.volumeInfo.title;
    cardInfo.appendChild(cardBookTitle);

    if (elem.volumeInfo.averageRating && elem.volumeInfo.ratingsCount) {
      let cardBookRating = document.createElement("div");
      cardBookRating.classList.add("card-book__rating", "rating");
      cardInfo.appendChild(cardBookRating);

      let cardBookRatingStars = document.createElement("div");
      cardBookRatingStars.classList.add("rating__stars");
      cardBookRatingStars.innerHTML = elem.volumeInfo.averageRating;

      let cardBookRatingCount = document.createElement("div");
      cardBookRatingCount.classList.add("rating__text");
      cardBookRatingCount.innerHTML = elem.volumeInfo.ratingsCount + " review";
      cardBookRating.append(cardBookRatingStars, cardBookRatingCount);
    }

    if (elem.volumeInfo.description) {
      let cardBookDescription = document.createElement("div");
      cardBookDescription.classList.add("card-book__text");
      cardBookDescription.innerHTML = elem.volumeInfo.description;
      cardInfo.appendChild(cardBookDescription);
    }

    if (elem.saleInfo.saleability == "FOR_SALE") {
      let cardBookPrice = document.createElement("div");
      cardBookPrice.classList.add("card-book__price", "title-font");
      cardBookPrice.innerHTML = `${elem.saleInfo.retailPrice.currencyCode} ${elem.saleInfo.retailPrice.amount}`;
      cardInfo.appendChild(cardBookPrice);
    }

    let cardBookButton = document.createElement("button");
    cardBookButton.classList.add("card-book__button", "title-font");
    cardBookButton.innerHTML = "buy now";
    cardContent.appendChild(cardBookButton);

    bookCards.appendChild(card);
	}
}

export {makeBookCard}