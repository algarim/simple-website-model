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


// Make menu dissapear on scroll
let prevScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;

    if(window.innerWidth < 1280) {
    header.style.top = (currentScrollY > prevScrollY) ? '-100%' : '0';
    }

    prevScrollY = currentScrollY;
});


// Make nav-links highlight when over section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        console.log(index);
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if ((window.scrollY >= sectionTop - window.innerHeight * 0.25) && (window.scrollY < sectionBottom - window.innerHeight * 0.25)) {
            navLinks[index].classList.add('nav-link-active');
        }
        else {
            navLinks[index].classList.remove('nav-link-active');
        }
    });
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