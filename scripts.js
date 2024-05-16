document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });
});
