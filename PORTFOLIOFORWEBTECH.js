const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navBar');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});
