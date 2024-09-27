const menuBar = document.getElementById("menu");
const openIcon = document.querySelector(".menu-icon");
const closeIcon = document.getElementById("closeIcon");
const show = document.getElementById("show");
const closeTag = document.getElementById("closeBtn");
const closeTag2 = document.getElementById("closeBtn2");

function openCart() {
  show.style.display = "flex";
}
closeTag.addEventListener("click", () => {
  show.style.display = "none";
});

closeTag2.addEventListener("click", () => {
  show.style.display = "none";
});

openIcon.addEventListener("click", () => {
  menuBar.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  menuBar.style.display = "none";
});

// / Array
const products = [
  {
    id: 1,
    img: "1.png",
    img2: "5.png",
    img3: "3.png",
    name: "smart watch",
    price: "Rs. 3,400",
  },

  {
    id: 2,
    img: "3.png",
    img2: "5.png",
    img3: "3.png",
    name: "airpod",
    price: "Rs. 2,440",
  },
  {
    id: 3,
    img: "4.png",
    img2: "5.png",
    img3: "3.png",
    name: "vape",
    price: "Rs. 5,800",
  },

  {
    id: 4,
    img: "5.png",
    img2: "3.png",
    img3: "4.png",
    name: "power banks",
    price: "Rs. 4,240",
  },

  {
    id: 5,
    img: "Square Smart Watch_ Your Ultimate Fitness and Lifestyle Companion.png",
    img2: "3.png",
    img3: "4.png",
    name: "watch",
    price: "Rs. 5,530",
  },
];

const displayItems = document.querySelectorAll(".products");
const productImage = document.querySelector("#product-image");
const productName = document.querySelector("#name");
const productPrice = document.querySelector("#price");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const whatsappSend = document.getElementById("whatsappSend");

let selectedItem = products[0];

displayItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectedItem = products[index];
    productName.textContent = selectedItem.name;
    productImage.src = selectedItem.img;
    productPrice.textContent = selectedItem.price;
  });
});

whatsappSend.href =
  "https://wa.me/923700089495?text=" +
  selectedItem.name +
  " " +
  selectedItem.price;

btn1.addEventListener("click", () => {
  productImage.src = selectedItem.img;
});

btn2.addEventListener("click", () => {
  productImage.src = selectedItem.img2;
});

btn3.addEventListener("click", () => {
  productImage.src = selectedItem.img3;
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});