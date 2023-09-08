// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener( "click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} );

document.querySelectorAll(".nav-link").forEach( link => link.addEventListener( "click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
} ) );


// SERVICES TABS

const serviceItems = document.querySelectorAll(".services-item");

serviceItems.forEach( service => {
    const icon = service.querySelector("i");
    const description = service.querySelector(".service-description")

    icon.addEventListener( "click", () => {
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");

        description.classList.toggle("active");
    } )
} )