const menu = [
  {
    id: 1,
    title: "pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "lunch",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "breakfast",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg burger",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon burger",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `loreon it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut `,
  },
  {
    id: 9,
    title: "quarantine shake",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "stake dinner",
    category: "dinner",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

function createMenu() {
  const parentDiv = document.createElement("section");
  parentDiv.className = "menu";

  const btnContainer = document.createElement("div");
  btnContainer.setAttribute("class", "btn-container");
  const sectionContainer = document.createElement("div");
  sectionContainer.setAttribute("class", "section-center");

  parentDiv.appendChild(btnContainer);
  parentDiv.appendChild(sectionContainer);
  displayMenuItems(menu, sectionContainer);
  displayMenuButtons(btnContainer);
  return parentDiv;
}

function displayMenuItems(menuItems, section) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">\u20AC${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
}

function displayMenuButtons(container) {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"],
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
}

function filterCategory() {
  const filterBtn = document.querySelectorAll(".filter-btn");
  const sectionContainer = document.querySelector(".section-center");
  //filter items
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenuItems(menu, sectionContainer);
      } else {
        displayMenuItems(menuCategory, sectionContainer);
      }
    });
  });
}

function loadMenu() {
  // Close and clear other menus
  const homeMenu = document.getElementById("homeMenu");
  const contactMenu = document.getElementById("contactUsMenu");
  homeMenu.innerHTML = "";
  contactMenu.innerHTML = "";
  homeMenu.style.display = "none";
  contactMenu.style.display = "none";
  // open and clear this tab
  const menuTab = document.getElementById("menuMenu");
  menuTab.innerHTML = "";
  menuTab.style.display = "block";

  menuTab.appendChild(createMenu());
  filterCategory();
}

export default loadMenu;
