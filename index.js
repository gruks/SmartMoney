document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector(".home");

    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector(".about");

    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: document.body.scrollHeight, // Scroll to the bottom of the page
                behavior: "smooth"
            });
        });
    }
});