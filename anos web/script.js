const uploadInput = document.getElementById("uploadInput");
const gallery = document.getElementById("gallery");

uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (!file) return;

  // Allow only images
  if (!file.type.startsWith("image/")) {
    alert("Please upload an image only.");
    return;
  }

  // Size limit: 5MB
  if (file.size > 5 * 1024 * 1024) {
    alert("Image must be under 5MB.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.createElement("img");
    img.src = e.target.result;
    gallery.prepend(img);
  };
  reader.readAsDataURL(file);
});
