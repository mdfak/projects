const btnEl = document.querySelector(".btn");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");
const inputEl = document.getElementById("input");

btnEl.addEventListener("click", () => {
  createPassword();
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLenght = 14;
  let password = "";
  for (let index = 0; index < passwordLenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, password); // w taki sposób działa, że obcina czesc chars
  }
  inputEl.value = password;
}

copyEl.addEventListener("click", function () {
  if (inputEl.value) {
    inputEl.select(); //zaznaczenie dla desktop
    inputEl.setSelectionRange(0, 9999); //zaznaczenie dla mobile
    navigator.clipboard.writeText(inputEl.value); //kopiowanie do clipboard !!!!!!!!!!!!!!
    alertEl.classList.add("active");
    setTimeout(removeClass, 2000);
  }
});

function removeClass() {
  alertEl.classList.remove("active");
}
