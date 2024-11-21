document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const overlay = document.querySelector(".overlay");

  menuButton.addEventListener("click", () => {
    overlay.classList.toggle("overlay--active");
    menuButton.classList.toggle("active");
  });
});
