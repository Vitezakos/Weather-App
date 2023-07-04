window.addEventListener("click", () => {
  const btn = document.querySelector("drop-down");
  btn.setAttribute("state", "closed");
});

const btn = document.querySelector("drop-down");
btn.addEventListener("citychanged", (event) => {
  const standardCard = document.querySelector("standard-card");
  standardCard.setAttribute("city", JSON.stringify(event.detail.message));
});
