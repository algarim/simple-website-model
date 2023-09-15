// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// Make menu dissapear on scroll only on mobile
let prevScrollY = window.scrollY;
const header = document.querySelector('header');

console.log(window.innerWidth);

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;

    if( window.innerWidth < 1280 ) {
    header.style.top = (currentScrollY > prevScrollY) ? '-100%' : '0';
    }
    
    prevScrollY = currentScrollY;
});


// SERVICES TABS

const serviceItems = document.querySelectorAll(".services-item");

serviceItems.forEach(service => {
    const icon = service.querySelector("i");
    const description = service.querySelector(".service-description")

    icon.addEventListener("click", () => {
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");

        description.classList.toggle("active");
    })
})