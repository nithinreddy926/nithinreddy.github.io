function initializeMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
}

function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    yearElement.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    updateCurrentYear();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

const themeToggleButton = document.getElementById("theme-toggle-btn");

// Check if dark theme is saved in localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Save theme preference in localStorage
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "🌞"; // Change to sun icon
    } else {
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "🌙"; // Change to moon icon
    }
});
