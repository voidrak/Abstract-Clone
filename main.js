const header = document.querySelector("header");
const headerContainer = document.querySelector("header .container ");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const searchBtnAdd = document.querySelector(".search  ");
const searchHidden = document.querySelector(".search-hidden");
const searchBtnRemove = document.querySelector(".search-hidden i ");

hamburgerBtn.addEventListener("click", () => {
  header.classList.toggle("clicked");
});
searchBtnAdd.addEventListener("click", () => {
  headerContainer.style.display = "none";
  searchHidden.style.display = "flex";
  console.log("clic");
});
searchBtnRemove.addEventListener("click", () => {
  headerContainer.style.display = "flex";
  searchHidden.style.display = "none";
});
