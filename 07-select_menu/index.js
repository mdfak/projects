const selectContainerEl = document.querySelector(".select-container");
const selectContainerTextEl = document.querySelector(".select-container span");
const menuContainerEl = document.querySelector(".menu-container");
const arrowIconEl = document.querySelector(".arrow-icon");
const brandEls = document.querySelectorAll(".brand");

selectContainerEl.addEventListener("click", () => {
  menuContainerEl.classList.toggle("active");
  arrowIconEl.classList.toggle("rotate");
});

brandEls.forEach((brandEl) => {
  brandEl.addEventListener("click", () => {
    selectContainerTextEl.innerHTML = brandEl.innerHTML;
    menuContainerEl.classList.toggle("active");
    arrowIconEl.classList.toggle("rotate");
  });
});
