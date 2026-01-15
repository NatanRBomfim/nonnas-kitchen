const btn = document.querySelector(".hamburguer");
const menu = document.querySelector(".nav-menu");

let menuOpen = false;

closeMenu();

function closeMenu() {
  btn.setAttribute("aria-expanded", menuOpen);
  menu.setAttribute("aria-hidden", !menuOpen);
  menu.classList.add("menu-closed");
}

function openMenu() {
  btn.setAttribute("aria-expanded", !menuOpen);
  menu.setAttribute("aria-hidden", menuOpen);
  menu.classList.remove("menu-closed");
  document.removeEventListener("click", closeMenu);
}

function toggleMenu() {
  let expanded = this.getAttribute("aria-expanded") === "true";

  document.removeEventListener("click", closeMenu);

  const novoEstado = !expanded;

  this.setAttribute("aria-expanded", String(novoEstado));
  menu.setAttribute("aria-hidden", String(!novoEstado));

  menu.classList.toggle("menu-closed", !novoEstado);

  setTimeout(() => document.addEventListener("click", closeMenu), 1);
}

btn.addEventListener("click", toggleMenu);

const mediaQuery = window.matchMedia("(min-width:64em)");

function HandleMediaQueryChange(e) {
  if (e.matches) {
    openMenu();
  } else {
    closeMenu();
  }
}

mediaQuery.addEventListener("change", HandleMediaQueryChange);
HandleMediaQueryChange(mediaQuery);
