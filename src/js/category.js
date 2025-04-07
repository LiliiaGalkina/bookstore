
function makeBookCard(arr) {
	let bookCards = document.querySelector(".books__items");
  for (let elem of arr) {
    let card = document.createElement("div");
    card.classList.add("books__card", "card-book");

    let cardImage = document.createElement("div");
    cardImage.classList.add("card-book__img");
    cardImage.innerHTML = `<img src="${elem.volumeInfo.imageLinks.thumbnail} alt="обложка книги">`;
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

async function getBooks(category) {
  const key = "AIzaSyB00TE1mq6z511Ag795Cn4uy4RwyZ_3Cq0";
  const URL = `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${key}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      alert("неудачная попытка");
      throw new Error("Upload failed");
    }
    const data = await res.json();
    makeBookCard(data.items);
  } catch (error) {
    console.error("Error: " + error.message);
  }
}

function initCategory() {
  const categories = document.querySelectorAll(".category__item");

  let currentCategory = "";
  for (let category of categories) {
    category.addEventListener("click", () => {
      for (let cat of categories) {
        if (cat.classList.contains("category__item_active")) {
          cat.classList.remove("category__item_active");
        }
      }
      category.classList.add("category__item_active");
		 currentCategory = category.dataset.name;
      getBooks(currentCategory);
    });
  }
}

export { initCategory };
