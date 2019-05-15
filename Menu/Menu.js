const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
};
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
menu.children[0].addEventListener("mouseover", event => {
  event.target.style.cursor = "pointer";
  event.target.style.backgroundColor = "#69ad6c";
});
menu.children[0].addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "#81C784";
});
