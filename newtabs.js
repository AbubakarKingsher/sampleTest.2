const menuBar = document.getElementById("menu");
const openIcon = document.querySelector(".menu-icon");
const closeIcon = document.getElementById("closeIcon");

openIcon.addEventListener("click", () => {
  menuBar.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  menuBar.style.display = "none";
});
