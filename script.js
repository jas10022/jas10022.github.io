document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const slider = document.getElementById('slider');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.getElementById(this.getAttribute('data-slide'));
            slider.scrollTo({
                left: target.offsetLeft,
                behavior: 'smooth'
            });
        });
    });
});