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
			console.log (currentCategory);
		})
		
	}
}

export { initCategory }


