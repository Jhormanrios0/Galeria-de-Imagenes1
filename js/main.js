const images = [
  "./assets/image_1.jpg",
  "./assets/image_2.jpg",
  "./assets/image_3.jpg",
  "./assets/image_4.jpg",
  "./assets/image_5.jpg",
  "./assets/image_6.jpg",
  "./assets/image_7.jpg",
  "./assets/image_8.jpg",
  "./assets/image_9.jpg",
  "./assets/image_10.jpg",
  "./assets/image_11.jpg",
  "./assets/image_12.jpg",
  "./assets/image_13.jpg",
  "./assets/image_14.jpg",
  "./assets/image_15.jpg",
  "./assets/image_16.jpg",
  "./assets/image_17.jpg",
  "./assets/image_18.jpg",
  "./assets/image_19.jpg",
];

const itemsPerPage = 8;
let currentPage = 1;

function displayGallery(page) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = images.slice(startIndex, endIndex);

  paginatedItems.forEach((src) => {
    const figure = document.createElement("figure");
    figure.className = "gallery_item";
    figure.innerHTML = `
      <a href="${src}" data-fancybox="gallery">
        <img class="w-full h-60 object-cover rounded-lg transition-transform transform border-4 border-transparent hover:border-indigo-600 hover:scale-105" src="${src}" alt="${src
      .split("/")
      .pop()}">
      </a>
    `;
    gallery.appendChild(figure);
  });
}

function updateButtons() {
  document.getElementById("prev").disabled = currentPage === 1;
  document.getElementById("next").disabled =
    currentPage === Math.ceil(images.length / itemsPerPage);
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayGallery(currentPage);
    updateButtons();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentPage < Math.ceil(images.length / itemsPerPage)) {
    currentPage++;
    displayGallery(currentPage);
    updateButtons();
  }
});

// Inicializar la galería
displayGallery(currentPage);
updateButtons();

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
