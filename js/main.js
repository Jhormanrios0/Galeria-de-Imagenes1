const itemsPerPage = 8;
let currentPage = 1;
let currentGallery = "gallery1";

function displayGallery(page) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  let images = getGalleryImages(currentGallery);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = images.slice(startIndex, endIndex);

  paginatedItems.forEach((src) => {
    const figure = document.createElement("figure");
    figure.className = "gallery_item";
    figure.innerHTML = `
      <a href="${src}" data-fancybox="gallery">
        <img class="gallery-image" src="${src}" alt="${src.split("/").pop()}">
      </a>
    `;
    gallery.appendChild(figure);
  });

  // Vuelve a inicializar Fancybox después de agregar los elementos
  Fancybox.bind("[data-fancybox]", {
    // Tus opciones personalizadas
  });
}

function updateButtons() {
  const images = getGalleryImages(currentGallery);
  document.getElementById("prev").disabled = currentPage === 1;
  document.getElementById("next").disabled =
    currentPage === Math.ceil(images.length / itemsPerPage);

  document.getElementById(
    "pagination-info"
  ).innerText = `Página ${currentPage} de ${Math.ceil(
    images.length / itemsPerPage
  )}`;
}

function loadGallery(galleryName) {
  currentGallery = galleryName;
  currentPage = 1;
  displayGallery(currentPage);
  updateButtons();
}

function getGalleryImages(galleryName) {
  switch (galleryName) {
    case "gallery1":
      return gallery1Images;
    case "gallery2":
      return gallery2Images;
    case "gallery3":
      return gallery3Images;
    default:
      return [];
  }
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayGallery(currentPage);
    updateButtons();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (
    currentPage <
    Math.ceil(getGalleryImages(currentGallery).length / itemsPerPage)
  ) {
    currentPage++;
    displayGallery(currentPage);
    updateButtons();
  }
});

// Inicializar la galería por defecto al cargar la página
loadGallery(currentGallery);
