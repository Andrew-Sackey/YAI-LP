function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    sidebar.classList.toggle("active");
    hamburger.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    function toggleMenu() {
        const sidebar = document.getElementById("sidebar");
        const hamburger = document.querySelector(".hamburger");
        sidebar.classList.toggle("active");
        hamburger.classList.toggle("open");
    }

    // Scroll animation for "Who We Are" section
    const aboutSection = document.querySelector(".about-section");

    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check on load
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter");
    const text = "At Mersakyi Enterprise, we transform surplus tomatoes into fine wine, reducing food waste and supporting farmers. Our innovative approach enhances sustainability while offering a premium, unique beverage experience.";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust speed here
        }
    }

    type();
});

