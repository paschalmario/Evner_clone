const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
const totalSlides = images.length;

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
    updateDots();
}

function updateDots() {
  
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    index = slideIndex;
    updateCarousel();
}

// Create dots
for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

updateDots();

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-slide
setInterval(nextSlide, 4000);

const carousel2 = document.querySelector(".carousel2");
const prevBtn2 = document.querySelector(".prev2");
const nextBtn2 = document.querySelector(".next2");

prevBtn2.addEventListener("click", () => {
    carousel.scrollBy({ left: -carousel2.clientWidth / 3, behavior: "smooth" });
});

nextBtn2.addEventListener("click", () => {
    carousel.scrollBy({ left: carousel2.clientWidth / 3, behavior: "smooth" });
});