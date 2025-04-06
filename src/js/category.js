function initCategory() {
	const categories = document.querySelectorAll(".category__item");

	let currentCategory = "";
	for (let category of categories) {
		category.addEventListener("click", () => {
				console.log(category);
			for (let cat of categories) {
			
				if (cat.classList.contains("category__item_active")) {
					cat.classList.remove("category__item_active");
				}
			}
			category.classList.add("category__item_active");
			currentCategory = category.textContent;
			return currentCategory;
		})
		
	}
}

export { initCategory }


