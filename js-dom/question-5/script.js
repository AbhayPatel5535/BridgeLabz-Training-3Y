const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const previewImage = document.getElementById("previewImage");

// Event delegation: any image inside the gallery can open the same modal.
gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;

  previewImage.src = event.target.src;
  previewImage.alt = event.target.alt;
  modal.hidden = false;
});

// Clicking the dark area outside the image closes the modal.
modal.addEventListener("click", () => {
  modal.hidden = true;
  previewImage.src = "";
});

// Stop the click from bubbling to the modal background.
modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Escape key is an additional convenient way to close the preview.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    modal.hidden = true;
    previewImage.src = "";
  }
});
