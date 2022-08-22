const rightBtnEl = document.querySelector(".btn-right");
const leftBtnEl = document.querySelector(".btn-left");
const stepsEl = document.querySelectorAll(".step");
const frontLineEl = document.querySelector(".line-front");

let currentChecked = 1;

rightBtnEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  updateStepProgress();
});

leftBtnEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("start");
      stepEl.childNodes[1].classList.add("checked");
      stepEl.innerHTML = ` <i class="fa-regular fa-circle-check checked"></i>
        <small>${
          idx === 0
            ? "Start"
            : idx === stepsEl.length - 1
            ? "Final"
            : "Step " + idx
        }</small>`;
    } else {
      stepEl.childNodes[1].classList.remove("checked");
      stepEl.innerHTML = ` <i class="fa-regular fa-circle-xmark"></i>   
            `;
    }
  });

  frontLineEl.style.width =
    ((currentChecked - 1) / (stepsEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    leftBtnEl.disabled = true;
  } else if (currentChecked === stepsEl.length) {
    rightBtnEl.disabled = true;
  } else {
    leftBtnEl.disabled = false;
    rightBtnEl.disabled = false;
  }
}
