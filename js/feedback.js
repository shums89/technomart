const contactsBtn = document.querySelector(".contacts__btn");
const feedbackModal = document.querySelector(".feedback-modal");
const feedbackCloseBtn = feedbackModal.querySelector(".feedback__close-btn");
const feedbackForm = feedbackModal.querySelector(".feedback__form");
const feedbackFormName = feedbackForm.querySelector("input[name=name]");
const feedbackFormEmail = feedbackForm.querySelector("input[name=email]");
const feedbackFormText = feedbackForm.querySelector("textarea[name=text]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let storageText = "";

try {
  storageName = localStorage.getItem("feedback-name");
  storageEmail = localStorage.getItem("feedback-email");
  storageText = localStorage.getItem("feedback-text");
} catch (err) {
  isStorageSupport = false;
}

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-show");
  feedbackModal.classList.remove("modal-error");

  feedbackFormName.focus();
  if (storageName) {
    feedbackFormName.value = storageName;
    feedbackFormEmail.focus();
  }
  if (storageEmail) {
    feedbackFormEmail.value = storageEmail;
    feedbackFormText.focus();
  }
  if (storageText) {
    feedbackFormText.value = storageText;
    feedbackFormText.focus();
  }
});

feedbackCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackFormName.value || !feedbackFormEmail.value || !feedbackFormText.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedback-name", feedbackFormName.value);
      localStorage.setItem("feedback-email", feedbackFormEmail.value);
      localStorage.setItem("feedback-text", feedbackFormText.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (feedbackModal.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});
