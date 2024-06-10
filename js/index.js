document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const href = card.getAttribute("href");
      if (href) {
        window.location.href = href;
      }
    });
  });
});

document.getElementById("header").addEventListener("click", function () {
  window.history.back();
});
