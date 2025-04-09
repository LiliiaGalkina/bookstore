const slides = [
   "src/img/banner1.png",
   "./src/img/banner2.png",
   "/src/img/banner3.png",
];


function initSlider() {
	if (!slides || !slides.length) return;
	let sliderImage = document.querySelector(".slider__items");
	let sliderDots = document.querySelector(".slider__dots");

	initImages();
	initDots();
	initAutoplay();


	function initImages() {
		slides.forEach((image, index) => {
			let sliderImageItem = `<div class = "slider__item n${index} ${index === 0 ? "slider__item_active" : ""
				}" data-index="${index}"><img src = "${slides[index]
				}" alt = "banner"></div>`;
			sliderImage.innerHTML += sliderImageItem;
		});
	}


	   function initDots() {
		   slides.forEach((image, index) => {
			   let dot = `<div class="slider__dot n${index} ${index === 0 ? "slider__dot_active" : ""}" data-index="${index}"></div>`;
			   sliderDots.innerHTML += dot;
		   });
			sliderDots.querySelectorAll(".slider__dot").forEach((dot) => {
				dot.addEventListener("click", function () {
					console.log(this.dataset.index);
					moveSlider(this.dataset.index);
				});
			});
      }

		function moveSlider(num) {
			sliderImage.querySelector(".slider__item_active").classList.remove("slider__item_active");
			sliderImage.querySelector(".n" + num).classList.add("slider__item_active");
			sliderDots.querySelector(".slider__dot_active").classList.remove("slider__dot_active");
			sliderDots.querySelector(".n" + num).classList.add("slider__dot_active");
		}

	function initAutoplay() {
      setInterval(() => {
			let curNumber = +sliderImage.querySelector(".slider__item_active").dataset.index;
			let nextNumber = curNumber === slides.length - 1? 0 : curNumber + 1;
			moveSlider(nextNumber);
      }, 5000);
   }
}

export { initSlider };

