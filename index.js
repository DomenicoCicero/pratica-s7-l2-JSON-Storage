const localStorageKey = "name-save";
const sessionStorageKey = "time-save";

const form = document.querySelector("form");
const input = document.querySelector("input");
const saveBtn = document.querySelector("#save");
const removeBtn = document.querySelector("#remove");

const remove = () => {
  const storageElement = localStorage.getItem(localStorageKey);
  if (storageElement) {
    localStorage.removeItem(localStorageKey);
    const h3 = document.querySelector("h3");
    h3.remove();
  }
};

const showInputValue = () => {
  const divShow = document.querySelector(".show-input-value");
  const storageElement = localStorage.getItem(localStorageKey);
  if (storageElement) {
    divShow.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.innerText = storageElement;
    h3.classList.add("text-danger");
    h3.classList.add("text-decoration-underline");
    divShow.appendChild(h3);
  }
};

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputValue = input.value;
  localStorage.setItem(localStorageKey, inputValue);
  showInputValue();
  form.reset();
});

removeBtn.addEventListener("click", remove);

const divTimer = document.querySelector(".show-timer");
const h4 = document.querySelector("h4");
let counter = sessionStorage.getItem(sessionStorageKey) || 0;

const updateCounter = () => {
  counter++;
  h4.innerText = counter;
  sessionStorage.setItem(sessionStorageKey, counter);
};

setInterval(updateCounter, 1000);

window.onbeforeunload = () => {
  sessionStorage.setItem(sessionStorageKey, counter);
};

window.onload = () => {
  showInputValue();
};
