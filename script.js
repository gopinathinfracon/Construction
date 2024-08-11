const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const sliderContainer = document.querySelector('.slider-container');
const servicesArrow = document.querySelector('.services-arrow');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    sliderContainer.style.display = 'block';
});

servicesArrow.addEventListener('click', (e) => {
    e.preventDefault();
    servicesArrow.style.transform = servicesArrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    // Add your dropdown logic here
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);

showSlide(0);

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});