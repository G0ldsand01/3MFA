document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const overlay = document.querySelector(".overlay");

    menuButton.addEventListener("click", () => {
      overlay.classList.toggle("overlay--active");
      menuButton.classList.toggle("active");
    });

    closeButton.addEventListener("click", () => {
      overlay.classList.toggle("overlay--active");
      menuButton.classList.toggle("active");
    });
});