document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const overlayNav = document.querySelector(".overlay-nav");
    const closeButton = document.querySelector(".close-menu");

    if (menuButton && overlayNav && closeButton) {
        menuButton.addEventListener("click", function () {
            overlayNav.classList.toggle("overlay-nav--active");
        });

        closeButton.addEventListener("click", function () {
            overlayNav.classList.remove("overlay-nav--active");
        });

        // Ferme le menu si un lien est cliqué
        document.querySelectorAll(".overlay-nav a").forEach(link => {
            link.addEventListener("click", () => {
                overlayNav.classList.remove("overlay-nav--active");
            });
        });
    }
});
