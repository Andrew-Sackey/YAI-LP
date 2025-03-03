// Slideshow Effect
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 5000);
}

showSlides();

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




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
    const text = "At Mersakyi Enterprise, we transform surplus tomatoes into fine wine, reducing food waste and supporting farmers. Our innovative approach enhances sustainability while offering a premium, unique beverage experience. Our main aim is to support local farmers, create luxurious and tasty wine from an everyday ingredient and impact the environment positively to improve sustainability and growth.";
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

// Scroll animation effect
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".process-step");

    function revealOnScroll() {
        steps.forEach(step => {
            const position = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (position < windowHeight - 100) {
                step.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check in case some elements are already visible
});


document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".fade-in, .slide-in");
  
    textElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 * index);
    });
  });

  
  // Fade-in animation for cards when scrolling
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        observer.observe(card);
    });
});


// document.querySelectorAll('.cart-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Paystack Payment Integration Coming Soon!');
//     });
// });



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Message sent successfully!");
    this.reset(); // Reset form fields
});

// Email validation function
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}


// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();




