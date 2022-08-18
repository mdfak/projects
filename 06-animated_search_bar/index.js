const magnifierIconEl = document.querySelector(".magnifier");
const searchBarContainerEl = document.querySelector(".search-bar-container ");

magnifierIconEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});
