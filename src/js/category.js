import { makeBookCard } from "./makeBookCard";

let countMin;
let currentCategory;
let buttonMore = document.querySelector(".books__button");
const categories = document.querySelectorAll(".category__item");

async function getBooks(category) {
  const key = "AIzaSyB00TE1mq6z511Ag795Cn4uy4RwyZ_3Cq0";
  const URL = `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${key}&printType=books&startIndex=${countMin}&maxResults=6&langRestrict=en`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      alert("неудачная попытка");
      throw new Error("Upload failed");
    }
    const data = await res.json();
    makeBookCard(data.items);
    buttonMore.classList.remove("books__button_hidden");
	buttonMore.classList.add("books__button_show");
  } catch (error) {
    console.error("Error: " + error.message);
  }
}

function initCategory() {
  
  countMin = 0;
  currentCategory = "";

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


for(let category of categories){
    category.addEventListener("click", initCategory);
}

function getBooksMore(){
    countMin += 6;
    getBooks(currentCategory);
}


buttonMore.addEventListener("click", getBooksMore)

export { countMin, initCategory, getBooks };