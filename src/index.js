import pageLoad from "./modules/page-load";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

initalLoad();

function initalLoad() {
  pageLoad();
  loadHome();

  const homeTab = document.getElementById("home-tab");
  homeTab.addEventListener("click", loadHome);

  const menuTab = document.getElementById("menu-tab");
  menuTab.addEventListener("click", loadMenu);

  const contactTab = document.getElementById("contact-tab");
  contactTab.addEventListener("click", loadContact);
}
