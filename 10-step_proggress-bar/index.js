const leftBtnEl = document.querySelector(".fa-left-long");
const rightBtnEl = document.querySelector(".fa-right-long");

rightBtnEl.addEventListener("click", () => {
  const lineEl = document.querySelector(".line");
  lineEl.classList.add("active");
  const xmarkEl = document.querySelector(".fa-circle-xmark");
  xmarkEl.classList.add("active");
});

leftBtnEl.addEventListener("click", () => {
  const lineEl = document.querySelector(".line");
  lineEl.classList.remove("active");
  const xmarkEl = document.querySelector(".fa-circle-xmark");
  xmarkEl.classList.remove("active");
});
