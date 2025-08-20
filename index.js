document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNext() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    // Initialize automatic sliding
    setInterval(showNext, 3000); // Slide every 3 seconds
});
