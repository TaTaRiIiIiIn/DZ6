const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    modalImage.src = thumbnail.src;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
