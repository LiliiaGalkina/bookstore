function shoppingbagInit() {
    let shoppingbag = document.querySelector(".shoppingbag-count");
    let booksCount = localStorage.getItem("booksCount");
    if(!booksCount){
        booksCount = 0;
    } else {
        shoppingbag.textContent = booksCount;
        shoppingbag.style.display = "flex";
    }
}

function buttonBuysCount(){
    let shoppingbag = document.querySelector(".shoppingbag-count");
    let shoppingbagCount = shoppingbag.textContent;
  
    if(this.dataset.buy == 0){
        shoppingbagCount = +shoppingbagCount + 1;
        this.dataset.buy = 1;
        console.log(shoppingbagCount);
    } else {
        shoppingbagCount -= 1;
        this.dataset.buy = 0;
    }
    shoppingbag.textContent = shoppingbagCount;
    localStorage.setItem("booksCount", shoppingbagCount);

}

export { shoppingbagInit, buttonBuysCount};
