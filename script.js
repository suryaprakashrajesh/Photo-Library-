/* =========================
   VARIABLES
========================= */
const cards = document.querySelectorAll(".img-card");
const buttons = document.querySelectorAll(".filter-bar button");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const suggestionBox = document.getElementById("suggestions");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

let activeKey = "all";

/* =========================
   BUTTON FILTER
========================= */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeKey = btn.dataset.key.toLowerCase();
    searchInput.value = "";
    suggestionBox.style.display = "none";

    applyFilters();
  });
});

/* =========================
   SEARCH FILTER
========================= */
searchInput.addEventListener("input", () => {
  applyFilters();
  showSuggestions();
});

/* =========================
   MAIN FILTER FUNCTION
========================= */
function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(card => {
    const keywords = card.dataset.keywords.toLowerCase();

    const matchButton =
      activeKey === "all" || keywords.includes(activeKey);

    const matchSearch =
      query === "" || keywords.includes(query);

    if (matchButton && matchSearch) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  emptyState.style.display = visibleCount === 0 ? "block" : "none";
}

/* =========================
   AUTOCOMPLETE DATA
========================= */
const characters = [
  "Albedo","Alhaitham","Amber","Arataki Itto","Ayaka","Ayato","Baizhu",
  "Barbara","Beidou","Bennett","Candace","Charlotte","Chevreuse","Childe",
  "Chiori","Chongyun","Collei","Cyno","Dehya","Diluc","Diona","Eula",
  "Faruzan","Fischl","Freminet","Furina","Gaming","Ganyu","Gorou",
  "Hu Tao","Jean","Kazuha","Kaeya","Keqing","Kirara","Klee","Kokomi",
  "Layla","Lisa","Lumine","Lynette","Lyney","Mika","Mona","Nahida",
  "Navia","Neuvillette","Nilou","Ningguang","Noelle","Qiqi",
  "Raiden Shogun","Razor","Rosaria","Sara","Sayu","Shenhe","Sucrose",
  "Tartaglia","Thoma","Tighnari","Venti","Wanderer","Wriothesley",
  "Xiangling","Xiao","Xingqiu","Xinyan","Yae Miko","Yanfei",
  "Yaoyao","Yelan","Yoimiya","Yun Jin","Zhongli"
];

/* =========================
   AUTOCOMPLETE LOGIC
========================= */
function showSuggestions() {
  const query = searchInput.value.toLowerCase().trim();
  suggestionBox.innerHTML = "";

  if (!query) {
    suggestionBox.style.display = "none";
    return;
  }

  const matches = characters.filter(name =>
    name.toLowerCase().includes(query)
  );

  matches.slice(0, 6).forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.addEventListener("click", () => {
      searchInput.value = name;
      suggestionBox.style.display = "none";
      applyFilters();
    });
    suggestionBox.appendChild(li);
  });

  suggestionBox.style.display = matches.length ? "block" : "none";
}

/* =========================
   FULLSCREEN IMAGE MODAL
========================= */
document.querySelectorAll(".img-card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  modalImg.src = "";
  document.body.style.overflow = "";
}
