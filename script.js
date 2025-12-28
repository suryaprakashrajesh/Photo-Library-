/* =========================
   HERO SLIDER
========================= */
const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);

/* =========================
   KEYWORD SHORTLIST / FILTER
========================= */
const filterButtons = document.querySelectorAll(".filter-bar button");
const cards = document.querySelectorAll(".img-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.key;

    // Active state
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter images
    cards.forEach(card => {
      const keywords = card.dataset.keywords;

      if (key === "all" || keywords.includes(key)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
