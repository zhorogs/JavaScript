'use strict';

//Define consts and select HTML elements;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//Define openModal function;
const openModal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

//Define closeModal function;
const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

//A For loop to loop throught the 3 HTML modals and adding eventListener on them, followed by eventHandler openModal to open the modal on click.
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
};

//Close modal when clicking on X or Overlay;
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Close modal with Esc key;
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});