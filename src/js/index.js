//Стили
import "../scss/reset.scss";
import "../scss/general-style.scss";
import "../scss/header.scss";
import "../scss/slider.scss";
import "../scss/books.scss";

//JS
//header
import {burger,  mobileMenu } from "./header";
burger.addEventListener("click", mobileMenu);


//slider
import { initSlider } from "./slider.js";

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
})