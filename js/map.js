const contactsLink = document.querySelector(".info").querySelector(".contacts__link");
const mapModal = document.querySelector(".map-modal");
const mapCloseBtn = mapModal.querySelector(".map__close-btn");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
  mapModal.classList.remove("modal-error");
});

mapCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
  mapModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
      mapModal.classList.remove("modal-error");
    }
  }
});
