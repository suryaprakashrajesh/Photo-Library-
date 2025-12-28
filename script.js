const STORAGE_KEY = "genshinUploads";

const uploadInput = document.getElementById("uploadInput");
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Add image
function addImage(src, category) {
  const img = document.createElement("img");
  img.src = src;
  img.dataset.category = category;
  img.alt = "genshin image";
  gallery.prepend(img);
}

// Load saved images
function loadImages() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  data.forEach(item => addImage(item.src, item.category));
}

// Upload handler
uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (!file || !file.type.startsWith("image/")) return;

  const reader = new FileReader();
  reader.onload = e => {
    const src = e.target.result;
    const category = categorySelect.value;

    addImage(src, category);

    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    data.push({ src, category });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };
  reader.readAsDataURL(file);
});

// Search
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  gallery.querySelectorAll("img").forEach(img => {
    img.style.display = img.alt.includes(q) ? "block" : "none";
  });
});

// Category filter
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    gallery.querySelectorAll("img").forEach(img => {
      img.style.display =
        cat === "all" || img.dataset.category === cat
          ? "block"
          : "none";
    });
  });
});

// Modal preview
document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && e.target.parentElement === gallery) {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
  }
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// Init
loadImages();
