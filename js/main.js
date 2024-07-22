document.addEventListener("DOMContentLoaded", () => {
  const fulImgBox = document.getElementById("fulImgBox");
  const fulImg = document.getElementById("fulImg");
  const prevImgButton = document.getElementById("prevImg");
  const nextImgButton = document.getElementById("nextImg");
  const imgGallery = document.getElementById("imgGallery");
  const imagesPerPage = 8;
  let currentPage = 1;
  let images = [
    "./assets/prueba1.JPG",
    "./assets/prueba2.JPG",
    "./assets/prueba3.JPG",
    "./assets/prueba4.JPG",
    "./assets/prueba5.JPG",
    "./assets/prueba6.JPG",
    "./assets/prueba7.jpg",
    "./assets/prueba8.JPG",
    "./assets/secundario/p1.jpeg",
    "./assets/secundario/p2.jpeg",
    "./assets/secundario/p3.jpeg",
    "./assets/secundario/p4.jpeg",
    "./assets/secundario/p5.JPG",
    "./assets/secundario/p6.jpeg",
    "./assets/secundario/p7.jpeg",
    "./assets/secundario/p8.jpeg",
  ];
  let currentImageIndex = 0;

  function loadImages(page) {
    imgGallery.innerHTML = "";
    const start = (page - 1) * imagesPerPage;
    const end = page * imagesPerPage;
    const pageImages = images.slice(start, end);

    pageImages.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.className =
        "w-full h-[350px] object-cover cursor-pointer transition-transform transform hover:scale-110 duration-[450ms] hover:border-[5px] hover:border-indigo-500 border border-transparent rounded-lg ease-in-out";
      img.onclick = () => openFulImg(src);
      imgGallery.appendChild(img);
    });
  }

  window.openFulImg = function (src) {
    console.log("openFulImg called with src:", src);
    fulImgBox.style.display = "flex";
    fulImg.src = src;
    currentImageIndex = images.indexOf(src);
  };

  window.closeImg = function () {
    console.log("closeImg called");
    fulImgBox.style.display = "none";
  };

  function showImage(index) {
    if (index >= 0 && index < images.length) {
      fulImg.src = images[index];
      currentImageIndex = index;
    }
  }

  prevImgButton.onclick = function () {
    if (currentImageIndex > 0) {
      showImage(currentImageIndex - 1);
    }
  };

  nextImgButton.onclick = function () {
    if (currentImageIndex < images.length - 1) {
      showImage(currentImageIndex + 1);
    }
  };

  window.prevPage = function () {
    if (currentPage > 1) {
      currentPage--;
      loadImages(currentPage);
    }
  };

  window.nextPage = function () {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      currentPage++;
      loadImages(currentPage);
    }
  };

  loadImages(currentPage);
});
