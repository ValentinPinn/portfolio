
document.addEventListener('DOMContentLoaded', () => {
    const hamb = document.querySelector(".hamb");
    const navbar = document.querySelector(".navbar");

    hamb.addEventListener('click', () => {
        navbar.classList.toggle('mobile-menu');
    });
});



