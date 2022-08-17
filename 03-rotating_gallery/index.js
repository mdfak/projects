const imageContainerEl = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;
let timer;

prevBtn.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  rotateGallery();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  rotateGallery();
});

function rotateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    rotateGallery();
  }, 3000);
}

rotateGallery();
