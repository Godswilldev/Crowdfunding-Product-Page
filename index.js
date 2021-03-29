let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let btn_primary = document.querySelector(".btn__primary");
let overlay = document.querySelector("#overlay");
let close_Modal = document.querySelector(".closeModal");
let projectModal = document.querySelector(".projectModal");
let pledge = document.querySelectorAll(".pledge");
let projectModal__pledges = document.querySelector(".projectModal__pledges");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
const openModal = () => {
  overlay.classList.remove("hidden");
  projectModal.classList.remove("hidden");
};
const closeModal = () => {
  overlay.classList.add("hidden");
  projectModal.classList.add("hidden");
};

btn_primary.addEventListener("click", openModal);
close_Modal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
///To remove the overlay when active
overlay.addEventListener("click", () => {
  navbar.classList.remove("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
});
