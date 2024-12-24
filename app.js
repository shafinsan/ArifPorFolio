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
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');
    const menu = document.getElementById('menu');

    // Check if dark mode is already set from previous sessions
    let isDarkMode = body.classList.contains('dark-mode');

    // Apply the correct mode on load
    if (isDarkMode) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
        menu.classList.add('menu_night');
        menu.classList.remove('menu_white');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
        menu.classList.add('menu_white');
        menu.classList.remove('menu_night');
    }

    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
            menu.classList.remove('menu_white');
            menu.classList.add('menu_night');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
            menu.classList.remove('menu_night');
            menu.classList.add('menu_white');
        }
    });
});

  
