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
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".img-card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  modalImg.src = "";
  document.body.style.overflow = "";
}


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
/* =========================
   FETCH ALL CHARACTER NAMES (AUTO)
========================= */

async function fetchCategoryMembers(categoryTitle, max = 5000) {
  const endpoint = "https://genshin-impact.fandom.com/api.php";
  let cmcontinue = null;
  const results = [];
  let safety = 0;

  while (results.length < max) {
    safety++;
    if (safety > 50) break;

    const params = new URLSearchParams({
      action: "query",
      list: "categorymembers",
      cmtitle: categoryTitle,
      cmlimit: "max",
      format: "json",
      origin: "*"
    });

    if (cmcontinue) params.set("cmcontinue", cmcontinue);

    const res = await fetch(`${endpoint}?${params}`);
    const data = await res.json();

    (data.query?.categorymembers || []).forEach(m => {
      if (m?.title) results.push(m.title);
    });

    cmcontinue = data.continue?.cmcontinue;
    if (!cmcontinue) break;
  }

  return results;
}

function normalizeTitle(title) {
  return title
    .replace(/^Category:/i, "")
    .replace(/\/Storyline$/i, "")
    .trim();
}

function uniqueSorted(list) {
  return [...new Set(list)].sort((a, b) => a.localeCompare(b));
}

async function buildCharacterNameList() {
  const playable = await fetchCategoryMembers("Category:Playable Characters");
  const allCharacters = await fetchCategoryMembers("Category:Characters");

  const combined = [...playable, ...allCharacters].map(normalizeTitle);

  const blocked = new Set([
    "Character", "Characters", "Playable Characters", "NPCs"
  ]);

  return uniqueSorted(
    combined.filter(n => n && !blocked.has(n) && !n.includes("List"))
  );
}

/* =========================
   REPLACE characters ARRAY
========================= */
let characters = [];

(async () => {
  try {
    characters = await buildCharacterNameList();
    console.log("Loaded characters:", characters.length);
  } catch (err) {
    console.error("Character load failed", err);
  }
})();



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


/* =========================
   FOX VIDEO INTERACTION
========================= */
const foxCard = document.getElementById("foxCard");
const foxVideo = document.getElementById("foxVideo");
const foxClose = document.getElementById("foxClose");

/* FORCE AUTOPLAY SAFETY */
window.addEventListener("load", () => {
  const foxVideo = document.getElementById("foxVideo");
  if (foxVideo) {
    foxVideo.muted = true;
    foxVideo.play().catch(() => {
      // autoplay blocked silently (rare)
    });
  }
});

