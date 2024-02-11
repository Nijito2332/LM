document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, 4000);
});
