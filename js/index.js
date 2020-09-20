const input = document.querySelector(".nav__input input");
const placeholder = document.querySelector(".nav__input-placeholder");
const title = document.querySelector("header");
const card = document.querySelectorAll(".card");
const angle = document.querySelector(".nav__icons .fa-angle-down");
const menu = document.querySelector(".menu");

function addClass() {
  placeholder.classList.add("nav__input-display");
}

function removeClass() {
  placeholder.classList.remove("nav__input-display");
}

function pushSubject() {
  let subject = [
    "buisness",
    "food",
    "social",
    "IT",
    "travel",
    "sport",
    "beauty",
    "history",
    "art",
    "tech",
    "environment",
    "sport",
    "travel",
    "social",
    "design",
    "world",
    "culture",
    "food",
    "shop",
    "politic",
    "economy",
  ];
  return subject;
}

function createSaveBar() {
  let sub = pushSubject();
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseenter", () => {
      let container = document.createElement("div");
      let bar = document.createElement("div");
      let save = document.createElement("div");
      let pin = document.createElement("div");
      container.append(bar);
      container.append(save);
      card[i].appendChild(container);
      card[i].appendChild(pin);
      pin.classList.add("pin");
      container.classList.add("save-bar");
      bar.classList.add("theme");
      save.classList.add("save");
      bar.textContent = sub[i];
      save.textContent = "save";
      pin.innerHTML = '<i class="fas fa-thumbtack fa-lg"></i>';
    });
  }
}

function removeSaveBar() {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseleave", () => {
      let container = card[i].querySelector(".save-bar");
      let pin = card[i].querySelector(".pin");
      container.remove();
      pin.remove();
    });
  }
}

function openMenu() {
  menu.classList.toggle("visible");
}

function init() {
  input.addEventListener("focus", addClass);
  input.addEventListener("blur", removeClass);
  angle.addEventListener("click", openMenu);
  createSaveBar();
  removeSaveBar();
}

init();
