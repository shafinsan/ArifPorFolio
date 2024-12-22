document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Hamburger Menu
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
    });

    // Smooth Scroll with Fixed Duration
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth",
            });

            // Close menu on mobile after navigation
            if (menu.classList.contains("flex")) {
                menu.classList.remove("flex");
                menu.classList.add("hidden");
            }
        });
    });
});
