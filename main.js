// Cara Header Berubah Warna Ketika di Scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    const hamburger = document.querySelector(".hamburger");
    header.classList.toggle('sticky', window.scrollY>0);
});

// Membuat Navigation Mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const header = document.querySelector("header")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    header.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

    navMenu.addEventListener("click", () => {
        hamburger.classList.remove("active");
        header.classList.remove("active");
        navMenu.classList.remove("active");
        });
