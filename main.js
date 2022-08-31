/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\ninitalLoad();\r\n\r\nfunction initalLoad() {\r\n  (0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  const homeTab = document.getElementById(\"home-tab\");\r\n  homeTab.addEventListener(\"click\", _modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n  const menuTab = document.getElementById(\"menu-tab\");\r\n  menuTab.addEventListener(\"click\", _modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n  const contactTab = document.getElementById(\"contact-tab\");\r\n  contactTab.addEventListener(\"click\", _modules_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactCopy() {\r\n  const copyTextDiv = document.createElement(\"div\");\r\n  copyTextDiv.setAttribute(\"id\", \"contact-copy-div\");\r\n  copyTextDiv.setAttribute(\"class\", \"fade-in-right\");\r\n\r\n  const contactUsHeading = document.createElement(\"h1\");\r\n  contactUsHeading.textContent = \"Find Us Here\";\r\n  contactUsHeading.setAttribute(\"id\", \"contact-us-heading\");\r\n  const days = document.createElement(\"p\");\r\n  const hours = document.createElement(\"p\");\r\n  const address = document.createElement(\"p\");\r\n  days.setAttribute(\"id\", \"days\");\r\n  hours.setAttribute(\"id\", \"hours\");\r\n  address.setAttribute(\"id\", \"address\");\r\n  days.textContent = \"Monday - Sunday\";\r\n  hours.textContent = \"9am - 5pm\";\r\n  address.textContent = \"IV Kraljevacki Bataljon, Kraljevo\";\r\n\r\n  copyTextDiv.appendChild(contactUsHeading);\r\n  copyTextDiv.appendChild(days);\r\n  copyTextDiv.appendChild(hours);\r\n  copyTextDiv.appendChild(address);\r\n\r\n  return copyTextDiv;\r\n}\r\n\r\nfunction addImage() {\r\n  const contactUsImg = document.createElement(\"img\");\r\n  contactUsImg.setAttribute(\"id\", \"contact-img\");\r\n  contactUsImg.src = \"../dist/images/location.png\";\r\n\r\n  return contactUsImg;\r\n}\r\n\r\nfunction loadContact() {\r\n  // Close and clear other menus\r\n  const homeMenu = document.getElementById(\"homeMenu\");\r\n  const menuMenu = document.getElementById(\"menuMenu\");\r\n  homeMenu.innerHTML = \"\";\r\n  menuMenu.innerHTML = \"\";\r\n  homeMenu.style.display = \"none\";\r\n  menuMenu.style.display = \"none\";\r\n  // open and clear this tab\r\n  const contactUsTab = document.getElementById(\"contactUsMenu\");\r\n  contactUsTab.innerHTML = \"\";\r\n  contactUsTab.style.display = \"flex\";\r\n  // Add page attributes\r\n  const textBox = createContactCopy();\r\n  contactUsTab.appendChild(textBox);\r\n\r\n  const locationImg = addImage();\r\n  locationImg.setAttribute(\"id\", \"bar-img\");\r\n  contactUsTab.appendChild(locationImg);\r\n\r\n  const mobileImg = document.createElement(\"img\");\r\n  mobileImg.setAttribute(\"id\", \"mobile-img\");\r\n  mobileImg.src = \"../dist/images/location.png\";\r\n\r\n  contactUsTab.appendChild(mobileImg);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTextDiv(id) {\r\n  const homeMenuText = document.createElement(\"div\");\r\n  homeMenuText.setAttribute(\"id\", id);\r\n  return homeMenuText;\r\n}\r\n\r\nfunction createHomePageHeading(id) {\r\n  const headingDiv = document.createElement(\"div\");\r\n  headingDiv.className = \"heading-div\";\r\n\r\n  const heading = document.createElement(\"h2\");\r\n  heading.setAttribute(\"id\", id);\r\n  heading.setAttribute(\"class\", \"heading\");\r\n\r\n  const niceUnderline = document.createElement(\"span\");\r\n  niceUnderline.className = \"underline--magical\";\r\n  niceUnderline.textContent = \"Sweet Donuts\";\r\n\r\n  headingDiv.appendChild(heading);\r\n  headingDiv.appendChild(niceUnderline);\r\n\r\n  return headingDiv;\r\n}\r\n\r\nfunction createCopyContent(id) {\r\n  const copy = document.createElement(\"p\");\r\n  copy.setAttribute(\"id\", id);\r\n  copy.textContent =\r\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. \" +\r\n    \"Nulla mollis leo dui, et volutpat nulla ultrices ac. Ut venenatis quis felis aliquam porta. \" +\r\n    \"Morbi eu vulputate nulla. Mauris pulvinar, urna id rhoncus tempor, enim mauris porta mi, eget \";\r\n  (\"dignissim neque magna in arcu. Curabitur convallis nunc ac sollicitudin consectetur.\");\r\n  return copy;\r\n}\r\n\r\nfunction addImagesToHome(className) {\r\n  const imgDiv = document.createElement(\"div\");\r\n  imgDiv.setAttribute(\"class\", \"images\");\r\n\r\n  const imgOne = document.createElement(\"img\");\r\n\r\n  imgOne.setAttribute(\"class\", className);\r\n  imgOne.setAttribute(\"id\", \"images\");\r\n\r\n  imgOne.src = \"../dist/images/homeImage.jpg\";\r\n\r\n  imgDiv.appendChild(imgOne);\r\n\r\n  return imgDiv;\r\n}\r\n\r\nfunction addReservationButton(className) {\r\n  const reservationButton = document.createElement(\"button\");\r\n  reservationButton.className = className;\r\n  reservationButton.innerHTML = \"Make a Reservation\";\r\n  reservationButton.id = \"reservation-button\";\r\n  return reservationButton;\r\n}\r\n\r\nfunction loadHome() {\r\n  // Close and clear other menus\r\n  const menuMenu = document.getElementById(\"menuMenu\");\r\n  const contactMenu = document.getElementById(\"contactUsMenu\");\r\n  menuMenu.innerHTML = \"\";\r\n  contactMenu.innerHTML = \"\";\r\n  menuMenu.style.display = \"none\";\r\n  contactMenu.style.display = \"none\";\r\n\r\n  // open and clear this tab\r\n  const openTab = document.getElementById(\"homeMenu\");\r\n  openTab.innerHTML = \"\";\r\n  openTab.style.display = \"flex\";\r\n\r\n  const textDiv = createTextDiv(\"home-text-box\");\r\n  const copy = createCopyContent(\"home-copy\");\r\n  const heading = createHomePageHeading(\"home-heading\");\r\n  const imgs = addImagesToHome(\"home-img\");\r\n  const button = addReservationButton(\"reservation\");\r\n\r\n  textDiv.appendChild(heading);\r\n  textDiv.appendChild(copy);\r\n  textDiv.appendChild(button);\r\n  openTab.appendChild(imgs);\r\n  openTab.appendChild(textDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = [\r\n  {\r\n    id: 1,\r\n    title: \"pancakes\",\r\n    category: \"breakfast\",\r\n    price: 15.99,\r\n    img: \"./images/item-1.jpeg\",\r\n    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,\r\n  },\r\n  {\r\n    id: 2,\r\n    title: \"lunch\",\r\n    category: \"lunch\",\r\n    price: 13.99,\r\n    img: \"./images/item-2.jpeg\",\r\n    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,\r\n  },\r\n  {\r\n    id: 3,\r\n    title: \"milkshake\",\r\n    category: \"shakes\",\r\n    price: 6.99,\r\n    img: \"./images/item-3.jpeg\",\r\n    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,\r\n  },\r\n  {\r\n    id: 4,\r\n    title: \"breakfast\",\r\n    category: \"breakfast\",\r\n    price: 20.99,\r\n    img: \"./images/item-4.jpeg\",\r\n    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,\r\n  },\r\n  {\r\n    id: 5,\r\n    title: \"egg burger\",\r\n    category: \"lunch\",\r\n    price: 22.99,\r\n    img: \"./images/item-5.jpeg\",\r\n    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,\r\n  },\r\n  {\r\n    id: 6,\r\n    title: \"oreo dream\",\r\n    category: \"shakes\",\r\n    price: 18.99,\r\n    img: \"./images/item-6.jpeg\",\r\n    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,\r\n  },\r\n  {\r\n    id: 7,\r\n    title: \"bacon burger\",\r\n    category: \"breakfast\",\r\n    price: 8.99,\r\n    img: \"./images/item-7.jpeg\",\r\n    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,\r\n  },\r\n  {\r\n    id: 8,\r\n    title: \"american classic\",\r\n    category: \"lunch\",\r\n    price: 12.99,\r\n    img: \"./images/item-8.jpeg\",\r\n    desc: `loreon it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut `,\r\n  },\r\n  {\r\n    id: 9,\r\n    title: \"quarantine shake\",\r\n    category: \"shakes\",\r\n    price: 16.99,\r\n    img: \"./images/item-9.jpeg\",\r\n    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,\r\n  },\r\n  {\r\n    id: 10,\r\n    title: \"stake dinner\",\r\n    category: \"dinner\",\r\n    price: 36.99,\r\n    img: \"./images/item-10.jpeg\",\r\n    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,\r\n  },\r\n];\r\n\r\nfunction createMenu() {\r\n  const parentDiv = document.createElement(\"section\");\r\n  parentDiv.className = \"menu\";\r\n\r\n  const btnContainer = document.createElement(\"div\");\r\n  btnContainer.setAttribute(\"class\", \"btn-container\");\r\n  const sectionContainer = document.createElement(\"div\");\r\n  sectionContainer.setAttribute(\"class\", \"section-center\");\r\n\r\n  parentDiv.appendChild(btnContainer);\r\n  parentDiv.appendChild(sectionContainer);\r\n  displayMenuItems(menu, sectionContainer);\r\n  displayMenuButtons(btnContainer);\r\n  return parentDiv;\r\n}\r\n\r\nfunction displayMenuItems(menuItems, section) {\r\n  let displayMenu = menuItems.map(function (item) {\r\n    return `<article class=\"menu-item\">\r\n          <img src=${item.img} alt=${item.title} class=\"photo\" />\r\n          <div class=\"item-info\">\r\n            <header>\r\n              <h4>${item.title}</h4>\r\n              <h4 class=\"price\">\\u20AC${item.price}</h4>\r\n            </header>\r\n            <p class=\"item-text\">\r\n              ${item.desc}\r\n            </p>\r\n          </div>\r\n        </article>`;\r\n  });\r\n  displayMenu = displayMenu.join(\"\");\r\n  section.innerHTML = displayMenu;\r\n}\r\n\r\nfunction displayMenuButtons(container) {\r\n  const categories = menu.reduce(\r\n    function (values, item) {\r\n      if (!values.includes(item.category)) {\r\n        values.push(item.category);\r\n      }\r\n      return values;\r\n    },\r\n    [\"all\"],\r\n  );\r\n\r\n  const categoryBtns = categories\r\n    .map(function (category) {\r\n      return `<button type=\"button\" class=\"filter-btn\" data-id=${category}>${category}</button>`;\r\n    })\r\n    .join(\"\");\r\n  container.innerHTML = categoryBtns;\r\n}\r\n\r\nfunction filterCategory() {\r\n  const filterBtn = document.querySelectorAll(\".filter-btn\");\r\n  const sectionContainer = document.querySelector(\".section-center\");\r\n  //filter items\r\n  filterBtn.forEach(function (btn) {\r\n    btn.addEventListener(\"click\", function (e) {\r\n      const category = e.currentTarget.dataset.id;\r\n      const menuCategory = menu.filter(function (menuItem) {\r\n        if (menuItem.category === category) {\r\n          return menuItem;\r\n        }\r\n      });\r\n\r\n      if (category === \"all\") {\r\n        displayMenuItems(menu, sectionContainer);\r\n      } else {\r\n        displayMenuItems(menuCategory, sectionContainer);\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction loadMenu() {\r\n  // Close and clear other menus\r\n  const homeMenu = document.getElementById(\"homeMenu\");\r\n  const contactMenu = document.getElementById(\"contactUsMenu\");\r\n  homeMenu.innerHTML = \"\";\r\n  contactMenu.innerHTML = \"\";\r\n  homeMenu.style.display = \"none\";\r\n  contactMenu.style.display = \"none\";\r\n  // open and clear this tab\r\n  const menuTab = document.getElementById(\"menuMenu\");\r\n  menuTab.innerHTML = \"\";\r\n  menuTab.style.display = \"block\";\r\n\r\n  menuTab.appendChild(createMenu());\r\n  filterCategory();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id) {\r\n  const header = document.createElement(\"header\");\r\n  header.setAttribute(\"id\", id);\r\n\r\n  const logo = document.createElement(\"img\");\r\n  logo.setAttribute(\"id\", \"logo\");\r\n  logo.src = \"../dist/images/logo1.png\";\r\n  header.appendChild(logo);\r\n\r\n  return header;\r\n}\r\n\r\nfunction createNavRadio(id, text) {\r\n  // input\r\n  const tab = document.createElement(\"input\");\r\n  tab.type = \"radio\";\r\n  tab.checked = true;\r\n  tab.name = \"tabs\";\r\n  tab.setAttribute(\"id\", id);\r\n  tab.textContent = text;\r\n  return tab;\r\n}\r\n\r\nfunction createLabel(id, text) {\r\n  const label = document.createElement(\"label\");\r\n  label.setAttribute(\"for\", id);\r\n  label.innerText = text;\r\n  return label;\r\n}\r\n\r\nfunction createMenuDiv(className, id) {\r\n  const menuDiv = document.createElement(\"div\");\r\n  menuDiv.setAttribute(\"id\", id);\r\n  menuDiv.setAttribute(\"class\", className);\r\n  const menuHeading = document.createElement(\"h3\");\r\n  menuDiv.appendChild(menuHeading);\r\n\r\n  return menuDiv;\r\n}\r\n\r\nfunction createNavAndMenus(className) {\r\n  const nav = document.createElement(\"div\");\r\n  nav.setAttribute(\"class\", className);\r\n\r\n  const homeLink = createNavRadio(\"home\", \"Home\");\r\n  const menuLink = createNavRadio(\"menu\", \"Menu\");\r\n  const contactUsLink = createNavRadio(\"contact-us\", \"Contact Us\");\r\n\r\n  const homeLabel = createLabel(\"home\", \"Home\");\r\n  homeLabel.id = \"home-tab\";\r\n  const menuLabel = createLabel(\"menu\", \"Menu\");\r\n  menuLabel.id = \"menu-tab\";\r\n  const contactUsLabel = createLabel(\"contact-us\", \"Contact Us\");\r\n  contactUsLabel.id = \"contact-tab\";\r\n\r\n  const homeMenu = createMenuDiv(\"tab\", \"homeMenu\");\r\n  const menuMenu = createMenuDiv(\"tab\", \"menuMenu\");\r\n  const contactUsMenu = createMenuDiv(\"tab\", \"contactUsMenu\");\r\n\r\n  nav.appendChild(homeLink);\r\n  nav.appendChild(homeLabel);\r\n  nav.appendChild(homeMenu);\r\n\r\n  nav.appendChild(menuLink);\r\n  nav.appendChild(menuLabel);\r\n  nav.appendChild(menuMenu);\r\n\r\n  nav.appendChild(contactUsLink);\r\n  nav.appendChild(contactUsLabel);\r\n  nav.appendChild(contactUsMenu);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction createFooter(id) {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.setAttribute(\"id\", id);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction pageLoad() {\r\n  const content = document.querySelector(\".content\");\r\n  //header & nav\r\n  const header = createHeader(\"header\");\r\n  const navBar = createNavAndMenus(\"tabs\");\r\n  header.appendChild(navBar);\r\n  content.appendChild(header);\r\n  //footer\r\n  const footer = createFooter(\"footer\");\r\n  content.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;