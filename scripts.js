document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    let index = 0;

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }
});
