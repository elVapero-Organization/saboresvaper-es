document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const warn = document.querySelector('.warn');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            warn.classList.toggle('active');
            // Animate hamburger icon (optional simple toggle)
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // --- Hero Slider ---
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');

    if (sliderWrapper && slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;
        const slideInterval = 4000; // 4 seconds

        function moveToNextSlide() {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            updateSlider();
        }

        function updateSlider() {
            const offset = -(currentIndex * 100);
            sliderWrapper.style.transform = `translateX(${offset}%)`;
        }

        // Autoplay
        setInterval(moveToNextSlide, slideInterval);
    }
});

// --- From header.js ---
// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Dostęp zabroniony. Strona tylko dla osób 18+");
  window.close();
  window.location.href = "https://www.google.pl";
});

// Hide the top warning when the page is scrolled
// const warn = document.querySelector(".warn");
// if (warn) {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 10) {
//       warn.style.display = "none";
//     } else {
//       warn.style.display = "";
//     }
//   });
// }

// --- From footer.js ---
const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");
city.addEventListener("click", toggleCont);
function toggleCont() {
  city.classList.toggle("active");
  Array.from(cont).forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.innerText = new Date().getFullYear();
}
