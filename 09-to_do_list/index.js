const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");

const checkEl = document.querySelector(".fa-square-check");
const removeEl = document.querySelector(".fa-trash-can");
const listEls = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

list.forEach((task) => {
  toDoList(task);
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;

  if (task) {
    newTask = task.name;
  }
  const liEl = document.createElement("li");

  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  listEls.appendChild(liEl);
  inputEl.value = "";

  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fa-regular fa-square-check"></i>`;
  liEl.appendChild(checkBtnEl);

  const removeBtnEl = document.createElement("div");
  removeBtnEl.innerHTML = `
  <i class="fa-regular fa-trash-can"></i>`;
  liEl.appendChild(removeBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  removeBtnEl.addEventListener("click", () => {
    // listEls.removeChild(liEl);
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
