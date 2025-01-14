const aboutImg = document.querySelector(".about-img>img");
setTimeout(start3D, 0);
setInterval(animation3D, 4000);
function animation3D() {
  // if (aboutImg.parentElement.className == "about-img") {
  //   aboutImg.className += "rotate";
  // } else {
  //   aboutImg.className = "about-img";
  // }
aboutImg.classList.toggle("rotate")
}
function start3D() {
  aboutImg.style.transform = "perspective(800px) rotateY(-25deg)";
}

const menu = document.querySelector(".custom-container-menu>.container>.row");
const headings = [
  "Eggplant Dolma",
  "Seafood Pasta",
  "Cinnamon Cookies",
  "Chicken Shish Kebab",
  "Mixed Pizza",
  "Chicken Levengi",
  "Hamburger",
  "Meatballs",
];
const paragraph = [
  "Chicken cooked in a rich, aromatic sauce typically made with onions, tomatoes, and various spices,resulting in a flavorful and comforting meal",

  "Seafood pasta dish, boasting a medley of fresh ocean delights, tossed with al dente pasta and bathed in a savory,aromatic sauce for a truly irresistible dining experience.",

  "Savor the warm, comforting flavor of homemade cinnamon cookies, delicately spiced and  perfectly baked to a golden perfection, offering a delightful blend of sweetness and spice in every bite.",

  "Marinated chicken threaded onto skewers and grilled to juicy perfection,offering a delightful fusion of flavors and textures.",

  "mixed pizza, where a medley of savory toppings harmonize atop a crispy crust, offering a burst of flavor in every slice, perfect for satisfying all your pizza cravings. ",

  "Mediterranean dish where tender eggplants are stuffed with a savory mixture of rice, herbs, and spices, creating a culinary delight that tantalizes the taste buds with each delicious bite.",

  " juicy beef patty nestled between soft buns, complemented by fresh lettuce, tomatoes, onions, and a tangy sauce, promising a satisfying burst of flavor with every bite.",

  "Blend of seasoned ground meat, breadcrumbs, and herbs, simmered in a savory sauce until tender and flavorful, offering a comforting and satisfying taste of home in every bite.",
];
for (let index = 0; index < headings.length; index++) {
  let divel = document.createElement("div");
  let img = document.createElement("img");
  let stars = document.createElement("div");
  let heading = document.createElement("a");
  let p = document.createElement("p");
  img.src = "images/item_" + (index + 1) + ".jpg";
  divel.className = "col-md-3 card m-3";
  stars.className = "stars";
  stars.innerHTML = getStars(4.5);
  heading.innerHTML = headings[index];
  p.innerHTML = paragraph[index];
  divel.appendChild(img);
  divel.appendChild(stars);
  divel.appendChild(heading);
  divel.appendChild(p);
  menu.appendChild(divel);
}

function getStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5;
  for (let index = 0; index < fullStars; index++) {
    stars += `
  <i class="fa-solid fa-star text-warning"></i>`;
  }
  if (halfStars) {
    stars += `<i class="fa-solid fa-star-half-alt text-warning ms-1"></i>`;
  }
  return stars;
}
const teamMembers = [
  "Ehmed Huseynov",
  "Danilo Zanna",
  "Sadiq Humbetli",
  "Ramiz Quluzade",
];
const roles = ["Main Chef", "Grill Chef", "Sous Chef", "Fish Chef"];
const team = document.querySelector(".custom-container-team>.container>.row");
for (let index = 0; index < teamMembers.length; index++) {
  let divel = document.createElement("div");
  let img = document.createElement("img");
  let heading = document.createElement("h5");
  let role = document.createElement("p");

  if (index == 3) {
    img.src = "images/team_01.png";
  } else {
    img.src = "images/team_0" + (index + 1) + ".png";
  }
  divel.className = "col-2 card m-3";
  heading.innerHTML = teamMembers[index];
  role.innerHTML = roles[index];
  divel.appendChild(img);
  divel.appendChild(heading);
  divel.appendChild(role);
  team.appendChild(divel);
}
