const iframe = document.getElementById("sipenaFrame");
const loader = document.getElementById("loader");

// Hilangkan loader saat iframe selesai dimuat
iframe.addEventListener("load", () => {
  loader.style.display = "none";
});

// Auto resize saat orientasi berubah
window.addEventListener("resize", () => {
  document.querySelector(".iframe-container").style.height =
    window.innerHeight + "px";
});

// Initial resize
document.querySelector(".iframe-container").style.height =
  window.innerHeight + "px";
