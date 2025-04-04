export const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

export const mobileMenu = () => {
  burger.classList.toggle("header__burger_active");
  menu.classList.toggle("header__menu-list_active");
};
