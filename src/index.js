window.addEventListener("click", () => {
  const btn = document.querySelector("drop-down");
  btn.setAttribute("state", "closed");
});

const btn = document.querySelector("drop-down");
btn.addEventListener("citychanged", (event) => {
  const standardCard = document.querySelector("standard-card");
  standardCard.setAttribute("city", JSON.stringify(event.detail.message));
  const complexCard = document.querySelector("complex-card");
  complexCard.setAttribute("city", JSON.stringify(event.detail.message));
  const dayCards = document.querySelector("day-cards");
  dayCards.setAttribute("city", JSON.stringify(event.detail.message));
});
