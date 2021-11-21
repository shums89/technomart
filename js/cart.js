const productItemBuy = document.querySelectorAll(".product-item__buy");
const cartModal = document.querySelector(".cart-modal");
const cartCloseBtn = cartModal.querySelector(".cart__close-btn");
const cartContinueShoppingBtn = cartModal.querySelector(".cart__continue-shopping-btn");
const cartCheckoutLink = cartModal.querySelector(".cart__checkout-link");

productItemBuy.forEach(item => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModal.classList.add("modal-show");
    cartModal.classList.remove("modal-error");
  });
});

cartCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show");
  cartModal.classList.remove("modal-error");
});

cartContinueShoppingBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show");
  cartModal.classList.remove("modal-error");
});

cartCheckoutLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show");
  cartModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (cartModal.classList.contains("modal-show")) {
      evt.preventDefault();
      cartModal.classList.remove("modal-show");
      cartModal.classList.remove("modal-error");
    }
  }
});
