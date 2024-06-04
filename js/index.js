const card = document.querySelectorAll(".card");

async function getProjects() {
  card.forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = card.getAttribute("href");
    });
  });
}
getProjects();
